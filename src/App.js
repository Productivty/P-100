import React from "react";
import Header from "./Header";
import Bodyone from "./Intro";
import Contact from "./Contact";
import ProjectSection from "./ProjectSection";
import Blogs from "./Blogs";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

function App() {
  return (
    <div className="appLayout">
      <Header />
      <Bodyone />
      <ProjectSection />
      <Blogs />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
