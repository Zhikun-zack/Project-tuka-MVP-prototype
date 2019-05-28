import React from 'react'
import Description from './Description'
import MusicRow from './MusicRow'

class Homepage_Content extends React.Component{
    state = {
        genres:["TRENDING NOW","POP","HIP-HOP / R&B","ROCK","COUNTRY WESTERN"]
    };

    render () {
        return (
            <div>
                <Description />
                <MusicRow genres={this.state.genres}/>
            </div>
    
        );
    };

};

export default Homepage_Content;