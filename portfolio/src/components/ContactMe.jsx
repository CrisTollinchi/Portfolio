import { useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "./Title";

const ContactMe = () => {
  const [viewerData, setViewerData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageStatus, setMessageStatus] = useState("");
  const handleChange = (e) => {
    setViewerData({ ...setViewerData, [e.target.name]: e.target.value });
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
        setMessageStatus("✅ Your message has been sent successfully!");
        setViewerData({ name: "", email: "", subject: "", message: "" }); // Clear form
      })
      .catch(() => {
        setMessageStatus("❌ Oops! Something went wrong. Please try again.");
      });
    setTimeout(() => setMessageStatus(""), 5000);
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
        <button type="submit" className="border-2 border-red-800 rounded-md p-1 w-3xs">Send Message</button>
      </form>
      {messageStatus && <p>{messageStatus}</p>}
    </div>
  );
};
export default ContactMe;
