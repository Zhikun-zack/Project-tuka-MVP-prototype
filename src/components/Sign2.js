import React from 'react'
// import {Dropdown,Menu} from 'semantic-ui-react'
import Login_Img from "./homepage/img/profile-icon.png";
import Modal from './Modal';
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
            <div>
                <button onClick={this.showMenu}><img width="50px" src={Login_Img} alt="No pict shown" /></button>
                {
                    this.state.showMenu
                    ?(
                            <div className="menu">
                                <button onClick={this.showWindow} >Sign in</button><br/>
                                {
                                    this.state.showWindow
                                    ?(
                                        <Modal onClose={this.closeWindow}
                                               show={!this.showWindow}/>
                                        ):(null)
                                }
                                <button>Sign up</button>
                            </div>
                        )
                        : (null)
                }

            </div>
    )
    }
}

export default DropdownSign2
