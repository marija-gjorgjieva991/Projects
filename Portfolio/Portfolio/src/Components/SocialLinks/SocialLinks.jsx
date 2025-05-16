import "./SocialLinks.css";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <h2>Connect with Me:</h2>
      <div className="social-links">
        <Link
          to="https://www.facebook.com/marija.dimova.58"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i className="fa-brands fa-facebook"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/marija-gjorgjieva-2425a22b2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </Link>

        <Link
          to="https://www.instagram.com/nikolija_marija"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
