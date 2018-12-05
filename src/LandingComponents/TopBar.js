import React from 'react';
import './TopBar.css';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid top-bar">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row logo">
                                <div className="col-md-3">
                                    Tuka
                                </div>
                                <div className="col-md-9">
                                    <center><i>CREATE - SHARE - CONNECT</i></center>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 user-options">
                                <u>Login</u>
                                <u>Sign Up</u>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TopBar;