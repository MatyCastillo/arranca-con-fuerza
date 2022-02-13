import React, { useState } from 'react';
import { Col, Card, Image, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CardProd.css";

export default function CardProd({ data }) {
  const arrowIcon = "./img/icons/arrows-up16.png";

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Col>
      <Card style={{ border: "none" }}>
        <Card.Img variant="top" src={data.image} className="fluid product-image" />
        <div className="product-title-pos">
          <Card.Title className="product-title" >{data.name}</Card.Title>
          <Image src={arrowIcon} alt="Más información" className="product-info-icon" onClick={handleShow}/>
        </div>
      </Card>
      {/* <div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div> */}
    </Col>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Image src={data.image} alt={data.name} className="fluid product-image" variant="top"/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Detalles del producto a codear!
        </Modal.Body>
      </Modal>
    </>
  );
}
