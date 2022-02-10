import React, { useState } from 'react';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import CardHome from '../../components/CardHome/CardHome';
import { Container, Image, Row, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const Shorts = "./img/Card-Shorts.png";
  const Tops = "./img/Card-Tops.png";
  const Nosotros = "./img/nosotros-temp.png";
  const Pagos = "./img/info-pagos-envios.png";
  const TelaDry = "./img/Banner-tela-dry.png";
  const TelaSuplex = "./img/Banner-tela-Suplex.png";
  const InfoDry = "./img/Tela-Dry-Info.png";
  const InfoSuplex = "./img/Tela-Suplex-Info.png";

  const [toggleTelaOne, setToggleTelaOne] = useState(true);
  const [toggleTelaTwo, setToggleTelaTwo] = useState(true);

  const changeImageOne = () => {
    setToggleTelaOne(!toggleTelaOne);
  }

  const changeImageTwo = () => {
    setToggleTelaTwo(!toggleTelaTwo);
  }

  return (
    <div>
      <HomeCarousel />
      <Container className="mt-4 mb-4">
        <Row xs={2} className="g-4">
          <CardHome picture={Tops} link={"/tops-crops"} />
          <CardHome picture={Shorts} link={"/shorts-calzas"} />
        </Row>
      </Container>
      <div>
        {toggleTelaOne ?
          <Image src={TelaDry} alt="Imagen Tela Dry" fluid="true" style={{ width: "100%" }} onClick={changeImageOne} />
          :
          <Image src={InfoDry} alt="Info Tela Dry" fluid="true" style={{ width: "100%" }} onClick={changeImageOne} />
        }
      </div>
      <div>
        {toggleTelaTwo ?
          <Image src={TelaSuplex} alt="Imagen Tela Suplex" fluid="true" style={{ width: "100%" }} onClick={changeImageTwo} />
          :
          <Image src={InfoSuplex} alt="Info Tela Suplex" fluid="true" style={{ width: "100%" }} onClick={changeImageTwo} />
        }
      </div>
      <hr />

      <Carousel indicators={false} >
        <Carousel.Item>
          <img className="d-block w-100" src={TelaDry} alt="Imagen Tela Dry" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={InfoDry} alt="Info Tela Dry" />
        </Carousel.Item>
      </Carousel>
      <Carousel indicators={false} >
        <Carousel.Item>
          <img className="d-block w-100" src={TelaSuplex} alt="Imagen Tela Suplex" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={InfoSuplex} alt="Info Tela Suplex" />
        </Carousel.Item>
      </Carousel>
      
      {/* Falta:
        Reemplazar "Sobre Nosotros" cuando tengamos la imagen correcta.
      */}

      <Image src={Nosotros} alt="Sobre Nosotros" fluid="true" style={{ width: "100%" }} />
      <Image src={Pagos} alt="Formas de Pago" fluid="true" style={{ width: "100%" }} />
    </div>
  );
}
