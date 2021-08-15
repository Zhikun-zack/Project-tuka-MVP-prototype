import React from 'react';
import { connect } from "react-redux";
import MusicRow from './MusicRow';

class Homepage_Content extends React.Component{


    render () {
        //primary genres stored in redux(list of objects)
        let keyWordsList = this.props.homePageGenres.keyWordsList;
        console.log(keyWordsList)
        //carousels will use this list to display
        let GenreList =  ["Trending Now"]; 
        let len = keyWordsList.length;
        //if empty, give default values
        if(len == 0){
            keyWordsList = keyWordsList.concat(["Rock","Hip-Hop / Rap","Pop","Country", "Latin", "Jazz", "Classical"]); 
        }
        //extract primary genres' name from keyWordsList and add to GenreList
        let i 
        for(i = 0; i < len; i++){
            GenreList.push(keyWordsList[i].name)
        }
        if(this.props.homePageGenres.selectedKeywords.length == 0){
            GenreList = ["Trending Now", "Rock","Hip-Hop / Rap","Pop","Country", "Latin", "Jazz", "Classical"]
        }

        return (
            <div> 
                {
                    GenreList.map((key, index) => {
                        //thumbNailActive state saved the last clicked thumbnail's carousel name and the state of this thumbnail(expanded or not)
                        if (key === this.props.homePageGenres.thumbNailActive[0]){
                            //onOff represent whether this carousel can expand any thumbnail, false no, true means it can expand any thumbnail
                            return <MusicRow id = {index} onClick = {this.onClick} genres = {key} onOff = {true} ref = {this.musicRowRef}></MusicRow>
                        }else {
                            //if one carousel's thumbnail is expanded, the other carousels cannot expand any thumbnail
                            if(this.props.homePageGenres.thumbNailActive[1]){
                                return <MusicRow id = {index} onClick = {this.onClick} genres = {key} onOff = {false} ref = {this.musicRowRef}></MusicRow>
                            }
                            //if one thumbnail was clicked and is closed, the other carousel can expand any one
                            else{
                                return <MusicRow id = {index} onClick = {this.onClick} genres = {key} onOff = {true} ref = {this.musicRowRef}></MusicRow>
                            }
                        }
                    })
                }

                {/* Only display one row */}
                {/* <MusicRow id = {1} onClick = {this.onClick} genres = {'Hip-Hop / Rap'} onOff = {true} ref = {this.musicRowRef}></MusicRow> */}
            </div>
    
        );
    };

};

//Set redux state into props, so that this component can visit redux state through this.props.homePageGenres
function mapStateToProps(state){
    return {homePageGenres: state};
}
export default connect(mapStateToProps)(Homepage_Content);
