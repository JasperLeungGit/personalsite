//I WILL ORGANIZE THIS CODE ONE OF THESE DAYS
//BUT RIGHT NOW IT WILL REMAIN A BRICK OF CODE :)
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
    config: config.molasses,
  });

  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [displayDetailed, setDetailed] = useState(false);
  const [title, setTitle] = useState("");
  const [description2, setDescription2] = useState(<div></div>);
  const [gitLink, setLink] = useState(<div></div>);

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
    setDescription("");
    setImage("");
    setVideo("");
  };

  const hoverProject = (id) => {
    document.getElementById(id).style.color = "#fff";
    document.getElementById(id).style.background = "#5ce080";
    document.getElementById(id).style.border = "#fff";
  };

  const resetProject = () => {
    setDescription("");
    setImage("");
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
          Languages (Web): Javascript, CSS, HTML, ECMAScript, SQL
          <br></br>
          <br></br>
          Technologies (Web): React, MongoDB, Mongoose, Node.js, Express,
          Passport.js, REST APIS, JWT tokens, OAuth, Bootstrap, Git, Firebase,
          Heroku
          <br></br>
          <br></br>
          Languages (Misc.): Java, C, Python, C#, Bash, Arduino, NASM assembly
          language
          <br></br>
          <br></br>
          Technologies (Misc.): Android Studio, Ubuntu, Linux, Photoshop,
          AutoCAD, Maya, Unity
        </p>
        <h1 className="educationHeader">Education</h1>
        <p className="education">
          <br></br>
          McMaster University – Software Engineering CO-OP – B.Eng. (2018-2023)
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
    if (displayDetailed === false)
      return (
        <animated.div style={fadeIn}>
          <animated.div
            id="projectList"
            className="projectContainer"
            style={fadeIn}
          >
            <div className="content">
              <animated.h1
                id="myAlbumList"
                className="projectListing"
                title="Click for more info about this project."
                onMouseEnter={() => {
                  hoverProject("myAlbumList");
                  setDescription(
                    "A MERN full stack web application where users can creat a list of albums they've listened to and rate them."
                  );
                  setImage("/videos/myalbumlist.gif");
                }}
                onMouseLeave={() => {
                  leaveProject("myAlbumList");
                }}
                onClick={() => {
                  setVideo(
                    "https://www.youtube.com/embed/JQohXRN3OBg?controls=0"
                  );
                  setImage("");
                  setTitle("My Album List");
                  setDetailed(true);
                  setDescription2(
                    <div>
                      <animated.p style={fadeIn} className="projectDescription">
                        A MERN full stack web application where users can create
                        a list of albums they've listened to, and give those
                        albums ratings and reviews.
                        <br></br>
                        <br></br>
                        Technologies Used : Javascript, React, HTML, CSS,
                        Bootstrap, Itunes API, MongoDB, Mongoose, Node.js,
                        Express, Passport.js, Firebase
                        <br></br>
                        <br></br>
                        What I Did/Accomplished: Music tastes is always a topic
                        of discussion for my friends and I, so I wanted to make
                        an app which let us do that easily. I created a React
                        app which communicated with the backend code to provide
                        user authentication and allow users to edit their list.
                        I also used Bootstrap and the Itunes API to create a
                        responsive and user-friendly album list. Within the
                        backend, I created routes which would handle calls from
                        the frontend and return data from the MongoDB database.
                        Also generated JWT Tokens to provide user
                        authentication.
                      </animated.p>
                    </div>
                  );
                  setLink("https://github.com/JasperLeungGit/MyAlbumList");
                }}
              >
                My Album List
              </animated.h1>
              <animated.h1
                id="redditWorldCup"
                className="projectListing"
                title="Click for more info about this project."
                onMouseEnter={() => {
                  hoverProject("redditWorldCup");
                  setDescription(
                    "A front-end React web app which allows users to compare Reddit image posts in a bracket-style format."
                  );
                  setImage("/videos/redditworldcup.gif");
                }}
                onMouseLeave={() => {
                  leaveProject("redditWorldCup");
                }}
                onClick={() => {
                  setImage("/videos/redditworldcup.gif");
                  setTitle("Reddit World Cup");
                  setDetailed(true);
                  setDescription2(
                    <div>
                      <animated.p style={fadeIn} className="projectDescription">
                        A front-end React web app which allows users to compare
                        Reddit image posts in a bracket-style format.
                        <br></br>
                        <br></br>
                        Technologies Used : Javascript, React, HTML, CSS,
                        Bootstrap, ECMAScript, Reddit API, Firebase,
                        asynchronous programming
                        <br></br>
                        <br></br>
                        What I Did/Accomplished: I created my first 'real' web
                        app using React, and made it responsive and visually
                        pleasing. I also used asynchronous programming to create
                        an algorithm which fetches image posts from Reddit, and
                        gained experience with RESTFul APIs.
                      </animated.p>
                    </div>
                  );
                  setLink("https://github.com/JasperLeungGit/MyAlbumList");
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
                  setImage("/videos/personalsite.gif");
                }}
                onMouseLeave={() => {
                  leaveProject("personalSite");
                }}
                onClick={() => {
                  setImage("/videos/personalsite.gif");
                  setTitle("Personal Site");
                  setDetailed(true);
                  setDescription2(
                    <div>
                      <animated.p style={fadeIn} className="projectDescription">
                        My personal site for showcasing my projects. You are
                        using it right now.
                        <br></br>
                        <br></br>
                        Technologies Used : Javascript, React, react-spring,
                        HTML, CSS, Firebase,
                        <br></br>
                        <br></br>
                        What I Did/Accomplished: I created a website with a
                        focus on aesthetics/responsiveness in order to improve
                        my skills in those areas. I also worked with the
                        react-spring animations library for the first time, and
                        learned how to perform basic animations with it.
                      </animated.p>
                    </div>
                  );
                  setLink("https://github.com/JasperLeungGit/personalsite");
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
                    "A Java swing app which lists the health violation and inspection history for LA restaurants, and gives them scores based on their safety. Implements various sorting, searching, and graph algorithms.  Made in collaboration with Mike Li, Dipendra Subedi, and Sanjula Ganepola for the SFWRENG 2XB3 Course."
                  );
                  setImage("images/safefoods.png");
                }}
                onMouseLeave={() => {
                  leaveProject("safeFoods");
                }}
                onClick={() => {
                  setImage("images/safefoods.png");
                  setTitle("SafeFoods");
                  setDetailed(true);
                  setDescription2(
                    <div>
                      <animated.p style={fadeIn} className="projectDescription">
                        A Java swing app which lists the health violation and
                        inspection history for LA restaurants, and gives them
                        scores based on their safety. Implements various
                        sorting, searching, and graph algorithms. Made in
                        collaboration with Mike Li, Dipendra Subedi, and Sanjula
                        Ganepola for the SFWRENG 2XB3 Course.
                        <br></br>
                        <br></br>
                        Technologies Used : Java, Swing
                        <br></br>
                        <br></br>
                        What I Did/Accomplished: I created a modified version of
                        the binary search algorithm in Java so I could search
                        through a dataset containing the health and inspection
                        histories for restaurants in LA. We received a grade of
                        90 for this project.
                      </animated.p>
                    </div>
                  );
                  setLink("https://github.com/JasperLeungGit/SafeFoods");
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
                  setImage("images/fib25.jpg");
                }}
                onMouseLeave={() => {
                  leaveProject("fibFractals");
                }}
                onClick={() => {
                  setImage("images/fib25.jpg");
                  setTitle("Fibbonaci Fractals");
                  setDetailed(true);
                  setDescription2(
                    <div>
                      <animated.p style={fadeIn} className="projectDescription">
                        A C program which generates Fibonacci fractals from an
                        inputted Fibonacci word.
                        <br></br>
                        <br></br>
                        Technologies Used : C<br></br>
                        <br></br>
                        What I Did/Accomplished: Created an optimized algorithm
                        in C which generated fractals for up to the 30th
                        Fibonacci Word.
                      </animated.p>
                    </div>
                  );
                  setLink(
                    "https://github.com/JasperLeungGit/Fibonacci-Word-Fractals"
                  );
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
                    "An Android alarm clock app which changes the alarm based on the traffic of the surrounding area. Made in collaboration with Alvin Chan and Anson Wan during the THacks2 hackathon."
                  );
                  setImage("/images/trafficalarm.png");
                }}
                onMouseLeave={() => {
                  leaveProject("trafficAlarm");
                }}
                onClick={() => {
                  setImage("/images/trafficalarm.png");
                  setTitle("Traffic Alarm");
                  setDetailed(true);
                  setDescription2(
                    <div>
                      <animated.p style={fadeIn} className="projectDescription">
                        An Android alarm clock app which changes the alarm based
                        on the traffic of the surrounding area. Made in
                        collaboration with Alvin Chan and Anson Wan during the
                        THacks2 hackathon.
                        <br></br>
                        <br></br>
                        Technologies Used : Java, Android Studio, Google Maps
                        API<br></br>
                        <br></br>
                        What I Did/Accomplished: Worked with Anson to create an
                        alarm clock Android app with a working GUI, and helped
                        create the algorithm which set the time for the alarm
                        based on the traffic data collected from the Google Maps
                        API.
                      </animated.p>
                    </div>
                  );
                  setLink("https://github.com/JasperLeungGit/TrafficAlarm");
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
                }}
                onClick={() => {
                  setImage("/videos/boonk.gif");
                  setTitle("Boonk");
                  setDetailed(true);
                  setDescription2(
                    <div>
                      <animated.p style={fadeIn} className="projectDescription">
                        A Unity fighting game. The best thing I will ever make.
                        <br></br>
                        <br></br>
                        Technologies Used : Unity, C#, Maya
                        <br></br>
                        <br></br>
                        What I Did/Accomplished: I used C# to write scripts for
                        the models in the game, and modified the existing Unity
                        physics engine. Also, I created all of the models for
                        the game myself in Maya. and used Unity to put
                        everything together. Creating this game helped me
                        achieve my childhood dream of making a video game by
                        myself d:).
                      </animated.p>
                    </div>
                  );
                  setLink("https://github.com/JasperLeungGit/Boonk");
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
            if (!)
          </animated.div>
        </animated.div>
      );
    else
      return (
        <animated.div style={fadeIn} id="projectDescription">
          <animated.h1
            id="back"
            style={fadeIn}
            className="back"
            onMouseEnter={() => {
              hover("back");
            }}
            onMouseLeave={() => {
              leave("back");
            }}
            onClick={() => {
              console.log("clicked");
              setDetailed(false);
              resetProject();
            }}
          >
            Back to Projects
          </animated.h1>
          <animated.h1 style={fadeIn} className="projectHeader">
            {title}
          </animated.h1>
          <animated.h1 style={fadeIn} className="projectDescription">
            {description2}
          </animated.h1>
          <iframe className="video" src={video}></iframe>
          <img className="image1" src={image}></img>
          <a href={gitLink} target="_blank">
            <animated.h1
              id="gitLink"
              style={fadeIn}
              className="gitLink"
              onMouseEnter={() => {
                hoverProject("gitLink");
              }}
              onMouseLeave={() => {
                hover("gitLink");
              }}
            >
              View this project on GitHub
            </animated.h1>
          </a>
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
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Raleway"
      ></link>
      {display()}
    </div>
  );
};

export default App;
