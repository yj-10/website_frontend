import React from "react";
import ProjectHead from "../../Component/Project/ProjectHead";
import ProjectMid from "../../Component/Project/ProjectMid";
import FooterDegin from "../../Component/Footer/FooterDegin";


function ProjectDegin() {
  return (
    <>
      <section id="projectHead">
        <ProjectHead />
      </section>
      <section id="projectMid">
        <ProjectMid />
      </section>
      
      <FooterDegin/>
    </>
  );
}

export default ProjectDegin;
