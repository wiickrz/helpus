import { CoursesProvider } from "./Courses";
import { MentorsProvider } from "./Mentors";
import { RegisterProvider } from "./Register";

export const Providers = ({ children }) => {
  return (
    <>
      <MentorsProvider>
        <CoursesProvider>
          <RegisterProvider>{children}</RegisterProvider>
        </CoursesProvider>
      </MentorsProvider>
    </>
  );
};
