import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Education from "./Pages/Education/Education.jsx";
import Skills from "./Pages/Skills/Skills.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import Certificates from "./Pages/Certificates/Certificates.jsx";
import SocialLinks from "./Components/SocialLinks/SocialLinks.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar />
      <hr />
      <Routes>
        <Route
          path="/"
          element={<Home toggleTheme={toggleTheme} darkMode={darkMode} />}
        />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <hr />
      <SocialLinks />
    </>
  );
}

export default App;
