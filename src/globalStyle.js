import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    margin: 0;
    padding: 0;

    box-sizing: border-box;
  
    cursor: default;

    ::-webkit-scrollbar {
      width: 15px;
      border: 3px solid #000;
  }

    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
    
  }

    ::-webkit-scrollbar-thumb {
      border: 2px solid #000;
      background-color: #8c2318;
  }
  }

  body {
    height: 100vh;
    margin-top: 12vh;
  }

  h1 {
    font-family: "Julee", cursive;
  }

  button{
    cursor: pointer;
    border: none;
}

input {
    cursor: text;
    border: none;
  }

ol, ul, li {

    list-style: none;

}

a {
    text-decoration: none;
    color: black;
}
`
