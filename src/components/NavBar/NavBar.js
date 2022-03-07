import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="false" sticky="top">
        <Navbar.Brand href="/">Arrancá con Fuerza</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5">
            <Link to={"/"} className='nav-link'>Inicio</Link>
            <Link to={"/tops-crops"} className='nav-link'>Tops y Crop Tops</Link>
            <Link to={"/shorts-calzas"} className='nav-link'>Shorts y Calzas</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
