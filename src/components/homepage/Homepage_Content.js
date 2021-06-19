import React from 'react';
import { connect } from "react-redux";
import MusicRow from './MusicRow';

class Homepage_Content extends React.Component{
    
    render () {
        //primary genres stored in redux(list of objects)
        let keyWordsList = this.props.homePageGenres.keyWordsList;
        console.log(this.props.homePageGenres.keyWordsList)
        console.log("this is from home page content js file ")
        console.log(this.props.homePageGenres.selectedKeywords);
        //carousels will use this list to display
        const GenreList =  ['Trending Now']; 
        console.log(keyWordsList)
        let len = keyWordsList.length;
        //if empty, give default values
        if(len == 0){
            keyWordsList = keyWordsList.concat(["Rock","Hip-Hop / Rap","Pop","Country", "Latin", "Jazz", "Classical"]);
            console.log(keyWordsList);
        }
        //extract primary genres' name from keyWordsList and add to GenreList
        let i 
        for(i = 0; i < len; i++){
            GenreList.push(keyWordsList[i].name)
        }

        return (
            <div> 
                {
                    GenreList.map((key) => {
                        return <MusicRow genres = {key}></MusicRow>
                    })
                }
                
            </div>
    
        );
    };

};

//Set redux state into props, so that this component can visit redux state through this.props.homePageGenres
function mapStateToProps(state){
    return {homePageGenres: state};
}
export default connect(mapStateToProps)(Homepage_Content);
