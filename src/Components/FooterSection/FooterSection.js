import React from "react";

const FooterSection = () => {
  return (
    <section className="FooterSection">
      <div className="FooterHead">
        <div className="FooterFlex">
          <div className="FooterQuickLinks">
            <div>
              <ul>
                <a href="#1">
                  <li>
                    <p>Hello!</p>
                  </li>
                </a>
                <a href="#2">
                  <li>
                    <p>About</p>
                  </li>
                </a>
                <a href="#3">
                  <li>
                    <p>Services</p>
                  </li>
                </a>
                <a href="#4">
                  <li>
                    <p>Protfolio</p>
                  </li>
                </a>
                <a href="#6">
                  <li>
                    <p>Skills</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="FooterDeveloper">
            <div>
              <img src="./assets/contact-images/heart.svg" alt="" />
            </div>
            <div>
              <p>Developed by DurgaDevi</p>
            </div>
          </div>
        </div>
        <div className="FooterCopyRight">
          <p>Copyright © 2024. All rights reserved</p>
        </div>
      </div>
    </section>
  );
};
export default FooterSection;
