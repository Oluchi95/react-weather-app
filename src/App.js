import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodesfoundation.org/candidates/priscilla-ikeri-nigerian"
            target="_blank"
            rel="noopener noreferrer"
          >
            Priscilla Ikeri
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Oluchi95/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather-app-react-ei8g.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
