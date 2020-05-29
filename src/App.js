import React from 'react';
import LandingPage from './components/landingpage/landing';
import Skills from './components/skillsSection/skills';
import Project from './components/projectsSection/project';
import Contact from './components/contactForm/contact';
import Icons from './components/footer/icons';

function App() {

  return (
    <div className="App">
      <LandingPage />
      <Skills />
      <Project />
      <Contact />
      <Icons />
    </div>
  );
}

export default App;
