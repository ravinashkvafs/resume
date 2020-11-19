import React from 'react';
import './Journey.css';
import '../../assets/styles/shared.css';
import FM_LOGO from '../../assets/logos/fm.png';
import ID_LOGO from '../../assets/logos/id.png';

export default function Journey() {

  const experiences = [
    {
      organization: 'FirstMeridian Business Services',
      duration: `May '18 - Present`,
      designation: 'Software Engineer (Full-stack / React-native)',
      logo: 'fm',
      image: FM_LOGO,
      description: ``
    },
    {
      organization: 'iDiscover.me',
      duration: `Jun '17 - May '18`,
      designation: 'IT Engineer (Full-stack)',
      logo: 'id',
      image: ID_LOGO,
      description: ``
    }
  ];

  return (
    <div className="VarticalContainer">

      <span className="title">Experience</span>

      {experiences.map((d, di) => {
        return (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>

            <div className="logo-container">

              <img src={d['image'] || ''} className={d['logo'] || ''} />

            </div>

            <div key={`${di}:${d['organization']}`} className="exp-container exp-left">

              <span className="org">{d['organization'] || ''}</span>

              <span className="duration">{d['duration'] || ''}</span>

              <span className="designation">{d['designation'] || ''}</span>

            </div>

          </div>
        );
      })}

    </div>
  );

}