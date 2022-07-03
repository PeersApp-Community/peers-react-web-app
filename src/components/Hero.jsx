import React from "react";
import {
  Container,
  Flex,
  HeroImg,
  Grid,
  Button,
  Ulist,
} from "./styles/learnStyles";
import Group1 from "../Images/Group 1.png";
import Group3 from "../Images/Group 3.png";
import Group6 from "../Images/Group 6.png";
import Google from "../Images/Google_Play_Store_badge_EN.svg.png";
import apple from "../Images/apple-store.png";
import { Link } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
const Hero = () => {
  return (
    <Container height="100vh" display="grid">
      <GlobalStyle />
      <Grid width="100%">
        <h3>Peers App</h3>
        <h4>Coming Soon! </h4>
        <p>Subscribe to our NewsLetter</p>

        <form
          action="https://app.getresponse.com/add_subscriber.html"
          accept-charset="utf-8"
          method="post"
        >
          <Grid width="50%" justify="space-between">
            <input type="text" name="first_name" placeholder="First Name" />
            <br />
            <input type="text" name="email" placeholder="Email Address" />
            <br />
            <input type="hidden" name="campaign_token" value="QtlQ0" />
            <input type="hidden" name="start_day" value="0" />
            <button type="submit" className="btn btn-dark">
              {" "}
              Subscribe{" "}
            </button>
          </Grid>
        </form>
      </Grid>

      <Flex padding="3% 0%" justify="space-between" width="30%">
        <img src={Google} alt="" />
        <img src={apple} alt="" />
      </Flex>
    </Container>
  );
};

export default Hero;
