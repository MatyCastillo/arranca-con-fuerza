import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Image } from "react-bootstrap";
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
            <h4 className="modal-title">{props.title}</h4>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default ModalCard;
