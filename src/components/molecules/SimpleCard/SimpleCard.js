import { Card, Button, Row, Col, Container, Modal } from 'react-bootstrap';
import React from 'react';
import './SimpleCardStyle.css';
import axios from "axios";
const baseURL = "http://127.0.0.1:3000/api/pokemons/";


const SimpleCard = (props) => {


  const [postP, setPostP] = React.useState({
    owner: "me",
    info: {
      "title": ``,
      "img" : ``,
      "weight": ``,
      "height": ``,
    }
  });
  const [modal, setModal] =  React.useState(false);

 




  const createPost = (event) => {

 
    axios
      .post(baseURL, {
        owner: "me",
        info: {
          "title": props.title,
          "img" : props.img,
          "weight": props.weight,
          "height": props.height,
        }
      })
      .then((response) => {
        setPostP(response.data);
        if (response.status === 200) {
          setModal(true);
          setPostP(response.data);
        }
      });
  }

  const handleClose = () => setModal(false);


  return (
    <div>
      <Container>
      <div>
        <div className='pokedex' style={{ backgroundImage: "url('images/pokedex-1.png')" }}>
          <div className="poke-info">
            <div className='title'>
              <img src={props.img}></img>
              <p>{props.title}</p>
            </div>
            <div className='wh'>
              <p>Weigh: {props.weight}</p>
              <p>Height {props.height}</p>
            </div>
          </div>
        </div>
        <div>
          <Button onClick={createPost} variant="primary">Favorite?</Button>
        </div>
        
        </div>

         <Modal show={modal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Congratulations!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>A new pokemon has ben added to your favorites!</p>
            <p>{postP.info.title}</p>
            <img src={postP.info.img}></img>
            <p>Weight: {postP.info.weight}</p>
            <p>Height: {postP.info.height}</p>
          </Modal.Body>
        </Modal>
        </Container>
    </div>
  );
}


export default SimpleCard;