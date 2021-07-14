import React from 'react';
import { withRouter  } from 'react-router-dom';
import Recaptcha from 'react-recaptcha';
import {Form, FormGroup, Input, Label, Button,Table, Alert, FormFeedback} from 'reactstrap';
import axios from 'axios';

import SignUp from "./Model";
import AuthService from "../../services/auth.service";
import "./logIn.css";
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

//wrap withrouter and ref, so that component will invoke both router attribute and ref
const withRouterAndRef = (WrappedComponent) => {
    //append ref
    class InnerComponentWithRef extends React.Component{
        render() {
            const{ forwardRef, ...rest } = this.props;
            return <WrappedComponent {...rest} ref = {forwardRef}></WrappedComponent>
        }
    }
    //wrap original component using withrouter
    const ComponentWithRouter = withRouter(InnerComponentWithRef, { withRef: true });
    return React.forwardRef((props,ref) => {
        return <ComponentWithRouter {...props} forwardRef={ref}></ComponentWithRouter>
    });
}

class LogInWin extends React.Component{
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
        });
        console.log(this.openSingUp.current)
        if(this.openSingUp && this.openSingUp.current.state.show){
            this.openSingUp.current.handleClose();
        }
        console.log(this.openSingUp.current.state.show)
    }
    handleOpen = () => {
        this.setState({
            show: true
        })
    }
    onClick = () => {
        
        this.openSingUp.current.handleOpen();
        
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        if(e.target.value === ''){
            this.setState({
                error: 200
            })
        }
    };

    handleSubmit(e){
        e.preventDefault()
        AuthService.logIn(
            this.state.Email,
            this.state.Password
        ).then(
            () => {
                this.props.history.push("/details");
                window.location.reload();
            },
            error => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
      
                this.setState({
                  loading: false,
                  message: resMessage,
                  error: error.response.status
                });
              }
            );

            
            
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
        let email;
        let password;

        //success or not input
        if (this.state.error == 200) {
            email = (
                <FormGroup>
                    <Label for="Email" />
                    <Input
                        type="email"
                        name="Email"
                        onChange={this.handleChange}
                        placeholder="Email" />
                </FormGroup>
            )
            password = (
                <FormGroup>
                    <Label for="Password" />
                    <Input
                        type="password"
                        name="Password"
                        //pattern={{value: '^[A-Za-z0-9]{8}+$'}}
                        onChange={this.handleChange}
                        placeholder="Password(8 characters minimum)" /></FormGroup>
            )
        }
        //wrong email
        else if (this.state.error === 404) {
            console.log(400)
            email = (
                <FormGroup>
                    <Label for="Email" />


                    <Input
                        invalid
                        type="email"
                        name="Email"
                        onChange={this.handleChange}
                        placeholder="Email" />
                    <FormFeedback>User Email is not found</FormFeedback>
                </FormGroup>
            )
            password = (
                <FormGroup>
                    <Label for="Password" />
                    <Input
                        type="password"
                        name="Password"
                        //pattern={{value: '^[A-Za-z0-9]{8}+$'}}
                        onChange={this.handleChange}
                        placeholder="Password(8 characters minimum)" /></FormGroup>
            )
        }
        //wrong password 
        else {
            console.log(this.state.error)
            email = (
                <FormGroup>
                    <Label for="Email" />
                    <Input
                        type="email"
                        name="Email"
                        onChange={this.handleChange}
                        placeholder="Email" />
                </FormGroup>
            )
            password = (
                <FormGroup>
                    <Label for="Password" />
                    <Input
                        invalid
                        type="Password"
                        name="Password"
                        onChange={this.handleChange}
                        placeholder="Password(8 characters minimum)" />
                    <FormFeedback>Please input correct password</FormFeedback>
                </FormGroup>
            )
        }




        //if show is true, render the signUp window
        return (
            <div style={backdropStyle} >
                <div style={modalStyle}>
                    <div style={headerStyle}>
                        {/* When click this button, change the Sign2.js's state */}
                        <button onClick={ this.handleClose}>
                           X
                        </button>
                    </div>
                    <div style={contentStyle}>
                        <div className = "logInHeader" style={{textAlign:'center',fontSize:'large'}}>
                            <b>Log In</b>
                        </div>
                        <Form onSubmit={this.handleSubmit}>
                            {email}
                            {password}
                            <Table className="Table1">
                                <tr className="tr1">
                                <th className="th1">
                                   
                                </th>
                            <th className="th2"><Button size="lg" color="danger">Sign Up</Button></th>
                                </tr></Table>
                            <div>By Signing up, you agree to our <a style={{color:'blue'}}>Term of Use</a> and
                                <a style={{color:'blue'}}> Privacy Policy</a></div>
                            <div style={{height:'1px',width:'100%',margin:'10px',backgroundColor:'grey',marginLeft:'-10px'}} />
                            <div style={{textAlign:'center',fontSize:'large'}}>Create a new account:  <a onClick = {this.onClick} style={{color:'blue'}}>Sign Up</a></div>
                        </Form>
                        
                    </div>
                </div>
                <SignUp ref = {this.openSingUp}></SignUp>
            </div>
        )
    }
}
// export default withRouter(LogInWin, {withRef: true});
export default withRouterAndRef(LogInWin);