import React from 'react';
import './Journey.css';
import '../../assets/styles/shared.css';

export default function Journey() {

  const experiences = [
    {
      organization: 'FirstMeridian Business Services',
      duration: `May '18 - Present`,
      designation: 'Software Engineer (Full-stack / React-native)',
      description: ``
    },
    {
      organization: 'iDiscover.me',
      duration: `Jun '17 - May '18`,
      designation: 'IT Engineer (Full-stack)',
      description: ``
    }
  ];

  return (
    <div className="VarticalContainer">

      <span className="title">Experience</span>

      {experiences.map((d, di) => {
        return (
          <div className={`exp-container ${di % 2 == 0 ? 'exp-left' : 'exp-right'}`}>

            <span className="org">{d['organization'] || ''}</span>

            <span className="duration">{d['duration'] || ''}</span>

            <span className="designation">{d['designation'] || ''}</span>

          </div>
        );
      })}

    </div>
  );

}