import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="AboutSection page-section" id="2">
      <div className="AboutFlex">
        <div className="AboutImage">
          <div>
            <img src="./assets/about-section/manimaran.svg" alt="" />
          </div>
        </div>
        <div className="AboutContent">
          <div>
            <p>Let me Introduce Myself</p>
            <h1>About me</h1>
            <p>
              Hello, my name is Durgadevi. I am a Full Stack Web Developer with
              a passion for creating clean, modern web applications
              characterized by intuitive design and functionality. I excel in
              transforming ideas into reality through a creative and methodical
              approach.
            </p>
            <br />
            <p>
              Collaboration, problem-solving, and continuous growth are at the
              core of my professional ethos. I thrive in team environments,
              enjoy tackling challenges systematically, and am committed to
              expanding my skill set. I am always eager to learn new frameworks
              and languages, and I take pride in my ability to quickly and
              efficiently master new technologies.
            </p>
            <Link to="./assets/resume/Resume.pdf" target="_blankpage">
              <div className="AboutBtn">
                <div>
                  <p>Download CV</p>
                </div>
                <div>
                  <svg x="0px" y="0px" viewBox="0 0 512 512">
                    <g>
                      <g>
                        <g>
                          <polygon points="480,352 480,480 32,480 32,352 0,352 0,512 512,512 512,352 			" />
                          <polygon
                            points="403.072,259.552 380.448,236.928 272,345.376 272,128 240,128 240,345.376 131.552,236.928 108.928,259.552 
                            256,406.624 			"
                          />
                          <rect x="240" width="32" height="32" />
                          <rect x="240" y="64" width="32" height="32" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
