import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { NotFound } from "../Pages/NotFound";

export const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/dashboard" element={<Navigate to="/login" />} />
      <Route path="/pagecontact" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
