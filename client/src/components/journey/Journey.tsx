import React, { useEffect, useMemo } from 'react';
import './Journey.css';
import '../../assets/styles/shared.css';

// import FM_LOGO from '../../assets/logos/fm.png';
// import ID_LOGO from '../../assets/logos/id.png';

import { ManageImageResolutions } from '../../shared/Functions';
import { ImageSet } from '../../shared/Image-Set';

export default function Journey() {

  const experiences = useMemo(() => {
    // console.log('useMemo');
    return [
      {
        organization: 'FirstMeridian Business Services',
        duration: `May '18 - Present`,
        designation: 'Software Engineer (Full-stack / React-native)',
        logo: 'fm',
        // image: FM_LOGO,
        image: null,
        description: ``,
        id: 'FmIcon'
      },
      {
        organization: 'iDiscover.me',
        duration: `Jun '17 - May '18`,
        designation: 'IT Engineer (Full-stack)',
        logo: 'id',
        // image: ID_LOGO,
        image: null,
        description: ``,
        id: 'IdIcon'
      }
    ];
  }, []);

  useEffect(() => {
    // console.log('useEffect');
    experiences.forEach((e: any) => {
      let element: any = document.getElementById(e['id']);
      ManageImageResolutions({ image_obj: ImageSet[e['id']] || {}, element, mode: 'IMG' });
    });
  }, [experiences]);

  return (
    <div className="VarticalContainer">

      <span className="title">Experience</span>

      {experiences.map((d, di) => {
        return (
          <div key={`${di}:${d['organization']}`} style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 10 }}>

            <div className="logo-container">

              <img id={d['id'] || ''} src={d['image'] || ''} className={d['logo'] || ''} onContextMenu={(e) => e.preventDefault()} alt='' />

            </div>

            <div className="exp-container exp-left">

              <span className="org">{d['organization'] || ''}</span>

              <span className="designation">{d['designation'] || ''}</span>

              <span className="duration">{d['duration'] || ''}</span>

            </div>

          </div>
        );
      })}

    </div>
  );

}