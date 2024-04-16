import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFileDownload } from "react-icons/fa";
import Skills from "./Skills"; // Consider revising Skills to use Bootstrap as well

const About = () => {
  return (
    <>
      <Container className="AboutPage">
        <Row className="align-items-center">
          <Col>
            <h1>Get to <strong>know</strong> me!</h1>
            <p>
              Hi, my name is <strong>Kirubakaran</strong>. I'm a Full Stack Developer and also certified AWS Cloud Practitioner.
              <br/>
              I love to create Full stack projects and have an interest to explore more cloud related/emerging technologies.
            </p>
            <Button variant="primary" href='resume.pdf' download>Download Resume <FaFileDownload /></Button>
          </Col>
        </Row>
      </Container>

      <Container className="skills">
        <h1>Skillset</h1>
        <Row>
          {/* Consider revising Skills to be more dynamic and using Bootstrap components */}
            <Skills skill="HTML" />
            <Skills skill="CSS" />
            <Skills skill="Bootstrap" />
            <Skills skill="JavaScript" />
            <Skills skill="React" />
            <Skills skill="Java" />
            <Skills skill="Python" />
            <Skills skill="Node" />
            <Skills skill="SQL" />
            <Skills skill="AWS" />
        </Row>
      </Container>
    </>
  );
};

export default About;
