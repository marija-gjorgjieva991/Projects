import "../../Pages/Skills/Skills.css";
import PropTypes from "prop-types";

const Skill = ({ skillName, skillIcon, skillLevel }) => {
  return (
    <div className="skill-card">
      <div className="skill-header">
        {skillIcon}
        <span>{skillName}</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ "--progress": `${skillLevel}%` }}
        ></div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  skillName: PropTypes.string.isRequired,
  skillLevel: PropTypes.number.isRequired,
  skillIcon: PropTypes.node.isRequired,
};

export default Skill;
