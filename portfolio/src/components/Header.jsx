const Header = () => {
  return (
    <div className="flex flex-col p-2">
      <div className=" flex flex-col self-end items-center p-2">
        <div className="h-1 bg-white w-6 self-end rounded"></div>
        <p>Full Stack</p>
        <p>Developer</p>
      </div>
      <h1 className="xl:text-8xl sm:text-4xl underline decoration-8 decoration-red-800 self-center p-2">
        Cris Tollinchi
      </h1>
    </div>
  );
};
export default Header;
