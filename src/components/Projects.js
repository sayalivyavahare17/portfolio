import React from "react";

const projects = [
  {
    title: "OBJECT DETECTION AND OCR",
    tech: "Java, XML, Android Studio",
    description: "A real-time object detection application for blind people.",
  },
  {
    title: "LIBRARY MANAGEMENT SYSTEM",
    tech: ".NET, MySQL",
    description: "A fully functional library activity management system.",
  },
  {
    title: "COLLEGE WEBSITE",
    tech: "HTML, CSS",
    description: "A frontend website for SNJB’s KBJ COE, Chandwad.",
  },
  {
    title: "CREDIT CARD FRAUD DETECTION",
    tech: "Python, Machine Learning",
    description: "Detects fraudulent transactions in real-time.",
  },
];

const Projects = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={{ margin: "20px 0" }}>
          <h3>{project.title}</h3>
          <p><strong>Technologies:</strong> {project.tech}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
