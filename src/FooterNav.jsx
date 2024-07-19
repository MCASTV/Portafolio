import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './FooterNav.css'; // Importa el archivo CSS para el footer

const FooterNavbar = () => {
  return (
    <Navbar fixed="bottom" bg="blue" variant="dark" className="footer-nav">
      <Nav className="mx-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default FooterNavbar;


