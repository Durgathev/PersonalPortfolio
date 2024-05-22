import React from "react";
import $ from "jquery";

const NavBar = ({
  ModeHandle,
  HamCloseHandler,
  HamOpenHandler,
  HamBlackHandle,
}) => {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 255) {
      $(".NavBarSection").addClass("fixed-top");
    } else {
      $(".NavBarSection").removeClass("fixed-top");
    }
  });

  $(window)
    .scroll(function () {
      var scrollDistance = $(window).scrollTop();
      $(".page-section").each(function (i) {
        if ($(this).position().top <= scrollDistance + 100) {
          $(".Navigation a.NavActive").removeClass("NavActive");
          $(".Navigation a").eq(i).addClass("NavActive");
        }
      });
    })
    .scroll();

  return (
    <div>
      <div className="blackLayer" onClick={HamBlackHandle}></div>
      <div className="ModeChangeNotificationFlex">
        <div className="NotifiImage">
          <img src="./assets/nav-images/dark.svg" alt="" />
          <img src="./assets/nav-images/bright.svg" alt="" />
        </div>
        <div className="NotifiContent">
          <p>Dark Mode Activated</p>
          <p>Bright Mode Activated</p>
        </div>
        <div className="NitifySound">
          <audio id="NotificationAudio">
            {/* <source
              src="./assets/Notification/notifyMicro.ogg"
              type="audio/ogg"
            /> */}
            <source
              src="./assets/Notification/intuition-561.mp3"
              type="audio/mpeg"
            />
            {/* <source
              src="./assets/Notification/notifyMac.mp4r"
              type="audio/mp4r"
            /> */}
          </audio>
        </div>
        <div className="NotifiArrow">
          <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 0L8.34465e-07 0L7 11L14 0Z" fill="white" />
          </svg>
        </div>
      </div>
      {/* <!-- NavBar Section --> */}
      <section className="NavBarSection">
        <nav className="NavBarMain">
          <div className="NavLogo">
            <h1>
              <span>S.</span> DurgaDevi
            </h1>
          </div>
          {/* <!-- Mobile Device Mode --> */}
          <div className="NavMobileHam d-none">
            <div
              className="ChangeModeToggle"
              title="toggle to the Bright/Dark mode"
            >
              <div className="DarkImage">
                <img src="./assets/nav-images/dark.svg" alt="" />
              </div>
              <div className="brightImage">
                <img src="./assets/nav-images/bright.svg" alt="" />
              </div>
              <div className="ModeToggleBlog" onClick={ModeHandle}></div>
            </div>
            {/* <!-- Mobile Device Hamburger --> */}
            <div className="HamBurger" onClick={HamOpenHandler}>
              <svg height="34px" viewBox="0 0 24 24" width="34px">
                <path
                  _ngcontent-umy-c9=""
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="NavLinks">
            <div className="CloseHam" onClick={HamCloseHandler}>
              <div>
                <svg height="34px" viewBox="0 0 512.001 512.001" width="34px">
                  <g>
                    <g>
                      <path
                        d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
			L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
			c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
			l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
			L284.286,256.002z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <ul className="Navigation">
              <a href="#1">
                <li>Hello!</li>
              </a>
              <a href="#2">
                <li>About</li>
              </a>
              <a href="#3">
                <li>Services</li>
              </a>
              {/* <!-- <a >
                        <li>
                            Skills
                        </li>
                    </a> --> */}
              <a href="#4">
                <li>Protfolio</li>
              </a>
              <a href="#5">
                <li>Contact</li>
              </a>
              <a>
                <li>
                  <div
                    className="ChangeModeToggle"
                    title="toggle to the Bright/Dark mode"
                  >
                    <div className="DarkImage">
                      <img src="./assets/nav-images/dark.svg" alt="" />
                    </div>
                    <div className="brightImage">
                      <img src="./assets/nav-images/bright.svg" alt="" />
                    </div>
                    <div className="ModeToggleBlog" onClick={ModeHandle}></div>
                  </div>
                </li>
              </a>
            </ul>
            <div className="NavSocialMedia">
              <div>
                <a href="https://github.com/Manimaran-m" target="_newpage">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path
                      d="M10 0C4.47656 0 0 4.47656 0 10C0 15.5234 4.47656 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0ZM10 2C14.4102 2 18 5.58984 18 10C18 10.4688 17.9531 10.9297 17.875 11.375C17.6289 11.3203 17.2656 11.2539 16.8438 11.25C16.5312 11.2461 16.1406 11.2969 15.8125 11.3438C15.9258 10.9961 16 10.6133 16 10.2188C16 9.25781 15.5312 8.36328 14.7812 7.625C14.9883 6.85547 15.1914 5.53516 14.6562 5C13.0742 5 12.1992 6.12891 12.1562 6.1875C11.668 6.07031 11.1641 6 10.625 6C9.93359 6 9.27344 6.125 8.65625 6.3125L8.84375 6.15625C8.84375 6.15625 7.96484 4.9375 6.34375 4.9375C5.77734 5.50781 6.03516 6.95312 6.25 7.6875C5.48438 8.41797 5 9.28125 5 10.2188C5 10.5469 5.07812 10.8594 5.15625 11.1562C4.87891 11.125 3.87891 11.0312 3.46875 11.0312C3.10547 11.0312 2.54297 11.1172 2.09375 11.2188C2.03125 10.8203 2 10.4141 2 10C2 5.58984 5.58984 2 10 2ZM3.46875 11.2812C3.86328 11.2812 5.0625 11.4219 5.21875 11.4375C5.23828 11.4922 5.25781 11.543 5.28125 11.5938C4.85156 11.5547 4.01953 11.4961 3.46875 11.5625C3.10156 11.6055 2.63281 11.7383 2.21875 11.8438C2.1875 11.7188 2.14844 11.5977 2.125 11.4688C2.5625 11.375 3.13672 11.2812 3.46875 11.2812ZM16.8438 11.5C17.2422 11.5039 17.6055 11.5703 17.8438 11.625C17.832 11.6914 17.7969 11.7461 17.7812 11.8125C17.5273 11.7539 17.1094 11.668 16.625 11.6562C16.3906 11.6523 16.0156 11.6641 15.6875 11.6875C15.7031 11.6562 15.707 11.625 15.7188 11.5938C16.0586 11.5469 16.4922 11.4961 16.8438 11.5ZM4.09375 11.7812C4.65625 11.7852 5.18359 11.8242 5.40625 11.8438C5.92969 12.8203 6.98828 13.543 8.625 13.8438C8.22266 14.0664 7.86328 14.3789 7.59375 14.75C7.35938 14.7695 7.11328 14.7812 6.875 14.7812C6.17969 14.7812 5.74609 14.1602 5.375 13.625C5 13.0898 4.53906 13.0312 4.28125 13C4.01953 12.9688 3.92969 13.1172 4.0625 13.2188C4.82422 13.8047 5.09766 14.5 5.40625 15.125C5.68359 15.6875 6.26562 16 6.90625 16H7.03125C7.01172 16.1094 7 16.2109 7 16.3125V17.4062C4.69141 16.4727 2.93359 14.5 2.28125 12.0625C2.69141 11.9609 3.15234 11.8555 3.5 11.8125C3.66016 11.793 3.86328 11.7773 4.09375 11.7812ZM16.625 11.9062C17.0742 11.918 17.4727 12.0039 17.7188 12.0625C17.168 14.1328 15.8086 15.8555 14 16.9062V16.3125C14 15.4609 13.3281 14.3672 12.375 13.8438C13.957 13.5547 14.9883 12.8633 15.5312 11.9375C15.9102 11.9102 16.3555 11.8984 16.625 11.9062ZM10.5 16C10.7734 16 11 16.2266 11 16.5V17.9375C10.6719 17.9805 10.3398 18 10 18V16.5C10 16.2266 10.2266 16 10.5 16ZM8.5 17C8.77344 17 9 17.2266 9 17.5V17.9375C8.66406 17.8945 8.32422 17.832 8 17.75V17.5C8 17.2266 8.22656 17 8.5 17ZM12.5 17C12.7422 17 12.9531 17.1758 13 17.4062C12.6758 17.5391 12.3438 17.6602 12 17.75V17.5C12 17.2266 12.2266 17 12.5 17Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/mr-maran-343a991a0"
                  target="_newpage"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18">
                    <path
                      d="M16 0H2C0.895 0 0 0.895 0 2V16C0 17.105 0.895 18 2 18H16C17.105 18 18 17.105 18 16V2C18 0.895 17.105 0 16 0ZM6 14H3.477V7H6V14ZM4.694 5.717C3.923 5.717 3.408 5.203 3.408 4.517C3.408 3.831 3.922 3.317 4.779 3.317C5.55 3.317 6.065 3.831 6.065 4.517C6.065 5.203 5.551 5.717 4.694 5.717ZM15 14H12.558V10.174C12.558 9.116 11.907 8.872 11.663 8.872C11.419 8.872 10.605 9.035 10.605 10.174C10.605 10.337 10.605 14 10.605 14H8.082V7H10.605V7.977C10.93 7.407 11.581 7 12.802 7C14.023 7 15 7.977 15 10.174V14Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/its_._mr_maran001"
                  target="_newpage"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18">
                    <path
                      d="M5 0C2.239 0 0 2.239 0 5V13C0 15.761 2.239 18 5 18H13C15.761 18 18 15.761 18 13V5C18 2.239 15.761 0 13 0H5ZM15 2C15.552 2 16 2.448 16 3C16 3.552 15.552 4 15 4C14.448 4 14 3.552 14 3C14 2.448 14.448 2 15 2ZM9 4C11.761 4 14 6.239 14 9C14 11.761 11.761 14 9 14C6.239 14 4 11.761 4 9C4 6.239 6.239 4 9 4ZM9 6C8.20435 6 7.44129 6.31607 6.87868 6.87868C6.31607 7.44129 6 8.20435 6 9C6 9.79565 6.31607 10.5587 6.87868 11.1213C7.44129 11.6839 8.20435 12 9 12C9.79565 12 10.5587 11.6839 11.1213 11.1213C11.6839 10.5587 12 9.79565 12 9C12 8.20435 11.6839 7.44129 11.1213 6.87868C10.5587 6.31607 9.79565 6 9 6Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100012285764738"
                  target="_newpage"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18">
                    <path
                      d="M16 0H2C0.895 0 0 0.895 0 2V16C0 17.105 0.895 18 2 18H9.621V11.039H7.278V8.314H9.621V6.309C9.621 3.985 11.042 2.718 13.116 2.718C13.815 2.716 14.513 2.752 15.208 2.823V5.253H13.78C12.65 5.253 12.43 5.787 12.43 6.575V8.31H15.13L14.779 11.035H12.414V18H16C17.105 18 18 17.105 18 16V2C18 0.895 17.105 0 16 0Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};
export default NavBar;
