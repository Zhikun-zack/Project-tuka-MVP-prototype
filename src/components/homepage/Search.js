import React, { Component, Fragment } from "react";
//Using CSS in Module
import searchStyle from "./Search.module.css";
import PropTypes from "prop-types";

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
            activeSuggesion: 0,
            //suggested keywords based on the user input
            filteredSuggestions: [],
            //whether we should show the suggesion window
            showSuggesions: false,
            //words that user input
            userInput: ""
        };
    }
    //click the any results in suggestions window
    onClick = (e) => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            //input tag's value is userInput so when click on one of the result, input value will also change
            userInput: e.currentTarget.innerText
        })
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
            showSuggesions: true,
            userInput: e.currentTarget.value,
        });
    };


    render(){
        const{
            onChange,
            onClick,
            onKeyDown,
            state:{
                activeSuggesion,
                filteredSuggestions,
                showSuggesions,
                userInput
            }
        } = this;
        let suggestionsList;

        if(showSuggesions && userInput){
            if(filteredSuggestions.length){
                suggestionsList = (
                    <ul className = {searchStyle.hasSuggestions}>
                        {filteredSuggestions.map((suggestion, index) => {
                            return (
                                <li key={suggestion} onClick = {onClick}>
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
        return(
            <div>
                <form className = "search_form">
                    <Fragment>
                        <div className={searchStyle.search}>
                            <input
                                className={searchStyle.input}
                                onChange={this.onChange}
                                type="text"
                                placeholder="artist, genre, mood what you are looking for?"
                                value={userInput}
                                onKeyDown={onKeyDown}
                            />
                            <button className={searchStyle.search_button} onClick={this.onClick}><img src="../assets/search-icon.png"></img></button>
                        </div>
                        {suggestionsList}
                    </Fragment>
                    
                </form>
                
            </div>
            
            
        )
    }
        
    
}

export default Search;