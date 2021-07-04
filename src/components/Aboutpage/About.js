import React from 'react';
import { connect } from "react-redux";
import Spinner from 'react-spinkit';


import './About.css'

class About extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            loading: true
        }
    }
    onClick = () => {
        document.addEventListener("click", () => {
            this.props.updateShowMenu("false")
        })
    }
    hideSpinner = () => {
        console.log(this.props.match)
        this.setState({
            loading: false
        });
    };

    render(){
        let src = this.props.match.path == '/about' ? 'https://www.tukaglobal.com' : 'https://www.tukaglobal.com' + this.props.match.path;
        console.log(this.props.reduxState.showMenu)
        document.removeEventListener("click", () => {
            this.props.updateShowMenu("false");
        })
        return (
            <div className = 'aboutPageContainer'>
                {
                    this.state.loading ? (
                        <Spinner 
                            className = 'aboutLoading' 
                            name = 'line-scale'
                            fadeIn="none">
                        </Spinner>
                    ): null
                }
                <iframe 
                    className = 'aboutPage' 
                    onLoad = {this.hideSpinner} 
                    src = {src}>
                        About
                </iframe>
            </div>
            
        )
        
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateShowMenu: (keys) =>dispatch({
            type: "changeMenu",
            changeMenu: keys
        })
    }
}

function mapStateToProps(state){
    return{reduxState: state}
}

export default connect(mapStateToProps, mapDispatchToProps)(About);