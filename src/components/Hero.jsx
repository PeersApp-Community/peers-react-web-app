import React from 'react'
import { Container, Flex, HeroImg, Grid, Button, Ulist } from './styles/learnStyles'
import Group1 from '../Images/Group 1.png' 
import Group3 from '../Images/Group 3.png'
import Group6 from '../Images/Group 6.png'
import Google from '../Images/Google_Play_Store_badge_EN.svg.png'
import apple from '../Images/apple-store.png'
import { Link } from 'react-router-dom';
import {FaFacebookF, FaInstagram, FaTelegram, FaTelegramPlane, FaTwitter} from 'react-icons/fa'
const Hero = () => {
  return (
    <Container height="60vh" display="flex" fd="column">
        <Grid width='50%'>
            <h3>Peers App</h3>
            <h4>Coming Soon! </h4>
            <p>Subscribe to our NewsLetter</p>
            <Flex padding="2% 0%" width="100%" justify='space-between'>
                <input type="email" placeholder='email address' name="email" />
                <Button bg="#222" color="#fff">Subscribe</Button>
            </Flex>
        </Grid>
         
        <Flex padding="3% 0%" justify="space-between">
            <img src={Google} alt='' />
            <img src={apple} alt='' />
        </Flex>

        <Ulist position="absolute" fd="column" height="50%">
          <li><Link to=" " className='slink'> <FaFacebookF /></Link></li>
          <li><Link to=" " className='slink'> <FaInstagram /></Link></li>
          <li><Link to=" " className='slink'> <FaTwitter /></Link></li>
          <li><Link to=" " className='slink'> <FaTelegram /></Link></li>
        </Ulist>
    </Container>
  )
}

export default Hero