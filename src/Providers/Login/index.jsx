import { createContext, useContext } from "react";
import { api } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../UsersFunctions";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const login = (data) => {
    api
      .post("/login/", data)
      .then((res) => loginFunction(res.data.access, data))
      .catch((res) => toast.error("Não foi possível logar, tente novamente"));
  };

  const { setToken } = useContext(UserContext);

  const nav = useNavigate();

  const loginFunction = (token, data) => {
    localStorage.setItem("@HelpUs:token", JSON.stringify(token));
    setToken(token);
    toast.success("Seja bem vindo " + data.username + "!");
    nav("/");
  };

  // const [userId, setUserId] = useState(
  //   JSON.parse(localStorage.getItem("@HelpUs:userId")) || ""
  // );

  // const [authenticated, setAuthenticated] = useState(false);
  // const [token, setToken] = useState(
  //   localStorage.getItem("@HelpUs:token") || ""
  // );

  // const onSubmitFunction = (data) => {
  //   api
  //     .post("/login/", data)
  //     .then((response) => {
  //       const access = response.data;
  //       let decode = jwt_decode(access);
  //       setUserId(decode.user_id);
  //       localStorage.setItem("@HelpUs:userId", decode.user_id);
  //       setToken(access);
  //       setAuthenticated(true);

  //       localStorage.setItem("@HelpUs:token", decode.user_id);

  //       return nav("/dashboard");
  //     })
  //     .catch((_) => toast.error("Email ou senha Inválidos"));
  // };

  // const logout = () => {
  //   setToken("");
  //   localStorage.clear();

  //   nav("/login");
  // };

  return (
    <LoginContext.Provider value={{ login, signed: true }}>
      {children}
    </LoginContext.Provider>
  );
};
// export const useLogin = () => useContext(LoginContext);
