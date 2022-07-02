import React from 'react'
import { Grid, Section,FAQS, Article } from './styles/learnStyles'
import {GrFormAdd} from "react-icons/gr"
const FAQ = () => {
  return (
    <Section>
        <Grid>
            <h3>FAQ's</h3>
            <FAQS>
                <Article>
                    <span><GrFormAdd /></span>
                    <h5> What is PeersApp? </h5>
                </Article>
                <Article>
                    <span><GrFormAdd /></span>
                    <h5> What is PeersApp? </h5>
                </Article>
                <Article>
                    <span><GrFormAdd /></span>
                    <h5> What is PeersApp? </h5>
                </Article>
                <Article>
                    <span><GrFormAdd /></span>
                    <h5> What is PeersApp? </h5>
                </Article>

            </FAQS>



        </Grid>
        

    </Section>
  )
}

export default FAQ