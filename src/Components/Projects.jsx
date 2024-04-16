import React from 'react';
import ProjectBox from './ProjectBox';
import Littlelemon from '../images/LittleLemon.png';
import Todolist from '../images/todolist.jpeg';
import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container>
      <h1 className="projectHeading">My <strong>Projects</strong></h1>
      <Row>
        <Col md={6}><ProjectBox projectPhoto={Littlelemon} projectName="LittleLemonApi" /></Col>
        <Col md={6}><ProjectBox projectPhoto={Todolist} projectName="TodoList" /></Col>
      </Row>
    </Container>
  );
};

export default Projects;
