import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import Type from './Type.jsx';
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

const Home = () => {
    return (
        <Container fluid className="Homepage">
            <Row className="align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
                <Col md={8} className="HomeText text-center mt-5">
                    <h1>I'M <strong>Kirubakaran</strong></h1>
                    <Type />
                    <img src="/assets/developer.png" alt="" width="500px" height="500px" />
                    <div className="mt-3">
                        <Link to="/About">
                            <Button variant="primary" className="me-2">About Me <BsPerson /></Button>
                        </Link>
                        <Link to="/Contact">
                            <Button variant="primary">Contact <CgPhone /></Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
