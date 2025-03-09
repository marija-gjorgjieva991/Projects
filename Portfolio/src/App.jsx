import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Education from "./Pages/Education/Education.jsx";
import Skills from "./Pages/Skills/Skills.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import Certificates from "./Pages/Certificates/Certificates.jsx";

function App() {
  return (
    <>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </>
  );
}

export default App;
