import React from 'react'
// import {Dropdown,Menu} from 'semantic-ui-react'
import Login_Img from "./img/profile-icon.png";
import Menu_Img from "./img/hamburger-icon.png";
import Modal from './Modal';
import { Link } from 'react-router-dom';
import "./Sign2.js.css";

class DropdownSign2 extends React.Component{
    constructor(){
        super();
        this.state = {
            //whether show the menu popup window
            showMenu: false,
            showLogin: false,
            showWindow: false,
            //the target className we clicked
            formerClickedTarget: "",
            showSignUp: false,
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
        //The current className that you click
        const currClassName = event.currentTarget.className;
        //the element's className that you clicked before this click
        const formerClickedClassName = this.state.formerClickedTarget;
        let showMenu = this.state.showMenu;
        let showLogin = this.state.showLogin;
        let showSingUp = this.state.showSignUp;
        //Click same button twice close the popUp window
        switch( currClassName ){
            case "loginImg":
                if(formerClickedClassName === ""){
                    showLogin = true;
                }else if(formerClickedClassName === "loginImg"){
                    showLogin = !showLogin;
                }else if(formerClickedClassName === "menuImg" && showMenu === true){
                    showLogin = true;
                    showMenu = false;
                }
                break;
            case "menuImg":
                if(formerClickedClassName === ""){
                    showMenu = true;
                }else if(formerClickedClassName === "menuImg"){
                    showMenu = !showMenu;
                }else if(formerClickedClassName === "loginImg" && showLogin === true){
                    showLogin = false;
                    showMenu = true;
                }
                break;
        }

        this.setState({
            showMenu : showMenu,
            showLogin: showLogin,
            //showSignUp: showSignUp,
            clickedTarget: currClassName,
        });    
        //stop the action bubble up to document
        event.nativeEvent.stopImmediatePropagation()
        console.log(this.state.showLogin);
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
        let showLoginWindow;
        //add a event listener to detect the click action except img element.
        //when click other place except login and menu tags, close pop up window
        document.addEventListener("click",() => {
            
            this.setState({
                showMenu: false,
                //showLogin: false
            })
        })
        if(this.state.showSignUp === true){
            showLoginWindow = (
                <Modal className = "###" onClick = {this.showMenu}></Modal>
            )
        }

        //if click login tag, shows the logIn popUp window, vice versa
        if(this.state.formerClickedTarget == "loginImg"){
            popUpWindow = (<div className={this.state.showLogin? "popUp logInPopUp": "popUp logInPopUp popUpHide"}>
                                <div className = "popUpLogIn1" onClick = {this.showMenu}>Log In</div>
                                <hr className = "popUpLine"color="#D95457" ></hr>
                                <div className = "popUpLogIn2">Sign Up</div>
                                <hr></hr>
                                
                            </div>);
        }else{
            popUpWindow =  (<div className={this.state.showMenu? "popUp menuPopUp": "popUp menuPopUp popUpHide"}>
                                <div className = "popUpLogIn1">About</div>
                                <hr className = "popUpLine"color="#D95457" ></hr>
                                <div className = "popUpLogIn2">Blog</div>
                                <hr className = "popUpLine"color="#D95457" ></hr>
                                <div className = "popUpLogIn2">FAQs</div>
                                <hr className = "popUpLine"color="#D95457" ></hr>
                                <div className = "popUpLogIn2">Contact</div>
                                <hr className = "popUpLine"color="#D95457" ></hr>
                                <div className = "popUpLogIn2">Terms</div>
                                <hr className = "popUpLine"color="#D95457" ></hr>
                                <div className = "popUpLogIn2">Privacy</div>
                                <hr className = "popUpLine"color="#D95457" ></hr>
                                <div className = "popUpLogIn2">Copyright</div>
                            </div>);
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
                    {showLoginWindow}
                    
                </div>
    )
    }
}

export default DropdownSign2
