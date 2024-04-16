import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="mt-16">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
            <div className="footerLinks">
              <a href="https://github.com/Kiruba2602/" target="_blank" rel="noreferrer noopener"><FaGithub /></a>
              <a href="https://linkedin.com/in/kirubakaranbalaraman/" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
              <a href="mailTo:kirubakaran260202@gmail.com" target="_blank" rel="noreferrer noopener"><GrMail /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
