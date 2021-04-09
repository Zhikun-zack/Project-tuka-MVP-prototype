import React from 'react';
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

class MusicRow extends React.Component {
    constructor(props) {
        super(props);
        /*
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        */
    }
    state = {
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
                    <img src = {item.image} alt = "artist pic"></img>
                </div>
            );
        })
        return slides;
    }
    handleLeftClick = (e) => {
        console.log(this.scrollLeft);
    }
    // next() {
    //     this.slider.slickNext();
    // }
    // previous() {
    //     this.slider.slickPrev();
    // }
    render() {
        var settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6,

        };
        return this.props.genres.map(genre => (
            //whole div for each row
            <div className='WholeRow'>
                {/*div for carousel and left right buttons */}
                <div className='flex_wraper'>
                    <button className = "carousel_button carousel_button--left" onClick={this.handleLeftClick} style={{ border: "none", backgroundColor: "transparent" }}>
                        <img src="../assets/arrow-left.png" />
                    </button>
                    <div style={{ width: '90%' }}>
                        <div>
                            <h2 className="row_header">{genre}</h2>
                        </div>
                        <div className = "carousel">
                            {this.renderSlides()}
                        </div>  
                    </div>              
                    <button className = "carousel_button carousel_button--right" onClick={this.previous} style={{ border: "none", backgroundColor: "transparent" }}>
                        <img src="../assets/arrow-right.png" />
                    </button>
                </div>
            </div>
        ));
    }
}
export default MusicRow;
