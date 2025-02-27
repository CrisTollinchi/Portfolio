import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactInfo from "./components/ContactInfo";
import ContactMe from "./components/ContactMe";
import Header from "./components/header";
import Image from "./components/Image";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="grid grid-rows-4 gap-40">
      <Header />
      <div className="row-span-2 grid grid-cols-3">
        <ContactInfo />
        <Image />
        <AboutMe />
      </div>
      <div className="row-span-3 grid grid-cols-2">
        <Skills />
        <Projects />
      </div>
      <div>
        <ContactMe />
      </div>
    </div>
  );
};

export default App;
