import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
    constructor(props, context){
        super(props, context);

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
        //this.removeKey = this.removeKey.bind(this);
    }
    
    //click the any results in suggestions window
    onClick = e => {
        
        const userInput = e.currentTarget.innerText;
        const keyWordsList = this.state.keyWordsList;
        const len = keyWordsList.length;
        //Check whether the input genre has already existed in the list and the number should up to 5
        if(!keyWordsList.some((element) => element === userInput) && len < 5){
            keyWordsList.push(userInput);
        }
        //if the size larger than five, pop the first element and push the newest input to the end
        else if(!keyWordsList.some((element) => element === userInput) && len >= 5){
            keyWordsList.shift();
            keyWordsList.push(userInput);
        }
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            showKeywords: true,
            //input tag's value is userInput so when click on one of the result, input value will also change
            userInput: userInput,
            keyWord: e.currentTarget.innerText,
            keyWordsList: keyWordsList,
        })

        //dispatch a new action when onClick function is triggered 
        this.props.updateKeys(keyWordsList);

    }
    onKeyDown = keyword => {
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
    render(){
        const{
            onChange,
            onClick,
            onKeyDown,
            removeKey,
            state:{
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput,
                keyWordsList,
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
                                <li className = {className} key={suggestion} onClick={(e) => {
                                    
                                    onClick(e);
                                    
                                }}>
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
        //If keyWordsList is not empty, show key divs
        if(keyWordsList){
            keywords = (
                <div className = {searchStyle.keyTags}>
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
                        <div className={searchStyle.search}>
                            <input
                                className={searchStyle.input}
                                onChange={onChange}
                                type="text"
                                placeholder="Enter keyword, genre, or artist(Up to five)"
                                value={userInput}
                            />
                            <button className={searchStyle.search_button}
                                onClick={(e) => {
                                    //console.log("button click:" + e.this.value);
                                    onClick(e);
                                    
                                }}>
                                
                                <Link to="/"><img src="../assets/search-icon.png"></img></Link>
                            </button>
                        </div>
                        {suggestionsList}
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