import React from 'react';
import './ModalAlert.css';
import { Card, Button, Row, Col, Container, Modal } from 'react-bootstrap';

const ModalAlert = (props) => {

    //const [modal, setModal] = React.useState(false);

    const handleClose = () => {
        props.setModalUp(false);
        window.location.reload();
    };

    return (
        <div className="modal-alert">
            <Modal show={props.modalUp} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>{props.message}</Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="modal-save" variant="primary" onClick={handleClose} >OK!</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalAlert;