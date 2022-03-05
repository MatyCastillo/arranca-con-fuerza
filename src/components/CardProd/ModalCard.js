import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Image, Row, Col } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "./ModalCard.css";

const ModalCard = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <Image
            src={props.image}
            alt={props.title}
            className="image-modal"
          ></Image>
          <div className="modal-body">
            <h4 className="modal-title text-center">{props.title}</h4>
            <Row>
              <Col className="modal-subtitle text-center">
                <p style={{ fontFamily: "Metropolis-Bold" }}>Talles</p>
                <p style={{ marginLeft: -15 }}>
                  {Math.min(...props.sizes)} a {Math.max(...props.sizes)}
                </p>
              </Col>
              <Col className="line-dash"></Col>
              <Col className="modal-subtitle">
                <p style={{ fontFamily: "Metropolis-Bold" }}>Colores</p>
                <div>
                  {props.colors.map((color, index) => (
                    <div key={index} className={`circle-${color}`}></div>
                  ))}
                </div>
              </Col>
            </Row>
            <p className="modal-description text-center">
              *{props.description}
            </p>
            <hr style={{ color: "white", marginLeft: 20, width: "85%" }}></hr>
            <Row>
              <Col className="modal-subtitle ">
                <p style={{ fontFamily: "Metropolis-Bold", fontSize: "20px" }}>
                  Medios de pago
                </p>
                <p className="p-footer">• Efectivo.</p>
                <p className="p-footer">• Transferencia.</p>
                <p className="p-footer">• Mercado pago.</p>
              </Col>
              <Col className="line-dash"></Col>
              <Col className="modal-subtitle">
                <p style={{ fontFamily: "Metropolis-Bold", fontSize: "20px" }}>
                  Envios
                </p>
                <p className="p-footer">• A todo el país.</p>
                <p className="p-footer">• Correo Argentino</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default ModalCard;