import { useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../components/Title";
import EmailModal from "../components/EmailModal";

const ContactMe = () => {
  const [viewerData, setViewerData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageStatus, setMessageStatus] = useState("");
  const [modalType, setModalType] = useState("");
  const [modalOpened, setModalOpened] = useState(false);
  const handleChange = (e) => {
    setViewerData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_626dhy4",
        "template_ezpo6mo",
        {
          from_name: viewerData.name,
          from_email: viewerData.email,
          message: viewerData.message,
        },
        "iacbBxHtey2wwgfji"
      )
      .then(() => {
        setModalType("success");
        setMessageStatus("✅ Your message has been sent successfully!");
        setViewerData({ name: "", email: "", subject: "", message: "" }); // Clear form
        setModalOpened(true);
      })
      .catch(() => {
        setModalType("error");
        setMessageStatus("❌ Something went wrong. Please try again.");
        setModalOpened(true);
      });
  };
  return (
    <div>
      <Title titleContent="Want to chat?" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-2">
        <div className="flex flex-wrap gap-1">
          <input
            className="border-2 border-red-800 rounded-md p-1"
            type="text"
            name="name"
            placeholder="Your Name"
            value={viewerData.name}
            onChange={handleChange}
            required
          />
          <input
            className="border-2 border-red-800 rounded-md p-1"
            type="email"
            name="email"
            placeholder="Your Email"
            value={viewerData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className="border-2 border-red-800 rounded-md w-full h-40 p-2 text-lg "
          name="message"
          placeholder="Your Message"
          value={viewerData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="border-2 border-red-800 rounded-md p-1 w-3xs"
        >
          Send Message
        </button>
      </form>
      {modalOpened &&
          <EmailModal
            isOpen={modalOpened}
            type={modalType}
            message={messageStatus}
            onClose={() => setModalOpened(false)}
          />
        }
    </div>
  );
};
export default ContactMe;
