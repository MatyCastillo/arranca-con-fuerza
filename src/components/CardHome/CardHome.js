import React from 'react';
import { Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function CardHome({ picture, link }) {
  return (
    <Col>
      <Link to={link} >
        <Card>
          <Card.Img variant="top" src={picture} className='rounded fluid' />
        </Card>
      </Link>
    </Col>
  );
}
