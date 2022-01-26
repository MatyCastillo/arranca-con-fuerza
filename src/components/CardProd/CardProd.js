import React from 'react';
import { Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardProd({data}) {
  return (
    <Col>
    <Card>
      <Card.Img variant="top" src="https://picsum.photos/160/100" />
      <Card.Body>
        <Card.Title>{data.nombre}</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  );
}
