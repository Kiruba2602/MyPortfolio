import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="mt-5" style={{ width: '90%', margin: '10px auto', marginTop: '80px' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ height: '40px' }}>
          <Col className="text-center py-3">
            <h4 style={{ letterSpacing: '0.5px', fontWeight: '500', marginBottom: '-40px' }}>Copyright &copy; {year} | All Rights Reserved.</h4>
            <div className="footerLinks" style={{ display: 'flex', width: '200px', justifyContent: 'space-evenly', fontSize: '30px' }}>
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
