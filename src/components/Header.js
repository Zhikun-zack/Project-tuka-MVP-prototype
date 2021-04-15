import React from 'react'
import PropTypes from "prop-types";
import Logo_Img from './homepage/img/logo.png'
import './Header.css'

import DropdownSign2 from './homepage/Sign2'

import Nav_Catgory from './homepage/Nav_Catgory'
import Search from "./homepage/Search"

import { SearchResult } from 'semantic-ui-react'

class Header extends React.Component {


    render() {
        return (
                <div className="nav_bar">
                    <div name="tuka_logo"><img width="200px" src={Logo_Img} alt="Tuka logo" /></div>
                    <div style={{ width: '40%' }}>
                        <h1 style={{ textAlign: "center", color: "#d95457" }}><i> Discover-Share-Connect </i></h1>
                        <Search 
                        suggestions={[
                            "Alternative Pop",
                            "Alternative Rock",
                            "Blues",
                            "Brazilian",
                            "Classic Pop",
                            "Classic Rock",
                            "Classical",
                            "Country",
                            "Dance",
                            "Electronic",
                            "Folk",
                            "Gospel",
                            "HipHop",
                            "Jazz",
                            "Latin",
                            "Metal",
                            "Modern Pop",
                            "Pop Rock",
                            "Reggae",
                            "RnB",
                            "Spoken"
                        ]}></Search>
                    </div>

                    <div>
                        <div name="logIn" className="login_btn">
                            {/*<img width="50px" src={Login_Img} alt="No pict shown" />*/}
                            <DropdownSign2 />
                        </div>
                    </div>
                </div>
            
        );
    };


}


export default Header;


