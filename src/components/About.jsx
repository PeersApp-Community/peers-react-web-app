import React from "react";
import { AboutFlex, Section,  Grid, Text } from "./styles/learnStyles";
import Group1 from "../Images/Group 1.png";
import Group6 from "../Images/Group 6.png";

import Group7 from "../Images/Group 7.png";
import { BsFillRecordCircleFill } from "react-icons/bs";


const About = () => {
  return (
    <Section mt="5%">
      <Grid>
        <h3>About Us</h3>
        {/* <br /> */}
        {/* <AboutFlex>
          <img src={Group1} alt="" /> 
        <AboutFlex smMt="100px">
          <img src={Group1} alt="" />
 */}

        <AboutFlex  smHeight="auto" fd="column">
          
          <Text>
            <h4>
              Learn | Network | Redefine <br />
              <em> Your School Experience</em>

            </h4>
            <p>
              The app consists of an Inbuilt library. It also helps with
              schedule planning and it stores all data on the server so you
              don't have to worry about losing your information.
            </p>
            {/* <Button bg="#0A4076" color="#fff">
              Learn More
            </Button> */}

            <br />
            <br />
            <br />
            <div className="imgDiv">
              <img src={Group1} alt="" />
              <img src={Group6} alt="" />
              <img src={Group7} alt="" />
            </div>
            <br />
            <br />
            <br />
          </Text>
         
        </AboutFlex>
        <Grid id="faq"></Grid>
        
      </Grid>

      {/* <AboutFlex smHeight="auto" fd="column-reverse">
          <Text>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> A
              iure pariatur placeat odio cum ut est accusamus totam.{" "}
            </p>
            <Button bg="#0A4076" color="#fff">
              Learn More
            </Button>
          </Text>

        </AboutFlex>

        <AboutFlex smHeight="auto" fd="column">
          <Text>

        
          
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> A
              iure pariatur placeat odio cum ut est accusamus totam.{" "}
            </p>
            <Button bg="#0A4076" color="#fff">
              Learn More
            </Button>
          </Text>

        </AboutFlex> */}
    

      <BsFillRecordCircleFill className="circle1" />
      <BsFillRecordCircleFill className="circle2" />
    

    </Section >
  );
};

export default About;
