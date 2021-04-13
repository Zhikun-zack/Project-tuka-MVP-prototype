import React, { Component } from "react";
//Using CSS in Module
import searchStyle from "./Search.module.css";

class Search extends Component{
    onClick = (e) => {
        console.log("click search button");
    }
    render(){
        return(
            // <input style={{borderRadius:'5rem'}} onChange={this.handleChange} type="text" placeholder="artist, genre, mood what you are looking for?"/>
            //                 <i className="search icon"></i> 
            <div className = {searchStyle.search}>
                <input className = {searchStyle.input} onChange={this.handleChange} type="text" placeholder="artist, genre, mood what you are looking for?"/>
                <button className = {searchStyle.search_button} onClick = {this.onClick}><img src = "../assets/search-icon.png"></img></button> 
            </div>
        )
    }
        
    
}

export default Search;