import React from 'react';
import { connect } from "react-redux";
import MusicRow from './MusicRow';

class Homepage_Content extends React.Component{
    state = {
        genres:["Trending Now","Pop","Hip-Hop / R&B","Rock","Country Western"]
    };

    render () {
        console.log("In homepage content: ");
        console.log(this.props.genres.keyWordsList);
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

function mapStateToProps(state){
    return {genres: state};
}
export default connect(mapStateToProps)(Homepage_Content);
