import { Card, Button, Row, Col, Container, Modal } from 'react-bootstrap';
import React from 'react';
import './FavoriteCard.css';
import axios from 'axios';
import ModalAlert from '../../molecules/ModalAlert/ModalAlert';
const baseURL = "http://127.0.0.1:3000/api/mypokemons/";



const FavoriteCard = (props) => {

  
  const [modal, setModal] = React.useState(false);
  const [modalDel, setModalDel] = React.useState(false);
  const [modalUp, setModalUp] = React.useState(false);
  const [weight, setWeight] = React.useState({ weight: '' });
  const [height, setHeight] = React.useState({ height: '' });
  const handleClose = () => {
    setModal(false);
    setModalDel(false)
  };

  const deletePost = (event) => {


    setModalDel(true);
    /**/
  }

  const finalDelete = event => {
    axios
      .delete(baseURL + props.item.info.title, { params: { "owner": "me" } })
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
        }
      });
  }

  const updatePOst = event => {
    event.preventDefault();
    var weight = event.target[0].value !== null ? event.target[0].value : props.item.info.weight; 
    var height = event.target[1].value !== null ? event.target[1].value : props.item.info.height; 

    const item = { owner: "me", weight: weight, height: height };
    axios
      .put(baseURL + props.item.info.title, { item }, {
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        }
      })
      .then((response) => {

        if (response.status === 200) {
          setModal(false);
          setModalUp(true);
        }
      });
  }

  const updatePost = (event) => {
    setModal(true);
  }



  const handleChange = (event) => {
    console.log(event.target);
    console.log(event.target);

  }

  return (
    <div>
      <Card>
        <div className='close'>
          <Button onClick={deletePost} variant="secondary">X</Button>
        </div>
        <Card.Img src={props.item.info.img} />
        <Card.Body >
          <Card.Title>{props.item.info.title}</Card.Title>
          <Row>
            <Col md={12}>
              <Card.Text>
                Weight: {props.item.info.weight}
                <br />
                Height: {props.item.info.height}
              </Card.Text>
            </Col>
            <Col>
              <Button className="edit" variant="secondary"
                onClick={updatePost}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg></Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Info of {props.item.info.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={updatePOst}>
            New Weight: <input type="text" name="weight" onChange={handleChange} />
            New Height: <input type="text" name="height" onChange={handleChange} />
            <button className="modal-save" variant="primary" type="submit" >Save</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
      <Modal show={modalDel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sure of delete this pokémon?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row> {props.item.info.title}</Row>
          <Row>Weight: {props.item.info.weight}</Row>
          <Row>Height: {props.item.info.height}</Row>
        </Modal.Body>
        <Modal.Footer>

          <Button className="modal-save" variant="primary" onClick={finalDelete}>OK!</Button>
          <Button className="modal-save" variant="secondary" onClick={handleClose}>No thanks</Button>
        </Modal.Footer>
      </Modal>

      <ModalAlert modalUp={modalUp} setModalUp={setModalUp} title="Pókemon Updated Correctly" message="Thank you!"></ModalAlert>
    </div>
  );
}


export default FavoriteCard;