import React, { useState } from 'react';
import '../Home.css';
import logo from '../assets/turban logo.png';
import BookingFormModal from '../BookingForm.js';
import videoSource from '../assets/website homepage slideshow.mp4';

function Home() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const toggleBookingModal = () => setShowBookingModal(!showBookingModal);

  return (
    <div className="home">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
      <div className="home-content-container">
        <div className="home-content">
          <img src={logo} alt="Khalsa Dastar Center Logo" className="home-logo" />
          <h1>Expert Turban Tying Service</h1>
          <h2>Hire a Professional</h2>
          <button className="book-now-btn" onClick={toggleBookingModal}>
            Inquire Now
          </button>
        </div>
      </div>
      <BookingFormModal isOpen={showBookingModal} onRequestClose={toggleBookingModal} />
    </div>
  );
}

export default Home;