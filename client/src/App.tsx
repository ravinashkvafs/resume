import React, { useState } from 'react';
import './App.css';
import About from './components/about/About';

function Tab({ tab, active, setTab, icon }: any) {
  return (
    <span className="tab" onClick={() => setTab(tab)}>
      <i className={`material-icons ${tab === active ? 'active-tab' : ''}`}>{icon}</i>
    </span>
  )
}

function App() {

  const [tab, setTab] = useState('profile');

  return (
    <div className="container">

      <div className="side-menu">

        <div className="menus">

          <Tab tab={'profile'} active={tab} setTab={setTab} icon={'person'} />

          <Tab tab={'contact'} active={tab} setTab={setTab} icon={'call'} />

          <Tab tab={'work'} active={tab} setTab={setTab} icon={'work'} />

          <Tab tab={'skill'} active={tab} setTab={setTab} icon={'directions_walk'} />

        </div>

        <div className="menu-bottom">

          <i className={`material-icons`}>cloud_download</i>

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

        {tab == 'profile' && <About />}


      </div>

    </div>
  );

}

export default App;
