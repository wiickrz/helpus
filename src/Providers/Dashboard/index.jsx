import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { useAuth } from "../Auth";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [courseDashboard, setCourseDashboard] = useState(
    JSON.parse(localStorage.getItem("@HelpUs:courseDashboard")) || []
  );
  const { purchasesFilter, purchases } = useAuth();

  const handleSelectedCourse = () => {
    purchasesFilter();
    setCourseDashboard(purchases);
    setSelectedCourse(!selectedCourse);
  };

  return (
    <DashboardContext.Provider
      value={{
        courseDashboard,
        setCourseDashboard,
        selectedCourse,
        setSelectedCourse,
        handleSelectedCourse,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
