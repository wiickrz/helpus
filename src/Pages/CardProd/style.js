import styled from "styled-components";

export const Container = styled.section`
  width: 1200px;
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
