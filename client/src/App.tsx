import React, { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Journey from './components/journey/Journey';
import School from './components/school/School';
import Skill from './components/skill/Skill';

function Tab({ tab, active, setTab, icon }: any) {
  return (
    <span className="tab" onClick={() => setTab(tab)}>
      <i className={`material-icons menu-icon ${tab === active ? 'active-tab' : ''}`}>{icon}</i>
    </span>
  )
}

function App() {

  const [tab, setTab] = useState('profile');

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

      <div className="pic-section">

        <div className="content">

          <span className="name">Avinash Sharma</span>

          <span className="desig">Software Engineer</span>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/avinash--sharma" className="social1" target="_blank" rel="noopener noreferrer"></a>
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
