import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");

  width: 100%;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.fd};
  justify-content: ${(props) => props.justify};
  place-items: center;
  align-content: center;
  font-family: "Poppins", "sans-serif";
  background-color: #0a4076;
  position: relative;

  h1 {
    margin: 10% 0%;
  }

  h3,
  h4,
  p {
    color: #fff;
    text-align: center;
  }

  h3 {
    font-size: 3rem;
    font-weight: 500;
  }

  h4 {
  }

  p {
    width: 100%;
    margin: auto;
    font-size: 0.9rem;
    padding: 1% 0% 2% 0%;
    font-weight: 300;
    opacity: 0.9;
  }

  img {
    height: 40vh;
  }

  @media (max-width: 769px) {
    height: ${(props) => props.heightSM};
    h3 {
      font-size: 2rem;
    }

    h4 {
      font-size: 1.2rem;
      font-weight: 400;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const Flex = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.fdirection};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  place-items: ${(props) => props.place};
  position: ${(props) => props.position};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  margin: auto;
  img {
    width: 48%;
    height: 10vh;
  }

  input {
    width: 80%;
    background-color: #efefef;
    border-radius: 5px;
    padding: 2% 5%;
  }

  @media screen and (max-width: 1169px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 28vh;
    gap: 10px;

    img {
      width: 100%;
      height: 10vh;
    }

    input {
      width: 100%;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  padding: ${(props) => props.padding};
  position: relative;
  width: ${(props) => props.width};
  margin: auto;

  input {
    width: 100%;
    background-color: #efefef;
    border-radius: 5px;
    padding: 2% 5%;
  }
`;

export const Button = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  border-radius: 5px;
  height: 6vh;
  width: ${(props) => props.width};
  padding: 0.5rem ${(props) => props.ps || "1.5rem"};
  text-decoration: none;
  font-family: "Poppins", "sans-serif";
  font-size: 0.8rem;

  @media screen and (max-width: 1124px) {
    height: auto;
    width: 100%;
  }
`;

// NAVBAR SECTION

export const Nav = styled.nav`
  display: flex;
  background-color: #0a4076;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 1% 5%;
  height: auto;
`;

export const NavImg = styled.div`
  flex: 30%;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #fff;
    padding: 1%;
  }
`;

export const NavLink = styled.div`
  display: flex;
  flex: 70%;
  justify-content: space-between;

  @media screen and (max-width: 769px) {
    display: grid;
    justify-content: center;
  }
`;

export const Ulist = styled.ul`
  display: flex;
  justify-content: center;
  gap: 150px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.fd};
  text-align: center;

  li {
    list-style-type: none;
  }

  @media screen and (max-width: 1125px) {
    /* justify-content: space-evenly; */
    width: 100%;
  }
  @media screen and (max-width: 700px) {
    gap: 50px;
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const Navbutton = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");
  display: flex;
  justify-content: space-between;
  width: 25%;

  @media screen and (max-width: 1125px) {
    width: 45%;
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 10vh;
  }
`;
// Hero Section

// ABOUT SECTION

export const Section = styled.div`
  margin-top: ${(props) => props.mt};
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");
  font-family: "Poppins", "sans-serif";

  h3 {
    color: #222;
    font-size: 3rem;
    justify-self: center;
    padding: 2% 0%;
  }

  p {
    font-size: 0.7rem;
    text-align: center;
  }

  @media (max-width: 769px) {
    margin-top: ${(props) => props.smMt};
    h3 {
      font-size: 2rem;
    }

    p {
      width: 90%;
      margin: auto;
    }
  }
`;

export const AboutFlex = styled.div`
  display: flex;
  /* height: 80vh; */
  width: 100%;
  justify-content: space-evenly;
  padding: 3% 15%;

  p {
    font-size: 1.2em;
  }

  .imgDiv {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;

    img {
      width: 30%;
    }
  }

  @media (max-width: 769px) {
    flex-direction: ${(props) => props.fd};
    align-items: center;
    margin-top: 10%;
    padding: 0%;
    height: ${(props) => props.smHeight};

    .imgDiv {
      width: 100%;
      display: flex;
      gap: 15px;
      flex-direction: column;
      align-items: center;

      img {
        width: 50%;
        height: 55vh;
      }
    }
    p {
      font-size: 1em;
    }
  }
`;

export const Text = styled.div`
  align-self: center;

  h4,
  p {
    text-align: left;
  }

  h4 {
    font-size: 2.5rem;
    color: #0a4076;
  }

  p {
    padding: 3% 0%;
    text-align: left;
  }

  @media (max-width: 769px) {
    margin-bottom: ${(props) => props.smMb};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    h4 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #0a4076;
      text-align: center;
      padding-top: 10%;
    }

    p {
      text-align: center;
    }
  }
`;

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
`;

export const TestCard = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: #efefef80;
  border-radius: 5px;
  width: 35%;
  height: 30vh;
  margin: 1%;

  h5 {
    font-size: 0.7rem;
    font-weight: 600;
    opacity: 0.9;
    color: #0a4076;
    line-height: 1.7;
  }

  &:hover {
    background-color: #fff;
  }

  @media (max-width: 769px) {
    width: 80%;
    margin: 2%;
  }
`;

export const TestContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding-top: 10%;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  div p {
    text-align: left;
  }
`;
export const FAQS = styled.div`
  display: grid;
`;
export const Article = styled.div`
  background-color: #efefef;
  height: auto;
  width: 50%;
  margin: auto;
  padding: 1% 0.5%;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
  }

  span {
    font-size: 1.5rem;
  }

  h5 {
    text-align: left;
  }

  p {
    width: 80%;
    margin: auto;
    transition: all 0.3s ease;
  }

  @media (max-width: 769px) {
    width: 80%;

    header {
      h5 {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 10vh;
        font-size: 100%;
        padding: 3px;
      }
    }

    span {
      font-size: 1.3rem;
    }
  }
`;
//  DOWNDLOAD SECTION
export const DownloadImg = styled.div`
  display: flex;
  img {
    width: 50%;
    height: 10vh;
  }

  @media screen and (max-width: 769px) {
    margin: auto;

    img {
      width: 50%;
      height: 10vh;
    }
  }
`;

//  SUBSCRIBE Section
export const SubFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  align-items: center;
  border-radius: 8px;
  background-color: #0a4076;
  color: #fff;
  box-sizing: border-box;
  width: 80%;
  margin: 3% auto;
  height: 30vh;
  padding: 15px;

  h5 {
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    text-align: left;
    font-size: 0.6rem;
    font-weight: 300;
    line-height: 1.7;
    padding-top: 1%;
    opacity: 0.7;
  }

  button {
    border: 1px solid #fff;
    background-color: transparent;
    padding: 1rem 2rem;
    border-radius: 5px;
    color: white;
  }

  @media (max-width: 769px) {
    margin-top: ${(props) => props.smMt};
    flex-direction: ${(props) => props.smDirection};
    padding: ${(props) => props.smPadding};
    height: max-content;
    h5 {
      font-size: 1.5rem;
      text-align: center;
    }
    p {
      font-size: 0.8rem;
      text-align: center;
    }
    button {
      margin-top: 15px;
    }
  }
`;

export const FooterFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 40vh;
  margin-top: 5%;
  padding: 0% 3%;
  padding-top: 5px;
  background: #efefef;

  @media (max-width: 769px) {
    flex-direction: column;
    margin-top: 100px;
    height: max-content;
  }
`;

export const FooterSection = styled.section`
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};

  input {
    background-color: #efefef;
    padding: 3% 3%;
    width: 70%;
    border-radius: 5px;
  }

  h4 {
    font-size: 1.5rem;
  }

  p {
    text-align: left;
    padding: 5% 0%;
    font-size: 0.8rem;
  }

  @media (max-width: 769px) {
    width: 80%;
    margin: auto;
    text-align: center;
    margin-bottom: 20px;

    p {
      text-align: center;
    }
  }
`;

export const Copyright = styled.div`
  background-color: #0a4076;
  height: 5vh;
  display: grid;
  place-items: center;
  color: #fff;

  @media (max-width: 769px) {
    height: 8vh;
  }
`;
