import { CoursesProvider } from "./Courses";
import { DashboardProvider } from "./Dashboard";
import { MentorsProvider } from "./Mentors";

export const Providers = ({ children }) => {
  return (
    <>
      <MentorsProvider>
        <CoursesProvider>
          <DashboardProvider>{children}</DashboardProvider>
        </CoursesProvider>
      </MentorsProvider>
    </>
  );
};
