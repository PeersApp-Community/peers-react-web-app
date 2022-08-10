import React from "react";
import {
  Copyright,
  FooterFlex,
  FooterSection,
  Section,
  Ulist,
} from "./styles/learnStyles";
// import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <Section id="contact">
      <FooterFlex>
        <FooterSection width="30%">
          <h4>Peers App</h4>
          <p>
            Learn | Network | Redefine
            <br />
            Your School Experience
          </p>
          {/* <Flex padding="5% 0%" width="100%" justify='space-between' >
                <input type="email" placeholder='email address' />
                <button>Register</button>
            </Flex> */}
        </FooterSection>
        <FooterSection>
          <h4>Quick Links</h4>
          <Ulist
            fd="column"
            height="100%"
            smDirection="column"
            padding="5% 0% 0% 0%"
          >
            <li>
              <a href="/" className="flink">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="flink">
                About
              </a>
            </li>
            <li>
              <a href="#faq" className="flink">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="flink">
                Contact
              </a>
            </li>
          </Ulist>
        </FooterSection>
        <FooterSection>
          <h4>Follow Us</h4>
          <Ulist
            fd="column"
            height="100%"
            smDirection="column"
            padding="5% 0% 0% 0%"
          >
            <li>
              <a
                href="https://web.facebook.com/OfficialPeersApp/"
                className="flink"
                target="_blank "
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/_peersapp"
                className="flink"
                target="_blank "
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_peersapp/"
                className="flink"
                target="_blank "
              >
                Instagram
              </a>
            </li>
          </Ulist>
        </FooterSection>
      </FooterFlex>
      <Copyright>
        <p>Copyright @2022, all rights preserved</p>
      </Copyright>
    </Section>
  );
};

export default Footer;
