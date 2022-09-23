import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@HelpUs:cart")) || []
  );

  console.log(cart);

  const handleRemoveClick = (id) => {
    const copyCarts = [...cart];
    copyCarts.splice(id, 1);
    localStorage.setItem("@HelpUs:cart", JSON.stringify(copyCarts));
    setCart(copyCarts);
  };

  const handleCompraFinalizada = () => {
    const produto = cart.map((item) => {
      return item.prod.name && item.selectedMentor.name;
    });
    const token = localStorage.getItem("@HelpUs:token");
    const user = localStorage.getItem("@HelpUs:user");
    const { id } = user;
    const data = id;
    api
      .post("purchases", {
        Headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          userId: id,
          products: JSON.stringify(produto),
        },
      })
      .then((_) => {
        toast.success("Compra realizada com sucesso");
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
