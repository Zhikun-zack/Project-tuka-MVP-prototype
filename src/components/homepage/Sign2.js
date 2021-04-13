import React from 'react'
// import {Dropdown,Menu} from 'semantic-ui-react'
import Login_Img from "./img/profile-icon.png";
import Menu_Img from "./img/hamburger-icon.png";
import Modal from './Modal';
import { Link } from 'react-router-dom';
import "./Sign2.js.css";

const options = [
    { key: 1, text: 'Sign in', as: Link},
    { key: 2, text: 'Sign up', as: Link},
];

const optionsIn = [
    { key: 3, text: 'Profile', as: Link, to: '/Profile'},
    { key: 4, text: 'Log out', as: Link, to: '/Log_out'},
]


class DropdownSign2 extends React.Component{
    constructor(){
        super();
        this.state = {
            showMenu: false,
            showWindow: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.showWindow = this.showWindow.bind(this);
        this.closeWindow = this.closeWindow.bind(this);
    }
    showMenu(event){
        event.preventDefault();
        this.setState({
            showMenu : true,
        });
    }
    showWindow(event){
        event.preventDefault();
        this.setState({
            showWindow : true,
        });
    }
    closeWindow(event){
        event.preventDefault();
        this.setState({
            showWindow : false,
        });
    }

    render() {
        return(
                <div className="logindiv" >
                    <a className="login">
                        <img className="loginImg" src={Login_Img} alt="loginbutton" onClick={this.showMenu}></img>
                    </a>
                    {
                        this.state.showMenu
                            ? (
                                <div className="menu">
                                    <button onClick={this.showWindow} >Sign in</button><br />
                                    {
                                        this.state.showWindow
                                            ? (
                                                <Modal onClose={this.closeWindow}
                                                    show={!this.showWindow} />
                                            ) : (null)
                                    }
                                    <button>Sign up</button>
                                </div>
                            )
                            : (null)
                    }
                    <a className="menu">
                        <img className="menuImg" src={Menu_Img}></img>
                    </a>
                </div>
    )
    }
}

export default DropdownSign2
