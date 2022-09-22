import styled from "styled-components";

export const Container = styled.div`
   height: 1024px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    background-color: var(--preto-2:);
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ContentProfile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .hFazzw {
       justify-content: center
    }

    .button {
        margin-top: 10px;
    }  

    @media screen and (min-width: 750px) {
        display: flex;
        flex-direction: row;
        width: 600px;
        justify-content: space-between;

        .hFazzw {
            justify-content: center;
            width: 193px;
        }
    }

    @media screen and (min-width: 1440px) {
        width: 900px;
    }
`