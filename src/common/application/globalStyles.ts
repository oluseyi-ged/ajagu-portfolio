import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'Archivo';
 src: local('Archivo'), url('/fonts/Archivo.ttf') format('ttf');
/* font-weight: 400; */
font-style: normal;
}

a{
    text-decoration: none;
    color: #000 !important;

}

body {
    background: ${({ theme }: any) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Archivo';
    font-display: swap;
    transition: all 0.50s linear;
}`

export default GlobalStyle
