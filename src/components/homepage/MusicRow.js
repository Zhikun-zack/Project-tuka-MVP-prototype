import React from 'react';
import {Link} from "react-router-dom";
import scrollTo from "./CarouselScrollAnimate";
import './MusicRow.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LogIn from "./logInWindow";
import MusicService from '../../services/Music.service';

import leftIcon from "./img/arrow-left.png";
import rightIcon from "./img/arrow-right.png";
import closeIcon from "./img/accordion-up.png";

//images path for artists windows
import singer1 from './img/Me.jpg';
import singer2 from './img/Faith.jpg';
import singer3 from './img/GodsCountry.jpg';
import singer4 from './img/GrowingPains.jpg';
import singer5 from './img/Happy.jpg';
import singer6 from './img/evermore.jpg';
import myImg from './img/Isis.jpg';
import play from './img/play-button-small.png';
import stop from "./img/stop-button-small.png";
import user from "./img/user-profile image example.png";
import { connect } from 'react-redux';
import FormFeedback from 'reactstrap/lib/FormFeedback';

class MusicRow extends React.Component {
    constructor(props) {
        super(props);
        /*
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        */

       this.logIn = React.createRef();
       this.state = {
        active: true,
        //whether the thumbnail should expand display
        carouselActive: false,
        //the index of the thumbnail to expand
        carouselActiveIndex: -1,
        selectedKeywords: [],
        subGenres: [],
        newArtist: [],
        //details informations for artists windows
        artists: [
            {
                name: "singer1 singer2 singer3gjklsdgnlsfdsgsfdh", id: 1,
                song: "song title",
                image: myImg
            },
            {
                name: "singer2", id: 2,
                song: "song title",
                image: singer2
            },
            {
                name: "singer3", id: 3,
                song: "song title",
                image: singer3
            },
            {
                name: "singer4", id: 4,
                song: "song title",
                image: singer4
            },
            {
                name: "singer5", id: 5,
                song: "song title",
                image: singer5
            },
            {
                name: "singer6", id: 6,
                song: "song title",
                image: singer6
            },
            {
                name: "singer7", id: 7,
                song: "song title",
                image: singer1
            },
            {
                name: "singer7", id: 8,
                song: "song title",
                image: singer2
            },
            {
                name: "singer7", id: 9,
                song: "song title",
                image: singer3
            },
            {
                name: "singer7", id: 10,
                song: "song title",
                image: singer6
            },
            {
                name: "singer7", id: 11,
                song: "song title",
                image: singer6
            },
            {
                name: "singer7", id: 12,
                song: "song title",
                image: singer6
            }],
        count : 0,
        //whether music is playing, has three values: play, pause and stop 
        player: "play"
        };
        this.artists = []
    }
    onClick = (e) => {
        //Deside which thumbnail should expand
        const carouselActive = this.state.carouselActive;
        if(this.state.carouselActiveIndex === -1 || e.currentTarget.id === this.state.carouselActiveIndex){
            //if the play button is play, just change the button to stop
            if (this.state.player === "play"){
                this.setState({
                    carouselActive: true,
                    carouselActiveIndex: e.currentTarget.id,
                    player: "stop"
                })
            }
            //if the play button is stop, cancel this thumbnail's active state
            else if(this.state.player === "stop"){
                this.setState({
                    carouselActive: true,
                    carouselActiveIndex: e.currentTarget.id,
                    player: "play"
                })
            }
            
            this.props.changeThumbNailActive([this.props.genres,!carouselActive, "play"])
        }
        //when click on different thumbnail
        else if (e.currentTarget.id !== this.state.carouselActiveIndex){
            //click others when one thumbnail is active
            if(carouselActive === true){
                this.setState({
                    carouselActive: carouselActive,
                    carouselActiveIndex: e.currentTarget.id,
                    player: "stop"
                })
                this.props.changeThumbNailActive([this.props.genres,this.state.carouselActive, "play"])
            }
            //click others when no thumbnail is active
            else{
                this.setState({
                    carouselActive:!carouselActive,
                    carouselActiveIndex: e.currentTarget.id,
                    player: "stop"
                })
                this.props.changeThumbNailActive([this.props.genres,this.state.carouselActive, "play"])
            }
        }

        
       
    }
    //execute after render() function, give the initial data for discoverage page
    componentDidMount(){
        let normalPrimaryGenre = this.normalizationGenre(this.props.genres);
        this.updateMusicData(normalPrimaryGenre);
    }
    componentDidUpdate(preProps,preState){
        let selectedKeywords = this.props.reduxState.selectedKeywords; 
        let otherGenres = this.extractGenresExceptThisGenre(selectedKeywords);

        //When thumbnail in other carousel expanded, close all thumbnails in this carousel
        if(preProps.onOff === true && this.props.onOff === false){
            this.setState({
                carouselActive: false,
                carouselActiveIndex: -1
            })
        }
        let normalPrimaryGenre = this.normalizationGenre(this.props.genres);
        let normalOtherGenres = [];
        for (let i = 0; i < selectedKeywords.length; i++){
            normalOtherGenres[i] = this.normalizationGenre(selectedKeywords[i])
        }

        this.updateMusicData(normalPrimaryGenre, normalOtherGenres);
        //Update search result based on the new selected keywords
        // if(otherGenres.length !== 0){
        //     this.updateMusicData(this.props.genres, otherGenres); 
        // }else{
        //     this.updateMusicData(this.props.genres);
        // }
    }

