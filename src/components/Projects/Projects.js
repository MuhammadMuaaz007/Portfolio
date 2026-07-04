import React, { useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Asset Imports
import Myntra from "../../Assets/Projects/Myntra.png";
import PrintForge from "../../Assets/Projects/PrintForge.png";
import Shop from "../../Assets/Projects/real_estate.png";
import image from "../../Assets/Projects/image.png";
import muaaz_mart from "../../Assets/Projects/Muaaz_mart.png";
import Pizza from "../../Assets/Projects/Pizza.png";
import Xcode from "../../Assets/Projects/4xcode.png";

const PROJECTS_DATA = [
  {
    id: 1,
    imgPath: muaaz_mart,
    title: "Muaaz’s Mart – Real-Time MERN E-Commerce Platform",
    description: "Built a full-stack e-commerce platform using React, Node.js, Express, and MongoDB, featuring real-time chat with Socket.io, secure authentication, and a responsive UI for seamless shopping across devices.",
    ghLink: "https://github.com/MuhammadMuaaz007/E-Shop",
    demoLink: "https://e-shop-frontend1.vercel.app/",
    isBlog: false,
  },
  {
    id: 2,
    imgPath: Xcode,
    title: "4xCode - Company Website",
    description: "Developed a sleek, highly responsive corporate web application featuring modern user interfaces, optimized performance speed, and seamless navigation layouts built to establish a strong digital presence.",
    ghLink: "", 
    demoLink: "https://www.4xcode.com/",
    isBlog: false,
  },
  {
    id: 3,
    imgPath: image,
    title: "Edusity – Education Platform",
    description: "Built a responsive education platform UI with React and CSS, using reusable components, clean layouts, and smooth navigation to deliver a learning experience across all devices.",
    ghLink: "https://github.com/MuhammadMuaaz007/Edusity",
    demoLink: "https://edusity-muaaz.vercel.app/",
    isBlog: false,
  },
  {
    id: 4,
    imgPath: Shop,
    title: "Home Hub – Real Estate App",
    description: "Developed a MERN real estate app for listing and discovering properties, combining a responsive React frontend with secure backend APIs to provide a smooth user experience.",
    ghLink: "https://github.com/MuhammadMuaaz007/mern-estate",
    demoLink: "https://home-hub-seven.vercel.app/",
    isBlog: false,
  },
  {
    id: 5,
    imgPath: Myntra,
    title: "Myntra Shopping Website Clone",
    description: "Built a frontend e-commerce clone inspired by Myntra using React and CSS, recreating product browsing layouts, responsive navigation, and polished UI details for practical shopping flows.",
    ghLink: "https://github.com/MuhammadMuaaz007/MyntraBasicClone",
    demoLink: "https://myntra-muaaz.vercel.app/",
    isBlog: false,
  },
  {
    id: 6,
    imgPath: PrintForge,
    title: "PrintForge",
    description: "Built a 3D models web app with Next.js, TypeScript, and Tailwind, using reusable components and optimized routing to deliver fast performance and consistent browsing experience overall.",
    ghLink: "https://github.com/MuhammadMuaaz007/PrintForge",
    demoLink: "https://print-forge-web.vercel.app/",
    isBlog: false,
  },
  {
    id: 7,
    imgPath: Pizza,
    title: "Next Pizza Shop",
    description: "Built a modern pizza ordering web app with Next.js, featuring product browsing, cart and checkout flows, and a clean responsive UI for smooth ordering across desktop and mobile devices.",
    ghLink: "https://github.com/MuhammadMuaaz007/next-pizza-shop",
    demoLink: "https://next-pizza-shop-seven.vercel.app/",
    isBlog: false,
  },
];

function Projects() {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculations for slicing the array
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = PROJECTS_DATA.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(PROJECTS_DATA.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Optional: Smooth scroll back to top of project section when page changes
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Generate individual page items
  let paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item 
        key={number} 
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

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
        
        {/* Render only sliced items */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {currentProjects.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>

        {/* Conditionally display pagination row only if projects exceed 6 */}
        {PROJECTS_DATA.length > itemsPerPage && (
          <Row className="justify-content-center mt-4">
            <Col xs="auto">
              <Pagination className="custom-pagination">
                <Pagination.Prev 
                  onClick={() => handlePageChange(currentPage - 1)} 
                  disabled={currentPage === 1} 
                />
                {paginationItems}
                <Pagination.Next 
                  onClick={() => handlePageChange(currentPage + 1)} 
                  disabled={currentPage === totalPages} 
                />
              </Pagination>
            </Col>
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default Projects;