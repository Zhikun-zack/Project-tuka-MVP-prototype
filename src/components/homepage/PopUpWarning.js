//Pop up when user select over five genres
import React from "react";
import {Modal, Button} from "react-bootstrap";

class KeyWordsWarning extends React.Component{
    constructor(){
        super();

        this.state = {
            //whether the pop up window shows
            show: true
        };
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

    render(){
        return(
            <Modal show = {this.state.show} onHide = {this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    WWWWWWWWWWWWWWWWW
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = {this.handleClose}>closer</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default KeyWordsWarning;