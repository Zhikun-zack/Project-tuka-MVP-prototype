import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Logo_Img from './homepage/img/logo.png'
import './Header.css'

import DropdownSign2 from './homepage/Sign2'

import Nav_Catgory from './homepage/Nav_Catgory'
import Search from "./homepage/Search"

import { SearchResult } from 'semantic-ui-react'

class Header extends React.Component {
    state = {
        value : [],
    }
    transportValue = (childValue) => {
        this.setState({
            value: childValue,
        })
    }
    handleClick = () => {
        console.log("in header.js" + this.state.value);
        this.props.header(this.state.value);
    }

    render() {
        console.log("in header.js render" + this.state.value);
        return (
                <div className="nav_bar">
                    <div className = "nav_logo" name="tuka_logo"><Link to = "/" ><img src={Logo_Img} alt="Tuka logo" /></Link></div>
                    <div style={{ width: '40%' }}>
                        <h1 className="navbar__linklist" > Discover • Share • Connect</h1>
                        <Search 
                        tValue = {(childValue) => this.transportValue(childValue)}
                        suggestions={[
                            'Rock',
                            'Hip-Hop / Rap',
                            'Pop',
                            'Country',
                            'Latin',
                            'Jazz',
                            'Classical',
                            'classic rock',
                            'blues',
                            '80s',
                            'alternative',
                            'C&W',
                            'crossover',
                            'dance',
                            'disco',
                            'doowop',
                            'folk',
                            'funk',
                            'fusion',
                            'grunge',
                            'holiday',
                            'indie',
                            'instrumental',
                            'motown',
                            'newwave',
                            'punk',
                            'r&b',
                            'ragtime',
                            'rap',
                            'reggae',
                            'soul',
                            'techno',
                            'vocal',
                            'world',
                            'electric',
                            'acoustic',
                            'baroque',
                            'bebop',
                            'bluegrass',
                            'bossanova',
                            'cajun',
                            'Chicago',
                            'delta',
                            'electronic',
                            'fingerstyle',
                            'guitar',
                            'hard bop',
                            'indie',
                            'keyboard',
                            'piano',
                            'Mississippi',
                            'modern',
                            'NewOrleans',
                            'saxophone',
                            'trumpet',
                            'renaissance',
                            'romantic',
                            'slideguitar',
                            'smooth',
                            'southern rock',
                            'Texas',
                        ]}
                        onChange = {this.handleClick}></Search>
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


