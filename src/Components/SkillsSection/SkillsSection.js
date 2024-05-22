import React from "react";

const SkillsSection = () => {
  return (
    <section className="SkillsSection">
      <div>
        <div className="SkillsContent">
          <p>What I know</p>
          <h1>Skills</h1>
          <p>
            I'm familiar with several languages and frameworks. In addition, I
            am continually striving to learn everything I can about my talents.
            <br></br> And I enjoy learning more about emerging technologies. You
            may view my abilities and status here.
          </p>
          {/* Here I show my
            some skills with the it status */}
          {/* <p>
            I love collaborating with others, solving problems methodically, and
            challenging myself to grow everyday. <br />
            and challenging myself to grow everyday.
          </p> */}
        </div>
        <div className="SkillsFlex">
          <div className="SkillsHeadFlex">
            <div className="SkillsHead">
              <p>HTML</p>
              <div className="SkillsStatus">
                <div className="SkillsLayerOne">
                  <span className="SkillsLayerTwo"></span>
                </div>
                <p>95%</p>
              </div>
            </div>
          </div>
          <div className="SkillsHeadFlex">
            <div className="SkillsHead">
              <p>CSS</p>
              <div className="SkillsStatus">
                <div className="SkillsLayerOne">
                  <span className="SkillsLayerTwo SC"></span>
                </div>
                <p>92%</p>
              </div>
            </div>
          </div>
          <div className="SkillsHeadFlex">
            <div className="SkillsHead">
              <p>JavaScript</p>
              <div className="SkillsStatus">
                <div className="SkillsLayerOne">
                  <span className="SkillsLayerTwo SJS"></span>
                </div>
                <p>88%</p>
              </div>
            </div>
          </div>
          <div className="SkillsHeadFlex">
            <div className="SkillsHead">
              <p>React JS</p>
              <div className="SkillsStatus">
                <div className="SkillsLayerOne">
                  <span className="SkillsLayerTwo SRJ"></span>
                </div>
                <p>80%</p>
              </div>
            </div>
          </div>

          <div className="SkillsHeadFlex">
            <div className="SkillsHead">
              <p>Bootstrap</p>
              <div className="SkillsStatus">
                <div className="SkillsLayerOne">
                  <span className="SkillsLayerTwo SB"></span>
                </div>
                <p>90%</p>
              </div>
            </div>
          </div>
          <div className="SkillsHeadFlex">
            <div className="SkillsHead">
              <p>PHP</p>
              <div className="SkillsStatus">
                <div className="SkillsLayerOne">
                  <span className="SkillsLayerTwo SQJ"></span>
                </div>
                <p>80%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="SkillsAndMore">
          <p>And More...</p>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
