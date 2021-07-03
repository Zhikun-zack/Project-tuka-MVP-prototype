import React from 'react';
import Spinner from 'react-spinkit';


import './About.css'

class About extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            loading: true
        }
    }

    hideSpinner = () => {
        this.setState({
            loading: false
        });
    };

    render(){
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
                    src = 'http://www.tukaglobal.com/'>
                        About
                </iframe>
            </div>
            
        )
        
    }
}

export default About;