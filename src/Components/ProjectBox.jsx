// ProjectBox.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName, projectDesc, projectLink, projectSite }) => {
  return (
    <Card className='projectBox' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={projectPhoto} alt="Project display" />
      <Card.Body>
        <Card.Title>{projectName}</Card.Title>
        <Card.Text>{projectDesc}</Card.Text>
        <Button className='me-2' variant="primary" href={projectLink} target="_blank" rel="noopener noreferrer">
          <FaGithub /> Github
        </Button>
        <Button variant="primary" href={projectSite} target="_blank" rel="noopener noreferrer">
          <CgFileDocument /> Site
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectBox;
