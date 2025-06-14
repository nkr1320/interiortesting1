import React from "react";
import { useState ,useEffect} from "react";
import NavbarSection from "../NavbarSection";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import GallerySection from "./GallerySection";
import HoverSection from "./HoverSection";
import OurServices from "../OurServices";
import TeamSection from "../TeamSection";
import TestimonialSection from "../TestimonialSection";
import ContactSection from "../ContactSection";
import FooterSection from "../FooterSection";
import LightingSection from "./LightingSection";
import ResponsiveMenu from "../PopupComponent/ResponsiveMenu";


const LandingPage = () => {

  return (
    <>
      <NavbarSection />
      <HeroSection />
      <ContentSection />
      <GallerySection />
      <HoverSection />
      <LightingSection />
      <OurServices />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
      <FooterSection />
      <ResponsiveMenu />
    </>
  );
};

export default LandingPage;
