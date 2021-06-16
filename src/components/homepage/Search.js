import React, { Component, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Autosuggestion from "react-autosuggest";
//For high light the matched text in search bar 
import AutosuggestHighlightMatch from "autosuggest-highlight/umd/match";
import AutosuggestHighlightParse from "autosuggest-highlight/umd/parse";
//Fuzzy search
import Fuse from "fuse.js";
import PropTypes from "prop-types";

import searchIcon from './img/search-icon.png';

import Keywords from "./Keywords";
import KeyWordsWarning from "./PopUpWarning";
import MusicService from "../../services/Music.service";

import "./Search.css";

var match = require('autosuggest-highlight/match');

//Autosuggest: Implement it to teach Autosuggest what should be the input value when suggestion is clicked.
const getSuggestionValue = suggestion => suggestion;

//Autosuggest: how suggestions are rendered
const renderSuggestion = (suggestion, {query}) => {
    //highlight: Calculates the characters to highlight in text based on query.
    const matches = AutosuggestHighlightMatch(suggestion, query);
    //highlight: Breaks the given text to parts based on matches,  highlighted text will have value true, no need to highlighted text will have false
    const parts = AutosuggestHighlightParse(suggestion, matches);
    
    return (<span>
                {parts.map((part, index) => {
                    const className = part.highlight ? "react-autosuggest-highlight" : null;
                    return (
                        <span className = {className} key= {index}>
                            {part.text}
                        </span>
                    );
                })}
            </span>)
};

//Autosuggest: remove special characters in user input
const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

class Search extends Component{
    //suggestions is the input variable from Header.js
    //check the type of input
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    }
    //default value of input variable
    static defaultProps = {
        suggestions: []
    }
    //initialize Search component combine suggestions with props
    constructor(props, context){
        super(props, context);

        //create a ref to calling PopUpWarning Component functions
        this.changeKeyPopUp = React.createRef();

        this.state = {
            tracks: [],
            //keep tract of position in the suggestion list
            activeSuggestion: 0,
            //suggested keywords based on the user input
            filteredSuggestions: [],
            //whether to show the keyword tag
            showKeywords: false,
            //words that user input
            userInput: "",
            //store the genre keywords that we selected, add one element when click, delete when click on the delet button in keyword div
            keyWordsList: [],
            stateSuggestions: [],
            myRef: React.createRef(),
            //body content of keywords popup window
            modelBody: "",
        };
        //this.removeKey = this.removeKey.bind(this);
    }
    
    //click the any results in suggestions window
    onClick = (e) => {
        const userInput = this.state.userInput;
        let primaryGenre = this.props.searchPrimaryGenre.keyWordsList;

        //Suggested genres in suggestion window
        const suggestionGenres = this.getSuggestions(userInput)

        const keyWordsList = this.state.keyWordsList;
        //If user input nothing, not execute any code
        //if user input something but not equals to the suggestion, give the first suggestion to keywordslist and show it in key element
        if(suggestionGenres[0] != "No suggestions, try a genre!" && userInput != ""){
            console.log(userInput)
            //value pushed into the keywordslist show not equal to any values in keywordslist
            if(!keyWordsList.some((element) => element === suggestionGenres[0]) && keyWordsList.length < 5){
                keyWordsList.push(suggestionGenres[0])
            }else if(keyWordsList.length == 5){
                //if select more than 5, popup window
                this.setState({
                    modelBody: "Maxmimum number of selected genres is 5, please remove some genres to keep searching"
                })
                this.changeKeyPopUp.current.handleOpen()
            }
            //repeat selection
            else if(keyWordsList.some((element) => element === suggestionGenres[0])){
                this.setState({
                    modelBody: "Oops, you have selected this genre, please change another one."
                })
                this.changeKeyPopUp.current.handleOpen()
            }
            
            this.setState({
                userInput: "",
                keyWordsList: keyWordsList,
            })

            let n = keyWordsList.length;
                //console.log(keyWordsList[n-1])
            let i
            //location of last selected genre, no match is -1
            let primaryIndex = -1
            for(i = 0; i<primaryGenre.length; i++){ 
                    //console.log(primaryGenre[i].name)
                if(primaryGenre[i].name == keyWordsList[n-1]){
                    primaryIndex = i
                    break
                }
            }
            //whether the userinput is one of the primary genre
            if( primaryIndex != -1){
                //get the object at the primaryIndex
                let insertKey = primaryGenre[primaryIndex]
                insertKey.flag = false
                //remove that object
                primaryGenre.splice(primaryIndex, 1)
                //insert to head
                primaryGenre.unshift(insertKey)
                //update redux
                this.props.updateKeys(primaryGenre)
            }
        }else{
            // if (this.state.modelBody != ""){
            //     this.changeKeyPopUp.current.handleOpen()
            // }
            // this.setState({
            //     modelBody: "Please input a genre"
            // })
            // //invoking handleOpen function in PopUpWarning Component by ref
            // this.changeKeyPopUp.current.handleOpen()
            
        }
        this.setState({
            userInput: "",
        })
        console.log(this.state.userInput)

    }
    
    //Autosuggest: required by inputProps, when value changed set new state
    onChange = (e,{newValue}) => {
        const userInput = newValue === "No suggestions, try a genre!" ? "" : newValue;
        this.setState({
            activeSuggesion:0,
            showKeywords:false,
            userInput: userInput,
        })
    } 

    //remove certain genre from the keywords list
    /*
    param genre: the keyword the user want to remove
    return: updated chose keywords
            update keywords in redux store
    */
    removeKey = (genre) => {
        //list of selected keywords
        const list = this.state.keyWordsList.slice();
        //list of primary genres in certain order
        let primaryGenre = this.props.searchPrimaryGenre.keyWordsList;

        //remove "genre" from "list"
        list.some((element, i) => {
            //if the element is equal to the input item delete it from list
            if(element == genre){
                //delete 1 element at position i
                list.splice(i, 1);
                return true;
            }
        });
        this.setState({
            keyWordsList: list,
        });

        //update the order of primary genres based on removed genre
        let primaryIndex = -1
        let i
        for(i = 0; i < primaryGenre.length; i++){
            if(primaryGenre[i].name == genre){
                primaryIndex = i
                break
            } 
        }
        if(primaryIndex != -1){
            let deleteKey = primaryGenre[primaryIndex];
            let deleteKeyIndex = deleteKey.index;
            primaryGenre.splice(primaryIndex, 1);

            //insert the deleted genre back to the primary genre based on index
            let insertIndex
            for (i = 0; i < primaryGenre.length; i++){
                if(primaryGenre[i].flag && primaryGenre[i].index > deleteKeyIndex){
                    console.log("Insert")
                    primaryGenre.splice(i, 0, deleteKey);
                    break
                }
            }
            //console.log(primaryGenre)
            this.props.updateKeys(primaryGenre);
        }

    }

    //Autosuggest: How to filter the suggestion
    //param value: user input in search bar
    //return list of suggestion genres
    getSuggestions = (value) => {
        //value is the user input
        
        //store suggestions
        let res = [];
        //remove special characters in input
        const escapedValue = escapeRegexCharacters(value.trim());
        //all suggestion genres
        const searchList = this.props.suggestions;
        //Fuse needed parameter
        const option = {
            //keep the match score in result, range [0,1], closer to 0 means more match 
            includeScore: true
        }
        //Fuse class 
        const fuse = new Fuse(searchList, option);
        //results is a object, with "item"(matched genre name), "score"(match score)
        const fuseResults = fuse.search(escapedValue)

        //add elements in fuseResults to res list
        let i
        for (i = 0; i < fuseResults.length; i++){
            res.push(fuseResults[i].item)
        }
        //if no matches return this
        if( res.length == 0) {
            res = ["No suggestions, try a genre!"]
        }
        return res;
    };

    //Autosuggest: call this function when every time we need to update suggestions
    onSuggestionsFetchRequired = ({value}) => {
        const stateSuggestions = this.getSuggestions(value)
        this.setState({
            stateSuggestions: stateSuggestions,
        })
    }
    //Autosuggest: when need to clean the suggestion
    onSuggestionsClearRequested = () => {
        this.setState({
            stateSuggestions: []
        })
    }

    //Autosuggest: Change keyWordsList here and update redux store (old onClick)
    onSuggestionSelected = (e, {suggestion}) => {
        let primaryGenre = this.props.searchPrimaryGenre.keyWordsList;
        let userInput = this.state.userInput;
        //console.log(primaryGenre)

        if(suggestion != "No suggestions, try a genre!" && userInput != ""){
            const keyWordsList = this.state.keyWordsList;
            if(!keyWordsList.some((element) => element === suggestion) && keyWordsList.length < 5){
                keyWordsList.push(suggestion);
            }else if(keyWordsList.length == 5){
                //if select more than 5, popup window
                this.setState({
                    modelBody: "Maxmimum number of selected genres is 5, please remove some genres to keep searching."
                })
                this.changeKeyPopUp.current.handleOpen()
            }else if(keyWordsList.some((element) => element === suggestion)){
                this.setState({
                    modelBody: "Oops, you have selected this genre, please change another one."
                })
                this.changeKeyPopUp.current.handleOpen()
            }
            
            let n = keyWordsList.length;
            if(n === 5){
                console.log("full")
            }
                //console.log(keyWordsList[n-1])
            let i
            //location of last selected genre, no match is -1
            let primaryIndex = -1
            for(i = 0; i<primaryGenre.length; i++){ 
                    //console.log(primaryGenre[i].name)
                if(primaryGenre[i].name == keyWordsList[n-1]){
                    primaryIndex = i
                    break
                }
            }
            //whether the userinput is one of the primary genre
            if( primaryIndex != -1){
                //get the object at the primaryIndex
                let insertKey = primaryGenre[primaryIndex]
                insertKey.flag = false
                //remove that object
                primaryGenre.splice(primaryIndex, 1)
                //insert to head
                primaryGenre.unshift(insertKey)
                //update redux
                this.props.updateKeys(primaryGenre)
            }

            this.setState({
                userInput: "",
            })
            let tags = "pop"
            console.log("/api/music"+tags)
            // this.props.updateKeys(keyWordsList);
            MusicService.extractBasedOnTags("pop").catch(error => {
                console.log(error.message)
            })

        }
        this.setState({
            userInput: ""
        })
    }


    render(){
        const{
            onChange,
            onClick,
            removeKey,
            state:{
                userInput,
                keyWordsList,
                stateSuggestions,
            }
        } = this;
        let keywords;
        const inputProps = {
            placeholder: "Enter keyword, genre, or artist(Up to five)",
            value: userInput,
            onChange: onChange,
        }
           
        //If keyWordsList is not empty, show key divs
        if(keyWordsList){
            keywords = (
                <div className = "keyTags" >
                    {keyWordsList.map((keyword) => {
                        return(
                                <Keywords 
                                    // keywords that the user has selected, input into component
                                    keyWord = {keyword}
                                    delete = {removeKey}
                                ></Keywords>
                        )
                    })}
                    
                </div>  
            )
        }
        return(
            <div>
                
                <form className = "search_form">
                    <Fragment>
                        <Autosuggestion 
                            suggestions= {stateSuggestions}
                            onSuggestionsFetchRequested = {this.onSuggestionsFetchRequired}
                            onSuggestionsClearRequested = {this.onSuggestionsClearRequested}
                            getSuggestionValue = {getSuggestionValue}
                            renderSuggestion = {renderSuggestion}
                            inputProps = {inputProps}
                            onSuggestionSelected = {this.onSuggestionSelected}
                            
                        />
                        <Link to="/">
                        <button className= "search_button"
                                onClick={(e) => {
                                    //console.log("button click:" + e.this.value);
                                    onClick(e);
                                    
                                }}
                                >
                                
                               <img src={searchIcon}></img>
                            </button>
                            </Link>
                        {keywords}
                        <KeyWordsWarning ref = {this.changeKeyPopUp} modelBody = {this.state.modelBody}></KeyWordsWarning>
                    </Fragment>
                    
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        //add keyWordsList into state for Homepage_Content.js
        updateKeys: (keys) => dispatch({
            type: "addKeywords",  
            
            keyWordsList: keys
        })
    }
}

function mapStateToProps(state){
    return{
        searchPrimaryGenre: state
    }
}
//Add null first before mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Search);