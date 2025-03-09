import "./Education.css";
import EducationItem from "../../Components/EducationItem/EducationItem.jsx";

const Education = () => {
  const educationList = [
    {
      school: "University Goce Delcev - Stip",
      degree: "Bachelor of Science in Computer Science",
      startYear: 2009,
      endYear: 2013,
      description:
        "Focus on software development, algorithms, and data structures.",
    },
    {
      school: "Gimnazija",
      degree: "High School",
      startYear: 2005,
      endYear: 2009,
      description:
        "Completed general education with a focus on mathematics and science.",
    },
    {
      school: "Brainster",
      degree: "Front-end developer",
      startYear: 2024,
      endYear: 2025,
      description:
        "Completed general education with a focus on front-end development.",
    },
  ];

  return (
    <div className="education-container">
      <h2>Education</h2>
      {educationList.map((education, index) => (
        <EducationItem
          key={index}
          degree={education.degree}
          school={education.school}
          startYear={education.startYear}
          endYear={education.endYear}
          description={education.description}
        />
      ))}
    </div>
  );
};

export default Education;
