import React, { Component, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Autosuggestion from "react-autosuggest";
import searchIcon from './img/search-icon.png';
//For high light the matched text in search bar 
import AutosuggestHighlightMatch from "autosuggest-highlight/umd/match";
import AutosuggestHighlightParse from "autosuggest-highlight/umd/parse";
import PropTypes from "prop-types";

import Keywords from "./Keywords"
import "./Search.css";

var match = require('autosuggest-highlight/match');

//Autosuggest: Implement it to teach Autosuggest what should be the input value when suggestion is clicked.
const getSuggestionValue = suggestion => suggestion;



//Autosuggest: how suggestions are rendered
const renderSuggestion = (suggestion, {query}) => {
    //highlight: Calculates the characters to highlight in text based on query.
    const matches = AutosuggestHighlightMatch(suggestion, query);
    //highlight: Breaks the given text to parts based on matches, highlighted text will have value true, no need to highlighted text will have false
    const parts = AutosuggestHighlightParse(suggestion, matches);
    console.log(parts)
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
    // onClick = e => {
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
    // }
    //
    
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
    getSuggestions = (value) => {
        const escapedValue = escapeRegexCharacters(value.trim());
        let res = [];
        if (escapedValue === '') {
            return res;
        }
        const regex = new RegExp('^' + escapedValue, 'i');
        res = this.props.suggestions.filter(sug => regex.test(sug));

        if(res.length === 0){
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
        if(suggestion != "No suggestions, try a genre!"){
            const keyWordsList = this.state.keyWordsList;
            if(!keyWordsList.some((element) => element === suggestion) && keyWordsList.length < 5){
                keyWordsList.push(suggestion);
            }else if (!keyWordsList.some((element) => element === suggestion) && keyWordsList.length >= 5){
                keyWordsList.shift();
                keyWordsList.push(suggestion);
            }
            
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
                                    
                                }}>
                                
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
        updateKeys: (keys) => dispatch({
            type: "addKeywords",  
            //add keyWordsList into state 
            keyWordsList: keys
        })
    }
}
//Add null first before mapDispatchToProps
export default connect(null, mapDispatchToProps)(Search);