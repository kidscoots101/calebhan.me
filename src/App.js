import React, { useState } from "react";
import "./App.css";

function Home() {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
    marginTop: 30,
    marginBottom: 20
  };

  const normalImageStyle = {
    width: '100%',
    height: '50%',
    borderRadius: "10px"
  };

  const normalImageStyle1 = {
    width: '100%',
    height: '125%',
    borderRadius: "10px",
    marginTop: -150
  };

  const tallImageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: "10px",
  };

  const shortImageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: "10px"

  };

  return (
    <div style={{ alignSelf: "flex-start" }}>
      <p style={{ marginTop: 50 }}>hey, I'm caleb 👋</p>
      <text style={{ fontSize: 16, marginTop: 0, color: "#d4d4d4" }} t>
        I’m a student entrepreneur and debater. I currently lead my schools
        debate club and run a digital agency on the side, where I lead business
        strategy and development, gaining 42 new clients and 89 new website
        deployments in 2023 alone.
      </text>{" "}
      <br />
      <div style={gridContainerStyle}>
      <img src={require("./images/image1.png")} alt="Image 1" style={normalImageStyle} />
      <img src={require("./images/image2.png")} alt="Image 2" style={tallImageStyle} />
      <img src={require("./images/image3.png")} alt="Image 1" style={normalImageStyle} />
      <img src={require("./images/image4.png")} alt="Image 1" style={normalImageStyle1} />
      <img src={require("./images/image5.png")} alt="Image 3" style={shortImageStyle} />
      <img src={require("./images/image6.png")} alt="Image 1" style={normalImageStyle1}/>
    </div>
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

function Projects() {
  return (
    <div style={{ alignSelf: "flex-start" }}>
      <p style={{ marginTop: 50 }}>cool projects</p>
      <text style={{ fontSize: 18, marginTop: 0, color: "#d4d4d4" }} t>
        Webxial Digital is the first & only digital agency specialising in
        property and recognised by top real estate agencies.
      </text>{" "}
      <br />
      <div
        style={{
          backgroundColor: "rgb(163,163,163)",
          width: "100%",
          height: 0.5,
          marginTop: 30,
        }}
      />
      <div style={{ marginBottom: 10 }}>
        <p style={{ fontSize: 22, marginBottom: 5 }}>Webxial</p>
        <text style={{ fontSize: 15, color: "rgb(163 163 163)" }}>
          Business Strategy Director, 2021-present
        </text>{" "}
        <br />
        <p style={{ fontSize: 18, color: "#d4d4d4" }}>
          Webxial Digital is the first & only digital agency specialising in
          property and recognised by top real estate agencies.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "#d4d4d4",
          }}
        >
          • In 2021, I was promoted to Director of DevRel. We translated
          customer pain back into the product roadmap. We spoke at conferences,
          wrote blog posts, and created videos. We built open-source examples
          and contributed back to the product.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "#d4d4d4",
          }}
        >
          • In 2022, I was promoted to VP of Developer Experience, now also
          leading our product documentation team. My team created a new free
          course to teach Next.js, which had 17 million page views that year. I
          shipped. I partnered with our open-source community, collaborating
          with frameworks like Nuxt and Astro and sponsoring individuals and
          projects.
        </p>
        <p style={{ fontSize: 18, color: "#d4d4d4" }}>
          Since I joined Vercel in 2020, Next.js active developers have grown
          1000%, now at ~900k. Next.js is now a top 10 software project on
          GitHub with 121k stars. It's used by Walmart, ChatGPT, Starbucks,
          Okta, Datastax, Notion, and more.
        </p>
      </div>
      <div
        style={{
          backgroundColor: "rgb(163,163,163)",
          width: "100%",
          height: 0.5,
          marginTop: 30,
        }}
      />
      <div style={{ marginBottom: 10 }}>
        <p style={{ fontSize: 22, marginBottom: 5 }}>Webxial</p>
        <text style={{ fontSize: 15, color: "rgb(163 163 163)" }}>
          Business Strategy Director, 2021-present
        </text>{" "}
        <br />
        <p style={{ fontSize: 18, color: "#d4d4d4" }}>
          Webxial Digital is the first & only digital agency specialising in
          property and recognised by top real estate agencies.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "#d4d4d4",
          }}
        >
          • In 2021, I was promoted to Director of DevRel. We translated
          customer pain back into the product roadmap. We spoke at conferences,
          wrote blog posts, and created videos. We built open-source examples
          and contributed back to the product.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "#d4d4d4",
          }}
        >
          • In 2022, I was promoted to VP of Developer Experience, now also
          leading our product documentation team. My team created a new free
          course to teach Next.js, which had 17 million page views that year. I
          shipped. I partnered with our open-source community, collaborating
          with frameworks like Nuxt and Astro and sponsoring individuals and
          projects.
        </p>
        <p style={{ fontSize: 18, color: "#d4d4d4" }}>
          Since I joined Vercel in 2020, Next.js active developers have grown
          1000%, now at ~900k. Next.js is now a top 10 software project on
          GitHub with 121k stars. It's used by Walmart, ChatGPT, Starbucks,
          Okta, Datastax, Notion, and more.
        </p>
      </div>
      <div
        style={{
          backgroundColor: "rgb(163,163,163)",
          width: "100%",
          height: 0.5,
          marginTop: 30,
        }}
      />
      <div style={{ marginBottom: 10 }}>
        <p style={{ fontSize: 22, marginBottom: 5 }}>Webxial</p>
        <text style={{ fontSize: 15, color: "rgb(163 163 163)" }}>
          Business Strategy Director, 2021-present
        </text>{" "}
        <br />
        <p style={{ fontSize: 18, color: "#d4d4d4" }}>
          Webxial Digital is the first & only digital agency specialising in
          property and recognised by top real estate agencies.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "#d4d4d4",
          }}
        >
          • In 2021, I was promoted to Director of DevRel. We translated
          customer pain back into the product roadmap. We spoke at conferences,
          wrote blog posts, and created videos. We built open-source examples
          and contributed back to the product.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "#d4d4d4",
          }}
        >
          • In 2022, I was promoted to VP of Developer Experience, now also
          leading our product documentation team. My team created a new free
          course to teach Next.js, which had 17 million page views that year. I
          shipped. I partnered with our open-source community, collaborating
          with frameworks like Nuxt and Astro and sponsoring individuals and
          projects.
        </p>
        <p style={{ fontSize: 18, color: "#d4d4d4" }}>
          Since I joined Vercel in 2020, Next.js active developers have grown
          1000%, now at ~900k. Next.js is now a top 10 software project on
          GitHub with 121k stars. It's used by Walmart, ChatGPT, Starbucks,
          Okta, Datastax, Notion, and more.
        </p>
      </div>
    </div>
  );
}


