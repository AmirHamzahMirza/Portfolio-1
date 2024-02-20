import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath=""
              title="HalalBites Website Backend"
              description="Backend Stack Web Application for a Halal Food Finder, using Spring Boot and MySQL."
              ghLink="https://github.com/Nmazza1/HalalbitesBackend"
              demoLink="https://halalbites.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="HalalBites Website Frontend"
              description="Frontend Stack Web Application for a Halal Food Finder, using ReactJS and Tailwind."
              ghLink="https://github.com/Nmazza1/halalbitesfrontend"
              demoLink="https://halalbites.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="PHP-ChatRoom"
              description="Simple Chat Room Application using PHP and MySQL."
              ghLink="https://github.com/MohitShankar/PHP-ChatRoom"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="Class Project: Champlain Pet Clinic"
              description="A full stack web application for a pet clinic, using Spring Boot, MySQL and AngularJS."
              ghLink="https://github.com/cgerard321/champlain_petclinic"
              demoLink=""  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="Greenhouse IOT Monitoring System"
              description="Temperature, humidity, and light level monitoring system for a greenhouse, using Arduino, Python Flask and MongoDB."
              ghLink="https://github.com/cubajosh/iot_final"
              demoLink=""  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="Greenhouse IOT Monitoring System"
              description="Temperature, humidity, and light level monitoring system for a greenhouse, using Arduino, Python Flask and MongoDB."
              ghLink="https://github.com/cubajosh/IOT-Temp-Sensor-Project"
              demoLink=""  
            />
          </Col>

          {/* use this as an example */}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
