import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import First from "./First";
import Second from "./Second";
import Skills from "./Skills";
import SkillOfFrontend from "./SkillOfFrontend";
import SkillOfBackend from "./SkillOfBackend";
import SkillOfDatabase from "./SkillOfDatabase";
import About from "./About";
import Contact from "./Contact";

function HomePage() {
  return (
    <>
      <First />
      <Second />
      <Skills />
      <SkillOfFrontend />
      <SkillOfBackend />
      <SkillOfDatabase />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;