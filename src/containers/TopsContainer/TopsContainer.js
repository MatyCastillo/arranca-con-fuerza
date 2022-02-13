import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from "../../components/CardList/CardList";

export default function TopsContainer() {
  const [topsData, setTopsData] = useState([]);
  const BannerShorts = "./img/Banner-short.png";
  const BannerTops = "./img/Banner-tops.png";

  useEffect(() => {
    fetch("./db/dbTops.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setTopsData(data))
  }, []);

  return (
    <>
      <Image src={BannerTops} alt="Banner Tops" fluid="true" style={{ width: "100%" }} />
      <Container className="my-4">
        <CardList data={topsData} />
      </Container>
      <Link to={"/shorts-calzas"} >
        <Image src={BannerShorts} alt="Banner Shorts" fluid="true" style={{ width: "100%" }} />
      </Link>
    </>
  )
}