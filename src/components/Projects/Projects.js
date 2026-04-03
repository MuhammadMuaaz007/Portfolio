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
              description="Edusity – Education Platform (React.js, CSS, Vercel):
              Designed and developed a fully responsive and modern front-end for an educational platform using React.js, focusing on a scalable and maintainable component-based architecture. Built reusable and modular UI components to ensure consistency across the application and improve development efficiency. Implemented dynamic rendering techniques, including conditional rendering and state management, to enhance user interaction and provide a seamless browsing experience.Developed clean, well-structured layouts using advanced CSS techniques, ensuring responsiveness across multiple devices and screen sizes. Emphasized user experience by incorporating smooth transitions, intuitive navigation, and visually appealing design elements aligned with modern UI/UX standards.
"
              ghLink="https://github.com/MuhammadMuaaz007/Edusity"
              demoLink="https://edusity-muaaz.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Muaaz Portfolio"
              description="Designed and developed a dynamic personal portfolio website using React.js to effectively showcase projects, technical skills, and professional experience. Leveraged React’s component-based architecture to create reusable and maintainable UI components, ensuring scalability and clean code organization throughout the application.Implemented responsive and mobile-first design principles using Bootstrap, enabling a consistent and optimized user experience across desktops, tablets, and mobile devices. Structured the layout with modern UI practices, focusing on readability, accessibility, and visual hierarchy to present information clearly and professionally."
              ghLink="https://github.com/MuhammadMuaaz007/Portfolio"
              demoLink="https://portfolio-xi-sand-79.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shop}
              isBlog={false}
              title="Real estate App"
              description="Property Management Web Application (MERN Stack):
              Developed a full-stack property management web application using the MERN stack (MongoDB, Express.js, React.js, Node.js) to streamline the process of listing, managing, and discovering properties for rent or sale. The platform provides an intuitive and user-friendly interface, enabling property owners to easily create and manage listings while allowing buyers and tenants to explore available options efficiently.
              Built a dynamic front-end using React.js with reusable components and responsive design principles to ensure a seamless user experience across all devices. Integrated the front-end with a Node.js and Express.js back-end to handle application logic, API development, and secure data transactions."
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
             Myntra Shopping Website Clone (React.js, JavaScript, CSS):
              Developed a front-end clone of a popular e-commerce platform inspired by Myntra, focusing on replicating its modern user interface and core shopping experience. Built the application using React.js with a component-based architecture, ensuring reusable, modular, and maintainable code structure.Designed and implemented responsive layouts using CSS to provide a consistent and optimized user experience across desktops, tablets, and mobile devices. Paid close attention to UI/UX details, including product grids, navigation menus, and visually appealing layouts to closely match real-world e-commerce standards.  "
              ghLink="https://github.com/MuhammadMuaaz007/MyntraBasicClone"
              demoLink="https://myntra-muaaz.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PrintForge}
              isBlog={false}
              title="PrintForge"
              description="
            PrintForge – 3D Models Web Application (Next.js, TypeScript, Tailwind CSS):
            Developed a modern and fully responsive web application using Next.js, TypeScript, and Tailwind CSS, focused on delivering a clean, high-performance user interface for browsing and exploring 3D models. Leveraged Next.js features such as optimized rendering and efficient routing to ensure fast load times and smooth navigation across the application.Structured the project using a scalable, component-based architecture, creating reusable and maintainable UI components to promote consistency and development efficiency. Utilized TypeScript to enforce strong typing, improving code reliability, reducing runtime errors, and enhancing overall developer experience. "
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
