import { createGlobalStyle } from 'styled-components';
//import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    a {
        all: unset;
    }
    body{
        -ms-overflow-style: none;
        margin:0px;
        width:100%;
        min-width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(248,248,250);
    }
    /* ::-webkit-scrollbar {
        display: none;
    } */
`;

export default GlobalStyle;
