import { createContext, useState, useContext } from "react";

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
