import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        list-style: none;
        border-radius: 4px;
        border: none;
        outline: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--cinza-1) !important;
    -webkit-box-shadow: 0 0 0px 1000px var(--cinza-2) inset;
    box-shadow: 0 0 0px 1000px var(--cinza-2) inset;
    }

    html {
        height: 100vh;
    }
        
    body{
        background-color: var(--preto-1);

        &::-webkit-scrollbar {
            background-color: transparent;
            width: 5px;
            background-color: var(--branco-1);
        }
        
        &::-webkit-scrollbar-thumb {
            background: var(--cinza-1);
         
        }
    }

    :root{
        --azul-1: #3E54D3;
        --azul-2: #4F80E2;
        --verde-1: #15CDCA; 
        --vermelho-1: #F01515;
        --branco-1: #FFFFFF;
        --preto-1: #202020;
        --cinza-1: #404040;
        --cinza-2: #D9D9D9;
    }
`;
