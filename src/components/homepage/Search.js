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

import Keywords from "./Keywords"

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
        };
        //this.removeKey = this.removeKey.bind(this);
    }
    
    //click the any results in suggestions window
    onClick = (e) => {
    //     //the suggestion genre that the user selected
    //     const userInput = e.currentTarget.innerText;
    //     console.log(e.currentTarget);
    //     //the suggestion genres show on the suggestion window
    //     const filtered = this.state.filteredSuggestions;
    //     //the genres that has been selected in the past search
    //     const keyWordsList = this.state.keyWordsList;
    //     const len = keyWordsList.length;
    //     //Prevent when user click search without input anything
    //     if((filtered != "") && (!keyWordsList.some((element) => element === userInput))){
    //         //When users click search button instead of clicking suggestion window, set the first suggestion as the selected genre
    //         if(userInput == "" && (filtered[0] != "" || undefined )&& (!keyWordsList.some((element) => element === filtered[0]))){
    //             console.log(filtered[0]);
    //             keyWordsList.push(filtered[0]);
    //         }
    //         //Check whether the input genre has already existed in the list and the number should up to 5
    //         else if(userInput != "" && len < 5){
    //             keyWordsList.push(userInput);
    //         }
    //         //if the size larger than five, pop the first element and push the newest input to the end
    //         else if(userInput != "" && len >= 5){
    //             keyWordsList.shift();
    //             keyWordsList.push(userInput);
    //         }
    //     }
        
    //     this.setState({
    //         activeSuggestion: 0,
    //         filteredSuggestions: [],
    //         showKeywords: true,
    //         //after click one of the suggestion genres, input content will be deleted so the user will know they can input another one
    //         userInput: userInput,
    //         keyWord: e.currentTarget.innerText,
    //         keyWordsList: keyWordsList,
    //     })

    //     //dispatch a new action when onClick function is triggered 
    //     // this.props.updateKeys(keyWordsList);
        
        //Suggested genres shows in suggestion windows 
        this.props.updateKeys(["try",'try2']);
        console.log(this.state.reduxKeyWordsList);

        const genreSuggest = this.state.stateSuggestions;
        const userInput = this.state.userInput;
        const keyWordsList = this.state.keyWordsList;

        //If user input nothing, not execute any code
        //if user input something but not equals to the suggestion, give the first suggestion to keywordslist and show it in key element
        if(userInput != "" && genreSuggest.length != 0 && genreSuggest.length != 0){
            //value pushed into the keywordslist show not equal to any values in keywordslist
            if(!(genreSuggest.some((element) => element === userInput)) && !(keyWordsList.some((element) => element === genreSuggest[0]))){
                console.log(genreSuggest[0]);
                keyWordsList.push(genreSuggest[0])
            }
            this.setState({
                userInput: "",
                keyWordsList: keyWordsList,
            })
        }
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
    removeKey = (genre) => {
        //copy the state var to new var
        const list = this.state.keyWordsList.slice();

        //some function will traverse all elements in list
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
        this.props.updateKeys(list);
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
        this.setState({
            stateSuggestions: this.getSuggestions(value),
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
        let primaryGenre = ["Rock", "Hip-Hop / Rap", "Pop", "Country", "Latin", "Jazz" ,"Classical"];

        if(suggestion != "No suggestions, try a genre!"){
            const keyWordsList = this.state.keyWordsList;
            console.log(keyWordsList)
            if(!keyWordsList.some((element) => element === suggestion) && keyWordsList.length < 5){
                keyWordsList.push(suggestion);
            }else if (!keyWordsList.some((element) => element === suggestion) && keyWordsList.length >= 5){
                keyWordsList.shift();
                keyWordsList.push(suggestion);
            }
            
            let n = keyWordsList.length;
            let primaryIndex = primaryGenre.indexOf(keyWordsList[n-1]);
            console.log(keyWordsList[n-1])
            console.log("Jazz" == keyWordsList[n-1])
            console.log(primaryIndex)
            //whether the userinput is one of the primary genre
            if( primaryIndex != -1){
                console.log("this is repeat" + keyWordsList[n])
                primaryGenre.splice(primaryIndex, 1)
                primaryGenre.unshift(keyWordsList[n-1])
            }
            this.props.updateKeys(primaryGenre)
            console.log(primaryGenre)
            this.setState({
                userInput: "",
            })
            // this.props.updateKeys(keyWordsList);
        }
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
//Add null first before mapDispatchToProps
export default connect(null, mapDispatchToProps)(Search);