    //The selectedkeywords in redux state contains all the genres that the user selected, this function remove this music row's genre
    //database needs to params for request, this music row's genre and others
    extractGenresExceptThisGenre = (selectedKeywords) => {
        const thisGenre = this.props.genres;
        //define new variable and return this one instead of changing the redux state driectly
        let subGenres = []
        subGenres = selectedKeywords.filter(value => (value !== thisGenre));
        return subGenres
    }
    //Remove the special symbol and modify upper case to lower case
    normalizationGenre = (genre) => {
        return genre.toLowerCase().replace(/\s*/g, "")
    }
    //Function for updating the music data get from database
    //input param: selectedKeywords: the subgenres, default is [], if it is empty, then just searching the primary genre
    updateMusicData = (primaryGenre, selectedKeywords = []) => {
        //for saving the new music information get from database
        const newArtist = this.state.newArtist;
        if(this.props.genres != "Trending Now"){
            
            
            //console.log('primaryGenres:' + primaryGenre)
            //get data
           
            MusicService.extractBasedOnTags(primaryGenre, selectedKeywords)
                .then(result => {
                    const musicData = result['data'];

                    //if the tag exists in database
                    if (musicData.length > 1){
                        let image
                        musicData.map((m) => {
                            // console.log(m)
                            try {
                                //console.log("./img/"+ m['title'].replace(/\s*/g, "") +".jpg")
                                image = require("./img/"+ m['title'].replace(/\s*/g, "") +".jpg") 
                            } catch (error) {
                                image = require("./img/noimage.jpg")
                            }
                            let newArtistDetail = {
                                name: " ",
                                song: m['title'],
                                tags: m['tags'],
                                //for invoking the image from file path
                                image: image
                            };
                            //location of the first duplicated element
                            let i;
                            //Whether the newArtistDetail has already in the state array
                            let contains;
                            newArtist.some((e,index) => {
                                if(JSON.stringify(newArtistDetail) === JSON.stringify(e)){
                                    contains = true;
                                    i = index;
                                }
                            })
                            //console.log("this is the length of new artist in:" + this.props.genres + " " + newArtist.length)
                            //largest number of thumbnails in the discovery page
                            if(newArtist.length <= 12){
                                if(contains){
                                    
                                    newArtist.splice(i, 1);
                                    newArtist.unshift(newArtistDetail);
                                }else{
                                    newArtist.unshift(newArtistDetail);
                                }
                            }else{
                                newArtist.unshift(newArtistDetail);
                                newArtist.pop();
                            }
                        })
                        // console.log(this.state.artists)
                        // console.log(newArtist)
                        if(JSON.stringify(this.state.artists) != JSON.stringify(newArtist)){
                            const copyNewArtist = [].concat(newArtist)
                            this.setState({
                                artists: copyNewArtist
                            })
                           
                        }
                        
                    }else if(musicData.length == 1){
                        console.log(1)
                    }
                })
                
        }else{
            MusicService.extractBasedOnDownloads()
                .then(result => {
                    const musicData = result['data'];
                    //if the tag exists in database
                    if (musicData.length > 1){
                        let image
                        musicData.map((m) => {
                            // console.log(m)
                            try {
                                image = require("./img/"+ m['title'].replace(/\s*/g, "") +".jpg"); 
                            } catch (error) {
                                image = require("./img/noimage.jpg")
                            }
                            let newArtistDetail = {
                                id: m['id'],
                                name: " ",
                                song: m['title'],
                                tags: m['tags'],
                                //for invoking the image from file path
                                image: image
                            };
                            //location of the first duplicated element
                            let i;
                            //Whether the newArtistDetail has already in the state array
                            let contains = false;
                            newArtist.some((e,index) => {
                                if(JSON.stringify(newArtistDetail) === JSON.stringify(e)){
                                    contains = true;
                                    i = index;
                                }
                            })
                            //console.log("this is the length of new artist in:" + this.props.genres + " " + newArtist.length)
                            //largest number of thumbnails in the discovery page
                            if(newArtist.length <= 12){
                                if(contains){
                                    //console.log(i)
                                    //error: without repeat but keep executing these codes
                                    newArtist.splice(i, 1);
                                    newArtist.push(newArtistDetail);
                                }else{
                                    newArtist.push(newArtistDetail);
                                }
                            }else{
                                newArtist.unshift(newArtistDetail);
                                newArtist.pop();
                            }
                        })
                        // console.log(this.state.artists)
                        // console.log(newArtist)
                        if(JSON.stringify(this.state.artists) != JSON.stringify(newArtist)){
                            const copyNewArtist = [].concat(newArtist)
                            this.setState({
                                artists: copyNewArtist
                            })
                        
                        }
                        
                    }else if(musicData.length == 1){
                        console.log(1)
                    }
                })
        }
    }

