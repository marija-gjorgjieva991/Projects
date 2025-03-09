import "../../Pages/Education/Education.css";

const EducationItem = ({ degree, school, startYear, endYear, description }) => {
  return (
    <div className="education-item">
      <h2>{degree}</h2>
      <h4>{school}</h4>
      <p>
        {startYear} - {endYear}
      </p>
      <p>{description}</p>
    </div>
  );
};

export default EducationItem;
