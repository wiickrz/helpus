import { Button } from "../Button/index";
import { Container, Content, ImgContent } from "./style";
import { useNavigate } from "react-router";
import linkedin from "../../assets/linkedin.svg";
import whats from "../../assets/whats.svg";
import { useLocation } from "react-router";

export const Contact = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  return (
    <Container>
      {loc.pathname === "/contact" ? (
        <h2>Agendamentos</h2>
      ) : (
        <h2> Compra realizada! </h2>
      )}
      <Content>
        <div className="paragrafo">
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
            href="https://www.linkedin.com/in/help-us-developers/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5547984277017&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20meus%20cursos!"
            rel="noreferrer"
            target="_blank"
          >
            <img src={whats} alt="whats" />
          </a>
        </ImgContent>
      </Content>
      <div className="button">
        {/* {<Button onClick={() => navigate("/dashboard")}>Voltar</Button>} */}
      </div>
    </Container>
  );
};
