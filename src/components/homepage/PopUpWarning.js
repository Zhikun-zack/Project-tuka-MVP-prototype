//Pop up when user select over five genres
import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";

function KeyWordsWarning({modelBody, display}) {
    const [show, setShow] = useState(display)

    const handleClose = () => setShow(false)
    //const handleOpen = () => setShow(true)


        return(
            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Notice</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {modelBody}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = {handleClose}>closer</Button>
                </Modal.Footer>
            </Modal>
        )
}
export default KeyWordsWarning;
