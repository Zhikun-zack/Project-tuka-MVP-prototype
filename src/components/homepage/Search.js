import React, { Component } from "react";
//Using CSS in Module
import searchStyle from "./Search.module.css";

class Search extends Component{
    //click search button
    onClick = (e) => {
        console.log("click search button");
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