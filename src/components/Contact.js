import React from 'react';
import '../Contact.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import backgroundImage from '../assets/background.jpg';

function Contact() {
  const handlePhoneClick = () => {
    window.location.href = 'tel:510-365-2300';
  };

  const handleEmailClick = () => {
    window.navigator.clipboard.writeText('khalsadastarcenter@gmail.com');
    alert('Email address copied to clipboard');
  };

  return (
    <div className="contact">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <Container className="contact-container">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Get in Touch</Card.Title>
                <Card.Text>
                  Whether you're looking to book an appointment or have questions about our turban tying services, we're here to help. Reach out to us and let's talk about how we can bring a regal touch to your attire.
                </Card.Text>
                <div className="contact-info">
                  <div className="contact-method">
                    <FaPhone className="contact-icon" onClick={handlePhoneClick} />
                    <Card.Text>510-365-2300</Card.Text>
                  </div>
                  <div className="contact-method">
                    <FaEnvelope className="contact-icon" onClick={handleEmailClick} />
                    <Card.Text>khalsadastarcenter@gmail.com</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;