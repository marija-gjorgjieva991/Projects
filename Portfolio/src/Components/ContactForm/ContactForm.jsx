import { useState } from "react";
import "./ContactForm.css";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [contact] = useState({
    name: "Marija",
    surname: "Gjorgjieva",
    location: "Veles",
    phoneNumber: "+38977/954-068",
    email: "marija_gjorgjieva@yahoo.com",
  });

  return (
    <div className="form-container">
      <div className="contact-card">
        <div className="contact-box">
          <i className="fa-solid fa-user"></i>
          <Link to="/">
            <span>
              {contact.name} {contact.surname}
            </span>
          </Link>
        </div>

        <div className="contact-box">
          <i className="fa-solid fa-location-dot"></i>
          <Link
            to={`https://www.google.com/maps?q=${contact.location}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{contact.location}</span>
          </Link>
        </div>

        <div className="contact-box">
          <i className="fa-solid fa-phone"></i>
          <Link to={`tel:${contact.phoneNumber}`}>
            <span>{contact.phoneNumber}</span>
          </Link>
        </div>

        <div className="contact-box email-box">
          <i className="fa-solid fa-envelope"></i>
          <Link to={`mailto:${contact.email}`}>
            <span>{contact.email}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
