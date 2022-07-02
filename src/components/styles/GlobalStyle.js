import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
font-family: 'Poppins', 'sans-serif';


  :root {
  --bg-light:	 #99ff99;
  --bg-white: rgb(255, 255, 250);
  --bg-image: url(./imgs/subtle-prism.svg);
  --bg-darker: 	#002900;
  --bg-dark: 	#004000;

  --color-1: rgba(0, 239, 139, 0.456);
  --color-2: rgba(0, 0, 0, 0.256);
  --color-3: rgba(255, 250, 240, 0.456);
  --btn-color-1: rgba(34, 255, 0, 0.642);
  --btn-color-2: #ff6200;
  --btn-color-4: #ff5000;
  --btn-color-3: rgb(0, 255, 0);
  --maxWidth: 1280px;
  --darkGrey: #1c1c1c;
  --fontSuperBig: 2.5rem;
  --fontBigger: 2rem;
  --fontBig: 1.7rem;
  --fontMed: 1.3rem;
  --fontSmall: 1.1rem;
  --fontSuperSmall: .8rem;
  }

  * {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    color: #222222;
    ;

    .head{
      font-size: 2rem;
      padding: 20px;
      color: var(--bg-light)
    }
    
    h1 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 1rem;
    }

    #link, .link, .flink {
      text-decoration: none;
      color:#0A4076;
    }

    .link, .slink{
      color: #fff;
    }

    .flink{
      color:#000;
    }

    .slink{
      font-size: 1.2rem;
    }


    .circle1, .circle2{
      position: absolute;
      font-size: 30rem;
      opacity: 0.5;
    }

    .circle1{
      top: 75%;
      right: 0%;
      color: #000;
      z-index: -1;

      @media screen and (max-width: 769px){
        display: none;
      }


    }

    .circle2{
      top: 180%;
      left: -5%;
      color: #0A4076;

      
      @media screen and (max-width: 769px){
        display:none;
      }

    }

    // USESTATE CLASSES
    .none {
      @media screen and (max-width: 1200px){
        visiibilty: hidden;
      }
      
    }

    .show{
      @media screen and (max-width: 1200px){
        visiibilty: visible;

      }
    
    }

  }
`;

export default GlobalStyle;
