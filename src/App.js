import "./App.css";
import { useSpring, animated, config } from "react-spring";
import React, { Component } from "react";
import { Helmet } from "react-helmet";

const App = () => {
  const nameAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(100%,0vh,0)" },
    to: { opacity: 1, transform: "translate3d(0%,50vh,0)" },
  });
  const menuAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(-100%,85vh,0)" },
    to: { opacity: 1, transform: "translate3d(0%,85vh,0)" },
  });
  return (
    <div>
      <Helmet>
        <style>{"body { background-color: black; overflow-x: hidden; }"}</style>
      </Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      ></link>
      <animated.div id="gif">
        <img
          className="gif"
          src="http://5b0988e595225.cdn.sohucs.com/images/20180906/ac2ca14b0ee24ba1834430e25a384ae7.gif"
        ></img>
      </animated.div>
      <animated.div style={nameAnimation} id="main">
        <h1 className="nameText">Jasper Leung</h1>
      </animated.div>
      <animated.div style={menuAnimation} id="menu">
        <h1 className="homeText">Home</h1>
        <h1 className="aboutText">About</h1>
        <h1 className="projectsText">Projects</h1>
        <h1 className="contactText">Contact</h1>
      </animated.div>
    </div>
  );
};

export default App;
