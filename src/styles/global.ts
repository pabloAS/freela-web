import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Ubuntu', sans-serif;
        -webkit-font-smoothing: antialiased;
        font-weight: 500;
        padding: 0 20px;
        background: #f4f4f4;
    }

    ul,li{
        list-style: none;
    }

    button{
        cursor: pointer;
    }
`;