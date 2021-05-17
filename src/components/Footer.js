import React from 'react';
import './Footer.css';
import logo from '../components/homepage/img/logo.png';
import FB from '../components/homepage/img/facebook-icon.png';
import TW from '../components/homepage/img/twitter-icon.png';
import IN from '../components/homepage/img/linkedin-icon.png';
import closeButton from "./homepage/img/x-out-symbol.png";
import Popup from "reactjs-popup";

const tukaWeb = "http://www.tukaglobal.com";
const tukaFAQS = "https://www.tukaglobal.com/faqs/";
class Footer extends React.Component{
    state = {
        showIntro: false,
    }
    onClick = () => {
        const showIntro = !this.state.showIntro;
        console.log(showIntro);
        this.setState({
            showIntro: showIntro,
        })
    }
    render() {
        // const popUpWindow = () => (
            

        // )
        return (
            <div className='footer_bg'>
                <div style={{width:'100%',height:'20%'}}>
                    
                </div>
                
                <div className="footer_content">
                    {/*<div className="footer_left">*/}
                        <img height="60px" src={logo} />
                        <Popup
                            // the trigger to open the jump up window
                            trigger={<div>About</div>}
                            //boolean, when true jump up a window an left part of page change to gray
                            modal
                            nested
                        >
                            {close =>(
                                <div className = "popUp-body">
                                    <div className = "pop-close-button-border">
                                        <button className = "pop-close-button">
                                            <img src = {closeButton} onClick = {close}></img>
                                        </button>
                                    </div>
                                    
                                    <div classNamae = "header">The tuka Story</div>
                                    <hr className = "#"></hr>
                                    <div className = "popUp-content">
                                        <div className = "secondHeader">The tuka Story.</div>
                                        <div className = "secondContent">Creative industries have been totally disrupted by digital formats, yielding some good, some bad. Prices have collapsed due to the decrease in production and distribution costs and the explosion of new supply. Global demand has responded strongly. This should be great for consumers and creators, except it can also mean collapsing artist royalties and incomes, as well as an insurmountable challenge to connect audiences with content.</div>

                                        <div className = "secondHeader">The Obvious Problem:</div>
                                        <div className = "second-subhead">The Vanishing Incomes of Creators and the Challenges of digital rights management and copyright.</div>
                                        <div className = "secondContent">Did you know that almost half of the music and video we consume is streamed and it takes almost 15 million streams on YouTube to earn the equivalent of the average monthly minimum wage of $1260? Did you also know the median annual income of Authors Guild members is $17,500 for full-time authors and $4,500 for part-time authors? Not to mention the costless duplication and distribution of digital content that promotes piracy.</div>

                                        <div className = "secondHeader">But here’s the Real Problem:</div>
                                        <div className = "second-subhead">Exploding supply makes it impossibly difficult and costly to connect artists with audiences or vice-versa</div>
                                        <div className = "secondContent">You see, the true challenge of the digital world is Too Much Information. When we have too much of something, the price must fall. We also end up not being able to find what we want amid all the noise – as artists, fans, or consumers. These are not just problems for writers, musicians, and other artists, but for all of us as consumers of digital media. (Thinking about the digital oligopoly: Google, Apple, Facebook, and Amazon? Don’t worry, we’ll get to that.)</div>

                                        <div className = "secondHeader">But we can fix this. With technology.</div>
                                        <div className = "secondContent">By creating a sustainable new online ecosystem that harnesses social network dynamics to reward curators of desired content to build audience networks, we can help innovative creators thrive, and reward all of us who like to create and share content just for fun. By saving creative industries, we inspire the creative impulse in all of us.</div>

                                        <div className = "secondHeader">Our mission: Empower artists – Reward fans – Make the Connection.</div>
                                    </div>

                                    <div classNamae = "header">An Ecosystem</div>
                                    <hr className = "#"></hr>
                                    <div className = "popUp-content">
                                        <div className = "secondContent">To understand how we can do this—to disrupt new technology with newer technology—is a complex challenge. To oversimplify, we should first think about why we humans started creating song, dance, and stories around a communal campfire in the first place.</div>
                                        <div className = "second-subhead">Because the primary value of creative content is to connect us together through sharing networks.</div>
                                        <div className = "secondContent">We do this now when we play music live, when we discuss books. We do it with online friend networks, creating enormous value that’s reflected in the market valuations of major social media networks. We create this value by sharing information and forming connections, not through sales revenues.</div>
                                        <div className = "secondContent">The money transactions happen when other parties want access to these networks. The network servers are capturing most of that value now, but we, as creators and consumers, need to take the lion’s share back. How?</div>
                                        
                                        <ul>
                                            <li>We need an online creative media platform – a clearinghouse for content – where we can post, find, and curate content in order build out and manage our peer networks.</li>
                                            <li>We need a way to facilitate the monetary and non-monetary exchange of content among users.</li>
                                            <li>We need a way to track and manage all this information flow and control the value created.</li>
                                        </ul>

                                        <div className = "secondContent">The key to this sustainable creative ecosystem is to design a community network that curates itself through the interaction of its users. This helps solve the “Too Much Information” problem by generating promotion value for quality content that serves consumers’ diverse tastes.</div>
                                    </div>

                                    <div classNamae = "header">3-part harmony</div>
                                    <hr className = "#"></hr>
                                    <div className = "popUp-content"></div>
                                    <div classNamae = "header">A solution emerges</div>
                                    <hr className = "#"></hr>
                                    <div className = "popUp-content">Next Step</div>
                                    <div classNamae = "header">The tuka Story.</div>
                                    <hr className = "#"></hr>
                                    <div className = "popUp-content">The Obvious Problem:</div>
                                </div>)}
                        </Popup>
                        <Popup
                            trigger = {<div>FAQs</div>}
                            modal
                            nested
                        >
                            {(close) => (
                                <div className="popUp-body">
                                    <div className="pop-close-button-border">
                                        <button className="pop-close-button">
                                            <img src={closeButton} onClick={close}></img>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Popup>
                        <Popup
                            trigger = {<div>Contact</div>}
                            modal
                            nested
                        >   
                            {(close) => {
                                <div className="popUp-body">
                                    <div className="pop-close-button-border">
                                        <button className="pop-close-button">
                                            <img src={closeButton} onClick={close}></img>
                                        </button>
                                    </div>
                                </div>
                            }} 
                        </Popup>
                        <Popup
                            trigger = {<div>Privacy</div>}
                            modal
                            nested
                        >
                            {(close) => {
                                <div className="popUp-body">
                                    <div className="pop-close-button-border">
                                        <button className="pop-close-button">
                                            <img src={closeButton} onClick={close}></img>
                                        </button>
                                    </div>
                                </div>
                            }} 
                        </Popup>
                        <div> Copyright&Licensing</div>
                        <div> Terms of Service</div>
                    {/*</div>*/}

                    <div><img width="30px" src={FB} /></div>
                    <div><img width="30px" src={TW} /></div>
                    <div><img width="30px" src={IN} /></div>
                    <div>
                        2019 &copy; tukaglobal
                    </div>

                </div>
            </div>
        );
    }
}


export default Footer;
