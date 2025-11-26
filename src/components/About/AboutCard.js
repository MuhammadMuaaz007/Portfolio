import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Muaaz </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am currently pursue a <span className="purple"> Computer Software Engineering</span> and learn problem solving skills in <span className="purple"> Leetcode </span> and other platform.
            <br />
            Studing a computer science degree from <span className="purple">University of Education</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Physical Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep Pushing your Limits"{" "}
          </p>
          <footer className="blockquote-footer">Sundar Pichai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
