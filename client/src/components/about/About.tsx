import React from 'react';
import './About.css';

export default function About() {

  return (
    <div>

      <span className="title">About Me</span>

      <div className="sub-section">
        <span className="sub-title">25 yrs</span>&nbsp;&nbsp;
        <span className="text">/</span>&nbsp;&nbsp;
        <span className="sub-title">Male</span>&nbsp;&nbsp;
        <span className="text">/</span>&nbsp;&nbsp;
        <span className="sub-title">New Delhi, India</span>
      </div>

      <span className="text">
        Passionate self-taught fullstack Javascript developer with an aim to beat former "best-yets".  I'm an absolute geek and love geeking out on JavaScript things.
        <br /><br />
        Values and Strengths I hold high are Authenticity, Meticulous, Discipline, Reliability, Responsibility and Helping other achieve their success.
      </span>

    </div>
  );

}