import React from 'react'
import Description from './Description'
import MusicRow from './MusicRow'

class Homepage_Content extends React.Component{
    state = {
        genres:["Trending Now","Pop","Hip-Hop / R&B","Rock","Country Western"]
    };

    render () {
        return (
            <div> 
                <MusicRow genres={this.state.genres[0]}/>
                <MusicRow genres={this.state.genres[1]}/>
                <MusicRow genres={this.state.genres[2]}/>
                <MusicRow genres={this.state.genres[3]}/>
                <MusicRow genres={this.state.genres[4]}/>
            </div>
    
        );
    };

};

export default Homepage_Content;
