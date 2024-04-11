import React from 'react';
import '../Services.css';
import turbanImage from '../assets/turban22.png';

function Services() {
  return (
    <div className="services">
      <div className="services-container">
        <div className="hero-image-container">
          <img src={turbanImage} alt="Turban" className="hero-image" />
        </div>
        <div className="services-content">
          <h2>Our Services</h2>
          <div className="service-item">
            <h3>Onsite Services</h3>
            <p>
              Get personalized turban tying at your location. Our expert tyers
              will come to you, ensuring a convenient and tailored experience.
            </p>
          </div>
          <div className="service-item">
            <h3>Group Services</h3>
            <p>
              Tailored group sessions for weddings or events. We offer
              specialized turban tying services for your entire group,
              ensuring everyone looks their best.
            </p>
          </div>
          <div className="service-item">
            <h3>Studio Services</h3>
            <p>
              Book turban appointments in our studio. Our professional
              environment ensures a comfortable and efficient tying
              experience.
            </p>
          </div>
          <div className="service-item">
            <h3>Groom Dressup Service</h3>
            <p>
              Exclusive service for preparing the groom. We'll assist with
              turban tying and overall grooming to ensure you look your best
              on your special day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;