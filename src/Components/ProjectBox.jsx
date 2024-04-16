// ProjectBox.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName, projectDesc, projectLink }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={projectPhoto} alt="Project display" />
      <Card.Body>
        <Card.Title>{projectName}</Card.Title>
        <Card.Text>{projectDesc}</Card.Text>
        <Button variant="primary" href={projectLink} target="_blank" rel="noopener noreferrer">
          <FaGithub /> Github
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectBox;
