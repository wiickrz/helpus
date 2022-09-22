import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--branco-1);
    font-size: 100px;
    text-align: center;
  }

  h3 {    
    color: var(--branco-1);
    font-size: 30px;
    text-align: center;
  }

  @media (min-width: 768px) {

    h1 {
      font-size: 300px;
    }

    h3 {
        font-size: 50px;
    }
  }
`