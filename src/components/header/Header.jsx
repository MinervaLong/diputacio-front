import "./header.css";
import Diputacio from "../../assets/dipunegre.png";
import {Nav, Navbar, NavDropdown, Container, Form, FormControl} from 'react-bootstrap'

import React from "react";

const Header = () => {
  return (
      <Navbar bg="light" variant="light" sticky="top">
                <Container>
                <img src={Diputacio} alt="Logo Diputació" className="img--logo"/>
                    <Navbar.Brand href="#home">
                      <div className="div--logo">
                        <b>Transfer Market</b>
                        <p className="p--custom">Diputació de Bacelona</p>
                        </div>
                    </Navbar.Brand>
                    
                    <Nav className="ms-auto">
                    <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Buscar jugador..."
                                className="me-2"
                                aria-label="Search"
                            // onInput={(e) => setMyFilter(e.target.value)}
                            />
                            {/* <Button variant="secondary"><GoSearch /></Button> */}
                        </Form>
                        <NavDropdown title="Filtrar por..." id="basic-nav-dropdown">
                            <NavDropdown.Header><b>Competición</b></NavDropdown.Header>
                            <NavDropdown.Item href="#action/1.1">La Liga</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.2">Premier League</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.3">Serie A</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.4">Bundesliga</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Header><b>Precio</b></NavDropdown.Header>
                            <NavDropdown.Item href="#action/2.1">-10M€</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.2">10M€ a 20M€</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.3">+20M€</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                </Container>
            </Navbar>
  );
};

export default Header;
