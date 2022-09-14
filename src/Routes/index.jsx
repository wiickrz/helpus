import { Routes, Route } from "react-router-dom";
import { Cart } from "../Pages/Cart/index";
import { Dashboard } from "../Pages/Dashboard/index";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/cart" element={<Cart />} /> */}
      {/* <Route path="/dashaboard" element={<Dashboard />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
