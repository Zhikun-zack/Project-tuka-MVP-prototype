import React from 'react';
import { connect } from "react-redux";
import MusicRow from './MusicRow';

class Homepage_Content extends React.Component{
    state = {
        genres: ["Trending Now","Pop","Hip-Hop / R&B","Rock","Country Western"]
    };
    

    render () {
        return (
            <div> 
                <MusicRow genres={this.props.homePageGenres.keyWordsList[0]}/>
                <MusicRow genres={this.state.genres[1]}/>
                <MusicRow genres={this.state.genres[2]}/>
                <MusicRow genres={this.state.genres[3]}/>
                <MusicRow genres={this.state.genres[4]}/>
            </div>
    
        );
    };

};

//Set state into props, so that this component can visit state through this.props.homePageGenres
function mapStateToProps(state){
    return {homePageGenres: state};
}
export default connect(mapStateToProps)(Homepage_Content);
