import React from 'react'
import {  Copyright, FooterFlex, FooterSection, Section, Ulist } from './styles/learnStyles'

const Footer = () => {
  return (
    <Section id="footer">
        <FooterFlex >
        <FooterSection width="30%" >
            <h4>Peers App</h4> 
            <p> Learn, Network, Redefine your school experience</p>
        </FooterSection>
        <FooterSection>
            <h4>Quick Links</h4>
             <Ulist  className='navbar-nav '>
              <li className='nav-item'><a href="/" className='nav-link text-dark link' target="_top">Home</a></li>
              <li className='nav-item'><a href= "#about" className='nav-link text-dark link'  target="_top">About</a></li>
              <li className='nav-item'><a href="#faqs" className='nav-link text-dark link'  target="_top">FAQs</a></li>
              <li className='nav-item'><a href="#footer" className='nav-link text-dark link' target="_top" >Contact</a></li>
          </Ulist>
        </FooterSection>
        <FooterSection>
            <h4>Follow Us</h4>
            <Ulist className='navbar-nav' fd="column" height='70%' smDirection='column'>
                <li className='nav-item'><a href="https://www.facebook.com/OfficialPeersApp/" className='nav-link  flink'  target="_blank ">Facebook</a></li>
                <li className='nav-item'><a href="https://twitter.com/_peersapp?t=6ZRVLfAyYe5-PHXvuZubRQ&s=09" className='nav-link flink' target="_blank " >Twitter</a></li>
                <li className='nav-item'><a href="https://www.instagram.com/_peersapp/" className='nav-link flink' target="_blank ">Instagram</a></li>
            </Ulist>
        </FooterSection>
    </FooterFlex>
    <Copyright><p>Copyright @2022, all rights preserved</p></Copyright>
    </Section>
    
  )
}

export default Footer