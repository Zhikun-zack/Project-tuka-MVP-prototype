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
                                    
                                    <div classNamae = "header">Title</div>
                                    <hr className = "#"></hr>
                                    <div className = "popUp-content">Content</div>
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
