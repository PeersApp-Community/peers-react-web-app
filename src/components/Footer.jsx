import React from "react";
import {
  Button,
  Copyright,
  Flex,
  FooterFlex,
  FooterSection,
  Section,
  Ulist,
} from "./styles/learnStyles";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Section>
      <FooterFlex>
        <FooterSection width="30%">
          <h4>Peers App</h4>
          <p style={{ fontSize: "17px" }}>
            Learn | Network | Redefine <br />
            Your School Experience
          </p>
          <Flex
            padding="5% 0%"
            width="100%"
            justify="space-between"
            smJustify="space-around"
          >
            <input type="email" placeholder="email address" />
            <Button bg="#0A4076" color="#fff">
              Send
            </Button>
          </Flex>
        </FooterSection>
        <FooterSection>
          <h4>Quick Links</h4>
          <Ulist fd="column" height="50%" smDirection="column">
            <li>
              <Link to="" className="flink">
                Home
              </Link>
            </li>
            <li>
              <Link to="" className="flink">
                About
              </Link>
            </li>
            <li>
              <Link to="" className="flink">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="" className="flink">
                Contact
              </Link>
            </li>
          </Ulist>
        </FooterSection>
        <FooterSection>
          <h4>Follow Us</h4>
          <Ulist fd="column" height="50%" smDirection="column">
            <li>
              <a
                href="https://www.facebook.com/OfficialPeersApp/"
                className="flink"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/_peersapp?t=6ZRVLfAyYe5-PHXvuZubRQ&s=09"
                className="flink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/invites/contact/?i=1cx6lbwhdq2tc&utm_content=on5uq7e"
                className="flink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href=""
                className="flink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </li>
          </Ulist>
        </FooterSection>
      </FooterFlex>
      <Copyright>
        <p>Copyright @2022, all rights reserved</p>
      </Copyright>
    </Section>
  );
};

export default Footer;
