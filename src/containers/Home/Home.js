import React from 'react';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import CardHome from '../../components/CardHome/CardHome';
import { Container, Image, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const Calzas = "./img/CardHomeSeccionShorts.png";
  const Crop = "./img/CardHomeSeccionTops.png";
  const Nosotros = "./img/nosotros-temp.png";
  const Pagos = "./img/info-pagos-envios.png";
  const TelaDry = "./img/Banner-tela-dry.png";
  const TelaSuplex = "./img/Banner-tela-Suplex.png";

  return (
    <div>
      <HomeCarousel />
      <Container className="mt-4 mb-4">
        <Row xs={2} className="g-4">
          <CardHome picture={Crop} link={"/tops-crops"} />
          <CardHome picture={Calzas} link={"/shorts-calzas"} />
        </Row>
      </Container>
      <Image src={TelaDry} alt="Tela Dry" fluid="true" style={{width: "100%"}} />
      <Image src={TelaSuplex} alt="Tela Suplex" fluid="true" style={{width: "100%"}}/>
      {/* Falta:
        Nombre en las cards productos estrella
        Clickeable en info telas para mostrar detalle como un collapse horizontal
      */}

      <Image src={Nosotros} alt="Sobre Nosotros" fluid="true" style={{width: "100%"}}/>
      <Image src={Pagos} alt="Formas de Pago" fluid="true" style={{width: "100%"}}/>
    </div>
  );
}
