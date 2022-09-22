import { createContext, useState, useContext } from "react";
import { useCourses } from "../Courses";
import { useNavigate } from "react-router-dom";
import { useMentors } from "../Mentors";
import { useCart } from "../Cart";

export const CardProdContext = createContext();

export const CardProdProvider = ({ children }) => {
  const { courses } = useCourses();
  const mentors = useMentors();
  const { cart, setCart } = useCart();

  const [prod, setProd] = useState(
    JSON.parse(localStorage.getItem("@HelpUs:card")) || []
  );
  const [mentor, setMentor] = useState("");

  const nav = useNavigate();

  const handleClick = (id) => {
    const course = courses.find((p) => p.id === id);
    localStorage.setItem("@HelpUs:card", JSON.stringify(course));
    setProd(course);
    console.log(course);
    return nav("/product");
  };

  const handleClickCart = () => {
    const selectedMentor = mentors.filter((m) => {
      return m.name === mentor;
    });
    const ProductAddedToTheCart = { prod, selectedMentor };
    setCart([...cart, ProductAddedToTheCart]);
    const copyLocalStorage = [...cart, ProductAddedToTheCart];
    localStorage.setItem("@HelpUs:cart", JSON.stringify(copyLocalStorage));

    // return nav("/Cart");
  };
  const functionBackDashboard = () => {
    return nav("/dashboard");
  };

  return (
    <CardProdContext.Provider
      value={{
        prod,
        handleClick,
        functionBackDashboard,
        setMentor,
        handleClickCart,
      }}
    >
      {children}
    </CardProdContext.Provider>
  );
};

export const useCardProd = () => useContext(CardProdContext);
