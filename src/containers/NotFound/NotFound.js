import React from 'react';
import './NotFound.css';
import { Link  } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound-container">
      <h1 className="notFound-title">UPS!</h1>
      <p className="zoom-area">La página que estás buscando no existe.</p>
      <section className="error-container">
        <span>4</span>
        <span><span className="screen-reader-text">0</span></span>
        <span>4</span>
      </section>
      <div className="link-container">
        <Link to={"/"} className="more-link">Visit the original article</Link>
      </div>
    </div>
  );
}
