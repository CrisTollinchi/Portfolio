import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./views/HomePage";
import ContactMe from "./views/ContactMe";
import AboutMe from "./views/AboutMe";
import ProjectsPage from "./views/ProjectsPage";
import SkillsPage from "./views/SkillsPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "contact",
    element: <ContactMe />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/skills",
    element: <SkillsPage />,
  },
  {
    path: "/about",
    element: <AboutMe />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider route={route}/>
    </div>
  );
};
export default App;
