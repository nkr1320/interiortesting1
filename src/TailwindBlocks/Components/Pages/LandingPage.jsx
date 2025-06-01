import React from "react";
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

const LandingPage = () => {


    return (<>
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
    </>)
}

export default LandingPage;
