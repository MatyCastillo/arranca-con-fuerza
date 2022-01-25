import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function Home() {
  const whatsAppLink = "https://wa.me/5491144979179?text=Hola!%20Me%20interesa%20obtener%20más%20información%20sobre"
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <a href={whatsAppLink} rel="noopener noreferrer" target="_blank">
            <img
              className="d-block w-100"
              src="./img/Banner-central.png"
              alt="First slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={"/tops-crops"} >
            <img
              className="d-block w-100"
              src="./img/producto-estrella-crop.png"
              alt="Second slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={"/shorts-calzas"} >
            <img
              className="d-block w-100"
              src="./img/producto-estrella-calzas.png"
              alt="Third slide"
            />
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
