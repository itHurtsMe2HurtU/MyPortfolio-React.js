import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecommerce from "../../Assets/Projects/ecommerceProgress1.png";
import pizza from "../../Assets/Projects/PizzaAppImage1.jpg";
import animated from "../../Assets/Projects/AnimatedAppImage1.jpg";
import movie from "../../Assets/Projects/MovieAppImage1.png";
import quiz from "../../Assets/Projects/QuizAppImage1.png";
import weather from "../../Assets/Projects/WeatherAppImage1.png";


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
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Website"
              description="An E-commerce website having home page, product page, add to cart, and payment features."
              link="https://github.com/itHurtsMe2HurtU?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Pizza Website"
              description="A pizza website having multiple pages built with React.js and styled with Css."
              link="https://github.com/itHurtsMe2HurtU/Manu-Pizza/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animated}
              isBlog={false}
              title="Animated Website"
              description="A website having multiple pages built with React.js and styled with Css/ Bootstrap. It's contact us page is integrated with the emailjs feature to send the data directly to my emailid."
              link="https://github.com/itHurtsMe2HurtU/Animated-React-Website1/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="MovieAdda"
              description="A website built with React.js which is using an API call to render the list of movies and having a Search-functionality as well. The designing has been done with CSS."
              link="https://github.com/itHurtsMe2HurtU/MovieAdda/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="React Quiz App"
              description="A quiz app built with React.js using the react hooks and styled with Css."
              link="https://github.com/itHurtsMe2HurtU/React.js-Quiz-App/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A weather app bilt with the help of React.js where Api calls has been made wit the help of Axios to get the weather data. Styling is done using Css."
              link="https://github.com/itHurtsMe2HurtU/Weather-App-Using-React.js-and-Axios-API/tree/master"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
