import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import React from 'react';
import './SimpleCardStyle.css'

const SimpleCard = ({ title, img,weight,height }) => {

  return (
    <div>
      <Container>
        <Card>
          <Card.Img src={img} />
          <Card.Body >
            <Card.Title>{title}</Card.Title>
            <Row>
              <Col md={10} >
                <Card.Text>
                { weight ? `Weight: ${weight}` : ''}
                <br/>
                { height ? `Height: ${height}` : ''}
                </Card.Text>
              </Col>
              <Col md={1}>
                <Button   target="_blank" variant="primary">LINK</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default SimpleCard;