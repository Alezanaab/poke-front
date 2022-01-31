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

  console.log('postP',postP);
  console.log('props',props);

  


  const createPost = (event) => {

    console.log('props',props);
    console.log('oknya', event);
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
          console.log('resp', response.data);
          setPostP(response.data);
          if (response.status === '200') {
            setModal(true);
            setPostP(response.data);
          }
        });
    }

    const handleClose = () => setModal(false);


    return (
      <div>
        <Container>
          <Card>
            <Card.Img src={props.img} />
            <Card.Body >
              <Card.Title>{props.title}</Card.Title>
              <Row>
                <Col md={10} >
                  <Card.Text>
                    {props.weight ? `Weight: ${props.weight}` : ''}
                    <br />
                    {props.height ? `Height: ${props.height}` : ''}
                  </Card.Text>
                </Col>
                <Col md={1}>
                  <Button onClick={createPost} variant="primary">Favorite?</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Modal show={modal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Added to your favs!</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>{postP.owner}</p>
                <p>{postP.info.title}</p>
                <p>{postP.info.img}</p>
                <p>{postP.info.weight}</p>
                <p>{postP.info.height}</p>
              </Modal.Body>
            </Modal>
        </Container>
      </div>
    );
  }


  export default SimpleCard;