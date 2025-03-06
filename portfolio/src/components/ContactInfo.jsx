import Title from "./Title";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="xl:border-r-4 xl:border-red-800 md:border-r-4 md:border-red-800 p-2 sm:border-b-red-800 ">
      <Title titleContent="Contact Info" />
      {/* General info section */}
      <div className="flex-col items-center p-1">
        <div className="flex items-center gap-3 my-2">
          <FaMailBulk className="text-2xl" />
          <div>
            <p>Email</p>
            <p className="hover:text-red-800 ">
              <a href="mailto:cristollinchi@gmail.com">cristollinchi@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      {/* Links section */}
      <div className="flex flex-col justify-evenly gap-2 my-2">
        <a href="https://github.com/CrisTollinchi">
          <FaGithub className="text-5xl hover:text-red-800 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/cristerfer-tollinchi-80942134b/">
          <FaLinkedin className="text-5xl hover:text-red-800 transition duration-300" />
        </a>
      </div>
    </div>
  );
};
export default ContactInfo;
