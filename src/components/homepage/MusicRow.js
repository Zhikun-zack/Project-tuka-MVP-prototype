import React from 'react';
import {Link} from "react-router-dom";
import scrollTo from "./CarouselScrollAnimate";
import './MusicRow.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//images path for artists windows
import singer1 from './img/artist1.png';
import singer2 from './img/artist2.png';
import singer3 from './img/artist3.png';
import singer4 from './img/artist4.png';
import singer5 from './img/artist5.png';
import singer6 from './img/artist6.png';
import myImg from './img/IMG_3138.jpg';
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
    //render all artists windows in each line
    renderSlides(){
        const slides = this.state.artists.map((item, index) => {
            return (
                <div className ="carousel_slide">
                    <div className = "carousel_window">
                        <div className = "carousel_mask">
                            <div className = "carousel_display">
                                <img className = "play" src = {play}></img>
                            </div>
                            <div className = "carousel_display">
                                <img className = "stop" src = {stop}></img>
                            </div> 
                            <div className = "carousel_display">
                                <Link to = '/details'> 
                                    <img className = "user" src = {user}></img>
                                </Link>
                                
                            </div> 
                        </div>
                        <img src = {item.image} alt = "artist pic"></img>    
                    </div>             
                </div>
            );
        })
        return slides;
    }
    //function for click left arrow
    handleLeftClick = (e) => {
        //div carouselView
        console.log(this);
        const { carouselViewport } = this.refs;
        console.log( carouselViewport);
        const numSlidesToScroll = 3;
        const slideWidth = 85;
        const newPosition = carouselViewport.scrollLeft - (numSlidesToScroll * slideWidth);
        console.log("newPosition:" + newPosition);
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
        console.log('right clicked')
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
        console.log(carouselViewport.scrollLeft);
    }
    //When hover on artist windows
    hoverOnWindows(){
        console.log("hover")
    }
    //When mouse move out of artist windows
    moveOutWindows(){
        console.log("move out")
    }
    //When click "close carousel" button
    toggleClass = () => {
        const currState = this.state.active;
        this.setState({
            active: !currState
        })

    }

    render() {
        return  (
            //whole div for each row
            <div className='WholeRow'>
                <div className = "#">
                    <button className="carouselCloseButton" onClick = {this.toggleClass}>
                        {/* When the carousel is closed, rotate the img 180 degrees, clock wise with animation */}
                        <img src="../../assets/accordian-down.png" className = {this.state.active ? "carouselCloseButtonImg ": "carouselCloseButtonImg carouselCloseButtonImgRotate" }></img>
                    </button>
                    <h2 className="row_header">{this.props.genres}</h2>
                </div>
                {/*div for carousel and left right buttons */}
                <div className={this.state.active? 'flex_wraper' : 'flex_wraper flex_wrapper_hide'}>
                    <button className = "carousel_button carousel_button--left" onClick={this.handleLeftClick}>
                        <img src="../assets/arrow-left.png" />
                    </button>
                    {/* When carousel closed renderSlides disappear with animation */}
                    <div className = {this.state.active? "carousel_viewport" : "carousel_viewport_hide"}>
                        <div className = "carousel" ref="carouselViewport">
                            {this.renderSlides()}
                        </div>  
                    </div>              
                    <button className = "carousel_button carousel_button--right" onClick={this.handleRightClick} >
                        <img src="../assets/arrow-right.png" />
                    </button>
                </div>
            </div>
        );
    }
}
export default MusicRow;
