import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

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
  font-family: 'Poppins', 'sans-serif';
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

    #link, .link, .flink{
      text-decoration: none;
      color:#0A4076;
      background-color: transparent;
    }

    .link{
      color: #fff;
    }

    .flink{
      color:#000;
    }
  }
`;

export default GlobalStyle;
