import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import keyStyle from "./Keywords.module.css";
import NavItem from "reactstrap/lib/NavItem";
import { Item } from "semantic-ui-react";

class Keywords extends Component{
    static propTypes = {
        keyWord: PropTypes.instanceOf(String)
    };
    static defaultProps = {
        keyWord: "",
    }
    constructor(props) {
        super(props);

        this.state = {
            display: false,
        }
    }
    //click close button and close the keyword elements
    onClick = e => {
        this.setState = {
            display: true
        }
        console.log(e.target.id);
        //this.state.onChange(this.props.keyWord);
        
    }
    render(){
        const keyWord = this.props.keyWord;
        return(
            <div className = {keyStyle.searchKeysDiv} style = {{display: this.state.display}}>
                {
                        <Fragment>
                            <div className={keyStyle.searchKeysWords}>
                                {keyWord}
                            </div>
                            <button
                                className={keyStyle.searchKeysButton}
                                onClick = {() => {this.props.delete(keyWord);
                                console.log(keyWord)}}
                                >
                                <Link to="/"><img id = {keyWord} src="./assets/x-out-symbol.png" ></img></Link>
                            </button>
                        </Fragment>
                }
            </div>
        );
    };
}

export default Keywords;