function Volunteering() {
  return (
    <div style={{ alignSelf: "flex-start"}}>
      <p style={{marginTop: 50}}>volunteerism</p>
      <p style={{fontSize: 22}}>HackOMania Student Volunteer {" "}
      <text style={{ fontSize: 15, color: "rgb(163 163 163)", marginTop: 0 }}>
          2024
        </text>{" "}
      </p>
      <div style={{display: 'flex'}}>
        <div style={{flexDirection: 'row'}}>
      <p style={{fontSize: 18, color: '#d4d4d4'}}>
      • I served as a student helper during this hackathon, held at the Rakuten Office in Singapore.  
      </p> 
      <p style={{fontSize: 18, color: '#d4d4d4'}}>
        • I helped the team manage logistisc and distribute out food and swag during the Hackathon itself.
      </p>
      <p style={{fontSize: 18, color: '#d4d4d4'}}>
        • Overall was a fun experience, managed to network with numerous SST Alumni and heard about the innovative products teams made in 24 hours.
      </p>
      </div>

      <img src={ require('./hackomania.jpeg')} style={{width: "50%"}} />
      </div>

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
          <a href="#projects" onClick={() => handleNavigation("projects")}>
            projects
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
        {activeTab === "projects" && <Projects />}
        {activeTab === "volunteering" && <Volunteering />}
      </header>
    </div>
  );
}

export default App;
