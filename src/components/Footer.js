import React from 'react';
import './Footer.css';
import logo from '../components/homepage/img/placeholder-logo.png';
import FB from '../components/homepage/img/facebook-icon.png';
import TW from '../components/homepage/img/twitter-icon.png';
import IN from '../components/homepage/img/linkedin-icon.png';

const tukaWeb = "http://www.tukaglobal.com";
const tukaFAQS = "https://www.tukaglobal.com/faqs/";
    class Footer extends React.Component{

    render() {
        return (
            <div className='footer_bg'>
                <div style={{width:'100%',height:'20%'}}></div>
                <div className="footer_content">
                    {/*<div className="footer_left">*/}
                        <img height="35px" src={logo} />
                        <div><a href={tukaWeb}> About</a></div>
                        <div><a href={tukaFAQS}> FAQs</a></div>
                        <div><a href={tukaWeb}> Contact</a></div>
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
