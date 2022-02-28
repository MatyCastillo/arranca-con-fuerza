import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="main-footer">
        <Container>
          <Row className="row">
            {/* Column1 */}
            <Col className="col cont">
              <a
                href="https://www.instagram.com/arrancaconfuerza_cf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="./img/icons/icono-instagram-01.png"
                  alt="Instagram"
                  className="icon"
                />
              </a>
              <p className="text">@arrancaconfuerza_cf</p>
            </Col>
            {/* Column2 */}
            <Col className="col cont">
              <a
                href="https://wa.me/5491167980601?text=Hola!%20Me%20interesa%20obtener%20más%20información%20sobre"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="./img/icons/icono-whatsapp-01.png"
                  alt="Whatsapp"
                  className="icon"
                />
              </a>
              <p className="text">+541167980601</p>
            </Col>
            {/* Column3 */}
            <Col className="cont">
              <a
                href="mailto:arrancaconfuerza.cf@gmail.com?subject=Información&body=Hola!%20Me%20interesa%20obtener%20más%20información%20sobre"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="./img/icons/icono-email-01.png"
                  alt="Email"
                  className="icon"
                />
              </a>
              <p className="text">arrancaconfuerza.cf@gmail.com</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          &copy;{new Date().getFullYear()} Arranca con Fuerza - Todos los
          derechos reservados
        </p>
      </div>
    </div>
  );
}
