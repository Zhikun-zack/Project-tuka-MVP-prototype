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

        };
    }
    
    onClick = (e) => {
        const carouselActive = this.state.carouselActive;
        if(this.state.carouselActiveIndex === -1 || e.currentTarget.id === this.state.carouselActiveIndex){
            this.setState({
                carouselActive: !carouselActive,
                carouselActiveIndex: e.currentTarget.id
            })

            this.props.changeThumbNailActive([this.props.genres,!carouselActive])
            //console.log(this.props.reduxState.thumbNailActive)
        }else if (e.currentTarget.id !== this.state.carouselActiveIndex){
            if(carouselActive === true){
                this.setState({
                    carouselActive: carouselActive,
                    carouselActiveIndex: e.currentTarget.id
                })
                this.props.changeThumbNailActive([this.props.genres,this.state.carouselActive])
            }else{
                this.setState({
                    carouselActive:!carouselActive,
                    carouselActiveIndex: e.currentTarget.id
                })
                this.props.changeThumbNailActive([this.props.genres,this.state.carouselActive])
            }
        }
    }
    //execute before render() function, give the initial data for discoverage page
    componentDidMount(){
        this.updateMusicData(this.props.genres);
    }

    componentDidUpdate(preProps){
        //When thumbnail in other carousel expanded, close all thumbnails in this carousel
        if(preProps.onOff === true && this.props.onOff === false){
            this.setState({
                carouselActive: false,
                carouselActiveIndex: -1
            })
        }
        
        
        console.log('id'+ this.props.id)
        // console.log("old:" + preProps.genres)
        // console.log("new:" + this.props.genres)
        // console.log( preProps)
        // console.log("new:" + this.props.reduxState.selectedKeywords)
        //When selected keywords changed
        // if(this.props.reduxState.selectedKeywords !== preProps.reduxState.selectedKeywords){
            
        //     //When user selected one of the primary keys, then the this.props.genres of carousel will be changed to new one, update the thumbnail contents
        //     if(this.props.genres != preProps.genres){
        //         console.log("changed")
        //         this.updateMusicData(this.props.genres, subGenres)
        //     }
        //     //When user only select subgenres
        //     else{
        //         this.updateMusicData(this.props.genres, subGenres)
        //     }
        // }
        if(this.props.genres != preProps.genres || this.props.reduxState.selectedKeywords !== preProps.reduxState.selectedKeywords){
                    console.log("changed")
                    //console.log(this.props.genres)
                    //
                    let selectedKeywords = this.props.reduxState.selectedKeywords;
                    console.log(selectedKeywords)
                    let subGenres = this.extractSubGenres(selectedKeywords);
                    console.log(subGenres)
                    this.updateMusicData(this.props.genres, subGenres)
         }
        //this.updateMusicData(this.props.genres, subGenres)
    }

    //The selectedkeywords in redux state contains all the genres that the user selected, this function remove the primary genres, because the database query split the primary and sub genres
    extractSubGenres = (selectedKeywords) => {
        const primaryGenre = ["Rock","Hip-Hop / Rap","Pop","Country", "Latin", "Jazz", "Classical"]
        //define new variable and return this one instead of changing the redux state driectly
        let subGenres = []
        subGenres = selectedKeywords.filter(value => (!primaryGenre.includes(value)));
        return subGenres
    }
    //Function for updating the music data get from database
    //input param: selectedKeywords: the subgenres, default is [], if it is empty, then just searching the primary genre
    updateMusicData = (primaryGenre, selectedKeywords = []) => {
        if(this.props.genres != "Trending Now"){
            //for saving the new music information get from database
            const newArtist = this.state.newArtist;
            //console.log('primaryGenres:' + primaryGenre)
            //get data
            MusicService.extractBasedOnTags((primaryGenre).toLowerCase().replace(/\s*/g, ""), selectedKeywords)
                .then(result => {
                    console.log(result)
                    const musicData = result['data'];
                    //if the tag exists in database
                    if (musicData.length != 0){
                        let image
                        musicData.map((m) => {
                            //console.log(m)
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
                        //replace the new data with old state
                        this.setState({
                            artists: newArtist
                        })
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
    render() {
        // console.log(this.props.reduxState.selectedKeywords)
        let thumbNailClassName;
        let maskClassName;
        const slides = this.state.artists.map((item, index) => {
            //console.log(item)
            // console.log("index:" + index)
            // console.log("activeindex:" + this.state.carouselActiveIndex)
            
            //onOff is false means this carousel cannot expand any thumbnail in it
            if(this.props.onOff && index == this.state.carouselActiveIndex){
                thumbNailClassName = this.state.carouselActive? "carousel_window_active carousel_window" :"carousel_window";
                maskClassName = this.state.carouselActive? "carousel_mask_active carousel_mask": "carousel_mask";
                // console.log("thumbNail:" + thumbNailClassName)
            }else{
                thumbNailClassName = "carousel_window";
                maskClassName = "carousel_mask";
            }
            return (
                <div className ="carousel_slide" onClick = {this.onClick} id = {index} thumbNailAttribute = {JSON.stringify({genre: item.tags, name: item.song})}>
                    <div className = {thumbNailClassName} key = {index} onClick = {this.clickCarouselWin}>
                        <div className = {maskClassName}>
                            <div className = "carousel_display">
                                <img className = "play" src = {play} ></img>
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
                        <img src = {this.props.genres != "Trending Now"? item.image.default: item.image} alt = "artist pic"></img>
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
        //let musicInitData = this.getInitData();
        //console.log(musicInitData)
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
    return{reduxState: state}
}
function mapDispatchToProps(dispatch){
    return {changeThumbNailActive: (thumbNailActive) => dispatch({
        type: "changeThumbNailActive",
        thumbNailActive: thumbNailActive,
    })
}
}

export default connect(mapStateToProps,mapDispatchToProps)(MusicRow);
