import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects-links">
      <ul className="projects-ul">
        <li>
          <h3>Calculator application</h3>
          <Link
            to={"https://my-awesome-calculator-app.netlify.app/"}
            target="_blank"
          >
            https://my-awesome-calculator-app.netlify.app/
          </Link>
        </li>
        <li>
          <h3>To-do application</h3>
          <Link to={"https://my-todo-tasks-app.netlify.app/"} target="_blank">
            https://my-todo-tasks-app.netlify.app/
          </Link>
        </li>
        <li>
          <h3>Movies application</h3>
          <Link
            to={"https://my-awesome-movies-app.netlify.app/"}
            target="_blank"
          >
            https://my-awesome-movies-app.netlify.app/
          </Link>
        </li>
        <li>
          <h3>Street Artist Page - mobile version</h3>
          <Link to={"https://street-artist-page.netlify.app/"} target="_blank">
            https://street-artist-page.netlify.app/
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
