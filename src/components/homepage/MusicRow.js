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
        console.log(e.currentTarget.id)
        if(this.state.carouselActiveIndex === -1 || e.currentTarget.id === this.state.carouselActiveIndex){
            this.setState({
                carouselActive: !carouselActive,
                carouselActiveIndex: e.currentTarget.id
            })
        }
        console.log(this.state.carouselActive)
        console.log(this.state.carouselActiveIndex)
    }
    //execute before render() function, give the initial data for discoverage page
    componentDidMount(){
        if(this.props.genres != "Trending Now"){
            //for saving the new music information get from database
            let newArtist = []

            //get data
            MusicService.extractBasedOnTags((this.props.genres).toLowerCase().replace(/\s*/g, ""), ['rock'])
                .then(result => {
                    //console.log(result)
                    const musicData = result['data'];
                    //if the tag exists in database
                    if (musicData.length != 0){
                        //music id
                        let id = 0
                        let image
                        musicData.map(m => {
                            try {
                                image = require("./img/"+ m['title'].replace(/\s*/g, "") +".jpg") 
                            } catch (error) {
                                image = require("./img/noimage.jpg")
                            }
                            let newArtistDetail = {
                                name: " ",
                                id: id,
                                song: m['title'],
                                //for invoking the image from file path
                                image: image
                            };
                            newArtist.push(newArtistDetail);
                            id++;
                        })
                        
                        //replace the new data with old state
                        this.setState({
                            artists: newArtist
                        })
                    }
                })
        }
    }

    componentDidUpdate(preProps){
        if(this.props.reduxState.selectedKeywords !== preProps.reduxState.selectedKeywords){
            MusicService.extractBasedOnTags()
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

    render() {
        console.log(this.props.reduxState.selectedKeywords)
        let thumbNailClassName;
        const slides = this.state.artists.map((item, index) => {
            console.log("index:" + index)
            console.log("activeindex:" + this.state.carouselActiveIndex)
            if(index == this.state.carouselActiveIndex){
                thumbNailClassName = this.state.carouselActive? "carousel_window_active carousel_window" :"carousel_window";
                console.log("thumbNail:" + thumbNailClassName)
            }else{
                thumbNailClassName = "carousel_window";
            }
            return (
                <div className ="carousel_slide" onClick = {this.onClick} id = {index} thumbNailAttribute = {JSON.stringify({genre: ["pop", "rock"], artist: "try"})}>
                    <div className = {thumbNailClassName} key = {index} onClick = {this.clickCarouselWin}>
                        <div className = "carousel_mask">
                            <div className = "carousel_display">
                                <img className = "play" src = {play} onClick = {this.handlePlay}></img>
                            </div>
                            {/* <div className = "carousel_display">
                                <img className = "stop" src = {stop} onClick = {this.handlePlay}></img>
                            </div>  */}
                            <div className = "carousel_display">
                                <Link to = '/details'> 
                                    <img src ={user}></img>
                                </Link>

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

export default connect(mapStateToProps)(MusicRow);
