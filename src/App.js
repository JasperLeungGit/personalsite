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

  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

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
    fontSize: isToggled ? "5vh" : "3.5vh",
  });
  const expand2 = useSpring({
    fontSize: isToggled2 ? "5vh" : "3.5vh",
  });
  const expand3 = useSpring({
    fontSize: isToggled3 ? "5vh" : "3.5vh",
  });
  const expand4 = useSpring({
    fontSize: isToggled4 ? "5vh" : "3.5vh",
  });

  const hover = (id) => {
    document.getElementById(id).style.color = "#000";
    document.getElementById(id).style.background = "#fff";
  };

  const leave = (id) => {
    document.getElementById(id).style.color = "#fff";
    document.getElementById(id).style.background = "#000";
  };

  const leaveProject = (id) => {
    document.getElementById(id).style.color = "#000";
    document.getElementById(id).style.background = "#fff";
  };

  const hoverProject = (id) => {
    document.getElementById(id).style.color = "#fff";
    document.getElementById(id).style.background = "#5ce080";
    document.getElementById(id).style.border = "#fff";
  };

  const displayGif = () => {
    return (
      <animated.div id="gif">
        <img className="gif" src="images/whitehole.gif"></img>
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
          <br></br>I am a 3rd year Software Engineering student studying at
          McMaster University, with an interest in full stack development.
        </p>
        <h1 id="skillsHeader" className="skillsHeader">
          Technical Skills
        </h1>
        <p className="skills">
          <br></br>
          Languages: Javascript, CSS, HTML, ECMAScript, Node.js, SQL, Java, C,
          Python, C#, Bash, Arduino, NASM assembly language
          <br></br>
          <br></br>
          Technologies: Git, React, RESTful web services, SQL, Bootstrap,
          Firebase, Heroku, Android Studio, Ubuntu, Linux, Photoshop
        </p>
        <h1 className="educationHeader">Education</h1>
        <p className="education">
          <br></br>
          McMaster University – Software Engineering CO-OP – B.Eng. (2018-2023)
        </p>
        <h1 className="hobbiesHeader">Hobbies</h1>
        <p className="hobbies">
          <br></br>
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
        </a>
        <a
          href="https://www.linkedin.com/in/jasper-leung-9244b4170/"
          title="Click here to visit my LinkedIn profile"
        >
          <img
            className="linkedinIcon"
            src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/linkedin-512.png"
          />
        </a>
        <a
          href="mailto:jasper.leung123@gmail.com"
          title="Click here to send an email to me"
        >
          <img
            className="mailIcon"
            src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/email-512.png"
          />
        </a>
      </animated.div>
    );
  };

  const displayProjects = () => {
    console.log("projects");
    return (
      <animated.div style={fadeIn}>
        <animated.div className="projectContainer" style={fadeIn}>
          <div className="content">
            <animated.h1
              id="myAlbumList"
              className="projectListing"
              onMouseEnter={() => {
                hoverProject("myAlbumList");
              }}
              onMouseLeave={() => {
                leaveProject("myAlbumList");
              }}
            >
              MyAlbumList
            </animated.h1>
            <animated.h1
              id="redditWorldCup"
              className="projectListing"
              title="Click for more info about this project."
              onMouseEnter={() => {
                hoverProject("redditWorldCup");
                setDescription(
                  "A React web app which allows users to compare Reddit image posts in a bracket-style format."
                );
                setImage(
                  "http://5b0988e595225.cdn.sohucs.com/images/20180906/ac2ca14b0ee24ba1834430e25a384ae7.gif"
                );
              }}
              onMouseLeave={() => {
                leaveProject("redditWorldCup");
                setDescription("");
                setImage("");
              }}
            >
              Reddit World Cup
            </animated.h1>
            <animated.h1
              id="personalSite"
              className="projectListing"
              title="Click for more info about this project."
              onMouseEnter={() => {
                hoverProject("personalSite");
                setDescription(
                  "My personal site for showcasing my projects. You are using it right now."
                );
                setImage(
                  "http://5b0988e595225.cdn.sohucs.com/images/20180906/ac2ca14b0ee24ba1834430e25a384ae7.gif"
                );
              }}
              onMouseLeave={() => {
                leaveProject("personalSite");
                setDescription("");
                setImage("");
              }}
            >
              Personal Website
            </animated.h1>
            <animated.h1
              id="safeFoods"
              className="projectListing"
              title="Click for more info about this project."
              onMouseEnter={() => {
                hoverProject("safeFoods");
                setDescription(
                  "A Java swing app which lists the health violation and inspection history for LA restaurants. Made in collaboration with Mike Li, Dipendra Subedi, and Sanjula Ganepola."
                );
                setImage("images/safefoods.png");
              }}
              onMouseLeave={() => {
                leaveProject("safeFoods");
                setDescription("");
                setImage("");
              }}
            >
              SafeFoods
            </animated.h1>
            <animated.h1
              id="fibFractals"
              className="projectListing"
              title="Click for more info about this project."
              onMouseEnter={() => {
                hoverProject("fibFractals");
                setDescription(
                  "A C program which generates Fibonacci fractals from an inputted Fibonacci word."
                );
                setImage(
                  "http://5b0988e595225.cdn.sohucs.com/images/20180906/ac2ca14b0ee24ba1834430e25a384ae7.gif"
                );
              }}
              onMouseLeave={() => {
                leaveProject("fibFractals");
                setDescription("");
                setImage("");
              }}
            >
              Fibonacci Word Fractals
            </animated.h1>
            <animated.h1
              id="trafficAlarm"
              className="projectListing"
              title="Click for more info about this project."
              onMouseEnter={() => {
                hoverProject("trafficAlarm");
                setDescription(
                  "An Android alarm clock app which changes the alarm based on the traffic of the surrounding area. Made in collaboration with Alvin Chan and Anson Wan."
                );
                setImage(
                  "http://5b0988e595225.cdn.sohucs.com/images/20180906/ac2ca14b0ee24ba1834430e25a384ae7.gif"
                );
              }}
              onMouseLeave={() => {
                leaveProject("trafficAlarm");
                setDescription("");
                setImage("");
              }}
            >
              Traffic Alarm
            </animated.h1>

            <animated.h1
              id="boonk"
              className="projectListing"
              title="Click for more info about this project."
              onMouseEnter={() => {
                hoverProject("boonk");
                setDescription(
                  "A Unity fighting game. The best thing I will ever make."
                );
                setImage("/videos/boonk.gif");
              }}
              onMouseLeave={() => {
                leaveProject("boonk");
                setDescription("");
                setImage("");
              }}
            >
              Boonk
            </animated.h1>
          </div>
        </animated.div>
        <animated.div
          id="projectPreview"
          className="projectPreview"
          style={fadeIn}
        >
          <h1 className="projectDescriptionShort">{description}</h1>
          <img className="previewImage" src={image}></img>
        </animated.div>
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
          {displayProjects()}
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
