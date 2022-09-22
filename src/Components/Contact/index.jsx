import { Button } from "../Button/index";
import { Container, Content, ImgContent } from "./style";
import { useNavigate } from "react-router";
import linkedin from "../../assets/linkedin.svg";
import whats from "../../assets/whats.svg";

export const Contact = () => {
  // const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <h2>Compra aprovada</h2>
        <div>
          <p>
            Entre em contato conosco através dos canais abaixo para realizar os
            seus agendamentos
          </p>
          <p>
            Nossos agendamentos são personalizados, trabalhamos para melhor
            atendê-lo!
          </p>
        </div>
        <ImgContent>
          <a
            href="https://www.linkedin.com/in/andre-silva2502/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://api.whatsapp.com/send?text=Comprei%20o%20curso,
                        %20Redux%20qual%20é%20o%20procedimento%20para%20realizar%20o%20agendamento?"
            rel="noreferrer"
            target="_blank"
          >
            <img src={whats} alt="whats" />
          </a>
        </ImgContent>
      </Content>
      <div className="button">
        {/* <Button onClick={() => navigate("/home")}>Home</Button> */}
      </div>
    </Container>
  );
};
