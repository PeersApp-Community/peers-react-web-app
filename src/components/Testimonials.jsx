import React from 'react'
import { Grid, Section, TestCard, TestContainer, TestFlex } from './styles/learnStyles'
import image1 from "../Images/pexels-andrew-personal-training-697509.jpg";
import image2 from '../Images/pexels-ezekixl-akinnewu-1006202.jpg';
import image3 from '../Images/pexels-jimmy-jimmy-1484794.jpg';
import image4 from '../Images/pexels-engin-akyurt-1441151.jpg'
const Testimonials = () => {
  return (
    <Section smMt='10%'>
        <Grid width="100%">
            <h3>Testimonials</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deleniti ipsum voluptate ipsam. Libero corrupti quasi <br /> eius dolorem a odit laborum corporis</p>
            <TestFlex>
                <TestCard>
                    <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Similique, vitae provident! Laboriosam, aut. Consequuntur <br /> harum alias nemo fugit ullam beatae.</h5>
                    <TestContainer>
                        <img  src={image1} alt='' />
                        <div>
                          <h6>Ezekiel Chukwu</h6>
                          <p>Student</p>
                        </div>
                    </TestContainer>
                </TestCard>
                <TestCard>
                    <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Similique, vitae provident! Laboriosam, aut. Consequuntur <br /> harum alias nemo fugit ullam beatae.</h5>
                    <TestContainer>
                        <img  src={image3} alt='' />
                        <div>
                          <h6>Ezekiel Chukwu</h6>
                          <p>Student</p>
                        </div>
                    </TestContainer>
                </TestCard>
                <TestCard>
                    <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Similique, vitae provident! Laboriosam, aut. Consequuntur <br /> harum alias nemo fugit ullam beatae.</h5>
                    <TestContainer>
                        <img  src={image2} alt='' />
                        <div>
                          <h6>Ezekiel Chukwu</h6>
                          <p>Student</p>
                        </div>
                    </TestContainer>
                </TestCard>
                <TestCard>
                    <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Similique, vitae provident! Laboriosam, aut. Consequuntur <br /> harum alias nemo fugit ullam beatae.</h5>
                    <TestContainer>
                        <img  src={image4} alt='' />
                        <div>
                          <h6>Ezekiel Chukwu</h6>
                          <p>Student</p>
                        </div>
                    </TestContainer>
                </TestCard>

            </TestFlex>
        
        </Grid>
        


    </Section>
  )
}

export default Testimonials