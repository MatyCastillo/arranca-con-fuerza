import React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import CardHome from "../../components/CardHome/CardHome";
import { Container, Image, Row, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const Shorts = "/img/Card-Shorts.png";
  const Tops = "/img/Card-Tops.png";
  const Nosotros = "/img/Nosotros.png";
  const Pagos = "/img/info-pagos-envios.png";
  const TelaDry = "/img/Banner-tela-dry.png";
  const TelaSuplex = "/img/Banner-tela-Suplex.png";
  const InfoDry = "/img/Tela-Dry-Info.png";
  const InfoSuplex = "/img/Tela-Suplex-Info.png";

  return (
    <div>
      <HomeCarousel />
      <Container className="mt-4 mb-4">
        <Row xs={2} className="g-4">
          <CardHome picture={Tops} link={"/tops-crops"} />
          <CardHome picture={Shorts} link={"/shorts-calzas"} />
        </Row>
      </Container>
      <Carousel indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={TelaDry} alt="Imagen Tela Dry" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={InfoDry} alt="Info Tela Dry" />
        </Carousel.Item>
      </Carousel>
      <Carousel indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={TelaSuplex}
            alt="Imagen Tela Suplex"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={InfoSuplex}
            alt="Info Tela Suplex"
          />
        </Carousel.Item>
      </Carousel>
      <Image
        src={Nosotros}
        alt="Sobre Nosotros"
        fluid="true"
        style={{ width: "100%" }}
      />
      <Image
        src={Pagos}
        alt="Formas de Pago"
        fluid="true"
        style={{ width: "100%" }}
      />
    </div>
  );
}
