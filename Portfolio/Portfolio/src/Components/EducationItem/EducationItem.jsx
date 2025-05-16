import "../../Pages/Education/Education.css";
import PropTypes from "prop-types";

const EducationItem = ({
  degree,
  school,
  title,
  startYear,
  endYear,
  description,
}) => {
  return (
    <div className="education-item">
      <h2>{degree}</h2>
      <h4>{school}</h4>
      <h2>{title}</h2>
      <p>
        {startYear} - {endYear}
      </p>
      <p>{description}</p>
    </div>
  );
};

EducationItem.propTypes = {
  degree: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  endYear: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EducationItem;
