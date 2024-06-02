import React from "react";
import ProjectCard from "../components/ProjectCard";

const Portfolio: React.FC = () => (
  <div>
    <h2>My Works</h2>
    <div className="projects">
      {/* Example project entries */}
      <ProjectCard
        title="Project 1"
        description="Description of project 1"
        link="http://example.com"
      />
      <ProjectCard
        title="Project 2"
        description="Description of project 2"
        link="http://example.com"
      />
    </div>
  </div>
);

export default Portfolio;
