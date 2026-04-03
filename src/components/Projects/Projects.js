import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Myntra from "../../Assets/Projects/Myntra.png";
import PrintForge from "../../Assets/Projects/PrintForge.png";
import Portfolio from "../../Assets/Projects/portfolio.png";
import Shop from "../../Assets/Projects/real_estate.png";
import image from "../../Assets/Projects/image.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Edusity – Education Platform"
              description="Built a responsive education platform UI with React and CSS, using reusable components, clean layouts, and smooth navigation to deliver a learning experience across all devices."
              ghLink="https://github.com/MuhammadMuaaz007/Edusity"
              demoLink="https://edusity-muaaz.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Muaaz Portfolio"
              description="Created a personal portfolio with React and Bootstrap, showcasing projects, skills, and experience through reusable components, responsive design, and clear structure for desktop and mobile users."
              ghLink="https://github.com/MuhammadMuaaz007/Portfolio"
              demoLink="https://portfolio-xi-sand-79.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shop}
              isBlog={false}
              title="Real estate App"
              description="Developed a MERN real estate app for listing and discovering properties, combining a responsive React frontend with secure backend APIs to provide a smooth user experience."
              ghLink="https://github.com/MuhammadMuaaz007/mern-estate"
              demoLink="https://home-hub-seven.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Myntra}
              isBlog={false}
              title="Myntra Shopping Website Clone"
              description="Built a frontend e-commerce clone inspired by Myntra using React and CSS, recreating product browsing layouts, responsive navigation, and polished UI details for practical shopping flows."
              ghLink="https://github.com/MuhammadMuaaz007/MyntraBasicClone"
              demoLink="https://myntra-muaaz.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PrintForge}
              isBlog={false}
              title="PrintForge"
              description="Built a 3D models web app with Next.js, TypeScript, and Tailwind, using reusable components and optimized routing to deliver fast performance and consistent browsing experience overall."
              ghLink="https://github.com/MuhammadMuaaz007/PrintForge"
              demoLink="https://print-forge-web.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
