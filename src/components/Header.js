import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MyItem'
import { BsFillCartFill } from "react-icons/bs";
function Header(){
  
    return(
        <>
        
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Products</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#">
              <i className="bi bi-bag"></i> 
             <BsFillCartFill/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )

}
export default Header