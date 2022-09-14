import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/index";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const history = useHistory();

  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("@HelpUs:userId")) || ""
  );

  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("@HelpUs:token") || ""
  );

  const onSubmitFunction = (data) => {
    api
      .post("/register/", data)
      .then((response) => {
        const { access } = response.data;
        let decode = jwt_decode(access);
        setUserId(decode.id);
        localStorage.setItem("@HelpUs:userId", decode.id);
        setToken(access);
        setAuthenticated(true);

        localStorage.setItem("@HelpUs:token", access);

        return history.push("/dashboard");
      })
      .catch((_) => toast.error("Email ou senha Inválidos"));
  };

  const logout = () => {
    setToken("");
    localStorage.clear();

    history.push("/login");
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
