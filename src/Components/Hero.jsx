// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import "./Hero.css"; // Or Tailwind classes

const Hero = () => {
  const [buttonText, setButtonText] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Fetch JSON data
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const updateText = () => {
          setButtonText(
            windowWidth <= 768
              ? data.hero_section.mobile_btn_text
              : data.hero_section.desktop_btn_text
          );
        };
        updateText(); // Initial text update
        // Update text when resizing
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
          updateText();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize); // Cleanup
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, [windowWidth]);

  return (
    <div className="hero">
      <h1 className="hero-title">Welcome to Our Platform</h1>
      <p className="hero-subtitle">Discover amazing opportunities today.</p>
      <button className="cta-button">{buttonText || "Loading..."}</button>
    </div>
  );
};

export default Hero;