    //function for click left arrow
    handleLeftClick = (e) => {
        //div carouselView
        const { carouselViewport } = this.refs;
        const numSlidesToScroll = 3;
        const slideWidth = 85;
        const newPosition = carouselViewport.scrollLeft - (numSlidesToScroll * slideWidth);
        const timePerSlide = 300;
        const totalScrollTime = timePerSlide * numSlidesToScroll;
        scrollTo({
        element: carouselViewport, 
        to: newPosition, 
        duration: totalScrollTime, 
        scrollDirection: 'scrollLeft'});
    }
    //function for click right arrow
    handleRightClick = (e) => {
        const { carouselViewport } = this.refs;
        const numSlidesToScroll = 3;
        const slideWidth = 85;
        const newPosition = carouselViewport.scrollLeft + (numSlidesToScroll * slideWidth);
        const timePerSlide = 300;
        const totalScrollTime = timePerSlide * numSlidesToScroll;
        scrollTo({
        element: carouselViewport, 
        to: newPosition, 
        duration: totalScrollTime, 
        scrollDirection: 'scrollLeft'});
    }
    clickCarouselWin = () => {
        console.log("cliled")
        const carouselActive = this.state.carouselActive;
        this.setState({
            carouselActive: !carouselActive
        })
    }
    //When hover on artist windows
    hoverOnWindows(){
    }
    //When mouse move out of artist windows
    moveOutWindows(){
    }
    //When click "close carousel" button
    toggleClass = () => {
        const currState = this.state.active;
        this.setState({
            active: !currState
        })

    }
    handlePlay = () => {
        this.logIn.current.handleOpen();
    }
    handleCloseAllThumbNail = () => {
        this.setState({
            carouselActive: false,
            carouselActiveIndex: -1
        })
    }
    //When button in thumbnail is play, append .play function to the button, else append .pause function
    handleMusic = (e) => {
        //
        let elementClass = document.getElementsByTagName("audio")[0]
        console.log(elementClass)
        if (elementClass){
            console.log(elementClass.paused)
        } 
        //Current selected thumbnail play button id
        let currId = e.currentTarget.id;
        //Previous selected id
        let prevId = this.state.carouselActiveIndex;
        //Play or pause same thumbnail 
        if (currId === prevId) {
            //thumbnail itself is playing when click
            if (document.getElementsByTagName("audio")[0] && this.state.player === "play"){
                console.log("play")
                document.getElementsByTagName("audio")[0].play();
            }
            //itself is stopped when click
            else if(document.getElementsByTagName("audio")[0] && this.state.player === "stop"){
                console.log("stop")
                document.getElementsByTagName("audio")[0].pause();
            }
        }
        //click play of other thumbnail
        else{
//needs to modify
            //when previous thumbnail is playing
            if (document.getElementsByTagName("audio")[0] && this.state.player === "play"){
                document.getElementsByTagName("audio")[0].play();
            }
            //when previous thumbnail is stopped
            else if(document.getElementsByTagName("audio")[0] && this.state.player === "stop"){
                document.getElementsByTagName("audio")[0].play();
            }
        }
    }

