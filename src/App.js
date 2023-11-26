import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Yangon" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://moe-hay-man-myint-portfolio-website.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Moe Hay Man Myint
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/moehaymanmyint/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          &{" "}
          <a
            href="https://precious-dieffenbachia-a1a385.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}