import React from 'react';
import ScrollApp from './components/ScrollApp';
// import { Navbar, Nav, Collapse } from 'react-bootstrap';
import { Navbar, Nav } from "react-bootstrap";



const Header = () => {

  return (
    < >
      {/* <Navbar bg="light" variant="light" fluid="true" onClick={toggleNavbar}>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Collapse >
          <Nav className="mr-auto">
            <Nav.Link href="#home" onClick={closeNavbar}>Home</Nav.Link>
            <Nav.Link href="#features" onClick={closeNavbar}>Features</Nav.Link>
            <Nav.Link href="#pricing" onClick={closeNavbar}>Pricing</Nav.Link>
          </Nav>
        </Collapse>
      </Navbar> */}
      <Navbar bg="dark" variant="dark" fluid="true" collapseOnSelect>

        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ScrollApp />
    </>
  );
}

export default Header;