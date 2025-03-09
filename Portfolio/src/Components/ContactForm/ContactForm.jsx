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
      <div className="form-part">
        <form>
          <div className="box">
            <i className="fa-solid fa-user"></i>
            <Link to="/">
              <h3>
                {contact.name} {contact.surname}
              </h3>
            </Link>
          </div>

          <div className="box">
            <i className="fa-solid fa-location-dot"></i>
            <Link
              to={`https://www.google.com/maps?q=${contact.location}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{contact.location}</h3>
            </Link>
          </div>

          <div className="box">
            <i className="fa-solid fa-phone"></i>
            <Link to={`tel:${contact.phoneNumber}`}>
              <h3>{contact.phoneNumber}</h3>
            </Link>
          </div>

          <div className="box">
            <i className="fa-solid fa-envelope"></i>
            <Link to={`mailto:${contact.email}`}>
              <h3>{contact.email}</h3>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
