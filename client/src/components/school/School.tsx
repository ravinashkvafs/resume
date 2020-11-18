import React from 'react';
import './School.css';
import '../../assets/styles/shared.css';

export default function School() {

  const educations = [
    {
      school: 'SGGSCC, Delhi University',
      class: 'B.Tech CSE',
      percent: '86%',
      duration: '2013 - 2017'
    },
    {
      school: 'KV AFS, New Delhi',
      class: 'XII Class',
      percent: '90%',
      duration: '2012 - 2013'
    },
    {
      school: 'KV AFS, New Delhi',
      class: 'X Class',
      percent: '84%',
      duration: '2010 - 2011'
    }
  ];

  return (
    <div className="VarticalContainer">

      <span className="title" style={{ marginTop: 30 }}>Education</span>

      {educations.map((d, di) => {
        return (
          <div className={`school-container ${di % 2 == 0 ? 'school-left' : 'school-right'}`}>

            <span className="org">{d['school'] || ''}</span>

            <span className="class">{d['class'] || ''}</span>

            <span className="duration">{d['duration'] || ''}</span>

            <span className="text">{d['percent'] || ''}</span>

            {/* <span className="designation">{d['designation'] || ''}</span> */}

          </div>
        );
      })}

    </div>
  );

}