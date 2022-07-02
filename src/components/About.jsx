import React from "react";
import { AboutFlex, Section, Button, Grid, Text } from "./styles/learnStyles";
import Group1 from "../Images/Group 1.png";
import Group6 from "../Images/Group 6.png";
import Group7 from "../Images/Group 7.png";

const About = () => {
  return (
    <Section id="about" mt="26%">
      <Grid>
        <h3>About Us</h3>

        {/* <AboutFlex>
          <img src={Group1} alt="" /> */}

        <AboutFlex smMt="100px">
          <img src={Group1} alt="" />

          <Text>
            <h4>Learn</h4>
            <p>
              The app consists of an Inbuilt library. It also helps with
              schedule planning and it stores all data on the server so you
              don’t have to worry about losing your information.
            </p>
            <Button bg="#0A4076" color="#fff">
              Learn More
            </Button>
          </Text>
        </AboutFlex>

        <AboutFlex smMt="250px" reverse="column-reverse">
          <Text>
            <h4>Network</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> A
              iure pariatur placeat odio cum ut est accusamus totam.{" "}
            </p>
            <Button bg="#0A4076" color="#fff">
              Learn More
            </Button>
          </Text>
          <img src={Group7} alt="" />
        </AboutFlex>

        {/* 
        <AboutFlex>
          <img src={Group6} alt="" /> */}

        <AboutFlex smMt="300px">
          <img src={Group6} alt="" />

          <Text>
            <h4>
              Redefine Your <br /> School Experience
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> A
              iure pariatur placeat odio cum ut est accusamus totam.{" "}
            </p>
            <Button bg="#0A4076" color="#fff">
              Learn More
            </Button>
          </Text>
        </AboutFlex>
      </Grid>
    </Section>
  );
};

export default About;
