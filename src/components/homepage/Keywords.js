import React, {Component} from "react";
import keyStyle from "./Keywords.module.css";

class Keywords extends Component{
    render(){
        return(
            <div className = {keyStyle.searchKeysDiv}>
                <div className = {keyStyle.searchKeysWords}>
                    Country
                </div>
                <div className = {keyStyle.searchKeysButton}>
                    <img src = "./assets/x-out-symbol.png" ></img>
                </div>
            </div>
        );
    };
}

export default Keywords;