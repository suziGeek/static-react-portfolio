import React, { Fragment } from "react";
// import "./skillscard.css";
import "./drum.png";

const SkillsCard = () => {
  return (
    <section className='body-container-two'>
      <div className='wrapper-two'>
        <div className='card-one'>
          <div className='info-two'>
            <i className='fas fa-code'></i>
            <h3>Front End</h3>
            <hr />
            <p>C#</p>
            <p>Javascript</p>
            <p> React</p>
            <p> HTML5 </p>
            <p>CSS3</p>
            <p>jQuery</p>
            <p>PHP</p>
          </div>
        </div>
        <div className='card-two'>
          <div className='info-two'>
            <i className='fas fa-database'></i>
            <h3>Back End</h3>
            <hr />
            <p> .NET</p>
            <p> Javascript</p>
            <p> Node.js </p>
            <p>MySQL</p>
          </div>
        </div>
        <div className='card-three'>
          <div className='info-two'>
            <i className='fas fa-desktop'></i>
            <h3>Good to Have's</h3>

            <hr />
            <p>Google Cloud Services</p>
            <p>Wordpress</p>
            <p>GIT/GITHUB</p>
            <p>Photoshop</p>
            <p> Illustrator</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCard;
