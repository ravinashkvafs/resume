import React from 'react';
import './Skill.css';
import '../../assets/styles/shared.css';

export default function Skill() {

  const skill_set = [
    'Javascript', 'Typescript', 'NodeJS', 'Angular', 'React', 'NestJS', 'ExpressJS', 'React-Native (expo)', 'HTML5', 'CSS/SCSS', 'MongoDB', 'MySQL', 'Bootstrap', 'Flex Box', 'Python', 'Angular Material', 'Data Structures'
  ];

  return (
    <div className="VarticalContainer">

      <span className="title">Skill-Set</span>

      <div className="skills">

        {skill_set.map((d, di) => {
          return (
            <div key={d} className="btn from-right">{d}</div>
          )
        })}

      </div>

    </div>
  );

}