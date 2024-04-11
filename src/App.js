import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './assets/turban logo.png';
import Home from './components/Home';
import Services from './components/Services';
import Turbans from './components/Turbans';
import About from './components/About';
import Contact from './components/Contact';
import BookingFormModal from './BookingForm';

function App() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const toggleBookingModal = () => {
    setShowBookingModal(!showBookingModal);
  };

  return (
    <Router>
      <div className="app">
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="Khalsa Dastar Center Logo" style={{ height: '30px' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/turbans">Turbans</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
              <Button variant="danger" onClick={toggleBookingModal}>
                Inquire Now
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/turbans" element={<Turbans />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer className="footer">
          <div className="social-icons">
            <a href="https://www.facebook.com/photo.php?fbid=388399094119514&set=a.388399110786179&type=3&mibextid=cr9u03" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/khalsa_dastar_center?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@khalsadastarcenter?_t=8kkHha5Q3v4&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
          &copy; {new Date().getFullYear()} Khalsa Dastar Center. All Rights Reserved.
        </footer>
        <BookingFormModal isOpen={showBookingModal} onRequestClose={toggleBookingModal} />
      </div>
    </Router>
  );
}

export default App;