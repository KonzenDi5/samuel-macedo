import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body,
  #root {
    min-height: 100vh;
    background: black;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  #root {
 
background: black;
  }

  @media (max-width: 768px) {
    #root {
  
background:  black;
    }

  }
`
