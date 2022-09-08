import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--cinza-1);
    width: 1262px;
    height: 570px;
    color: var(--branco-1);
    display: flex;
    flex-direction: column;
    align-items: center;

    .button {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-right: 60px;
        margin-top: 10px;
    }

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 5px 15px;
    }
`

export const Content = styled.div `
    h2 {
        font-weight: 700;
        font-size: 32px;
        line-height: 48px;
        text-align: center;
        margin-top: 60px;
    }

    div {
        font-weight: 400;
        font-size: 24px;
        text-align: center;
        p {
           margin-top: 60px;
           text-align: center;
           width: 741px;
        }
    } 
`
export const ImgContent = styled.div `
   margin-top: 60px;
    img {
        margin-left: 20px;
    }
`
