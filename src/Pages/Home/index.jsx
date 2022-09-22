import * as S from "./style";
import RegisterImage from "../../assets/register.svg";
import content1 from "../../assets/content-1.svg";
import content2 from "../../assets/content-2.svg";
import avatar from "../../assets/avatar.svg";
import coursesImg from "../../assets/courses.svg";
import whatsapp from "../../assets/whats.svg";
import linkedin from "../../assets/linkedin.svg";

import { Header } from "../../Components/Header";
import { useMentors } from "../../Providers/Mentors";
import { useCourses } from "../../Providers/Courses";
import { Link } from "react-router-dom";

export const Home = () => {
  const mentors = useMentors();
  const { courses } = useCourses();

  return (
    <>
      <S.Container>
        <Header />
        <S.Background>
          <div>
            <h2>Help Us - Developers</h2>
            <p>
              <i>Ajudamos você a se tornar protagonista do seu código!</i>
            </p>
            <img src={RegisterImage} alt="Logo" />
          </div>
        </S.Background>
        <S.ContentContainer>
          <div className="reverse">
            <img src={content1} alt="Profissional de tecnologia trabalhando" />
            <p>
              Somos uma empresa com especialistas em diversas áreas, onde o
              nosso principal objetivo é trazer de forma prática e direta, o
              conhecimento que você busca!
            </p>
          </div>
          <div>
            <img
              src={content2}
              alt="Gráfico dos salários na area de tecnologia"
            />
            <p>
              O mercado da area tech está aquecido, e nós te preparamos para
              vencer qualquer desafio.
            </p>
          </div>
        </S.ContentContainer>
        <S.Box>
          <h2>Conheça o nosso time de ensino</h2>
          <S.Ul>
            {mentors.map(({ name, category }) => (
              <S.Li key={name}>
                <img src={avatar} alt="Avatar" />
                <h3>{name}</h3>
                <h4>{category}</h4>
              </S.Li>
            ))}
          </S.Ul>
          <h2>Conheça nossos cursos</h2>
          <S.Ul>
            {courses.map(({ name, category }) => (
              <S.Li key={name}>
                <img src={coursesImg} alt="Avatar" />
                <h3>{name}</h3>
                <h4>{category}</h4>
              </S.Li>
            ))}
          </S.Ul>
        </S.Box>
        <S.FooterContainer>
          <h2>Seja nosso parceiro de ensino</h2>
          <p>Entre em contato através dos links abaixo para avaliação</p>
          <div>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </S.FooterContainer>
      </S.Container>
    </>
  );
};

// import {
//   ContentContainer,
//   LogoContainer,
//   Box,
//   Li,
//   Ul,
//   Container,
//   FooterContainer,
// } from "./style";
// import RegisterImage from "../../assets/register.svg";
// import content1 from "../../assets/content-1.svg";
// import content2 from "../../assets/content-2.svg";
// import avatar from "../../assets/avatar.svg";
// import coursesImg from "../../assets/courses.svg";
// import whatsapp from "../../assets/whats.svg";
// import linkedin from "../../assets/linkedin.svg";

// import { Header } from "../../Components/Header";
// import { useMentors } from "../../Providers/Mentors";
// import { useCourses } from "../../Providers/Courses";
// import { Link } from "react-router-dom";

// export const Home = () => {
//   const mentors = useMentors();
//   const { courses } = useCourses();

//   return (
//     <>
//       <Container>
//         <Header />
//         <LogoContainer>
//           <h2>Help Us - Developers</h2>
//           <p>
//             <i>Ajudamos você a se tornar protagonista do seu código!</i>
//           </p>
//           <img src={RegisterImage} alt="Logo" />
//         </LogoContainer>
//         <ContentContainer>
//           <div>
//             <p>
//               Somos uma empresa com especialistas em diversas áreas, onde o
//               nosso principal objetivo é trazer de forma prática e direta, o
//               conhecimento que você busca!
//             </p>
//             <img src={content1} alt="Profissional de tecnologia trabalhando" />
//           </div>
//           <div>
//             <img
//               src={content2}
//               alt="Gráfico dos salários na area de tecnologia"
//             />
//             <p>
//               O mercado da area tech está aquecido, e nós te preparamos para
//               vencer qualquer desafio.
//             </p>
//           </div>
//         </ContentContainer>
//         <Box>
//           <h2>Conheça o nosso time de ensino</h2>
//           <Ul>
//             {mentors.map(({ name, category }) => (
//               <Li key={name}>
//                 <img src={avatar} alt="Avatar" />
//                 <h3>{name}</h3>
//                 <h4>{category}</h4>
//               </Li>
//             ))}
//           </Ul>
//           <h2>Conheça nossos cursos</h2>
//           <Ul>
//             {courses.map(({ name, category }) => (
//               <Li key={name}>
//                 <img src={coursesImg} alt="Avatar" />
//                 <h3>{name}</h3>
//                 <h4>{category}</h4>
//               </Li>
//             ))}
//           </Ul>
//         </Box>
//         <FooterContainer>
//           <h2>Seja nosso parceiro de ensino</h2>
//           <p>Entre em contato através dos links abaixo para avaliação</p>
//           <div>
//             <a href="https://linkedin.com" target="_blank" rel="noreferrer">
//               <img src={linkedin} alt="LinkedIn" />
//             </a>
//             <a
//               href="https://web.whatsapp.com/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <img src={whatsapp} alt="WhatsApp" />
//             </a>
//           </div>
//         </FooterContainer>
//       </Container>
//     </>
//   );
// };
