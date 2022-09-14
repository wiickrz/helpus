import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../../Services/api.jsx";
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
    Api.post("/register/", data)
      .then((response) => {
        const { access } = response.data;
        let decode = jwt_decode(access);
        setUserId(decode.id);
        localStorage.setItem("@HelpUs:userId", decode.id);
        setToken(access);
        setAuthenticated(true);

        localStorage.setItem("@HelpUs:token", access);

        return nav("/dashboard");
      })
      .catch((_) => toast.error("Email ou senha Inválidos"));
  };

  const logout = () => {
    setToken("");
    localStorage.clear();

    nav("/login");
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@HelpUs:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <LoginContext.Provider
      value={{ onSubmitFunction, authenticated, token, logout, userId }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export const useLogin = () => useContext(LoginContext);
