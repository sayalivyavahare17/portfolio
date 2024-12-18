import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python (Basic)",
    "C++",
    "Java",
    "SQL",
    ".NET",
    "Hibernate",
    "Spring Boot",
    "React.js",
    "Git and GitHub",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Skills</h2>
      {skills.map((skill, index) => (
        <span key={index} style={{ padding: "10px", fontWeight: "bold" }}>
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Skills;
