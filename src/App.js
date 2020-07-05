import "./App.css";
import { useSpring, animated, config } from "react-spring";
import React, { Component } from "react";
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

  const [
    { color, backgroundColor, paddingLeft, paddingRight, paddingBottom },
    set,
  ] = useSpring(() => ({
    color: "#000",
    backgroundColor: "#fff",
    paddingLeft: "3%",
    paddingRight: "36.5%",
    paddingBottom: "1%",
  }));

  const hover = (id) => {
    console.log("hover");
    document.getElementById(id).style.color = "#000";
    document.getElementById(id).style.background = "#fff";
  };

  const leave = (id) => {
    console.log("leave");
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
          onselectstart="return false"
          title="Click Me! :) :) :)"
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
        <h1
          className="homeText"
          id="home"
          onMouseEnter={() => hover("home")}
          onMouseLeave={() => leave("home")}
        >
          Home
        </h1>
        <h1
          className="aboutText"
          id="about"
          onMouseEnter={() => hover("about")}
          onMouseLeave={() => leave("about")}
        >
          About
        </h1>
        <h1
          className="projectsText"
          id="projects"
          onMouseEnter={() => hover("projects")}
          onMouseLeave={() => leave("projects")}
        >
          Projects
        </h1>
        <h1
          className="contactText"
          id="contact"
          onMouseEnter={() => hover("contact")}
          onMouseLeave={() => leave("contact")}
        >
          Contact
        </h1>
      </animated.div>
    );
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
      {displayGif()}
      {displayName()}
      {displayMenu()}
    </div>
  );
};

export default App;
