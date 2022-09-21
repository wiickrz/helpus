import { createContext, useState, useContext } from "react";
import { useCourses } from "../Courses";
import { useNavigate } from "react-router-dom";

export const CardProdContext = createContext();

export const CardProdProvider = ({ children }) => {
  const { courses } = useCourses();
  const [cardProd, setCardProd] = useState(
    JSON.parse(localStorage.getItem("@HelpUs:card")) || []
  );
  const nav = useNavigate();

  const handleClick = (id) => {
    const course = courses.find((prod) => prod.id === id);
    localStorage.setItem("@HelpUs:card", JSON.stringify(course));
    setCardProd(course);
    console.log(course);
    // return nav("/");
  };
  return (
    <CardProdContext.Provider value={{ cardProd, handleClick }}>
      {children}
    </CardProdContext.Provider>
  );
};

export const useCardProd = () => useContext(CardProdContext);
