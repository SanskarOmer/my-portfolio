import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9shnolq", // your EmailJS Service ID
        "template_e2bvd4p", // your Template ID
        form.current,
        "lggg23l3wgUvgSpyG" // your Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            style: {
              background: "linear-gradient(90deg, #f97316, #ff7a18, #ff5200)",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "14px",
            },
            closeButton: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            style: {
              background: "linear-gradient(90deg, #ff4d00, #ff7a18, #f97316)",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "14px",
            },
            closeButton: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-[10vw] md:px-[8vw] lg:px-[16vw] font-sans  bg-skills-gradient clip-path-custom-3"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">CONTACT</h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Let's build something amazing together — drop a message or say hi! 👋
        </p>
      </div>

      {/* Contact Card */}
      <div className="relative max-w-2xl mx-auto border border-[#f97316] bg-[#141414]/80 backdrop-blur-md  shadow-[0_0_30px_2px_rgba(255,138,76,0.4)] rounded-2xl p-8 transition-transform hover:scale-[1.02]">
        <h3 className="text-2xl font-bold text-center text-white mb-6">
          Let's Connect <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-5 text-white"
        >
          <div>
            <label className="block text-gray-300 text-sm mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-[#241a15] border border-gray-600 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-[#241a15] border border-gray-600 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-lg bg-[#241a15] border border-gray-600 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 rounded-lg bg-[#241a15] border border-gray-600 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-orange-500 via-[#ff7a18] to-[#ff5200] py-3 font-semibold rounded-lg shadow-md hover:opacity-90 transition-transform duration-300 hover:scale-105"
          >
            {isSent ? "Message Sent ✅" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
