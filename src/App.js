import "./App.css";
import { useSpring, animated, config } from "react-spring";
import React, { Component, useState } from "react";
import { Helmet } from "react-helmet";

const App = () => {
  var colorNum = 1;
  const nameAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(100%,0vh,0)" },
    to: { opacity: 1, transform: "translate3d(0%,47vh,0)" },
  });

  const menuAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(-100%,85vh,0)" },
    to: { opacity: 1, transform: "translate3d(0%,85vh,0)" },
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const [
    { color, backgroundColor, paddingLeft, paddingRight, paddingBottom },
    set,
  ] = useSpring(() => ({
    color: "#000",
    backgroundColor: "#fff",
    paddingLeft: "3%",
    paddingRight: "11%",
    paddingBottom: "1%",
  }));

  const [isToggled, setToggle] = useState(false);
  const [isToggled2, setToggle2] = useState(false);
  const [isToggled3, setToggle3] = useState(false);
  const [isToggled4, setToggle4] = useState(false);

  const expand = useSpring({
    fontSize: isToggled ? "3vw" : "2vw",
  });
  const expand2 = useSpring({
    fontSize: isToggled2 ? "3vw" : "2vw",
  });
  const expand3 = useSpring({
    fontSize: isToggled3 ? "3vw" : "2vw",
  });
  const expand4 = useSpring({
    fontSize: isToggled4 ? "3vw" : "2vw",
  });

  const hover = (id) => {
    document.getElementById(id).style.color = "#000";
    document.getElementById(id).style.background = "#fff";
  };

  const leave = (id) => {
    document.getElementById(id).style.color = "#fff";
    document.getElementById(id).style.background = "#000";
  };

  const displayGif = () => {
    return (
      <animated.div id="gif">
        <img
          className="gif"
          src="http://5b0988e595225.cdn.sohucs.com/images/20180906/ac2ca14b0ee24ba1834430e25a384ae7.gif"
        ></img>
      </animated.div>
    );
  };

  const displayName = () => {
    return (
      <animated.div style={nameAnimation} id="main">
        <h1
          className="nameText"
          title="Click Me! :)"
          onClick={() => {
            colorNum += 1;
            if (colorNum === 1) {
              set({
                color: "#000",
                backgroundColor: "#fff",
              });
            } else if (colorNum === 2) {
              set({
                color: "#fff",
                backgroundColor: "#000",
              });
            } else if (colorNum === 3) {
              set({
                color: "#e54ed0",
                backgroundColor: "	#00076f",
              });
            } else if (colorNum === 4) {
              set({
                color: "#440BD4",
                backgroundColor: "#FF2079",
              });
            } else if (colorNum === 5) {
              set({
                color: "#D1DE36",
                backgroundColor: "#8B2A90",
              });
              colorNum = 0;
            }
          }}
        >
          <animated.span
            style={{
              color,
              backgroundColor,
              paddingLeft,
              paddingRight,
              paddingBottom,
            }}
          >
            Jasper Leung
          </animated.span>
        </h1>
      </animated.div>
    );
  };

  const displayMenu = () => {
    return (
      <animated.div style={menuAnimation} id="menu">
        <a href="home">
          <animated.h1
            className="homeText"
            id="home"
            style={expand}
            href="Home"
            onMouseEnter={() => {
              setToggle(!isToggled);
              hover("home");
            }}
            onMouseLeave={() => {
              setToggle(!isToggled);
              leave("home");
            }}
          >
            Home
          </animated.h1>
        </a>
        <a href="about">
          <animated.h1
            className="aboutText"
            id="about"
            style={expand2}
            onMouseEnter={() => {
              setToggle2(!isToggled2);
              hover("about");
            }}
            onMouseLeave={() => {
              setToggle2(!isToggled2);
              leave("about");
            }}
          >
            About
          </animated.h1>
        </a>
        <a href="projects">
          <animated.h1
            className="projectsText"
            id="projects"
            style={expand3}
            onMouseEnter={() => {
              setToggle3(!isToggled3);
              hover("projects");
            }}
            onMouseLeave={() => {
              setToggle3(!isToggled3);
              leave("projects");
            }}
          >
            Projects
          </animated.h1>
        </a>
        <a href="contact">
          <animated.h1
            className="contactText"
            id="Contact"
            style={expand4}
            onMouseEnter={() => {
              setToggle4(!isToggled4);
              hover("Contact");
            }}
            onMouseLeave={() => {
              setToggle4(!isToggled4);
              leave("Contact");
            }}
          >
            Contact
          </animated.h1>
        </a>
      </animated.div>
    );
  };

  const displayAbout = () => {
    return (
      <animated.div style={fadeIn}>
        <h1 id="aboutHeader" className="aboutHeader">
          About Me
        </h1>
        <p className="aboutMe">
          I am a 3rd year Software Engineering student studying at McMaster
          University, with an interest in full stack development.
        </p>
        <h1 id="skillsHeader" className="skillsHeader">
          Technical Skills
        </h1>
        <p className="skills">
          Languages: Javascript, CSS, HTML, ECMAScript, Node.js, SQL, Java, C,
          Python, C#, Bash, Arduino, NASM assembly language
          <br></br>
          Technologies: Git, React, RESTful web services, SQL, Bootstrap,
          Firebase, Heroku, Android Studio, Ubuntu, Linux, Photoshop
        </p>
        <h1 className="educationHeader">Education</h1>
        <p className="education">
          McMaster University – Software Engineering CO-OP – B.Eng. (2018-2023)
        </p>
        <h1 className="hobbiesHeader">Hobbies</h1>
        <p className="hobbies">
          Working on side projects, reading, playing video games, making music
        </p>
      </animated.div>
    );
  };

  const displayContact = () => {
    console.log("contact");
    return (
      <animated.div style={fadeIn}>
        <a
          href="https://github.com/JasperLeungGit"
          title="Click here to visit my GitHub profile"
        >
          <img
            className="gitIcon"
            src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/github-512.png"
          />
          <p className="gitLink">GitHub: https://github.com/JasperLeungGit</p>
        </a>
        <a
          href="https://www.linkedin.com/in/jasper-leung-9244b4170/"
          title="Click here to visit my LinkedIn profile"
        >
          <img
            className="linkedinIcon"
            src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/linkedin-512.png"
          />
          <p className="linkedinLink">
            LinkedIn: https://www.linkedin.com/in/jasper-leung-9244b4170/
          </p>
        </a>
        <img
          className="mailIcon"
          src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/email-512.png"
        />
        <p className="mailLink">Email: jasper.leung123@gmail.com</p>
      </animated.div>
    );
  };

  const display = () => {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );
    if (href === "" || href === "home") {
      return (
        <div>
          {displayGif()}
          {displayName()}
          {displayMenu()}
        </div>
      );
    } else if (href === "about") {
      return (
        <div>
          {displayAbout()}
          {displayMenu()}
        </div>
      );
    } else if (href === "contact") {
      return (
        <div>
          {displayContact()}
          {displayMenu()}
        </div>
      );
    } else {
      return (
        <div>
          {displayGif()}
          {displayName()}
          {displayMenu()}
        </div>
      );
    }
  };

  return (
    <div>
      <Helmet>
        <style>{"body { background-color: black; overflow-x: hidden; }"}</style>
      </Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      ></link>
      {display()}
    </div>
  );
};

export default App;
