import React from 'react'
import Logo_Img from './homepage/img/tuka.png'
import Login_Img from './homepage/img/logIn.png'
import './Header.css'


import Nav_Catgory from './Nav_Catgory'

class Header extends React.Component {

    state = {input: null, storedInput: []};

    handleChange = e => {
        this.setState({input: e.target.value});
        console.log(this.state);
    };

    handleSubmit = (e) => {
        this.setState(state => {state.input, state.storedInput.push(state.input)});
        e.preventDefault();

        console.log(this.state);
    }

    render() {
        console.log(this.props);
        return (
            <div className="nav_bar">
                <div name="tuka_logo">< img src={Logo_Img} alt="No pict shown" /></div>
                <div style={{width: '40%'}}>
                    <h1 style={{textAlign: "center"}}> CONNECTING THE CREATIVE </h1>
                    <form onSubmit={this.handleSubmit} className='ui form'>
                        <div className='ui icon input' style={{width: '100%'}}>
                            <input onChange={this.handleChange} type="text" placeholder="artist, genre, mood what you are looking for?"/>
                            <i className="search icon"></i> 
                            <button onClick={this.handleSubmit} className="ui icon button" style={{marginLeft: '2%'}}>
                                Search
                            </button>
                        </div>
                    </form>
                    <Nav_Catgory tags={this.state.storedInput}/>

                </div>
                
                <div>
                    <div name="logIn" className="login_btn">
                        <img src={Login_Img} alt="No pict shown" />
                    </div>
                </div>
            </div>
        );
    };


}


export default Header;


