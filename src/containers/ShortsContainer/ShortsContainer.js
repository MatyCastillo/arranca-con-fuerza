import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from "../../components/CardList/CardList";

export default function ShortsContainer() {
  const [shortsData, setShortsData] = useState([]);

  useEffect(() => {
    fetch("./db/dbTwo.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setShortsData(data))
  }, []);

  return (
    <Container>
      <CardList data={shortsData} />
    </Container>
  )
}