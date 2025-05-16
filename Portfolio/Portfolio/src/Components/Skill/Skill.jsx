import "../../Pages/Skills/Skills.css";
import PropTypes from "prop-types";

const Skill = ({ skillName, skillLevel, skillIcon }) => {
  return (
    <div className="skill">
      <label>
        {skillName} {skillIcon}
      </label>
      <progress
        className="progress-bar"
        value={skillLevel}
        max="100"
      ></progress>
      <span>{skillLevel}%</span>
    </div>
  );
};

Skill.propTypes = {
  skillName: PropTypes.string.isRequired,
  skillLevel: PropTypes.number.isRequired,
  skillIcon: PropTypes.node.isRequired,
};

export default Skill;
