import React from "react";
import "./FloatingButton.css";

const FloatingButton = () => {
  return (
    <div className="root">
      <a href="https://wa.me/5491167980601?text=Hola!%20Me%20interesa%20obtener%20más%20información%20sobre" rel="noopener noreferrer" target="_blank">
        <img src="./img/icons/whatsapp-02.png" alt="Whatsapp" className="buttonWp" />
      </a>
      <a href="https://www.instagram.com/arrancaconfuerza_cf" rel="noopener noreferrer" target="_blank">
        <img src="./img/icons/instagram-02.png" alt="Instagram" className="buttonIg" />
      </a>
    </div>
  );
};

export default FloatingButton;