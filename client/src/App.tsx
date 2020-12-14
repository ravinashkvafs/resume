import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Journey from './components/journey/Journey';
import School from './components/school/School';
import Skill from './components/skill/Skill';

import { Server_URL } from './env.json';

function Tab({ tab, active, setTab, icon }: any) {
  return (
    <span className="tab" onClick={() => setTab(tab)}>
      <i className={`material-icons menu-icon ${tab === active ? 'active-tab' : ''}`}>{icon}</i>
    </span>
  )
}

function LoadImageFn({ src = '', element = null, prefix = '' }: any, cb: any = () => { }) {

  if (!src) return cb('SRC_ERR');
  if (!element) return cb('ELEMENT_ERR');

  const img = new Image();
  img.src = src;

  img.onload = () => {
    // console.log('LOADED', element, src)
    element.style.backgroundImage = `${prefix || ''}url(${src})`;
    return cb();
  };

  img.onerror = (er) => {
    // console.log('ERROR:', er);
    return cb('IMG_ERR');
  };

}

const image_loads_classes = [
  {
    class: 'pic-self',
    img_ls: `${Server_URL}/doc/pics/avinash_blur.png`,
    img_hs: `${Server_URL}/doc/pics/avinash.png`,
    prefix: `linear-gradient(to right, rgba(29,29,29,0.8), rgba(0,0,0,0), rgba(29,29,29,0.8)), linear-gradient(to top, rgba(29,29,29,0.8), rgba(0,0,0,0), rgba(29,29,29,0)), `
  }
];

function App() {

  const [tab, setTab] = useState('profile');

  useEffect(() => {
    // console.log('called me');

    image_loads_classes.forEach(i => {

      let elem: any = document.getElementsByClassName(i['class']);

      if (elem && elem[0]) {
        elem = elem[0];
        LoadImageFn({ src: i['img_ls'], element: elem, prefix: i['prefix'] || '' }, (er: any) => {
          if (er == 'ELEMENT_ERR') return;
          LoadImageFn({ src: i['img_hs'], element: elem, prefix: i['prefix'] || '' }, (er: any) => { });
        });
      }

    });

  });

  // console.log('called me too');

  return (
    <div className="container">

      <div className="incompatible-section">
        Sorry!<br /><br />This requires bigger screen!
      </div>

      <div className="side-menu">

        <div className="menus">

          <Tab tab={'profile'} active={tab} setTab={setTab} icon={'person'} />

          <Tab tab={'work'} active={tab} setTab={setTab} icon={'work'} />

          <Tab tab={'school'} active={tab} setTab={setTab} icon={'school'} />

          <Tab tab={'skill'} active={tab} setTab={setTab} icon={'person_search'} />

          <Tab tab={'contact'} active={tab} setTab={setTab} icon={'call'} />

        </div>

        <div className="menu-bottom" onClick={() => null}>

          <i className={`material-icons menu-icon`}>cloud_download</i>

        </div>

      </div>

      <div className="pic-section pic-self">

        <div className="content">

          <span className="name">Avinash Sharma</span>

          <span className="desig">Software Engineer</span>

          <div className="social-links">
            <a href={'https://www.linkedin.com/in/avinash--sharma'} className="social1" target="_blank" rel="noopener noreferrer"> </a>
          </div>

        </div>

      </div>

      <div className="section">

        {tab === 'profile' &&
          <div className="sub">          <About />        </div>
        }

        {tab === 'work' &&
          <div className="sub">          <Journey />        </div>
        }

        {tab === 'school' &&
          <div className="sub">          <School />        </div>
        }

        {tab === 'skill' &&
          <div className="sub">          <Skill />        </div>
        }

        {tab === 'contact' &&
          <div className="sub">          <Contact />        </div>
        }

      </div>

    </div>
  );

}

export default App;
