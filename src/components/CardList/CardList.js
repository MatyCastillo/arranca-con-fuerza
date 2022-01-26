import React from 'react';
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProd from "../CardProd/CardProd";

export default function CardList({ data }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {
        data.map((data) => {
          return (
            <CardProd key={Math.random().toString(36).substr(2, 9)} data={data} />
          )
        })
      }
    </Row>
  );
}
