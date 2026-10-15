import React, { useState, useEffect } from "react";
import "./App.css";
import growcalthShoe from "./growcalth-shoe.svg";

const SECTION_LINKS = [
  { id: "home", label: "home" },
  { id: "achievements", label: "achievements" },
  { id: "projects", label: "projects" },
  { id: "volunteering", label: "volunteering" },
];

const HASH_ALIASES = {
  competitions: "achievements",
};

function normalizeSectionId(sectionId) {
  if (!sectionId) {
    return "home";
  }

  const normalizedId = sectionId.replace("#", "");
  return HASH_ALIASES[normalizedId] || normalizedId;
}

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

  const contactLinkStyle = {
    color: "var(--text)",
    textDecoration: "underline",
    marginRight: 18,
    whiteSpace: "nowrap",
  };

  return (
    <div style={{ alignSelf: "flex-start" }}>
      <p style={{ marginTop: 24 }}>
        hey, I'm{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/caleb-han-792349235/"
          style={{ textDecoration: "underline", color: "var(--text)" }}
        >
          caleb
        </a>{" "}
        👋
      </p>
      <p style={{ fontSize: 16, marginTop: 0, color: "var(--muted)" }}>
        An eager start-up enthusiast, making ideas turn into reality. As a
        goal-driven individual, I plan to launch my own start-up in the near
        future. Innovation and creativity fuel my passion for start-ups. I
        create software, for the better of society.
      </p>
      <br />
      <div style={gridContainerStyle}>
        <img
          src={require("./images/image1.png")}
          alt=""
          style={normalImageStyle}
        />
        <img
          src={require("./images/image2.png")}
          alt=""
          style={tallImageStyle}
        />
        <img
          src={require("./images/image3.png")}
          alt=""
          style={normalImageStyle}
        />
        <img
          src={require("./images/image4.png")}
          alt=""
          style={normalImageStyle1}
        />
        <img
          src={require("./images/image5.png")}
          alt=""
          style={shortImageStyle}
        />
        <img
          src={require("./images/image6.png")}
          alt=""
          style={normalImageStyle1}
        />
      </div>
      <div style={{ marginTop: 35, marginBottom: 20 }}>
        <p style={{ fontSize: 18, marginBottom: 8 }}>contact</p>
        <div style={{ fontSize: 16, lineHeight: 1.8 }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/kidscoots"
            style={contactLinkStyle}
          >
            Telegram
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/caleb-han-792349235/"
            style={contactLinkStyle}
          >
            LinkedIn
          </a>
          <a href="mailto:caleb@growcalth.com" style={contactLinkStyle}>
            caleb@growcalth.com
          </a>
        </div>
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
    <div style={{ alignSelf: "flex-start", marginTop: 12 }}>
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
            zIndex: 100,
          }}
        >
          <div
            style={{
              backgroundColor: "var(--modal-bg)",
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
            <p style={{ color: "var(--modal-text)" }}>{selectedCompetition.description}</p>
            <button
              onClick={closeModal}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "var(--button-bg)",
                color: "var(--button-text)",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--button-hover)")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "var(--button-bg)")}
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
      <p style={{ marginTop: 12 }}>cool projects</p>
      <text style={{ fontSize: 18, marginTop: 0, color: "var(--muted)" }} t>
        i've done a fair bit of projects, each with hundreds or even thousands
        of (active) users.
      </text>
      <br />
      <div
        style={{
          backgroundColor: "var(--divider)",
          width: "100%",
          height: 0.5,
          marginTop: 30,
        }}
      />
      <div style={{ marginBottom: 10 }}>
        <p style={{ fontSize: 22, marginBottom: 5 }}>GrowCalth</p>
        <text style={{ fontSize: 15, color: "var(--subtle)" }}>
          Founder/Lead Developer, 2022-present
        </text>{" "}
        <br />
        <img
          src={growcalthShoe}
          alt="GrowCalth"
          style={{ height: 100, borderRadius: 13, marginTop: 10 }}
        />
        <p style={{ fontSize: 18, color: "var(--muted)" }}>
          School-based fitness platform tracking students and staff physical
          activity levels. Integrated with the "house points" systems to
          incentivise healthy living.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "var(--muted)",
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
            color: "var(--muted)",
          }}
        >
          • Within the span of one week, we gained over 800 user sign-ups and
          millions of step counts accumulated by users. To date, we've got ~58
          million steps by our users, equivalent to the distance of walking from
          Singpaore to New York and back.
        </p>
        <p style={{ fontSize: 18, color: "var(--muted)" }}>
          Available on both iOS App Store and Google Play Store.
        </p>
      </div>
      <div
        style={{
          backgroundColor: "var(--divider)",
          width: "100%",
          height: 0.5,
          marginTop: 30,
        }}
      />
      <div style={{ marginBottom: 10 }}>
        <p style={{ fontSize: 22, marginBottom: 5 }}>
          Do Vision-Language Models Perceive Visual Illusions?
        </p>
        <text style={{ fontSize: 15, color: "var(--subtle)" }}>
          Researcher/Developer, 2026
        </text>{" "}
        <br />
        <p style={{ fontSize: 18, color: "var(--muted)" }}>
          Research project evaluating how GPT-4o handles visual illusions, and
          whether fluent answers are actually grounded in visual evidence.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "var(--muted)",
          }}
        >
          • Built a 500-image evaluation dataset across contour, contrast-based,
          depth, geometric, and motion illusions, then tested categorisation,
          explanation quality, and pixel-level localisation.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "var(--muted)",
          }}
        >
          • Found that GPT-4o reached 76.8% categorisation accuracy overall,
          while still struggling with visual grounding, especially for depth and
          geometric illusions.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "var(--muted)",
          }}
        >
          • Proposed an Evidence-Constrained Illusion Evaluation workflow that
          makes the model localise visual evidence before producing a reasoning
          explanation.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="/visual.pdf"
          style={{ fontSize: 18, color: "var(--text)", textDecoration: "underline" }}
        >
          Read the report
        </a>
      </div>
      <div
        style={{
          backgroundColor: "var(--divider)",
          width: "100%",
          height: 0.5,
          marginTop: 30,
        }}
      />
      <div style={{ marginBottom: 10 }}>
        <p style={{ fontSize: 22, marginBottom: 5 }}>AttendINC/ExiSST</p>
        <text style={{ fontSize: 15, color: "var(--subtle)" }}>
          Developer, 2023-present
        </text>{" "}
        <br />
        <img
          src={require("./exisst.png")}
          alt="AttendINC and ExiSST"
          style={{ height: 100, borderRadius: 15, marginTop: 10 }}
        />
        <p style={{ fontSize: 18, color: "var(--muted)" }}>
          Minimising manual work, maximising automation.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "var(--muted)",
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
            color: "var(--muted)",
          }}
        >
          • There are 2 sides of this "ecosystem" - a Mac and a companion Web
          App. It involves prorieatary encryption algorithms and data transfer
          between servers. We "spoof-ed" the system such that it's not only safe
          and secure, but students won't be able to cheat the system in any way
          too.
        </p>
        <p style={{ fontSize: 18, color: "var(--muted)" }}>
          This project has been used in many school events, such as the SST
          Model United Nations (MUN) and Student Congress. With over 1000 active
          users.
        </p>
      </div>
      <div
        style={{
          backgroundColor: "var(--divider)",
          width: "100%",
          height: 0.5,
          marginTop: 30,
        }}
      />
      <div style={{ marginBottom: 10 }}>
        <p style={{ fontSize: 22, marginBottom: 5 }}>FishML</p>
        <text style={{ fontSize: 15, color: "var(--subtle)" }}>
          Developer, 2024
        </text>{" "}
        <br />
        <p style={{ fontSize: 18, color: "var(--muted)" }}>
          Classification program to accurately identify diseases in fishes.
        </p>
        <p
          style={{
            fontSize: 18,
            marginLeft: "20px",
            maxWidth: "90%",
            color: "var(--muted)",
          }}
        >
          • Utilising Convolutional Neural Networks, we trained our model on
          large amounts of data to classify fishes into respective 'diseased' or
          'not diseased' classes. Obtained 88% accurate predictions rate.
        </p>
        <p style={{ fontSize: 18, color: "var(--muted)" }}>
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
      marginTop: 12,
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
      color: "var(--subtle)",
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
      color: "var(--muted)",
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
  const [activeSection, setActiveSection] = useState("home");
  const [visibleSections, setVisibleSections] = useState(() => new Set(["home"]));
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "dark";
  });

  const markSectionVisible = (sectionId) => {
    setVisibleSections((currentSections) => {
      if (currentSections.has(sectionId)) {
        return currentSections;
      }

      const nextSections = new Set(currentSections);
      nextSections.add(sectionId);
      return nextSections;
    });
  };

  const handleNavigation = (event, sectionId) => {
    event.preventDefault();

    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
      return;
    }

    setActiveSection(sectionId);
    markSectionVisible(sectionId);
    window.history.pushState(null, "", `#${sectionId}`);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    targetSection.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const sectionId = normalizeSectionId(window.location.hash);
    if (!SECTION_LINKS.some((section) => section.id === sectionId)) {
      return;
    }

    setActiveSection(sectionId);
    markSectionVisible(sectionId);
    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    });
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = SECTION_LINKS.map((section) =>
      document.getElementById(section.id)
    ).filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setVisibleSections(new Set(SECTION_LINKS.map((section) => section.id)));
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markSectionVisible(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      }
    );

    sections.forEach((section) => revealObserver.observe(section));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    let lastTimestamp = performance.now();

    const updateActiveSection = (timestamp = performance.now()) => {
      const marker = Math.min(220, window.innerHeight * 0.36);
      const viewportHeight = window.innerHeight || 1;
      const documentElement = document.documentElement;
      const maxScroll = documentElement.scrollHeight - viewportHeight;
      const scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const elapsed = Math.max(16, timestamp - lastTimestamp);
      const scrollDelta = window.scrollY - lastScrollY;
      const scrollVelocity = Math.max(
        -1,
        Math.min(1, scrollDelta / elapsed / 1.25)
      );
      let nextSection = "home";
      let closestDistance = Number.POSITIVE_INFINITY;

      documentElement.style.setProperty(
        "--scroll-progress",
        Math.max(0, Math.min(1, scrollProgress)).toFixed(4)
      );
      documentElement.style.setProperty(
        "--scroll-velocity",
        scrollVelocity.toFixed(4)
      );
      documentElement.style.setProperty(
        "--scroll-speed",
        Math.abs(scrollVelocity).toFixed(4)
      );
      documentElement.style.setProperty(
        "--scroll-direction",
        scrollDelta >= 0 ? "1" : "-1"
      );

      SECTION_LINKS.forEach((section, index) => {
        const sectionElement = document.getElementById(section.id);
        if (!sectionElement) {
          return;
        }

        const sectionRect = sectionElement.getBoundingClientRect();
        const sectionCenter = sectionRect.top + sectionRect.height * 0.46;
        const viewportCenter = viewportHeight * 0.52;
        const sectionDistance = Math.max(
          -1,
          Math.min(1, (sectionCenter - viewportCenter) / viewportHeight)
        );
        const distanceAmount = Math.abs(sectionDistance);
        const containsMarker =
          sectionRect.top <= marker && sectionRect.bottom >= marker;
        const distance = Math.abs(sectionRect.top - marker);

        sectionElement.style.setProperty(
          "--section-parallax",
          `${(-sectionDistance * 96).toFixed(2)}px`
        );
        sectionElement.style.setProperty(
          "--section-x",
          `${(sectionDistance * (index % 2 === 0 ? -48 : 48)).toFixed(2)}px`
        );
        sectionElement.style.setProperty(
          "--section-scale",
          (1 - Math.min(distanceAmount * 0.055, 0.055)).toFixed(3)
        );
        sectionElement.style.setProperty(
          "--section-opacity",
          (1 - Math.min(distanceAmount * 0.12, 0.12)).toFixed(3)
        );
        sectionElement.style.setProperty(
          "--image-shift",
          `${(sectionDistance * 68).toFixed(2)}px`
        );
        sectionElement.style.setProperty(
          "--image-shift-fast",
          `${(sectionDistance * 96).toFixed(2)}px`
        );
        sectionElement.style.setProperty(
          "--image-shift-slow",
          `${(sectionDistance * 40).toFixed(2)}px`
        );
        sectionElement.style.setProperty(
          "--section-tilt",
          `${(sectionDistance * (index % 2 === 0 ? 2.1 : -2.1)).toFixed(2)}deg`
        );

        if (containsMarker || distance < closestDistance) {
          nextSection = section.id;
          closestDistance = containsMarker ? -1 : distance;
        }
      });

      setActiveSection(nextSection);
      lastScrollY = window.scrollY;
      lastTimestamp = timestamp;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const getLinkStyle = (sectionId) => ({
    fontWeight: "bold",
    color: activeSection === sectionId ? "var(--accent)" : "var(--text)",
  });

  const getSectionClassName = (sectionId) =>
    `page-section ${visibleSections.has(sectionId) ? "is-visible" : ""} ${
      activeSection === sectionId ? "is-active" : ""
    }`;

  return (
    <div className="App" data-theme={theme}>
      <div className="App-shell">
        <nav className="navigation" aria-label="Primary">
          <div className="navigation-links">
            {SECTION_LINKS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(event) => handleNavigation(event, section.id)}
                style={getLinkStyle(section.id)}
                aria-current={activeSection === section.id ? "page" : undefined}
              >
                {section.label}
              </a>
            ))}
          </div>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "light"}
          >
            <span className="theme-toggle__track" aria-hidden="true">
              <span className="theme-toggle__thumb" />
            </span>
            <span className="theme-toggle__symbol" aria-hidden="true">
              {theme === "dark" ? "☾" : "☀"}
            </span>
          </button>
        </nav>
        <div className="scroll-progress" aria-hidden="true" />
        <main className="site-sections">
          <section id="home" className={getSectionClassName("home")}>
            <div className="section-dynamic">
              <Home />
            </div>
          </section>
          <section id="achievements" className={getSectionClassName("achievements")}>
            <div className="section-dynamic">
              <Competitions />
            </div>
          </section>
          <section id="projects" className={getSectionClassName("projects")}>
            <div className="section-dynamic">
              <Projects />
            </div>
          </section>
          <section id="volunteering" className={getSectionClassName("volunteering")}>
            <div className="section-dynamic">
              <Volunteering />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
