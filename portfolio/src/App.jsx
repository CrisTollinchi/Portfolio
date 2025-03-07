import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactInfo from "./components/ContactInfo";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Image from "./components/Image";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
const img = "../src/assets/ProfessionalPic.jpeg"

const App = () => {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden bg-black text-white grid p-2">
      <Header />
      <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 border-b-4 border-t-4 border-red-800 p-2">
        <ContactInfo />
        <Image imgScr={img} />
        <AboutMe />
      </div>
      <div className="w-full grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-2">
        <Skills />
        <Projects />
      </div>
      <div className="w-full  border-t-4 border-red-800 p-2">
        <ContactMe />
      </div>
    </div>
  );
};
export default App;
