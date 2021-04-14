import React, { Component } from "react";
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
            filteredSuggestions: [],
            showSuggesions: false,
            userInput: ""
        };
    }
    //click search button
    onClick = (e) => {
        console.log(this.props);
    }
    handleChange = (e) => {
        console.log(e.currentTarget.value);
    }

    render(){
        return(
            <div className={searchStyle.search}>
                <div className = {searchStyle.searchBar}>
                    <input className={searchStyle.input} onChange={this.handleChange} type="text" placeholder="artist, genre, mood what you are looking for?" />
                    <button className={searchStyle.search_button} onClick={this.onClick}><img src="../assets/search-icon.png"></img></button>
                </div>
                
            </div>
            
        )
    }
        
    
}

export default Search;