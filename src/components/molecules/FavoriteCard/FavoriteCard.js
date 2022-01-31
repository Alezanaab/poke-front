import { Card, Button, Row, Col, Container, Modal } from 'react-bootstrap';
import React from 'react';
import './FavoriteCard.css';


const FavoriteCard = (props) => {

  console.log(props.item);

    return (
      <div>
          <Card md={4}>
            <Card.Img src={props.item.info.img} />
            <Card.Body >
              <Card.Title>{props.item.info.title}</Card.Title>
              <Row>
                <Col md={10} >
                  <Card.Text>
                    Weight: {props.item.info.weight}
                    <br />
                    Height: {props.item.info.height}
                  </Card.Text>
                </Col>
                <Col md={1}>
                  <Button variant="primary">Remove?</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
      </div>
    );
  }


  export default FavoriteCard;