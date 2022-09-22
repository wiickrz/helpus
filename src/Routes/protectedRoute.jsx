import { Routes, Route, Navigate } from "react-router-dom";
import { Cart } from "../Pages/Cart/index";
import { Dashboard } from "../Pages/Dashboard";
import { Home } from "../Pages/Home";

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Navigate to="/dashboard" />} />
      <Route path="/register" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
