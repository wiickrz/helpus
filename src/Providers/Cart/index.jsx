import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@HelpUs:cart")) || []
  );

  const handleRemoveClick = (id) => {
    const copyCarts = [...cart];
    const item = copyCarts.filter((cart) => cart.id !== id);
    localStorage.setItem("@HelpUs:cart", JSON.stringify(item));
    setCart(item);
  };
  return (
    <CartContext.Provider value={{ handleRemoveClick, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
