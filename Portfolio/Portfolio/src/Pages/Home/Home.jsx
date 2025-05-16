import "./Home.css";
import darkImg from "../../assets/Mypic.png";
import lightImg from "../../assets/Whitepic.png";
import PropTypes from "prop-types";

const Home = ({ toggleTheme, darkMode }) => {
  return (
    <div className="homepage">
      <div className="content">
        <h2>Welcome to my Portfolio</h2>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <h2>Front-end Developer</h2>
      </div>
      <img src={darkMode ? darkImg : lightImg} alt="Profile-picture" />
    </div>
  );
};

Home.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Home;
