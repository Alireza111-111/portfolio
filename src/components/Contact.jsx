import React from "react";
import Lottie from "lottie-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import animationData6 from "../animations/contact.json";

function Contact() {
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://portfolio-backend-xe6m.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Your message has been sent successfully!");
        e.target.reset();
      } else {
        toast.error(result.error || "Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to connect to the server. Please check your internet connection.");
    }
  };

  return (
    <div className="custom-contact-bg text-white px-4 py-5">
      <div className="container">
        <div className="contact-header-container mb-4">
          <div className="contact-header-inner d-flex align-items-center justify-content-between">
            <h1 className="contact-title mb-0">CONTACT</h1>
            <div className="lottie-wrapper">
              <Lottie animationData={animationData6} loop className="lottie-animation" />
            </div>
          </div>
        </div>

        <div className="border-top border-secondary mb-5 w-100"></div>

        <div className="row">
          <div className="col-md-6 text-md-start text-center mb-4 mb-md-0">
            <p className="fs-5 custom-contact-p">
              Whether you have a question, feedback, or just want to say hello — feel free to reach out.
              I appreciate thoughtful conversations and look forward to hearing from people with shared interests.
            </p>
          </div>

          <div className="col-md-6">
            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <input type="text" name="name" placeholder="Your Name" className="form-control custom-input" required />
              </div>
              <div className="mb-3">
                <input type="email" name="email" placeholder="Your Email" className="form-control custom-input" required />
              </div>
              <div className="mb-3">
                <textarea name="message" rows="4" placeholder="Your Message" className="form-control custom-input" required />
              </div>
              <button type="submit" className="custom-send-btn2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default Contact;