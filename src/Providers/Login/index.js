import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Services/api.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const nav = useNavigate();

  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("@HelpUs:userId")) || ""
  );

  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("@HelpUs:token") || ""
  );

  const onSubmitFunction = (data) => {
    api
      .post("/login/", data)
      .then((response) => {
        const access = response.data;
        let decode = jwt_decode(access);
        setUserId(decode.user_id);
        localStorage.setItem("@HelpUs:userId", decode.user_id);
        setToken(access);
        setAuthenticated(true);

        localStorage.setItem("@HelpUs:token", decode.user_id);

        return nav("/dashboard");
      })
      .catch((_) => toast.error("Email ou senha Inválidos"));
  };

  const logout = () => {
    setToken("");
    localStorage.clear();

    nav("/login");
  };

  return (
    <LoginContext.Provider
      value={{ onSubmitFunction, authenticated, token, logout, userId }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export const useLogin = () => useContext(LoginContext);
