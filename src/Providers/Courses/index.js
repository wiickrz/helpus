import { createContext, useState, useContext, useEffect } from "react";
import { Api } from "../../Services/api";
import { useLogin } from "../Login";
import { useCart } from "../Cart";

export const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const { token } = useLogin();
  const { setCart } = useCart();
  useEffect(() => {
    Api.get("/courses").then((response) => {
      setCourses(response.data);
    });
  }, []);

  const handleAddCart = (id) => {
    if (!!token) {
      Api.get(`/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => setCart(response.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <CoursesContext.Provider value={(courses, handleAddCart)}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourses = () => useContext(CoursesContext);