import React from 'react';
import config from '../config/portfolioConfig.json';
import profileImage from './111.jpg';

const AboutMe = () => {
  return (
    <div className="container mt-5 mb-5 about-container" id = "about">


      <div className="text-center mb-4">
        <img 
          src={profileImage} 
          alt="Profile" 
          className="profile-image"
        />
      </div>


      <h1 className="text-center about-title" >About Me</h1>


      <br />
      <br />
      <h3 className="about-name">{config.name}</h3>
      <p className="lead about-bio">{config.bio}</p>


      <div className="mt-4 education-section">
        <h4 className="education-title">Education</h4>
        <ul className="education-list">
            <li className="education-item">

              <strong>Undergraduate in Information Technology</strong><br />
              Sri Lanka Institute of Information Technology (SLIIT)<br />
              <ul><em>Academic level - CGPA - 3.55</em></ul>
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <strong>Ch/Wen/Holy Family Balika Maha Vidyalaya Wennappuwa</strong><br/>
              <ul>
                <em>GCE Advance level</em><br/>
                  <ul type ="disc">
                    <li><em>Art - A pass</em> </li>
                    <li>IT - A pass</li>
                    <li>Maths  - B pass</li>
                </ul>
              </ul>
            </li>
        </ul>
      </div>

    </div>
  );
};


export default AboutMe;
