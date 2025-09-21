import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import SkillsCarousel from "./components/SkillsCarousel";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import SpotlightSection from "./components/SpotlightSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import portfolioData from "./data/mock";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        
        <main>
          <section id="home">
            <HeroSection data={portfolioData.hero} />
          </section>
          
          <section id="core-competencies">
            <SkillsCarousel coreCompetencies={portfolioData.coreCompetencies} />
          </section>
          
          <section id="skills">
            <SkillsSection skills={portfolioData.skills} />
          </section>
          
          <section id="experience">
            <ExperienceSection experiences={portfolioData.experience} />
          </section>
          
          <section id="achievements">
            <SpotlightSection spotlights={portfolioData.spotlight} />
          </section>
          
          <section id="education">
            <EducationSection education={portfolioData.education} />
          </section>
          
          <ContactSection contactInfo={portfolioData.hero} />
          
          <Footer contactInfo={portfolioData.hero} />
        </main>
        
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;