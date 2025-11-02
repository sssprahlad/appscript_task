import React from "react";
import { useState } from "react";
import "./Contact.css";
import { useSelector } from "react-redux";
import { FaMobileAlt } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { TbMailShare } from "react-icons/tb";
import { FaHouseUser } from "react-icons/fa";

import { LuSend } from "react-icons/lu";

const Contact = () => {
  const setDarkAndLightMode = false;
  const [mailDetails, setMailDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [copyTextStatus, setCopyTextStatus] = useState(false);

  const contactDetails = [
    {
      id: 1,
      icon: <FaMobileAlt />,
      title: "Phone Number",
      description: "1234567890",
    },
    {
      id: 2,
      icon: <TbMailShare />,
      title: "Email",
      description: "appscript@gmail.com",
    },
    {
      id: 3,
      icon: <FaHouseUser />,
      title: "Address",
      description: "Benguluru",
    },
    {
      id: 4,
      icon: <FaGlobeAmericas />,
      title: "Website",
      description: "https://appscript.com",
    },
  ];

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setMailDetails({ ...mailDetails, [name]: value });
  };

  return (
    <div
      className={
        `all-pages-container dark-bg-parent-container`
        //   ${
        //   darkAndLightMode
        //     ? "dark-bg-parent-container"
        //     : "light-bg-parent-container"
        // }`
      }
    >
      <div className="row-parent-container common-container pl-2">
        <div>
          <h1 className="experience-title">Get in touch</h1>
          <div className="under-line"></div>
        </div>

        <div className="row-parent-container">
          <div className="contact-container1">
            <h2 className="contact-us-text">Contact Us</h2>
            <div className="contact-us-container contact-height">
              {contactDetails?.map((contact, index) => (
                <div className="contact-alignment" key={index}>
                  <div>
                    {/* <span className='conatct-us-icons'> {contact.icon}</span> */}
                    {contact.icon}
                  </div>
                  <div className="contact-description">
                    <p>{contact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-container1 ">
            <h2 className="send-me-text">Send me a Message</h2>
            <div className="contact-us-container">
              <div className="contact-alignment">
                <input
                  classNam="contact-input"
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={handleContactChange}
                  required
                />
              </div>

              <div className="contact-alignment">
                <input
                  classNam="contact-input"
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={handleContactChange}
                  required
                />
              </div>

              <div className="contact-alignment">
                <textarea
                  placeholder="Enter Your Message"
                  cols="11"
                  rows="4"
                  name="message"
                  onChange={handleContactChange}
                  required
                />
              </div>

              <div className="send-message-btn">
                <p>Send Message </p>
                <LuSend className="send-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
