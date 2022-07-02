import React from 'react'
import { Button, Copyright, Flex, FooterFlex, FooterSection, Section, Ulist } from './styles/learnStyles'
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <Section>
        <FooterFlex>
        <FooterSection width="30%" >
            <h4>Peers App</h4> 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Maxime obcaecati amet labore excepturi quo.</p>
            <Flex padding="5% 0%" width="100%" justify='space-between' smJustify='space-around'>
                <input type="email" placeholder='email address' />
                <Button bg="#0A4076" color="#fff">Register</Button>
            </Flex>
        </FooterSection>
        <FooterSection>
            <h4>Quick Links</h4>
            <Ulist fd="column" height='50%' smDirection='column'>
                <li><Link to="" className='flink'>Home</Link></li>
                <li><Link to="" className='flink'>About</Link></li>
                <li><Link to="" className='flink'>Testimonials</Link></li>
                <li><Link to="" className='flink'>Contact</Link></li>
            </Ulist>
        </FooterSection>
        <FooterSection>
            <h4>Follow Us</h4>
            <Ulist fd="column" height='50%' smDirection='column'>
                <li><Link to="" className='flink'>Facebook</Link></li>
                <li><Link to="" className='flink'>Twitter</Link></li>
                <li><Link to="" className='flink'>Instagram</Link></li>
                <li><Link to="" className='flink'>Telegram</Link></li>
            </Ulist>
        </FooterSection>
    </FooterFlex>
    <Copyright><p>Copyright @2022, all rights preserved</p></Copyright>
    </Section>
    
  )
}

export default Footer