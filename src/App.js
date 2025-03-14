import React, { useState, useEffect } from "react";
import "./App.css";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gridGap: "10px",
    marginBottom: 20,
  };

  const imageStyleBase = {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  };

  const normalImageStyle = {
    ...imageStyleBase,
    height: isMobile ? "250px" : "75%",
  };

  const normalImageStyle1 = {
    ...imageStyleBase,
    height: isMobile ? "250px" : "125%",
    marginTop: isMobile ? "10px" : "-65px",
  };

  const tallImageStyle = {
    ...imageStyleBase,
    height: isMobile ? "300px" : "250px",
  };

  const shortImageStyle = {
    ...imageStyleBase,
    height: isMobile ? "150px" : "250px",
  };

  return (
    <div style={{ alignSelf: "flex-start" }}>
      <p style={{ marginTop: 50 }}>
        hey, I'm{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/caleb-han-792349235/"
          style={{ textDecoration: "underline", color: "white" }}
        >
          caleb
        </a>{" "}
        👋
      </p>
      <p style={{ fontSize: 16, marginTop: 0, color: "#d4d4d4" }}>
        An eager start-up enthusiast, making ideas turn into reality. As a
        goal-driven individual, I plan to launch my own start-up in the near
        future. Innovation and creativity fuel my passion for start-ups. I
        create software, for the better of society.
      </p>
      <br />
      <div style={gridContainerStyle}>
        <img
          src={require("./images/image1.png")}
          alt="Image 1"
          style={normalImageStyle}
        />
        <img
          src={require("./images/image2.png")}
          alt="Image 2"
          style={tallImageStyle}
        />
        <img
          src={require("./images/image3.png")}
          alt="Image 3"
          style={normalImageStyle}
        />
        <img
          src={require("./images/image4.png")}
          alt="Image 4"
          style={normalImageStyle1}
        />
        <img
          src={require("./images/image5.png")}
          alt="Image 5"
          style={shortImageStyle}
        />
        <img
          src={require("./images/image6.png")}
          alt="Image 6"
          style={normalImageStyle1}
        />
      </div>
    </div>
  );
}

function Competitions() {
  const competitions = [
    {
      image: require("./certificates/sstmun.png"),
      description:
        "Created an ecosystem to faciliate attendance taking within the 2024 SST MUN. Got a Certificate of Contribution.",
    },
    {
      image: require("./certificates/noi.jpg"),
      description:
        "My participation in the 2024 National Olympiad Informatics - in which I scored 211 points.",
    },
    {
      image: require("./certificates/eap.jpg"),
      description:
        "I have participated in the Early Access Program (EAP) by Affindi, utilising tools used for a holisitc identity online. I also gave suggestions and improvements to the technology.",
    },
    {
      image: require("./certificates/meta.jpg"),
      description:
        "Delving more into the technology sector, I signed up for a bootacamp by Meta to experiement with their AR Filter techonologies, where I coded my own Instagram Filter.",
    },
    {
      image: require("./certificates/perse.jpg"),
      description: "Perse Coding Team Challenge 2023",
    },
    {
      image: require("./certificates/impact.jpeg"),
      description:
        "Obtained a Certificate of Impact award at the Opportunity X 2023 Conference, where we preseneted about our science research projecto on the Investigation of the wine yeast on the fermentation on the different types of rice.",
    },
  ];

  const [selectedCompetition, setSelectedCompetition] = useState(null);

  const handleImageClick = (competition) => {
    setSelectedCompetition(competition);
  };

  const closeModal = () => {
    setSelectedCompetition(null);
  };

  return (
    <div style={{ alignSelf: "flex-start", marginTop: 50 }}>
      <p>Achievements</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px",
        }}
      >
        {competitions.map((comp, index) => (
          <img
            key={index}
            src={comp.image}
            alt={`Competition ${index + 1}`}
            style={{ width: "100%", cursor: "pointer" }}
            onClick={() => handleImageClick(comp)}
          />
        ))}
      </div>

      {selectedCompetition && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "500px",
              textAlign: "center",
            }}
          >
            <img
              src={selectedCompetition.image}
              alt="Certificate"
              style={{ width: "100%" }}
            />
            <p style={{ color: "black" }}>{selectedCompetition.description}</p>
            <button
              onClick={closeModal}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <div style={{ alignSelf: "flex-start" }}>
      <p style={{ marginTop: 50 }}>cool projects</p>
      <text style={{ fontSize: 18, marginTop: 0, color: "#d4d4d4" }} t>
        i've done a fair bit of projects, each with hundreds or even thousands
        of (active) users.
      </text>
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
        <p style={{ fontSize: 22, marginBottom: 5 }}>GrowCalth</p>
        <text style={{ fontSize: 15, color: "rgb(163 163 163)" }}>
          Founder/Lead Developer, 2022-present
        </text>{" "}
        <br />
        <img
          src={require("./growcalth.png")}
          style={{ height: 100, borderRadius: 13, marginTop: 10 }}
        />
        <p style={{ fontSize: 18, color: "#d4d4d4" }}>
          School-based fitness platform tracking students and staff physical
          activity levels. Integrated with the "house points" systems to
          incentivise healthy living.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "#d4d4d4",
          }}
        >
          • Started as just an idea in 2022, which lead to the official launch
          of the product in April 2024. Personally, I lead the Android
          developement of the app - integrating firebase configurations and the
          Google Fit API.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "#d4d4d4",
          }}
        >
          • Within the span of one week, we gained over 800 user sign-ups and
          millions of step counts accumulated by users. To date, we've got ~58
          million steps by our users, equivalent to the distance of walking from
          Singpaore to New York and back.
        </p>
        <p style={{ fontSize: 18, color: "#d4d4d4" }}>
          Available on both iOS App Store and Google Play Store.
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
        <p style={{ fontSize: 22, marginBottom: 5 }}>AttendINC/ExiSST</p>
        <text style={{ fontSize: 15, color: "rgb(163 163 163)" }}>
          Developer, 2023-present
        </text>{" "}
        <br />
        <img
          src={require("./exisst.png")}
          style={{ height: 100, borderRadius: 15, marginTop: 10 }}
        />
        <p style={{ fontSize: 18, color: "#d4d4d4" }}>
          Minimising manual work, maximising automation.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "#d4d4d4",
          }}
        >
          • Essentially, we took away to whole idea of manually taking
          attendance of students, automating the process allowing students to
          mark their own attendnace. How it works is that students login to
          their Google Account, scan a QR code, data is sent from their device
          to our server and their email is marked in a pre-configured Google
          Spreadsheet.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "#d4d4d4",
          }}
        >
          • There are 2 sides of this "ecosystem" - a Mac and a companion Web
          App. It involves prorieatary encryption algorithms and data transfer
          between servers. We "spoof-ed" the system such that it's not only safe
          and secure, but students won't be able to cheat the system in any way
          too.
        </p>
        <p style={{ fontSize: 18, color: "#d4d4d4" }}>
          This project has been used in many school events, such as the SST
          Model United Nations (MUN) and Student Congress. With over 1000 active
          users.
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
        <p style={{ fontSize: 22, marginBottom: 5 }}>FishML</p>
        <text style={{ fontSize: 15, color: "rgb(163 163 163)" }}>
          Developer, 2024
        </text>{" "}
        <br />
        <p style={{ fontSize: 18, color: "#d4d4d4" }}>
          Classification program to accurately identify diseases in fishes.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "#d4d4d4",
          }}
        >
          • Utilising Convolutional Neural Networks, we trained our model on
          large amounts of data to classify fishes into respective 'diseased' or
          'not diseased' classes. Obtained 88% accurate predictions rate.
        </p>
        <p style={{ fontSize: 18, color: "#d4d4d4" }}>
          Used for my 2024 Computing+ coursework submission and the Singpaore
          Science and Engineering Fair (SSEF) project.
        </p>
      </div>
    </div>
  );
}

