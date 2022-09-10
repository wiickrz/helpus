import { createContext, useState, useContext } from "react";

export const MentorsContext = createContext();

export const MentorsProvider = ({ children }) => {
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: "André",
      category: "Front-end",
      img: "",
    },
    {
      id: 2,
      name: "Arthur",
      category: "Front-end",
      img: "",
    },
    {
      id: 3,
      name: "Fernanda",
      category: "Front-end",
      img: "",
    },
    {
      id: 4,
      name: "Olga",
      category: "Front-end",
      img: "",
    },
    {
      id: 5,
      name: "Willian",
      category: "Front-end",
      img: "",
    },
    {
      id: 6,
      name: "Paulo",
      category: "Back-end",
      img: "",
    },
    {
      id: 7,
      name: "Guilherme",
      category: "Back-end",
      img: "",
    },
    {
      id: 8,
      name: "Gustavo",
      category: "Back-end",
      img: "",
    },
    {
      id: 9,
      name: "Mônica",
      category: "Back-end",
      img: "",
    },
    {
      id: 10,
      name: "Thais",
      category: "Back-end",
      img: "",
    },
  ]);
  return (
    <MentorsContext.Provider value={mentors}>
      {children}
    </MentorsContext.Provider>
  );
};

export const useMentors = () => useContext(MentorsContext);
