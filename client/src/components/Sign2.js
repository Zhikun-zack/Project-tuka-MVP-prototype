import React from 'react'
import {Button} from 'reactstrap';

import Login_Img from "./homepage/img/profile-icon.png";
import Modal from './Modal';
import Modal2 from './Modal2';
import { Link } from 'react-router-dom';

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
            showWindow2: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.showWindow = this.showWindow.bind(this);
        this.closeWindow = this.closeWindow.bind(this);
        this.showWindow2 = this.showWindow2.bind(this);
        this.closeWindow2 = this.closeWindow2.bind(this);
    }
    showMenu(event){
        event.preventDefault();
        this.setState({
            showMenu : true,
        },() => {
            document.addEventListener('click',this.closeMenu);
        });
    }
    closeMenu(event){
        if(!this.dropdownMenu.contains(event.target)){
            this.setState({showMenu:false},() => {
                document.removeEventListener('click',this.closeMenu);
            });
        }

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
    showWindow2(event){
        event.preventDefault();
        this.setState({
            showWindow2 : true,
        });
    }
    closeWindow2(event){
        event.preventDefault();
        this.setState({
            showWindow2 : false,
        });
    }
    render() {
        return(
            <div>
                <button onClick={this.showMenu}><img width="50px" src={Login_Img} alt="No pict shown" /></button>
                {
                    this.state.showMenu
                    ?(
                            <div className="menu"
                            ref={(element) =>{
                                this.dropdownMenu = element;
                            }}>
                                <Button className="SignBtn" color="danger" onClick={this.showWindow} >Sign in&nbsp;</Button><br/>
                                {
                                    this.state.showWindow
                                    ?(
                                        <Modal onClose={this.closeWindow}
                                               show={!this.showWindow}/>
                                        ):(null)
                                }
                                <Button className="SignBtn" color="danger" onClick={this.showWindow2} >Sign up</Button>
                                {
                                    this.state.showWindow2
                                        ?(
                                            <Modal2 onClose={this.closeWindow2}
                                                   show={!this.showWindow2}/>
                                        ):(null)
                                }
                            </div>
                        )
                        : (null)
                }

            </div>
    )
    }
}

export default DropdownSign2
