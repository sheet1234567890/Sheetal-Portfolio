import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sheetal Patidar </span>
            from <span className="purple"> Pidhay Bujurg, MadhyaPradesh India.</span>
            <br />
            I am currently Intern as a software developer at Dollop Infotech.
            <br />
            I have completed Bsc  in Computer Science  from Ravindranath Tagore Institute of Science & Professional Studies,Morghadi .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Art & Craft
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore New Things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sheetal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
