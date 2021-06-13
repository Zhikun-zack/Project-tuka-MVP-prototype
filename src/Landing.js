import React from 'react';
import TopBar from './LandingComponents/TopBar'
import BodyContent from './LandingComponents/BodyContent'

class Landing extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <React.Fragment>
                <TopBar/>
                <BodyContent/>
            </React.Fragment>
        )
    }
}
export default Landing;