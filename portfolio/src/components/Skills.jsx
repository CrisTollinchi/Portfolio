import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
} from "react-icons/bi";
import Title from "./Title";

const Skills = () => {
  return (
    <div className="xl:border-r-4 xl:border-red-800 md:border-r-4 md:border-red-800 sm:border-b-red-800  p-2">
      <Title titleContent="Skills" />
      <div className="flex flex-wrap">
      <BiLogoJavascript className="text-9xl text-yellow-500" />
      <BiLogoHtml5 className="text-9xl text-orange-500" />
      <BiLogoCss3 className="text-9xl text-blue-500" />
      <BiLogoReact className="text-9xl text-blue-800" />
      <BiLogoNodejs className="text-9xl text-green-700" />
      <BiLogoMongodb className="text-9xl text-green-400" />
      </div>
    </div>
  );
};
export default Skills;
