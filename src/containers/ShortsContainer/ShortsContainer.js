import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from "../../components/CardList/CardList";

export default function ShortsContainer() {
  const [shortsData, setShortsData] = useState([]);
  const BannerShorts = "./img/Banner-short.png";
  const BannerTops = "./img/Banner-tops.png";

  useEffect(() => {
    fetch("./db/dbShorts.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setShortsData(data))
  }, []);

  return (
    <>
      <Image src={BannerShorts} alt="Banner Shorts" fluid="true" style={{ width: "100%" }} />
      <Container className="my-4">
        <CardList data={shortsData} />
      </Container>
      <Link to={"/tops-crops"} >
        <Image src={BannerTops} alt="Banner Tops" fluid="true" style={{ width: "100%" }} />
      </Link>
    </>
  )
}