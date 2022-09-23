import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
import { useNavigate } from "react-router";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@HelpUs:cart")) || []
  );
  const nav = useNavigate();

  const handleRemoveClick = (id) => {
    const copyCarts = [...cart];
    copyCarts.splice(id, 1);
    localStorage.setItem("@HelpUs:cart", JSON.stringify(copyCarts));
    setCart(copyCarts);
  };

  const handleCompraFinalizada = () => {
    const user = localStorage.getItem("@HelpUs:user");
    const id = JSON.parse(user).id;
    const prod = JSON.parse(localStorage.getItem("@HelpUs:cart"))[0].prod.name;
    const mentor = JSON.parse(localStorage.getItem("@HelpUs:cart"))[0]
      .selectedMentor[0].name;
    console.log([prod]);

    api
      .post("purchases", {
        userId: id,
        product: prod,
        mentor: mentor,
      })
      .then((_) => {
        toast.success("Compra realizada com sucesso");
        setCart([]);
        localStorage.removeItem("@HelpUs:cart");
        nav("/contact");
      })
      .catch((err) => console.log(err));
  };
  return (
    <CartContext.Provider
      value={{ handleRemoveClick, cart, setCart, handleCompraFinalizada }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
