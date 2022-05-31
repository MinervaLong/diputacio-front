import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import Pagina3 from './components/Pagina3';
import Pagina4 from './components/Pagina4';
import Pagina5 from './components/Pagina5';


function App() {
  return (
    <BrowserRouter>
          <Container>
        <Row>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand><Link className="nav-link" to="/">Diputació</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link className="nav-link" to="/pagina2">Pagina2</Link>
                  <Link className="nav-link" to="/pagina3">Pagina3</Link>
                  <Link className="nav-link" to="/pagina4">Página4</Link>
                  <Link className="nav-link" to="/pagina5">Página5</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
       
        <Row>
          <Col xs="3">

          </Col>
          <Col>
            <Routes>
              <Route path="/" element={<Pagina1 />} />
              <Route path="/pagina2" element={<Pagina2 />} />
              <Route path="/pagina3" element={<Pagina3 />} />
              <Route path="/pagina4" element={<Pagina4 />} />
              <Route path="/pagina5" element={<Pagina5 />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
