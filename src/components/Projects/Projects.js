import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Myntra from "../../Assets/Projects/Myntra.png";
import PrintForge from "../../Assets/Projects/PrintForge.png";
import Shop from "../../Assets/Projects/real_estate.png";
import image from "../../Assets/Projects/image.png";
import muaaz_mart from "../../Assets/Projects/Muaaz_mart.png";
import Pizza from "../../Assets/Projects/pizza.png";

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
              imgPath={muaaz_mart}
              isBlog={false}
              title="Muaaz’s Mart – Real-Time MERN E-Commerce Platform"
              description="Built a full-stack e-commerce platform using React, Node.js, Express, and MongoDB, featuring real-time chat with Socket.io, secure authentication, and a responsive UI for seamless shopping across devices."
              ghLink="https://github.com/MuhammadMuaaz007/E-Shop"
              demoLink="https://e-shop-frontend1.vercel.app/"
            />
          </Col>
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pizza}
              isBlog={false}
              title="Next Pizza Shop"
              description="Built a modern pizza ordering web app with Next.js, featuring product browsing, cart and checkout flows, and a clean responsive UI for smooth ordering across desktop and mobile devices."
              ghLink="https://github.com/MuhammadMuaaz007/next-pizza-shop"
              demoLink="https://next-pizza-shop-seven.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
