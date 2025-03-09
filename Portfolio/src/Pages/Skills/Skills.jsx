import Skill from "../../Components/Skill/Skill.jsx";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <Skill
        skillName="Html"
        skillIcon={<i className="fa-brands fa-html5"></i>}
        skillLevel={100}
      />
      <Skill
        skillName="Css"
        skillIcon={<i className="fa-brands fa-css3"></i>}
        skillLevel={100}
      />
      <Skill
        skillName="Sass"
        skillIcon={<i className="fa-brands fa-sass"></i>}
        skillLevel={100}
      />
      <Skill
        skillName="Bootstrap"
        skillIcon={<i className="fa-brands fa-bootstrap"></i>}
        skillLevel={100}
      />
      <Skill
        skillName="Git"
        skillIcon={<i className="fa-brands fa-gitlab"></i>}
        skillLevel={100}
      />
      <Skill
        skillName="UX/UI design"
        skillIcon={<i className="fa-sharp fa-solid fa-laptop-code"></i>}
        skillLevel={100}
      />
      <Skill
        skillName="Javascript"
        skillIcon={<i className="fa-brands fa-js"></i>}
        skillLevel={100}
      />
      <Skill
        skillName="Asynchronous JavaScript"
        skillIcon={<i className="fa-solid fa-spinner"></i>}
        skillLevel={100}
      />
      <Skill
        skillName="Typescript"
        skillIcon={<i className="fa-solid fa-t"></i>}
        skillLevel={100}
      />
      <Skill
        skillName="React"
        skillIcon={<i className="fa-brands fa-react"></i>}
        skillLevel={100}
      />
    </div>
  );
};

export default Skills;
