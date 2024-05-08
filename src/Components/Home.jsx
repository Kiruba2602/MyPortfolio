// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import Type from './Type.jsx';
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import IllustratedImage from "./Img.jsx";
import Programming from "/assets/programming.svg";

const Home = () => {
  return (
    <Container fluid className="Homepage">
      <Row className="align-items-center justify-content-center" style={{ minHeight: '82vh' }}>
        <Col md={8} className="HomeText text-start align-content-center mt-5">
          <h1>I'M <strong>Kirubakaran</strong></h1>
          <Row className="d-flex justify-content-start">
            <Col sm={12} md={6} className="text-start align-items-center mb-2 mb-md-0">
              <Type />
              <Row className="justify-content-center mt-4">
                <Col xs={12} sm={4} className="d-flex justify-content-center mb-2">
                  <Link to="/myportfolio/About">
                    <Button variant="primary" className="w-100">About Me <BsPerson /></Button>
                  </Link>
                </Col>
                <Col xs={12} sm={4} className="d-flex justify-content-center">
                  <Link to="/myportfolio/Contact">
                    <Button variant="primary" className="w-100">Contact <CgPhone /></Button>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} className="text-center">
              <IllustratedImage src={Programming} alt="Developer Image" className="img-fluid"/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;