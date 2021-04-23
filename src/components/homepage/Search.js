import React, { Component, Fragment } from "react";
//Using CSS in Module
import searchStyle from "./Search.module.css";
import PropTypes from "prop-types";

import Keywords from "./Keywords"

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
    constructor(props){
        super(props);

        this.state = {
            tracks: [],
            activeSuggestion: 0,
            //suggested keywords based on the user input
            filteredSuggestions: [],
            //whether we should show the suggesion window
            showSuggestions: false,
            //whether to show the keyword tag
            showKeywords: false,
            //words that user input
            userInput: "",
            keyWord: "",
            //store the genre keywords that we selected, add one element when click, delete when click on the delet button in keyword div
            keyWordsList: [],
        };
    }
    //click the any results in suggestions window
    onClick = e => {
        const userInput = e.currentTarget.innerText;
        const keyWordsList = this.state.keyWordsList;
        keyWordsList.push(userInput);
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            showKeywords: true,
            //input tag's value is userInput so when click on one of the result, input value will also change
            userInput: userInput,
            keyWord: e.currentTarget.innerText,
            keyWordsList: keyWordsList,
            selectedKeyword: null,
        })
        //console.log("User Input value after click:"+ e.currentTarget.innerText);
        //console.log("keywords list:" + this.state.keyWordsList);
    }
    onKeyDown = keyword => {
        this.setState({selectedKeyword: keyword});
    }
    onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;
    
        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
            //if any suggestions are chosed, the "suggestion" var will be true
            suggestion =>
                //see whether it is larger than -1
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        this.setState({
            activeSuggesion:0,
            filteredSuggestions,
            showSuggestions: true,
            showKeywords:false,
            userInput: e.currentTarget.value,
        })
        //console.log(userInput);
        
    };


    render(){
        const{
            onChange,
            onClick,
            onKeyDown,
            state:{
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                showKeywords,
                userInput,
                keyWordsList,
                selectedKeyword,
            }
        } = this;
        let suggestionsList;
        let keywords;
        //result suggestion element shows when input correct name
        if(showSuggestions && userInput){
            if(filteredSuggestions.length){
                suggestionsList = (
                    <ul className = {searchStyle.hasSuggestions}>
                        {filteredSuggestions.map((suggestion, index) => {
                            
                            let className;

                            // Flag the active suggestion with a class
                            if (index === activeSuggestion) {
                                className = "search__suggestion-active";
                            }
                            
                            return (
                                <li className = {className} key={suggestion} onClick = {onClick}>
                                    {suggestion}
                                </li>
                            )
                        })}
                    </ul>
                )
            }else{
                suggestionsList = (
                    <div className = {searchStyle.noSuggestion}>
                        <em>No suggestions, try a genre!</em>
                    </div>
                )
            }  
        }
        //shows the keyword div based on the input
        if(showKeywords && userInput){
            keywords = (
                <div className = {searchStyle.keyTags}>
                    {keyWordsList.map((keyword) => {
                        return(
                                <Keywords 
                                    // keywords that the user has selected, input into component
                                    keyWord = {keyword}
                                    onChange = {onKeyDown}
                                    display = {keyword === selectedKeyword? false: false}
                                ></Keywords>
                        )
                    })}
                    
                </div>  
            )
            keyWordsList.map((keyword) => {
                console.log(keyword);
            })
        }
        return(
            <div>
                <form className = "search_form">
                    <Fragment>
                        <div className={searchStyle.search}>
                            <input
                                className={searchStyle.input}
                                onChange={onChange}
                                type="text"
                                placeholder="Enter keyword, genre, or artist"
                                value={userInput}
                            />
                            <button className={searchStyle.search_button} onClick={this.onClick}><img src="../assets/search-icon.png"></img></button>
                        </div>
                        {suggestionsList}
                        {keywords}
                    </Fragment>
                    
                </form>
                
            </div>
            
            
        )
    }
        
    
}

export default Search;