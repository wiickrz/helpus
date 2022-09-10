import { createContext, useContext } from "react";
// import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../Services/api";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  // const history = useHistory();
  const functionRegister = (data) => {
    api
      .post("/users/", data)
      .then((_) => {
        toast.success("Sucesso ao criar conta");
        // history.push("/login");
      })
      .catch((_) => {
        toast.error(
          "Erro ao criar conta. Verifique se as informações estão corretas"
        );
      });
  };

  return (
    <RegisterContext.Provider value={{ functionRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
