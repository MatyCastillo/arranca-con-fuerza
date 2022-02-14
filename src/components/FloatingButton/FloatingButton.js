import { Button } from "antd";
import React from "react";
import "./FloatingButton.css";

const FloatingButton = () => {
  return (
    <div className="root">
      <a href="https://wa.me/5491144979179?text=Hola!%20Me%20interesa%20obtener%20más%20información%20sobre">
        <img src="./img/icons/whatsapp-02.png" alt="" className="buttonWp" />
      </a>
      <a href="https://www.instagram.com/arrancaconfuerza_cf">
        <img src="./img/icons/instagram-02.png" alt="" className="buttonIg" />
      </a>
    </div>
  );
};

export default FloatingButton;
