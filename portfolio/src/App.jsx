import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const [isDark, setIsDark] = useState(true);
  const root = document.documentElement;

  useEffect(() => {
    const savedTheme = localStorage.getItem("dark");
    setIsDark(savedTheme === null ? true : savedTheme === "true");
  }, []);

  useEffect(() => {
    if (isDark) {
      root.style.setProperty("--bg", "#0c0c0c");
      root.style.setProperty("--color", "#ffffff");
    } else {
      root.style.setProperty("--bg", "#ffffff");
      root.style.setProperty("--color", "#0c0c0c");
    }
    localStorage.setItem("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <Router>
      <main className="w-full sm:h-[45rem] h-[70rem]">
        <Header toggleTheme={toggleTheme} isDark={isDark} />
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/portfolio" element={<Portfolio isDark={isDark} />} />
          <Route path="/about" element={<About isDark={isDark} />} />
          <Route path="/contact" element={<Contact isDark={isDark} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
