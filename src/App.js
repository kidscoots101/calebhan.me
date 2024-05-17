import React, { useState } from "react";
import "./App.css";

function Home() {
  return (
    <div style={{ alignSelf: "flex-start" }}>
      <p style={{ marginTop: 50 }}>hey, I'm asher 👋</p>
      <text style={{ fontSize: 16, marginTop: 0, color: "#d4d4d4" }} t>
        I’m a student entrepreneur and debater. I currently lead my schools
        debate club and run a digital agency on the side, where I lead business
        strategy and development, gaining 42 new clients and 89 new website
        deployments in 2023 alone.
      </text>{" "}
      <br />
      <text></text>
    </div>
  );
}

function Competitions() {
  return (
    <div style={{ alignSelf: "flex-start"}}>
      <p style={{marginTop: 50}}>competitions</p>
    </div>
  );
}

function WorkExperience() {
  return (
    <div style={{ alignSelf: "flex-start"}}>
      <p style={{ marginTop: 50 }}>my work</p>
      <text style={{fontSize: 15, marginTop: 0}}t>Webxial Digital is the first & only digital agency specialising in property and recognised by top real estate agencies.</text> <br />
      <div style={{backgroundColor: 'rgb(163,163,163)', width: "100%", height: 1, marginTop: 30}}/>
      <div style={{ marginBottom: 10 }}>
        <p style={{ fontSize: 22, marginBottom: 5 }}>Webxial</p>
        <text style={{ fontSize: 15, color: 'rgb(163 163 163)' }}>Business Strategy Director</text>  <br />
        <text style={{fontSize: 15}}t>Webxial Digital is the first & only digital agency specialising in property and recognised by top real estate agencies.</text> <br />
      </div>
    </div>
  );
}


function Volunteering() {
  return (
    <div style={{ alignSelf: "flex-start"}}>
      <p style={{marginTop: 50}}>volunteerism</p>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    window.location.hash = `#${tab}`;
  };

  React.useEffect(() => {
    const hash = window.location.hash.substr(1);
    if (hash) {
      setActiveTab(hash);
    }
  }, []);

  return (
    <div className="App" >
      <header className="App-header">
        <nav className="navigation" style={{marginTop: 60}}>
          <a href="#home" onClick={() => handleNavigation("home")}>
            home
          </a>
          <a
            href="#competitions"
            onClick={() => handleNavigation("competitions")}
          >
            competitions
          </a>
          <a href="#work" onClick={() => handleNavigation("work")}>
            work experience
          </a>
          <a
            href="#volunteering"
            onClick={() => handleNavigation("volunteering")}
          >
            volunteering
          </a>
        </nav>
        {activeTab === "home" && <Home />}
        {activeTab === "competitions" && <Competitions />}
        {activeTab === "work" && <WorkExperience />}
        {activeTab === "volunteering" && <Volunteering />}
      </header>
    </div>
  );
}

export default App;
