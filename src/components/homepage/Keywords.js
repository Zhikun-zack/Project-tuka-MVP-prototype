import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import keyStyle from "./Keywords.module.css";
import NavItem from "reactstrap/lib/NavItem";

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
            display: true,
        }
    }
    //click close button and close the keyword elements
    onClick = e => {
        this.setState = {
            display: false 
        }
    }
    render(){
        const keyWord = this.props.keyWord;
        return(
            <div className = {keyStyle.searchKeysDiv} >
                {
                    this.state.display? (
                        <Fragment>
                            <div className={keyStyle.searchKeysWords}>
                                {keyWord}
                            </div>
                            <button
                                className={keyStyle.searchKeysButton}
                                onClick={this.onClick}>
                                <img src="./assets/x-out-symbol.png" ></img>
                            </button>
                        </Fragment>
                    ): null
                }
            </div>
        );
    };
}

export default Keywords;