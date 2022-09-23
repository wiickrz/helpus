import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--cinza-1);
  margin-top: 40px;
  width: 90%;
  height: 632px;
  padding-top: 100px;
  color: var(--branco-1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    line-height: 36px;
    width: 1262px;
    height: 570px;
  }

  .button {
    display: flex;
    justify-content: flex-end;

    @media screen and (min-width: 1440px) {
      width: 95%;
      margin-top: 0px;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
  }

  @media screen and (min-width: 900px) {
    width: 850px;
  }

  @media screen and (min-width: 1440px) {
    width: 1262px;
  }
`;

export const Content = styled.div`
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin-top: 46px;
  }

  .paragrafo {
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
    width: 236px;
    height: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-top: 30px;
      text-align: center;
      font-size: 18px;
      line-height: 25px;
      width: 236px;

      @media screen and (min-width: 480px) {
        width: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        margin-bottom: 30px;
      }

      @media screen and (min-width: 750px) {
        font-size: 22px;
        width: 550px;
        line-height: 35px;
      }

      @media screen and (min-width: 900px) {
        font-size: 24px;
        font-wight: 400;
        width: 750px;
        height: 180px;
        line-height: 36px;
      }
    }
  }
`;
export const ImgContent = styled.div`
  text-align: center;
  margin-bottom: 50px;
  img {
    margin-left: 20px;
    margin-top: 50px;

    @media screen and (min-width: 480px) {
      margin-top: 30px;
    }
  }
`;
