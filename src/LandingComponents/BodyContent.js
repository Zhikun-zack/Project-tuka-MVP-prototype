import React from 'react';
import './BodyContent.css';
import ScrollingChannels from './ScrollingChannels';
import { musicData, musicGenre } from './MusicData';
import musicIcon from "../images/musicIcon.png"
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import Tag from "../ReusableComponents/Tags";


class BodyContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            musicData: musicData,
            tags: []
        }
    }

    pushSubgenre = event => {
        event.persist();
        const tag = event.target.value;
        if (event.which === 13 || event.keyCode === 13) {
            event.target.value = "";
            event.preventDefault();
            if (tag.length < 1 || tag[0] === " " || this.state.tags.includes(tag)) {
                return
            }
            this.setState(prev => {
                return { tags: [...prev.tags, tag] }
            });
        }
    }

    onTagDelete = id => {
        this.setState(prev => {
            prev.tags.splice(prev.tags.indexOf(id), 1);
            return { tags: prev.tags };
        });
    }

    onFilterClick = event => {
        if (this.state.tags.length > 0) {
            const newMusicData = [];
            this.state.musicData.forEach((song, songIndex, songArr) => {
                this.state.tags.forEach((tag, tagIndex, tagArr) => {
                    if (song.subgenre.includes(tag) && !newMusicData.includes(song)) {
                        // if( newMusicData.length > 0){
                        //     for (let i = 0; i < newMusicData.length; i++){
                        //         // console.log(this.state.tags.indexOf(newMusicData[i].subgenre[tag]))
                        //         // debugger;
                        //         // comparing incoming song with newMusicData to decide where to insert
                        //         // location                 
                        //         // if (this.state.tags.indexOf(newMusicData[i].subgenre[tag]) > tagIndex){
                        //         //     newMusicData.splice((i - 1), 0, song)
                        //         if (newMusicData[i].subgenre.includes(tag)){
                        //             newMusicData.splice((i - 1), 0, song)
                        //         } else {
                        //             newMusicData.push(song)
                        //         }
                        //     }
                        // }else{
                            newMusicData.push(song)     
                    }
                })
            })
            // console.log("old", newMusicData)
            // newMusicData.sort((a, b) => {
            //     // for (let i = 0; i < this.state.tags.length; i++){

            //     // }
            // })
            // console.log("new music data", newMusicData);
            this.setState({
                musicData: newMusicData
            })
        } else {
            this.setState({
                musicData: musicData
            })
        }
    }

    render() {
        const genreList = musicGenre.map(genre => {
            return (
                <ScrollingChannels key={genre} genre={genre} genreIcon={musicIcon} renderingData={this.state.musicData} />
            )
        })
        const tagList = this.state.tags.map(tag => {
            return (
                <Tag key={tag} tag={tag} id={tag} onClick={this.onTagDelete} />
            )
        })
        return (
            <div className="container-fluid body-content">
                <div style={{ "width": "100%", "textAlign": "center", "fontSize": "30px", "borderBottom": "solid 1px black", "marginBottom": "10px" }}>
                    SCROLLING CHANNELS
                </div>
                <div className="row">
                    <div className="col-md-2 body-content-section">
                        <div style={{ "backgroundColor": "white" }}>
                            <h3>Explore...</h3>
                            <h3 style={{ "textIndent": "50px" }}>Discover...</h3>
                            <h3 style={{ "textIndent": "100px" }}>Share...</h3>
                        </div>
                        <div style={{ "backgroundColor": "white", "padding": "20px", "marginBottom": "10px" }}>
                            <form>
                                <FormGroup>
                                    <ControlLabel><h3>#SubGenre</h3></ControlLabel>
                                    <FormControl type="text" placeholder="Enter a subGenre" onKeyPress={this.pushSubgenre} />
                                </FormGroup>
                                <FormGroup>

                                    {tagList.length > 0 && tagList}
                                </FormGroup>
                                <FormGroup>
                                    <Button type="button" className="btn btn-primary" onClick={this.onFilterClick}>Filter</Button>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel><h3>Trending</h3></ControlLabel>
                                    <Button type="button" style={{"display":"block", "marginBottom":"5px"}} className="btn btn-success">Today</Button>
                                    <Button type="button" style={{"display":"block", "marginBottom":"5px"}} className="btn btn-success">This Week</Button>
                                    <Button type="button" style={{"display":"block", "marginBottom":"5px"}} className="btn btn-success">This Month</Button>
                                </FormGroup>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-10 body-content-section">
                        <div className="row">
                            {genreList}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BodyContent;