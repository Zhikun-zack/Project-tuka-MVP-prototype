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
import singer1 from './img/DameTu.jpg';
import singer2 from './img/Faith.jpg';
import singer3 from './img/GodsCountry.jpg';
import singer4 from './img/GrowingPains.jpg';
import singer5 from './img/Happy.jpg';
import singer6 from './img/evermore.jpg';
import myImg from './img/Isis.jpg';
import play from './img/play-button-small.png';
import stop from "./img/stop-button-small.png";
import user from "./img/user-profile image example.png";

class MusicRow extends React.Component {
    constructor(props) {
        super(props);
        /*
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        */
       this.logIn = React.createRef();
    }
    state = {
        active: true,
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
    onClick = (e) => {
        console.log(JSON.parse(e.currentTarget.getAttribute("thumbNailAttribute")))
    }
    //render all artists windows in each line
    renderSlides(){
        if(this.props.genres != "Trending Now"){
            console.log(this.props.genres)
            MusicService.extractBasedOnTags((this.props.genres).toLowerCase()).then(result => {console.log(result)})
            
        }

        const slides = this.state.artists.map((item, index) => {
            return (
                <div className ="carousel_slide" key = {index} onClick = {this.onClick} thumbNailAttribute = {JSON.stringify({genre: ["pop", "rock"], artist: "try"})}>
                    <div className = "carousel_window">
                        <div className = "carousel_mask">
                            <div className = "carousel_display">
                                <img className = "play" src = {play} onClick = {this.handlePlay}></img>
                            </div>
                            <div className = "carousel_display">
                                <img className = "stop" src = {stop} onClick = {this.handlePlay}></img>
                            </div> 
                            <div className = "carousel_display">
                                <Link to = '/details'> 
                                    <img className = "user" src = {user} ></img>
                                </Link>
                                
                            </div> 
                        </div>
                        <img src = {item.image} alt = "artist pic"></img>
                        {/* Artist and band's name for each elements in Carousel */}
                        
                    </div>  
                    <div className = "carousel_artists">Artist/Band</div>      
                </div>
            );
        })
        return slides;
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
                            {this.renderSlides()}
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
export default MusicRow;
