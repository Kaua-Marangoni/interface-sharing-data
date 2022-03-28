import { createGlobalStyle } from "styled-components"
import "react-toastify/dist/ReactToastify.css"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    font-family: 'Karla', sans-serif;

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: #ffffff99;
      border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #8fbc8f;
      border-radius: 20px;
      border: 3px solid #ffffff99;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #7cab7c;
    }

    ::-webkit-scrollbar-thumb:active {
      background-color: #729d72;
    }
  }
`
