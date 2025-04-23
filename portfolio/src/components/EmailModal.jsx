import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
const EmailModal = ({ isOpen, type, message, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-black p-6 rounded-lg shadow-lg text-center w-80">
        {type === "success" ? (
          <FaCheckCircle className="text-black text-6xl mx-auto" />
        ) : (
          <FaTimesCircle className="text-black text-6xl mx-auto" />
        )}
        <p className={`mt-4 text-lg font-semibold ${type === "success" ? "text-green-600": "text-red-500"}`}>{message}</p>
        <button onClick={onClose} className=" w-64 sm:w-48 xs:w-48  bg-white text-center text-black xl:text-xl lg:text-lg md:text-md sm:text-sm  rounded hover:text-accent hover:bg-opacity-95 shadow-sm hover:shadow-xl">Close</button>
      </div>
    </div>
  );
};
export default EmailModal;