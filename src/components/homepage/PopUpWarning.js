//Pop up when user select over five genres
import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";

class KeyWordsWarning extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            show: false
        }
    }

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

    render() {
     
        return(
            <Modal show = {this.state.show} onHide = {this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Notice</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {this.props.modelBody}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = {this.handleClose}>closer</Button>
                </Modal.Footer>
            </Modal>
        )
       
    }
}
export default KeyWordsWarning;
