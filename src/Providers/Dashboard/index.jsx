import { createContext, useState, useContext } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [courseDashboard, setCourseDashboard] = useState(
    JSON.parse(localStorage.getItem("@HelpUs:courseDashboard")) || []
  );

  const handleSelectedCourse = () => {
    setSelectedCourse(!selectedCourse);
  };

  return (
    <DashboardContext.Provider
      value={{
        courseDashboard,
        setCourseDashboard,
        selectedCourse,
        handleSelectedCourse,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
