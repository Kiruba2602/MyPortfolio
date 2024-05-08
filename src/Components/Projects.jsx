import React from 'react';
import ProjectBox from './ProjectBox';
import Littlelemon from '../images/LittleLemon.png';
import Todolist from '../images/todolist.png';
import Billing from '../images/billing.png'
import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container>
      <h1 className="projectHeading">My <strong>Projects</strong></h1>
      <Row className="project">
        <Col sm={12} md={6} lg={4} className='justify-content-center mb-2 mx-4'>
          <ProjectBox projectPhoto={Littlelemon} projectLink={"https://github.com/Kiruba2602/Little-Lemon-API"} projectSite={"https://github.com/Kiruba2602/Little-Lemon-API"} projectName="LittleLemonApi"/>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <ProjectBox projectPhoto={Todolist} projectLink={"https://github.com/Kiruba2602/React-project"} projectSite={"https://kiruba2602.github.io/React-project/"} projectName="TodoList" />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <ProjectBox projectPhoto={Billing} projectLink={"https://github.com/Kiruba2602/RestaurantBillingSystem"} projectSite={"https://github.com/Kiruba2602/RestaurantBillingSystem"} projectName={"Restaurant Billing System"}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
