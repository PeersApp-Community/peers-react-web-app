import React, { useState, useRef } from "react";
import texting from "../Images/Texting.svg";
import connect from "../Images/Onboarding 2.png";
import redefine from "../Images/Onboarding 3.png";
import { Container, Flex, Button } from "./styles/learnStyles";
import { Link } from "react-router-dom";
import GlobalStyle from '../GlobalStyle';

const Learning = () => {
  const [screen1, setScreen1] = useState(true);
  const [screen2, setScreen2] = useState(false);
  const [screen3, setScreen3] = useState(false);

  const Screen1 = () => {
    setScreen2(false);
    setScreen3(false);
    setScreen1(true);
  };

  const Screen2 = () => {
    setScreen2(true);
    setScreen3(false);
    setScreen1(false);
  };

  const Screen3 = () => {
    setScreen3(true);
    setScreen2(false);
    setScreen1(false);
  };

  return (
    <div>
      <Container display={`${screen1 ? "grid" : "none"}`}>
        <GlobalStyle />
        <img src={texting} alt="" />
        <h1>
          Learning <br /> Made Fun
        </h1>
        <Flex>
          <h3>Skip</h3>
          <Button onClick={() => Screen2()}>click here</Button>
        </Flex>
      </Container>

      <Container display={`${screen2 ? "grid" : "none"}`}>
        <GlobalStyle />
        <img src={connect} alt="" />
        <h1>
          Connect with <br /> friends around <br /> the world
        </h1>
        <Flex>
          <h3>Skip</h3>
          <Button onClick={() => Screen3()}>click here</Button>
        </Flex>
      </Container>

      <Container display={`${screen3 ? "grid" : "none"}`}>
        <GlobalStyle />
        <img src={redefine} alt="" />
        <h1>
          Redefine your <br /> learning <br /> experience
        </h1>
        <Flex>
          <h3>Skip</h3>
          <Button>click here</Button>
        </Flex>
      </Container>
    </div>
  );
};

export default Learning;
