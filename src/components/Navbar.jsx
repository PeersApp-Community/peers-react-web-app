import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from "../Images/photo_2022-06-11_15-53-30_1-removebg-preview.png"
import { Button, Flex, Ulist, NavImg, Container, Nav, Navbutton } from './styles/learnStyles';
import {FaBars} from "react-icons/fa";

import GlobalStyle from './styles/GlobalStyle';
const Navbar = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <Container display='flex' justify="space-evenly" padding="2% 0%" bg="yellow" height="auto">
        <GlobalStyle />
        
        <Nav >
          <NavImg>
                <img src={logo} alt=" " />
          </NavImg>

          <FaBars className='slink' onClick={() => setShow(!show)} />

          <div className={`${show ? 'none' : 'show'}`}>
            <Ulist width="30%">
                <li><Link to="" className='link'>Home</Link></li>
                <li><Link to="" className='link'>About</Link></li>
                <li><Link to="" className='link'>Testimonials</Link></li>
                <li><Link to="" className='link'>Contact</Link></li>
            </Ulist>
              
            <Navbutton>
                <Button><Link to="" id='link'> Login </Link></Button>
                <Button><Link to="" id='link'> Sign up </Link></Button>
            </Navbutton>
          </div>
         
        </Nav>

    </Container>
  )
}

export default Navbar