    render() {
        console.log(this.props.reduxState)
        let maskClassName;
        let playOrStopSrc;
        const slides = this.state.artists.map((item, index) => {
            //console.log(item)
            //onOff is false means this carousel cannot expand any thumbnail in it
            if(this.props.onOff && index == this.state.carouselActiveIndex){
                //thumbNailClassName = this.state.carouselActive? "carousel_window_active carousel_window" :"carousel_window";
                maskClassName = this.state.carouselActive? "carousel_mask_active carousel_mask": "carousel_mask";
                playOrStopSrc = this.state.player === "play"? play : stop;
                // console.log("thumbNail:" + thumbNailClassName)
            }else{
                //thumbNailClassName = "carousel_window";
                maskClassName = "carousel_mask";
                playOrStopSrc = play;
            }
            return (
                <div className ="carousel_slide"  thumbNailAttribute = {JSON.stringify({"id": item.id, "genre": item.tags, "name": item.song})}>
                    <div className = "carousel_window" key = {index} >
                        <div className = {maskClassName}>
                            <div className = "carousel_display" id = {index} music_Id = {item.id} onClick = {this.onClick}>
                                
                                <img className = "carousel_display_playButton" id = {index} className = "play" src = {playOrStopSrc} onClick = {this.handleMusic} ></img>
                                
                                {/* {this.state.player == "playing" && (<button onClick = {() => {this.setState({player: "stopped"})}}><img className = "stop" src = {stop} ></img></button>)} */}
                            </div>
                            {/* <div className = "carousel_display">
                                <img className = "stop" src = {stop} onClick = {this.handlePlay}></img>
                            </div>  */}
                            <div className = "carousel_display" onClick = {this.handlePlay}>
                                <img src ={user}></img>
                                {/* <Link to = '/details'> 
                                    
                                </Link> */}

                            </div> 
                        </div>
                        <img src = {item.image.default} alt = "artist pic"></img>
                        {/* Artist and band's name for each elements in Carousel */}
                        
                    </div>  
                    <div className = "carousel_artists">{item.song}</div>      
                </div>
            );
        })

        let closeButton;
        if(this.props.genres != "Trending Now"){ 
            closeButton = (
                <button className="carouselCloseButton" onClick = {this.toggleClass}>
                    {/* When the carousel is closed, rotate the img 180 degrees, clock wise with animation */}
                    <img src= {closeIcon} className = {this.state.active ? "carouselCloseButtonImg ": "carouselCloseButtonImg carouselCloseButtonImgRotate" }></img>
                </button>
            )
            //console.log(MusicService.extractBasedOnTags(this.props.genres.toLowerCase()))
        }else {
            closeButton = (
                <button className="carouselCloseButton">
                </button>
            )
            //console.log(MusicService.extractBasedOnTags(this.props.genres))
        }
        return  (
            //whole div for each row
            <div className='WholeRow'>
                <div className = "carouselRow">
                    {
                        closeButton
                    }
                    <h2 className="row_header">{this.props.genres}</h2>
                </div>
                {/*div for carousel and left right buttons; when carousel closed, height of carousel container will be changed with animation*/}
                <div className={this.state.active? 'flex_wraper' : 'flex_wraper flex_wraper_hide'}>
                    <button className = {this.state.active? "carousel_button carousel_button--left" : "carousel_button_hide"} onClick={this.handleLeftClick}>
                        <img src= {leftIcon} />
                    </button>
                    {/* When carousel closed renderSlides disappear with animation */}
                    <div className = {this.state.active? "carousel_viewport" : "carousel_viewport_hide"}>
                        <div className = "carousel" ref="carouselViewport">
                            {slides}
                        </div>  
                    </div>              
                    <button className = "carousel_button carousel_button--right" onClick={this.handleRightClick} >
                        <img src= {rightIcon} />
                    </button>
                </div>
                <LogIn ref = {this.logIn}></LogIn>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        reduxState: state
    }
}
function mapDispatchToProps(dispatch){
    return {changeThumbNailActive: (thumbNailActive) => dispatch({
        type: "changeThumbNailActive",
        thumbNailActive: thumbNailActive,
    })
}
}

export default connect(mapStateToProps,mapDispatchToProps)(MusicRow);
