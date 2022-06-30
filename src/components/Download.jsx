import React from 'react'
import { AboutFlex, Flex,  Section, SubFlex, Text } from './styles/learnStyles'
import Google from '../Images/Google_Play_Store_badge_EN.svg.png';
import apple from '../Images/apple-store.png';
import Group7 from '../Images/Group 7.png';
const Download = () => {
  return (
    <Section mt="5%">
        <AboutFlex>
            <Text>
                <h4>Download App</h4>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, ipsum.</p>
                <Flex place="left" width="100%" justify="space-between" padding='0% 20% 0% 0%'>
                    <img src={Google} alt='' />
                    <img src={apple} alt='' />
                </Flex>
            </Text>
           <img src={Group7} alt="" />
        </AboutFlex>
        <SubFlex>
            <div>
                <h5>Subscribe to get updated</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores inventore alias, <br /> modi deserunt exercitationem excepturi deleniti maxime eius ducimus nemo harum nam, <br /> obcaecati unde eaque nobis repudiandae aliquam fugiat.</p>
            </div>
            <button>Get Started</button>
        </SubFlex>
    </Section>
    
  )
}

export default Download