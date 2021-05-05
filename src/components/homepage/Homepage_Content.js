import React from 'react';
import { connect } from "react-redux";
import MusicRow from './MusicRow';

class Homepage_Content extends React.Component{
    render () {
        let keyWordsList = this.props.homePageGenres.keyWordsList;
        const oldGenreList =  ['Trending Now']; 
        
        let len = keyWordsList.length;
        console.log("in home page" + len)
        if(len == 0){
            keyWordsList = keyWordsList.concat(["Pop","Hip-Hop / R&B","Rock","Country Western"]);
            console.log(keyWordsList);
        }

        const newGenreList = oldGenreList.concat(keyWordsList);
        return (
            <div> 
                {
                    newGenreList.map((key) => {
                        return <MusicRow genres = {key}></MusicRow>
                    })
                }
                
            </div>
    
        );
    };

};

//Set state into props, so that this component can visit state through this.props.homePageGenres
function mapStateToProps(state){
    return {homePageGenres: state};
}
export default connect(mapStateToProps)(Homepage_Content);
