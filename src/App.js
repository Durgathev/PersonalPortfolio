import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HaroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import ServiceSection from "./Components/ServiceSection/ServiceSection";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import FooterSection from "./Components/FooterSection/FooterSection";
import "./Components/styles/style.css";
import $ from "jquery";
import { BrowserRouter } from "react-router-dom";

function App() {
  const HamOpenHandler = () => {
    $(".NavLinks").toggleClass("HamActive");
    $(".blackLayer").toggleClass("HamActive");
  };
  const HamBlackHandle = () => {
    $(".NavLinks").removeClass("HamActive");
    $(".blackLayer").removeClass("HamActive");
  };
  const HamCloseHandler = () => {
    $(".NavLinks").removeClass("HamActive");
    $(".blackLayer").removeClass("HamActive");
  };

  document.onkeyup = function (e) {
    if (e.which === 68) {
      ModeHandle();
    }
  };
  const ModeHandle = () => {
    // NavBar
    $("body").toggleClass("D0e1630");
    $(".ChangeModeToggle").toggleClass("DActive");
    $(".NavLogo").toggleClass("D0e1630");
    $(".NavLinks").toggleClass("D0e1630");
    $(".NavSocialMedia").toggleClass("D0e1630");
    $(".NavBarSection").toggleClass("D0e1630");
    // HeroSection
    $(".HeroContent").toggleClass("D0e1630");
    $(".HeroSocialMedia").toggleClass("D0e1630");
    $(".HeroMailId").toggleClass("D0e1630");
    $(".HireMeBtn").toggleClass("D0e1630");
    // AboutSection
    $(".AboutContent").toggleClass("D0e1630");
    $(".AboutBtn").toggleClass("D0e1630");
    // ServiceSection
    $(".ServiceContent").toggleClass("D0e1630");
    $(".WebDevelopment").toggleClass("D0e1630");
    // SkillsSection
    $(".SkillsContent").toggleClass("D0e1630");
    $(".SkillsHead").toggleClass("D0e1630");
    $(".SkillsAndMore").toggleClass("D0e1630");
    // FooterSection
    $(".FooterQuickLinks").toggleClass("D0e1630");
    $(".FooterDeveloper").toggleClass("D0e1630");
    $(".FooterCopyRight").toggleClass("D0e1630");
    // ProtfolioSection
    $(".PortfolioFlexBoxChild").toggleClass("D0e1630");
    $(".PortfolioFlexBox").toggleClass("D0e1630");

    // ContactSection
    $(".ContactContent").toggleClass("D0e1630");

    // Notification
    $(".ModeChangeNotificationFlex").toggleClass("D0e1630");
    $(".ModeChangeNotificationFlex").addClass("activate");

    setTimeout(function () {
      $(".ModeChangeNotificationFlex").removeClass("activate");
    }, 3000);

    const NotificationAudio = document.getElementById("NotificationAudio");
    NotificationAudio.play();
  };

  return (
    <BrowserRouter>
      <div>
        <NavBar
          ModeHandle={ModeHandle}
          HamOpenHandler={HamOpenHandler}
          HamBlackHandle={HamBlackHandle}
          HamCloseHandler={HamCloseHandler}
        />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServiceSection />
        <PortfolioSection />
        <ContactSection />
        <FooterSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
