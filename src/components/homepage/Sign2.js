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
            //whether show the menu popup window
            showMenu: false,
            showWindow: false,
            //the target className we clicked
            clickedTarget: "",
        }

        this.showMenu = this.showMenu.bind(this);
        this.showWindow = this.showWindow.bind(this);
        this.closeWindow = this.closeWindow.bind(this);

        
    }
    //for singup and menu buttons on the top right
    /*
    When click on one button, its popup window appears
    Click on one button, not close its window, then click on another one, close the first opened window and open the window of the clicked button
    Click on one button and close its window, then click on another one, open the clicked button's window
    */
    showMenu = (event) => {
        const currClassName = event.currentTarget.className;
        const clickedTarget = this.state.clickedTarget;
        let menu = this.state.showMenu;
        if((clickedTarget == "")||(clickedTarget != "" && currClassName == clickedTarget)||(clickedTarget != "" && currClassName != clickedTarget && menu == false)){
            menu = !menu;
        }
        this.setState({
            showMenu : menu,
            clickedTarget: currClassName,
        });    
        //stop the action bubble up to document
        event.nativeEvent.stopImmediatePropagation()
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
        let popUpWindow;
        //add a event listener to detect the click action except img element.
        //when click other place except login and menu tags, close pop up window
        document.addEventListener("click",() => {
            this.setState({
                showMenu: false,
            })
        })

        //if click login tag, shows the logIn popUp window, vice versa
        if(this.state.clickedTarget == "loginImg"){
            popUpWindow = (<div className={this.state.showMenu? "popUp logInPopUp": "popUp logInPopUp popUpHide"}></div>);
        }else{
            popUpWindow =  (<div className={this.state.showMenu? "popUp menuPopUp": "popUp menuPopUp popUpHide"}></div>);
        }

        return(
                <div className="logindiv" >
                    <a className="login">
                        <img className="loginImg" src={Login_Img} alt="loginbutton" onClick={this.showMenu}></img>
                    </a>
                    
                                
                                {/* <div className = {this.state.showMenu? "logInPopUpSqure": "logInPopUp logInPopUpSqureHide"}> */}
                                    {/* <button onClick={this.showWindow} >Sign in</button><br />
                                    {
                                        this.state.showWindow
                                            ? (
                                                <Modal onClose={this.closeWindow}
                                                    show={!this.showWindow} />
                                            ) : (null)
                                    }
                                    <button>Sign up</button> */}
                                {/* </div> */}
                                
                            
                    
                    <a className="menu">
                        <img className="menuImg" src={Menu_Img} onClick={this.showMenu}></img>
                    </a>
                    {
                        popUpWindow
                    }
                    
                    
                </div>
    )
    }
}

export default DropdownSign2
