import React from 'react';
import { Container, Flex, Button } from './styles/learnStyles';
import {Link} from "react-router-dom";
import GlobalStyle from "../GlobalStyle";
import redefine from "../Images/Onboarding 3.png"

const Redefine = () => {
  return (
    <Container>
        <GlobalStyle />
        <img src={redefine} alt="" />
        <h1>Redefine your <br/> learning <br/> experience</h1>
        <Flex>
            <h3>Skip</h3>
            <Button><Link to=" " id='link'> click here </Link></Button>
        </Flex>
    </Container>
  )
}

export default Redefine