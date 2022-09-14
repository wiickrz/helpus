import { createContext, useState, useContext, useEffect } from "react";
import { Api } from "../../Services/api";

export const MentorsContext = createContext();

export const MentorsProvider = ({ children }) => {
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    Api.get("/mentors").then((response) => {
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
