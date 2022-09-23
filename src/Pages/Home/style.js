import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Background = styled.div`
  color: var(--branco-1);
  margin: 30px 0;
  display: flex;
  width: 100%;
  max-width: 65rem;
  text-align: center;
  background-size: contain;

  div {
    width: 100%;
    flex-direction: column;

    h2 {
      font-size: 32px;
      margin-bottom: 2rem;
    }

    p {
      font-size: 20px;
      margin-bottom: 2rem;
    }

    img {
      width: 100%;
      max-width: 60rem;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100vw;
  background-color: #404040;
  color: #fff;
  font-size: 0.8rem;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin: 10px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    font-size: 24px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    p,
    img {
      padding: 10px 0;
      max-width: 100%;
      width: 100%;

      @media (min-width: 768px) {
        padding: 10px;
        width: 50%;
      }
    }
  }

  .reverse {
    @media (min-width: 768px) {
      flex-direction: row-reverse;
    }
  }
`;

export const Box = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-size: 1.5rem;
  h2,
  h3,
  h4 {
    color: #fff;
    margin-top: 5px;
  }
  h2 {
    margin: 10px;
  }
  h3 {
    font-size: 1.3rem;
  }
  h4 {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 1200px) {
    h3 {
      font-size: 1.1rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
`;

export const Ul = styled.ul`
  border: 1px solid #fff;
  overflow-y: auto;
  text-align: center;
  /* flex-direction: column; */
  align-items: center;
  max-height: 45vh;
  max-width: 95vw;
  padding: 25px;
  width: 100%;
  gap: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #404040;
  width: 250px;
  height: 300px;
  padding: 10px;

  img {
    max-width: 150px;
    width: 100%;
  }
`;

export const FooterContainer = styled.div`
  max-width: 80vw;
  text-align: center;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  h2 {
    font-size: 2rem;
  }

  p {
    padding: 20px 0;
    font-size: 1.5rem;
  }

  div {
    img {
      margin: 20px;
    }
  }
`;

// import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   overflow: hidden;
// `;

// export const LogoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   color: #fff;

//   img {
//     width: 80vw;
//     margin: 20px;
//   }

//   p,
//   i {
//     width: 80vw;
//   }

//   @media (min-width: 768px) {
//     img {
//       width: 60vw;
//     }
//   }
// `;
// export const ContentContainer = styled.div`
//   width: 100vw;
//   background-color: #404040;
//   color: #fff;
//   font-size: 0.8rem;
//   border-top: 1px solid #fff;
//   border-bottom: 1px solid #fff;
//   margin: 10px;
//   div {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     margin: 10px;
//   }

//   img,
//   p {
//     width: 45vw;
//     margin: 10px;
//   }

//   @media (min-width: 768px) {
//     font-size: 1.2rem;
//   }
//   @media (min-width: 768px) {
//     font-size: 1.8rem;
//   }
// `;

// export const Box = styled.div`
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   margin-top: 20px;
//   h2,
//   h3,
//   h4 {
//     color: #fff;
//     margin-top: 5px;
//   }
//   h2 {
//     margin: 10px;
//   }
//   h3 {
//     font-size: 1.3rem;
//   }
//   h4 {
//     font-size: 1.1rem;
//   }

//   @media (min-width: 768px) {
//     h3 {
//       font-size: 1rem;
//     }
//     h4 {
//       font-size: 0.9rem;
//     }
//   }
//   @media (min-width: 1200px) {
//     h3 {
//       font-size: 1.1rem;
//     }
//     h4 {
//       font-size: 1rem;
//     }
//   }
// `;

// export const Ul = styled.ul`
//   border: 1px solid #fff;
//   overflow-y: auto;
//   text-align: center;
//   flex-direction: column;
//   align-items: center;
//   max-height: 45vh;
//   max-width: 95vw;
//   padding: 6px;
//   @media (min-width: 768px) {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     overflow-y: visible;
//     max-height: 100vh;
//   }

//   @media (min-width: 1200px) {
//     grid-template-columns: repeat(5, 1fr);
//   }
// `;

// export const Li = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #404040;
//   margin: 10px;
//   padding: 10px 0;

//   img {
//     width: 50vw;
//   }
//   @media (min-width: 768px) {
//     img {
//       width: 10vw;
//     }
//   }
//   @media (min-width: 1200px) {
//     img {
//       width: 15vw;
//     }
//   }
// `;

// export const FooterContainer = styled.div`
//   max-width: 80vw;
//   text-align: center;
//   margin: 20px 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   color: #fff;

//   p {
//     margin: 20px 0;
//   }

//   div {
//     img {
//       margin: 20px;
//     }
//   }
// `;
