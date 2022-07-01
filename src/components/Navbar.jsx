import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../Images/photo_2022-06-11_15-53-30_1-removebg-preview.png"
import { Button, Flex, Ulist, NavImg } from './styles/learnStyles';
import GlobalStyle from '../GlobalStyle';
const Navbar = () => {
  return (
    <Flex padding=" 2% 0%" justify="space-evenly" position="absolute" width="100%" place="center">
        <GlobalStyle />
        <Ulist width="30%">
            <li><Link to="" className='link'>Home</Link></li>
            <li><Link to="" className='link'>About</Link></li>
            <li><Link to="" className='link'>Testimonials</Link></li>
            <li><Link to="" className='link'>Contact</Link></li>
        </Ulist>
        <NavImg>
          <img src={logo} alt=" " />
        </NavImg>
        <Flex width='30%' justify="space-evenly" place="center">
            <Button><Link to="" id='link'> Login </Link></Button>
            <Button><Link to="" id='link'> Sign up </Link></Button>
        </Flex>
    </Flex>
  )
}

export default Navbar