function Volunteering() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      alignSelf: "flex-start",
      padding: "20px",
    },
    sectionTitle: {
      marginTop: 50,
      fontSize: "1.5rem",
    },
    eventTitle: {
      fontSize: "1.75rem",
      display: "flex",
      alignItems: "center",
      marginTop: "20px",
    },
    eventDate: {
      fontSize: "1rem",
      color: "rgb(163, 163, 163)",
      marginLeft: "10px",
    },
    flexRow: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "center" : "flex-start",
      marginTop: "20px",
    },
    textContainer: {
      flexDirection: "column",
      flexBasis: isMobile ? "100%" : "50%",
      marginBottom: isMobile ? "20px" : "0",
      marginRight: isMobile ? "0" : "10px",
    },
    description: {
      fontSize: "1rem",
      color: "#d4d4d4",
      marginBottom: "10px",
    },
    image: {
      width: isMobile ? "80%" : "50%",
      maxWidth: "400px",
      borderRadius: "10px",
      marginTop: isMobile ? "10px" : "0",
      marginLeft: isMobile ? "0" : "10px",
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.sectionTitle}>volunteerism</p>
      <p style={styles.eventTitle}>
        HackOMania Student Volunteer <span style={styles.eventDate}>2024</span>
      </p>
      <div style={styles.flexRow}>
        <div style={styles.textContainer}>
          <p style={styles.description}>
            • I served as a student helper during this hackathon, held at the
            Rakuten Office in Singapore.
          </p>
          <p style={styles.description}>
            • I helped the team manage logistics and distribute food and swag
            during the Hackathon itself.
          </p>
          <p style={styles.description}>
            • Overall was a fun experience, managed to network with numerous SST
            Alumni and heard about the innovative products teams made in 24
            hours.
          </p>
        </div>
        <img
          src={require("./hackomania.jpeg")}
          alt="HackOMania"
          style={styles.image}
        />
      </div>
      <p style={styles.eventTitle}>
        Speaker at Geekcamp <span style={styles.eventDate}>2023</span>
      </p>
      <div style={styles.flexRow}>
        <div style={styles.textContainer}>
          <p style={styles.description}>
            • Gave a talk at Geekcamp, sharing more about projects done by SST
            Inc and the engineering processes behind them.
          </p>
          <p style={styles.description}>
            • Learned more from other people attending the camp and gained
            confidence in public speaking skills.
          </p>
        </div>
        <img
          src={require("./geekcamp.png")}
          alt="Geekcamp"
          style={styles.image}
        />
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

  useEffect(() => {
    const hash = window.location.hash.substr(1);
    if (hash) {
      setActiveTab(hash);
    }
  }, []);

  const getLinkStyle = (tab) => ({
    fontWeight: "bold",
    color: activeTab === tab ? "#61dafb" : "white",
  });

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigation" style={{ marginTop: 60 }}>
          <a
            href="#home"
            onClick={() => handleNavigation("home")}
            style={getLinkStyle("home")}
          >
            home
          </a>
          <a
            href="#competitions"
            onClick={() => handleNavigation("competitions")}
            style={getLinkStyle("competitions")}
          >
            achievements
          </a>
          <a
            href="#projects"
            onClick={() => handleNavigation("projects")}
            style={getLinkStyle("projects")}
          >
            projects
          </a>
          <a
            href="#volunteering"
            onClick={() => handleNavigation("volunteering")}
            style={getLinkStyle("volunteering")}
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
