import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;    
}

html, #Community, body, #root {
    min-height: 100%;
    height: 100%;
}

body {
    background: #48dbfb;
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
}

body, input, button {
    color: #fff;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}

button {
    cursor: pointer;
}

`;