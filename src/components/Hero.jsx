import React from "react";
import { Container, Flex, HeroImg, Grid } from "./styles/learnStyles";
import Group1 from "../Images/Group 1.png";
import Group3 from "../Images/Group 3.png";
import Group6 from "../Images/Group 6.png";
import Google from "../Images/Google_Play_Store_badge_EN.svg.png";
import apple from "../Images/apple-store.png";
const Hero = () => {
  return (
    <Container id="home" height="80vh">
      <Grid padding="33% 0% 0% 0%">
        <h3>Peers App</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Ad
          consequuntur, earum maiores facilis saepe ratione.{" "}
        </p>
        <HeroImg>
          <img src={Group1} alt="" />
          <img src={Group3} alt="" />
          <img src={Group6} alt="" />
        </HeroImg>
      </Grid>

      <Flex padding="3% 0%">
        <img src={Google} alt="" />
        <img src={apple} alt="" />
      </Flex>

      <Container height="80vh" heightSM="100%">
        <Grid padding="33% 0% 0% 0%">
          <h3>Peers App</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Ad
            consequuntur, earum maiores facilis saepe ratione.{" "}
          </p>
          <HeroImg>
            <img src={Group1} alt="" />
            <img src={Group3} alt="" />
            <img src={Group6} alt="" />
          </HeroImg>
        </Grid>

        <Flex padding="3% 0%">
          <img src={Google} alt="" />
          <img src={apple} alt="" />
        </Flex>
      </Container>
    </Container>
  );
};

export default Hero;
