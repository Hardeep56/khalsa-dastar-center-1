import React from 'react';
import '../About.css';  // Ensure this CSS file is created and linked
import turbanImage from '../assets/turban5.jpeg';  // Adjust the path as needed

function About() {
  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="about-image">
          <img src={turbanImage} alt="Professional Turban Tying" />
        </div>
        <div className="about-text">
          <h2>About Khalsa Dastar Center</h2>
          <p>
            Crafted from a legacy of tradition and expertise in turban tying, Khalsa Dastar Center represents the pinnacle of this fine art. Our founder's journey began with a simple gesture — tying turbans for friends on their monumental days. This act of service blossomed into a mission: to ensure every turban we craft is a masterpiece of elegance and poise.
          </p>
          <p>
            Today, we are not just artisans; we are custodians of a heritage that adorns the head and uplifts the spirit. Our bespoke services are tailored to your personal style, ensuring you wear not just a turban, but a crown of self-esteem and cultural pride.
          </p>
          <p>
            Embark on your journey with Khalsa Dastar Center, where every fold tells a story and every knot is a connection to the past and a bridge to the future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
