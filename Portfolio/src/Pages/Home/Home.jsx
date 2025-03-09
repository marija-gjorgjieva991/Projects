import "./Home.css";
import img from "../../assets/IMG_20231216_182041.jpg";

const Home = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h2>Welcome to my Portfolio</h2>
        <h1>Marija Gjorgjieva</h1>
        <h2>Front-end Developer</h2>
      </div>
      <img src={img} alt="Profile-picture" />
    </div>
  );
};

export default Home;
