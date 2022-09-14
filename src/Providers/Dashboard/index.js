import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../Services/api";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [courseDashboard, setCourseDashboard] = useState(
    JSON.parse(localStorage.getItem("@HelpUs:courseDashboard")) || []
  );

  return (
    <DashboardContext.Provider value={(courseDashboard, setCourseDashboard)}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
