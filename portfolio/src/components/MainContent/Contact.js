import React, { useState, useRef } from 'react';
import Testimonials from './Testimonials';
import emailjs from "@emailjs/browser";

const Contact = ({ handleModal }) => {
  const emptyData = {
    name: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(emptyData);
  const [isFormValid, setIsFormValid] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormValid(false);
    try {
      await emailjs.sendForm(
        "service_lff10y7",
        "template_biepk8g",
        form.current,
        "mrSn83Mas4tBWYVh6"
      );
      handleModal(true, null, "Thank you for reaching out! I have received your message and will get back to you shortly.");
    } catch (error) {
      handleModal(true, null, "Thank you for reaching out! Unfortunately, an error occurred while submitting your message. Please try again later.");
    } finally {
      setFormData(emptyData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => {
      const updatedData = { ...prevData, [name]: value };
      const isFormFilled = !!updatedData.name?.trim() && !!updatedData.email?.trim() && !!updatedData.message?.trim();
      setIsFormValid(isFormFilled);
      return updatedData;
    });
  };

  return (
    <article className="contact active overflow-ctr" data-page="contact">
      <Testimonials handleModalOpen={handleModal} />
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="contact-form">
        <form onSubmit={handleSubmit} className="form" ref={form}>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Your name"
              required
              onChange={handleInputChange}
              value={formData.name}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Your email"
              required
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your message"
            required
            onChange={handleInputChange}
            value={formData.message}
          ></textarea>
          <button type="submit" className="form-btn" disabled={!isFormValid}>
            <ion-icon name="paper-plane"></ion-icon>
            Send Message
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
