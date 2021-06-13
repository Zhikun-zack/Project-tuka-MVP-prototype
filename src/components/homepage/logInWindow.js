import React from 'react';
import Recaptcha from 'react-recaptcha';
import {Form, FormGroup, Input, Label, Button,Table, Alert, FormFeedback} from 'reactstrap';
import axios from 'axios';

import SignUp from "./Model";
import AuthService from "../../services/auth.service";
//import { Alert } from 'bootstrap';

const backdropStyle = {
    position:'fixed',
    zIndex:90,
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:'rgba(0,0,0,0.3)',
    padding:50,
};

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius:5,
    maxWidth:500,
    minHeight:600,
    margin:'0 auto',
    padding: 30,
    position: 'relative'
};

const headerStyle = {
    position:'absolute',
    top: 20,
    right:20,
};

const contentStyle = {
    position:'absolute',
    margin:'5% 5%'
}

const verifyEmail = status => {
    if(status === 400){
        return(
            <Alert color = "warning">
                This email has already been registered!
            </Alert>
        )
    }
}


export default  class LogInWin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isVerified:false,
            Email:'',
            ConfirmEmail:'',
            Password:'',
            ConfirmPassword:'',
            show: false,
            //Whether request is successful
            successful: false,
            //message for response data
            message: "",
            //for storing status
            error: 200
        };
        this.openSingUp = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);

        
    }

    //Click close button and set false back to the Sign2.js state
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleOpen = () => {
        this.setState({
            show: true
        })
    }
    onClick = () => {
        console.log(this.openSingUp.current)
        this.openSingUp.current.handleOpen();
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit(e){
        e.preventDefault()
        AuthService.logIn(
            "Zack3",
            "password"
        ).catch(err => {
            console.log(err.response)
            this.setState({
                error: err.response.status
            })
        })
    }

    recaptchaLoaded(){
        console.log("capcha loaded");
    }

    verifyCallback(response){
        if(response){
            this.setState({
                isVerified:true
            })
        }
    }

    render() {
        //if show value sent from Sign2.js is false, return nothing
        if(!this.state.show){
            return null;
        }
        let email

            if(this.state.error == 200){
                email = (
                    <FormGroup>
                                <Label for="Email" />
                                <Input
                                    type="email"
                                    name="Email"
                                    onChange={this.handleChange}
                                    placeholder="Email"/>
                            </FormGroup>  
                )
                    
            }else if (this.state.error === 404){
                console.log(400)
                email = (
                    <FormGroup>
                                <Label for="Email" />


                                <Input
                        invalid
                        type="email"
                        name="Email"
                        onChange={this.handleChange}
                        placeholder="Email"/>
                    <FormFeedback>Please input correct email</FormFeedback>
                            </FormGroup>  
                    
                )
            }else{
                email = (
                    <FormGroup>
                                <Label for="Email" />


                                <Input
                        invalid
                        type="email"
                        name="Email"
                        onChange={this.handleChange}
                        placeholder="Email"/>
                    <FormFeedback>Please input correct password</FormFeedback>
                            </FormGroup>  
                )
            }
        



        //if show is true, render the signUp window
        return (
            <div style={backdropStyle}>
                <div style={modalStyle}>
                    <div style={headerStyle}>
                        {/* When click this button, change the Sign2.js's state */}
                        <button onClick={ this.handleClose}>
                           X
                        </button>
                    </div>
                    <div style={contentStyle}>
                        <div style={{textAlign:'center',fontSize:'large'}}>
                            <b>Log In</b>
                        </div>
                        <Form onSubmit={this.handleSubmit}>
                            {email}
                            <FormGroup>
                                <Label for="Password" />
                                <Input
                                    type="password"
                                    name="Password"
                                    //pattern={{value: '^[A-Za-z0-9]{8}+$'}}
                                    onChange={this.handleChange}
                                    placeholder="Password(8 characters minimum)"/></FormGroup>
                            <Table className="Table1">
                                <tr className="tr1">
                                <th className="th1">
                                   
                                </th>
                            <th className="th2"><Button size="lg" color="danger">Sign Up</Button></th>
                                </tr></Table>
                            <div>By Signing up, you agree to our <a style={{color:'blue'}}>Term of Use</a> and
                                <a style={{color:'blue'}}> Privacy Policy</a></div>
                            <div style={{height:'1px',width:'100%',margin:'10px',backgroundColor:'grey',marginLeft:'-10px'}} />
                            <div style={{textAlign:'center',fontSize:'large'}}>Create account<a onClick = {this.onClick()} style={{color:'blue'}}>Sign Up</a></div>
                        </Form>
                        
                    </div>
                </div>
                <SignUp ref = {this.openSingUp}></SignUp>
            </div>
        )
    }
}
