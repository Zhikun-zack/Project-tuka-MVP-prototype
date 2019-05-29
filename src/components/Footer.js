import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render() {
        return (
            <div className="footer_content">
                <div className="footer_left">
                    <div> HomePage</div>
                    <div> FAQ</div>
                    <div> Terms of Service</div>
                    <div> Copyright&Licensing</div>
                    <div> Privacy</div>
                </div>

                <div>
                    2019 &copy; tukaglobal
                </div>

            </div>
        );
    }
}


export default Footer;