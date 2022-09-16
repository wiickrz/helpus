import styled from "styled-components";

export const StyledComponents = styled.button`
    background-color: ${(props) =>
      props.red ? "var(--vermelho-1)"
      : props.verde ? "var(--verde-1)"
      : props.preto ? "var(--preto-1)" : "var(--azul-1)"
    };
    
    width: ${(props) =>
      props.cadastroDesk ? "170px"
      : props.cadastroMobi ? "120px"
      : props.proDesk ? "290px"
      : props.proMobi ? "210px" : "110px"
    };

    font-size: ${(props) => 
    props.fonteDesk ? "24px" : "18px"};

    height: 40px; 
    border: none;
    border-radius: 5px;
    font-weight: 300;
    color: var(--branco-1);

    :hover {
        transform: scale(1.1);
        transition: all 0.3s;
        opacity: 0.7;
        cursor: pointer;
      }
`