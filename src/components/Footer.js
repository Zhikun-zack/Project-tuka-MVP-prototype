import React from 'react';
import './Footer.css';
import logo from '../components/homepage/img/logo.png';
import FB from '../components/homepage/img/facebook-icon.png';
import TW from '../components/homepage/img/twitter-icon.png';
import IN from '../components/homepage/img/linkedin-icon.png';
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
                        <div><a onClick = {this.onClick}> About</a></div>

                        <Popup
                    trigger={open => (
                    <button className="button">Trigger - {open ? 'Opened' : 'Closed'}</button>
                    )}
                    position="right center"
                    closeOnDocumentClick
                >
                    <span> Popup content </span>
            </Popup>

                        <div><a onClick = {this.onClick}> FAQs</a></div>
                        <div><a onClick = {this.onClick}> Contact</a></div>
                        <div className = {this.state.showIntro? "background-show background": "background"}>backgroudn</div>
                        <div> Privacy</div>
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
