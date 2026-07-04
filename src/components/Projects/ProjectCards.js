import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog,
}) {
  return (
    <Card className="project-card-view h-100 border-0 overflow-hidden">
      <div className="project-image-wrapper">
        <Card.Img
          variant="top"
          src={imgPath}
          alt={`${title} preview`}
          className="project-image"
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <div className="flex-grow-1">
          <Card.Title className="project-title">
            {title}
          </Card.Title>

          <Card.Text className="project-description">
            {description}
          </Card.Text>
        </div>

        <div className="project-buttons mt-4">
          {ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              <BsGithub className="me-2" />
              {isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!isBlog && demoLink && (
            <Button
              variant="outline-light"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn ms-2"
            >
              <CgWebsite className="me-2" />
              Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;