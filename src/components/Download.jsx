import React from 'react'
import { AboutFlex, DownloadImg, Flex,  Section, SubFlex, Text } from './styles/learnStyles'
import Google from '../Images/Google_Play_Store_badge_EN.svg.png';
import apple from '../Images/apple-store.png';
import Group7 from '../Images/Group 7.png';
const Download = () => {
  return (
    <Section mt="5%">
        <AboutFlex smHeight="auto" fd="column" >
            <Text smMb = " 8%">
                <h4>Download App</h4>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, ipsum.</p>
                <DownloadImg>
                    <img src={Google} alt='' />
                    <img src={apple} alt='' />
                </DownloadImg>
            </Text>
           <img src={Group7} alt=""  />
        </AboutFlex>
        <SubFlex smMt='200px' smDirection='column' smPadding='20px'>
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