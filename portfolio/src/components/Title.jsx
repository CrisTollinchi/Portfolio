const Title = ({titleContent}) => {
  return <div className="flex gap-5 items-center">
    <div className="bg-red-800 w-10 h-10"></div>
    <h3 className="text-3xl font-bold">{titleContent}</h3>
  </div>;
};
export default Title;
