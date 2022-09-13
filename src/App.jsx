import { GlobalStyle } from "./Styles/GlobalStyle";
<<<<<<< HEAD
import { AppRoutes } from "./Routes/index";
=======
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
>>>>>>> register

export const App = () => {
  return (
    <>
      <GlobalStyle />
<<<<<<< HEAD
      <AppRoutes />
=======
      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
>>>>>>> register
    </>
  );
};
