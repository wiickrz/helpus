import styled from "styled-components";

export const Container = styled.section`
  width: 1080px;
  margin: 10px auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  color: var(--branco-1);

  @media (max-width: 1095px) {
    width: 1000px;
  }
  @media (max-width: 1035px) {
    width: 920px;
  }
  @media (max-width: 955px) {
    width: 840px;
  }
  @media (max-width: 844px) {
    width: 500px;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px) {
    width: 280px;
  }
  @media (max-width: 500px) {
    width: 220px;
  }
  /* @media (max-width: 420px) {
    width: 210px;
  } */
`;
export const InfoProduct = styled.div`
  flex: 2;
  height: 470px;
  margin-right: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--cinza-1);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.3);

  @media (max-width: 844px) {
    width: 430px;
    height: 460px;
    margin: 5px auto;
  }
  @media (max-width: 600px) {
    width: 260px;
    height: 260px;
  }
  @media (max-width: 500px) {
    width: 240px;
    height: 240px;
  }
  @media (max-width: 420px) {
    width: 220px;
    height: 220px;
  }
`;
export const InfoProductDescription = styled.div`
  flex: 3;
  height: 470px;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  background-color: var(--cinza-1);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.3);
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width: 844px) {
    width: 430px;
    height: 460px;
    margin: 5px auto;
  }
  @media (max-width: 600px) {
    width: 260px;
    height: 260px;
  }
  @media (max-width: 500px) {
    width: 240px;
    height: 210px;
  }
  @media (max-width: 420px) {
    width: 220px;
    height: 220px;
  }
`;

export const Imagem = styled.img`
  width: 232px;
  height: 232px;
  margin: 40px auto;
  @media (max-width: 844px) {
    width: 210px;
    height: 210px;
  }
  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 500px) {
    width: 160px;
    height: 160px;
  }
`;
export const Name = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
`;
export const Category = styled.h5`
  font-size: 0.8rem;
  font-weight: 400;
`;
export const Price = styled.span`
  align-self: flex-end;
  font-size: 0.9rem;
  font-weight: 400;
  span {
    font-size: 0.9rem;
    color: var(--verde-1);
  }
`;
export const Description = styled.p`
  width: 380px;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 400;
  margin: 58px auto 78px;

  @media (max-width: 600px) {
    width: 260px;
    font-size: 0.8rem;
    margin: 58px auto 58px;
    text-align: unset;
  }
  @media (max-width: 500px) {
    width: 220px;
  }
`;

export const MentorName = styled.select`
  width: 280px;
  padding: 0.3rem 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
  margin: 0 auto 78px;
  color: var(--preto-1);
  background-color: var(--cinza-2);

  @media (max-width: 600px) {
    width: 220px;
  }
`;
