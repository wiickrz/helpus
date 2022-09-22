import { Routes, Route, Navigate } from "react-router-dom";
import { Cart } from "../Pages/Cart/index";
import { Dashboard } from "../Pages/Dashboard";
import { PageContact } from "../Pages/PageContact";
import { Home } from "../Pages/Home";
import { NotFound } from "../Pages/NotFound";
import { CardProd } from "../Pages/CardProd";

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<CardProd />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Navigate to="/dashboard" />} />
      <Route path="/register" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<PageContact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
