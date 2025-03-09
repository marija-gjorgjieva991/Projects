import "./Education.css";
import EducationItem from "../../Components/EducationItem/EducationItem.jsx";

const Education = () => {
  const educationList = [
    {
      school: "University Goce Delcev - Stip",
      degree: "Bachelor of Science in Computer Science",
      title: "IT Engineer",
      startYear: 2009,
      endYear: 2013,
      description:
        "Computer Science & IT Engineering is an undergraduate program that equips students with the foundational knowledge and practical skills required to excel in the rapidly evolving fields of computer science, software development, and information technology engineering. This degree provides a comprehensive education that combines both theoretical and hands-on learning in areas such as computer programming, data structures, software engineering, networks, databases, and systems engineering.",
    },
    {
      school: "Brainster",
      degree: "Certificate",
      title: "Front-End Developer",
      startYear: 2024,
      endYear: 2025,
      description:
        "Front-End Academy is an educational program designed to teach students the essential skills needed to become proficient front-end web developers. The academy provides a comprehensive curriculum focused on building modern, user-friendly websites and web applications using the latest front-end technologies and design principles. Completed general education with a focus on front-end development.",
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
          title={education.title}
          startYear={education.startYear}
          endYear={education.endYear}
          description={education.description}
        />
      ))}
    </div>
  );
};

export default Education;
