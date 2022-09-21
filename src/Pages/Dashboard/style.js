import styled from "styled-components";

export const Container = styled.section`
  width: 1198px;
  margin: 10px auto;

  @media (max-width: 1232px) {
    width: 1158px;
  }
  @media (max-width: 1215px) {
    width: 1000px;
  }
  @media (max-width: 1137px) {
    width: 980px;
  }
  @media (max-width: 1024px) {
    width: 800px;
  }
  @media (max-width: 844px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 420px;
  }
  @media (max-width: 420px) {
    width: 320px;
  }
`;

export const ContentUserInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 844px) {
    flex-direction: column;

    button {
      margin: 15px;
    }
  }
`;

export const UserLogo = styled.div`
  display: flex;
  align-items: center;

  figure {
    width: 70px;
    height: 70px;
    background-color: var(--cinza-1);
    padding: 13px 13px 13px 14px;
    border-radius: 100px;

    img {
      width: 44px;
      height: 44px;
    }
  }
  div {
    margin-left: 9px;
    color: var(--branco-1);
  }
`;

export const ContentInput = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    flex: 4;
    margin-top: 8px;
    input {
      height: 41px;
      border-radius: 5px 0 0 5px;
    }
  }
  button {
    flex: 1;
    padding: 7px;
    border-radius: 0 5px 5px 0;
  }
`;

export const ContentProducts = styled.section`
  border: 1px solid #fff;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 844px) {
    width: 500px;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    width: 300px;
    flex-direction: column;
  }
  @media (max-width: 420px) {
    width: 250px;
  }
`;
