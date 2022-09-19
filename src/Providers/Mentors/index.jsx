import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../Services/api";

export const MentorsContext = createContext();

export const MentorsProvider = ({ children }) => {
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    api.get("/mentors").then((response) => {
      setMentors(response.data);
    });
  }, []);
  return (
    <MentorsContext.Provider value={mentors}>
      {children}
    </MentorsContext.Provider>
  );
};

export const useMentors = () => useContext(MentorsContext);
