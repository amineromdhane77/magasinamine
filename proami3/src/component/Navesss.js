import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logos from './../photos/Logo1.jpg'
import './Navesss.css'
import { Link } from 'react-router-dom';

const Navesss = () => {
  return (
    <Navbar expand="lg" >
    <Container>
      <img src={logos} title="logo"/>
     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav >
           
          <Nav.Link><Link to="/home">Home</Link></Nav.Link>
          <Nav.Link><Link to="/menu">Menu</Link></Nav.Link>
          <Nav.Link><Link to="/about">About</Link></Nav.Link>
          <Nav.Link  style={{marginLeft:"70%" }}><Link to="/contact">Contact</Link></Nav.Link>
        

         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navesss