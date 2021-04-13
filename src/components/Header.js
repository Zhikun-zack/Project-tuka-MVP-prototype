import React from 'react'
import Logo_Img from './homepage/img/logo.png'
import './Header.css'
import DropdownSign2 from './homepage/Sign2'

import Nav_Catgory from './homepage/Nav_Catgory'
import Search from "./homepage/Search"
import { SearchResult } from 'semantic-ui-react'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: null,
            storedInput: [],
        };
    }
    handleChange = e => {
        this.setState({input: e.target.value});
        console.log(this.state);
    };

    handleSubmit = (e) => {
        this.setState(state => {state.storedInput.push(state.input)});
        e.preventDefault();

        console.log(this.state);
    };

    render() {
        console.log(this.props);
        return (
            <div className="nav_bar">
                <div name="tuka_logo"><img width="200px" src={Logo_Img} alt="Tuka logo" /></div>
                <div style={{width: '40%'}}>
                    <h1 style={{textAlign: "center", color:"#d95457"}}><i> Discover-Share-Connect </i></h1>
                    <Search></Search>
                    <Nav_Catgory tags={this.state.storedInput}/>

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


