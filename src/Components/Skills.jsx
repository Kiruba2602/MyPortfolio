//Skills.jsx
import React from 'react';
import { 
    FaReact,
    FaJava,
    FaNodeJs,
    FaBootstrap,
    FaHtml5,
    FaCss3,
    FaAws
 } from "react-icons/fa";
 import { DiJavascript1 } from "react-icons/di";
 import { DiMysql } from 'react-icons/di';

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Bootstrap: <FaBootstrap />,
    JavaScript: <DiJavascript1 />,
    React: <FaReact />,
    Java: <FaJava />,
    Node: <FaNodeJs />,
    SQL: <DiMysql />,
    AWS: <FaAws />
  };

  return (
    <div title={skill} className="SkillBox">
        {icon[skill]}
    </div>
  );
};

export default Skills;