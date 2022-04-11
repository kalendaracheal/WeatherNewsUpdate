import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import news from "./assets/news.jpg";


const NavBar = () => {
  return (
    <div>           
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
           <img src={news} alt={news}width={60} height={60} className='pic' /></Navbar.Brand>
          <Nav className="me-auto">
            <div className="navstyle">
            <Nav.Link href="Newsdisplay"><h5>Global news</h5></Nav.Link>
            <Nav.Link href="LocalNews"><h5>Local news</h5></Nav.Link>
            <Nav.Link href="NewsList"><h5>Search news</h5></Nav.Link>
            <Nav.Link href="Weather"><h5>Weather</h5></Nav.Link>

            </div>
                      </Nav>
        </Container>
      </Navbar>
    </div>

      );
};

export default NavBar;
