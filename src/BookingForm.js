import React, { useState } from 'react';
import firebase, { getFunctions, httpsCallable } from './firebase';
import Modal from 'react-modal';

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    padding: '20px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

Modal.setAppElement('#root'); // Adjust the selector if needed

const BookingFormModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    numPeople: 1,
    date: '',
    time: '',
    location: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.date) {
      errors.date = 'Date is required';
    }

    if (!formData.time) {
      errors.time = 'Time is required';
    }

    if (!formData.location) {
      errors.location = 'Location is required';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const functions = getFunctions(firebase);
      const sendFormData = httpsCallable(functions, 'sendFormDataEmail');
      const result = await sendFormData(formData);

      if (result.data.success) {
        console.log('Form data sent successfully');
        // Reset form data and show a success message
        setFormData({
          name: '',
          numPeople: 1,
          date: '',
          time: '',
          location: '',
        });
        setIsSubmitted(true);
      } else {
        console.error('Error sending form data:', result.data.error);
        // Show an error message
        alert(`Error sending form data: ${result.data.error}`);
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      // Show an error message
      alert(`Error sending form data: ${error.message}`);
    }

    setIsSubmitting(false);
  };

  const closeModal = () => {
    setIsSubmitted(false);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Book Turban Tying Service"
      style={customModalStyles}
    >
      {isSubmitted ? (
        <div className="success-message">
          <h2>Thank you for your booking!</h2>
          <p>
            We have received your request for the Turban Tying Service. Our team will review your
            booking details and contact you within 48 hours to confirm your appointment and provide
            further instructions.
          </p>
          <p>
            If you have any immediate questions or concerns, please feel free to reach out to us at{' '}
            <a href="mailto:khalsadastarcenter@gmail.com">info@example.com</a> or call us at{' '}
            <a href="tel:+1234567890">+1 (234) 567-890</a>.
          </p>
          <button type="button" onClick={closeModal}>
            Close
          </button>
        </div>
      ) : (
        <>
          <h2>Book Turban Tying Service</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {formErrors.name && <span className="error">{formErrors.name}</span>}
            </div>
            <div>
              <label htmlFor="numPeople">Number of People:</label>
              <input
                type="number"
                id="numPeople"
                name="numPeople"
                value={formData.numPeople}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              {formErrors.date && <span className="error">{formErrors.date}</span>}
            </div>
            <div>
              <label htmlFor="time">Time:</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
              {formErrors.time && <span className="error">{formErrors.time}</span>}
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              {formErrors.location && <span className="error">{formErrors.location}</span>}
            </div>
            <div className="modal-actions">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              <button type="button" onClick={closeModal} disabled={isSubmitting}>
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
};

export default BookingFormModal;