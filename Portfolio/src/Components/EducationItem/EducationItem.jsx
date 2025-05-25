import "../../Pages/Education/Education.css";
import PropTypes from "prop-types";

const EducationItem = ({
  school,
  degree,
  title,
  startYear,
  endYear,
  description,
}) => {
  return (
    <div className="education-item">
      <div className="education-header">
        <div>
          <div className="education-school">{school}</div>
          <div className="education-degree">{degree}</div>
        </div>
        <div className="education-years">
          {startYear} - {endYear}
        </div>
      </div>
      <div className="education-title">{title}</div>
      <p className="education-description">{description}</p>
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
