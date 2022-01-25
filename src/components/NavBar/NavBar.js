import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Navbar bg="dark" expand="false">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className='nav-link'>Inicio</Link>
            <Link to={"/tops-crops"} className='nav-link'>Tops y Crop Tops</Link>
            <Link to={"/shorts-calzas"} className='nav-link'>Shorts y Calzas</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
