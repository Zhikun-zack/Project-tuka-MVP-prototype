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
                <Description />
                <MusicRow genres={this.state.genres}/>
            </div>
    
        );
    };

};

export default Homepage_Content;
