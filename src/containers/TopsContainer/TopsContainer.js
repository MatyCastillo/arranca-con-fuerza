import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from "../../components/CardList/CardList";

export default function TopsContainer() {
  const [topsData, setTopsData] = useState([]);

  useEffect(() => {
    fetch("./db/dbOne.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setTopsData(data))
  }, []);

  return (
    <Container>
      <CardList data={topsData} />
    </Container>
  )
}