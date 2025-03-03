import Title from "./Title";
import { FaLinkedin, FaGithub, FaPhone, FaMailBulk } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="border-r-4 border-red-800 p-2">
      <Title titleContent="Contact Info" />
      {/* General info section */}
      <div className="flex-col items-center p-1">
        <div className="flex items-center gap-3 my-2">
          <FaPhone className="text-2xl" />
          <div>
            <p>Mobile Phone</p>
            <p>(904)-935-9617</p>
          </div>
        </div>
        <div className="flex items-center gap-3 my-2">
          <FaMailBulk className="text-2xl" />
          <div>
            <p>Email</p>
            <p>cristollinchi@gmail.com</p>
          </div>
        </div>
      </div>
      {/* Links section */}
      <div className="flex justify-evenly  my-2">
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
