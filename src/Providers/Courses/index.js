import { createContext, useState, useContext } from "react";

export const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Lógica de programação e GIT",
      category: "Front-end",
      price: 25,
      img: "",
      description:
        "Mentoria destinada a Devs iniciantes que não sabem por onde começar.",
    },
    {
      id: 2,
      name: "HTML, CSS e JavaScript",
      category: "Front-end",
      price: 20,
      img: "",
      description:
        "Te guiamos no caminho do Front-end com técnologias básicas para um início de sucesso.",
    },
    {
      id: 3,
      name: "ReactJs, Vue e Angular",
      category: "Front-end",
      price: 25,
      img: "",
      description:
        "Destinado para os amantes do Front-end que querem um conhecimento adicional nos frameworks.",
    },
    {
      id: 4,
      name: "ContextAPI e Redux",
      category: "Front-end",
      price: 30,
      img: "",
      description:
        "Esse é para você que quer criar projetos maiores para o seu portfólio.",
    },
    {
      id: 5,
      name: "Phyton, PHP e NodeJs",
      category: "Back-end",
      price: 25,
      img: "",
      description:
        "Para você que aprender mais sobre as linguagens Phyton, PHP e NodeJs.",
    },
    {
      id: 6,
      name: "Java",
      category: "Back-end",
      price: 30,
      img: "",
      description:
        "Java era complicado antes de você conseguir nossa ajuda. Agende um horário com um dos nossos melhores programadores e domine a linguagem mais temida.",
    },
    {
      id: 7,
      name: "C#, C++ e C",
      category: "Back-end",
      price: 30,
      img: "",
      description:
        "Para você que está com dúvidas e quer aprender mais sobre C#, C++ e C",
    },
    {
      id: 8,
      name: "MongoDB, MySQL e PostgreSQL",
      category: "Back-end",
      price: 20,
      img: "",
      description: "Para saber mais sobre banco de dados, este é o seu módulo.",
    },
    {
      id: 9,
      name: "LinkedIn e Currículo",
      category: "soft-skills",
      price: 30,
      img: "",
      description:
        "Está com dúvidas sobre criação de currículo ou se o seu LinkedIn está bem estruturado? Essa mentoria é para você. Te ajudamos a ter um LinkedIn de sucesso e um currículo arrasador.",
    },
    {
      id: 10,
      name: "Entrevista técnica, Portfólio e Github",
      category: "soft-skills",
      price: 35,
      img: "",
      description:
        "Esse é para os que tem dúvidas no Github, os que estão sem ideias para o portfólio e os que tem uma entrevista técnica agendada. ",
    },
  ]);
  return (
    <CoursesContext.Provider value={courses}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourses = () => useContext(CoursesContext);
