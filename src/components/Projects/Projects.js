import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BookStore from "../../Assets/Projects/Bookstore.png";
import Myntra from "../../Assets/Projects/Myntra.png";
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
              description="Edusity – Education Platform (React.js, CSS, Vercel):Designed and developed a complete front-end for an educational website using React’s component-based structure. Created reusable components,responsive layouts, conditional rendering, and smooth UI interactions. Integrated modern design principles with clean code organization for scalability and maintenance. Optimized the UI with fast-loading assets and deployed the project on Vercel for reliable production hosting and global performance"
              ghLink="https://github.com/MuhammadMuaaz007/Edusity"
              demoLink="https://edusity-muaaz.vercel.app/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Muaaz Portfolio"
              description="Portfolio Website (React.js, Bootstrap, GitHub Pages): Developed a personal portfolio website using React.js to showcase projects and skills. Implemented responsive design with Bootstrap for optimal viewing across devices. Utilized React Router for seamless navigation between sections. Deployed the site on GitHub Pages for easy access and sharing."
              ghLink="https://github.com/MuhammadMuaaz007/Portfolio"
              demoLink="https://portfolio-xi-sand-79.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shop}
              isBlog={false}
              title="Real estate App"
              description="This full-stack web application streamlines property management by enabling users to easily list houses for rent or sale, offering a seamless and accessible platform for both property owners and prospective buyers or tenants. With intuitive features designed to simplify the listing process, users can efficiently manage their properties, upload details, and connect with interested parties."
              ghLink="https://github.com/MuhammadMuaaz007/mern-estate"
              demoLink="https://home-hub-seven.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Myntra}
              isBlog={false}
              title="Myntra Shopping Website Clone"
              description="
              Myntra Shopping Website Clone (React.js, JavaScript, CSS): Developed a front-end clone of the Myntra shopping website, replicating its user interface and functionality. Implemented responsive design to ensure compatibility across devices. Utilized JavaScript for dynamic content rendering and interactive features, providing users with a seamless shopping experience.
              "
              ghLink="https://github.com/MuhammadMuaaz007/MyntraBasicClone"
              demoLink="https://myntra-muaaz.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
