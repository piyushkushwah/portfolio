import React from 'react';
import LandingPage from './components/landingpage/landing';
import Skills from './components/skillsSection/skills';
import Project from './components/projectsSection/project';
import Contact from './components/contactForm/contact';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
