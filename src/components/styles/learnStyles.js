import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
    
    margin: auto;
    max-width:100%;
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    display:grid;
    place-items:center;
    align-content:center;
    font-family: "Poppins", "sans-serif";
    background-color: #0A4076;
    position: relative;

    h1{
        margin: 10% 0%;
    }

    h3, p{
        color:#fff;
        text-align: center;
    }

    h3{
        font-size: 3rem;
        font-weight: 500;
    }

    p{
        width: 100%;
        margin: auto;
        font-size: 0.7rem;
        padding: 2% 0%;
        font-weight: 300;
        opacity: 0.8;
    }

    img{
        height: 40vh;
    }

    @media (max-width: 769px) {
        height: ${props => props.heightSM};
    }
`

export const Flex = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
    display:flex;
    justify-content: ${(props) => props.justify};
    width: ${(props) => props.width};
    padding: ${(props) => props.padding};
    place-items: ${(props) => props.place};
    position: ${(props) => props.position};
    z-index: 2;

    img{
        width: 48%;
        height: 7vh;
    }

    @media (max-width: 769px) {
        flex-direction: ${props => props.smDirection};
        align-items: ${props => props.smAlign};
        padding: ${props => props.smPadding};
        margin-top: ${props => props.smMt};
        justify-content: ${props => props.smJustify};
    }

`

export const Grid= styled.div`
    display:grid;
    padding: ${(props) => props.padding};
    position: relative;
    width:  ${(props) => props.width};
`

export const Button = styled.button`
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    border-radius: 5px;
    width: auto;
    padding: 0.5rem 1.0rem;
    text-decoration: none;
    font-family: 'Poppins', 'sans-serif';
`

export const NavImg = styled.div`
    background-color: #fff;
    border-radius:50%;
    padding: 0.5%;

    img{
        width: 100%;
        height: 10vh;
    }
`

export const Ulist = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-content: space-evenly;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    flex-direction: ${(props) => props.fd};


    li{
        list-style-type: none;
        font-family: 'Poppins', 'sans-serif';
        font-weight:300;
        font-size: 0.8rem;
        text-align:center;
    }

    @media (max-width: 769px) {
        gap: 10px;
    }
`

export const HeroImg = styled.div`
    display:flex;
    font-family: 'Poppins', 'sans-serif';
    
    img{
        height: 65vh;
        margin: 0% 5% 0% 0%;
    }

    @media (max-width: 769px) {
        flex-direction: column;
        gap: 30px;
        img {
          height: 80vh;
        }
    }
`
// ABOUT SECTION

export const Section = styled.div`
    margin-top: ${(props) => props.mt};
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
    font-family: 'Poppins', 'sans-serif';

    h3{
        color:#222;
        font-size: 3rem;
        justify-self:center;
        padding:2% 0%;
    }

    p{
        font-size: 0.7rem;
        text-align: center;
    }

    @media (max-width: 769px) {
        margin-top: ${props => props.smMt};
    }
`

export const AboutFlex = styled.div`
    display:flex;
    height: 80vh;
    width:100%;
    justify-content:space-evenly;
    padding: 3% 15%;

    @media (max-width: 769px) {
        flex-direction: ${props => props.reverse || "column"};
        align-items: center;
        margin-top: ${props => props.smMt};
        img {
          width: 300px;
          height: 100%;
          margin-bottom: 20px;
        }
    }
`

export const Text = styled.div`
    align-self: center;

    h4, p{
        text-align:left;
    }

    h4{
        font-size: 2.5rem;
        color:#0A4076;

    }

    p{
        padding: 3% 0%;
        text-align:left;
    }

    @media (max-width: 769px) {
        margin-bottom: ${props => props.smMb};
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

// TESTIMONIALS SECTION
export const TestFlex = styled.div`
    display: flex;
    padding: 2% 0%;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 769px) {
        flex-direction: column;
        align-items: center;
    }
`

export const TestCard = styled.div`
    display:grid;
    align-content: center;
    justify-content:center;
    background-color:#efefef80;
    border-radius: 5px;
    width: 35%;
    height: 30vh;
    margin: 1%;


    h5{
        font-size: 0.7rem;
        font-weight:600;
        opacity:0.9;
        color:#0A4076;
        line-height:1.7;
    }

    &:hover {
        background-color: #fff;
    }

    @media (max-width: 769px) {
        width: 80%;
        margin: 2%;
    }
`
   

export const TestContainer= styled.div`
    display:flex;
    justify-content:space-between;
    width:50%;
    padding-top: 10%;

    img{
        width:40px;
        height:40px;
        border-radius: 50%;
    }


    div p{
        text-align:left;
    }
`
 export const FAQS = styled.div`
    display: grid;
 
 `
 export const Article = styled.div`
    display: flex;
    justify-content:left;
    align-items: center;
    background-color:#efefef;
    width: 30%;
    height: 7vh;
    margin: 1% auto;

    span{
        font-size:1.5rem;
        margin-left: 15%;
    }

    h5{
        text-align:left;
        margin-left: 10%;
    }

    @media (max-width: 769px) {
        width: 80%;
    }
 `
//  SUBSCRIBE Section
export const SubFlex = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px;
    background-color:#0A4076;
    color: #fff;
    box-sizing: border-box;
    width: 80%;
    margin: 3% auto;
    height: 30vh;


    h5{
        font-size: 2rem;
        font-weight:600;
    }

    p{
        text-align: left;
        font-size: 0.6rem;
        font-weight: 300;
        line-height:1.7;
        padding-top: 1%;
        opacity: 0.7;
    }

    button{
        border: 1px solid #fff;
        background-color: transparent;
        padding: 1rem 2rem;
        border-radius: 5px;
        color:white;
    }

    @media (max-width: 769px) {
        margin-top: ${props => props.smMt};
        flex-direction: ${props => props.smDirection};
        padding: ${props => props.smPadding};
        height: max-content;
        h5 {
          font-size: 1.5rem;
          text-align: center;
        }
        p {
          font-size: 0.8rem;
        }
        button {
          margin-top: 15px;
        }
    }  
`

export const FooterFlex = styled.div`
    display:flex;
    justify-content: space-evenly;
    height: 40vh;
    margin-top: 5%;
    padding:0% 3%;

    @media (max-width: 769px) {
        flex-direction: column;
        margin-top: 100px;
        height: max-content;
    }
`

export const FooterSection =styled.section`
    width: ${(props) => props.width };
    background-color: ${(props) => props.bg };

    input{
        background-color:#efefef;
        padding: 3% 3%;
        width:70%;
        border-radius: 5px;
    }

    h4{
        font-size:1.5rem;
    }

    p{
        text-align:left;
        padding: 5% 0%;
        font-size: 0.8rem;
    }

    @media (max-width: 769px) {
        width: 80%;
        margin: auto;
        text-align: center;
        margin-bottom: 20px;
    }
`

export const Copyright = styled.div`
    background-color:#0A4076;
    height: 5vh; 
    display: grid;
    place-items: center;
    color: #fff;

    @media (max-width: 769px) {
        height: 8vh;
    }
`