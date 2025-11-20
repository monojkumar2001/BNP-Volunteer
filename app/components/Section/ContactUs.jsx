"use client";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import toast from "react-hot-toast";
import { useLanguage } from "../../../context/languageContext";
const ContactUs = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(
          language === "bn" ? "সফলভাবে জমা হয়েছে!" : "Submitted successfully!",
          {
            duration: 4000, // 4 seconds
            position: "top-right", // screen এর right side
          }
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(
          data.message ||
            (language === "bn" ? "কিছু ভুল হয়েছে!" : "Something went wrong!"),
          {
            duration: 4000,
            position: "top-right",
          }
        );
      }
    } catch (error) {
      console.error(error);
      toast.error(
        language === "bn" ? "সার্ভারে সমস্যা হচ্ছে!" : "Server error!"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      className="contact-use"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-us-left">
              <h2 className="sub-title">
                {language === "bn" ? "যোগাযোগ করুন" : "Contact Us"}
              </h2>
              <h1 className="section-title">
                {language === "bn" ? "আমাদের সাথে যোগাযোগ করুন" : "Get In Touch With Us"}
              </h1>
              <p>
                {language === "bn" ? (
                  <>
                    আপনার কোনো প্রশ্ন, পরামর্শ বা সহায়তা প্রয়োজন হলে নির্দ্বিধায় আমাদের সাথে যোগাযোগ করুন। আমরা সর্বদা আপনার পাশে আছি।
                  </>
                ) : (
                  <>
                    Feel free to contact us if you have any questions, suggestions, or need assistance. We are always here to help.
                  </>
                )}
              </p>
              <ul className="contact-us-info">
                <li>
                  <div className="contact-icon">
                    <GrLocation />
                  </div>
                  <div className="contact-list-text">
                    <h4>{language === "bn" ? "ঠিকানা" : "Location"}</h4>
                    <p>
                      {language === "bn" ? (
                        <>
                          ঢাকা: জুরিস্টস চেম্বার্স, লেভেল ৩, হাউজ ৩৯এ, রোড ৭, ধানমন্ডি ১২০৯
                        </>
                      ) : (
                        <>
                          Dhaka: Jurists Chambers, Level 3, House 39A, Road 7,
                          Dhanmandi 1209
                        </>
                      )}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="contact-icon">
                    <FiPhone />
                  </div>
                  <div className="contact-list-text">
                    <h4>{language === "bn" ? "ফোন নম্বর" : "Phone Number"}</h4>
                    <a href="tel:+8801846236666">+8801846236666</a>
                  </div>
                </li>
                <li>
                  <div className="contact-icon">
                    <MdOutlineMailOutline />
                  </div>
                  <div className="contact-list-text">
                    <h4>{language === "bn" ? "ইমেইল ঠিকানা" : "Email Address"}</h4>
                    <a href="mailto:nawshad.bnp@gmail.com">
                      nawshad.bnp@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-us-right">
              <form onSubmit={handleSubmit} className="contact-us-form">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group-item">
                      <label htmlFor="name">
                        {language === "bn" ? "আপনার নাম" : "Your Name"}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        id="name"
                        placeholder={language === "bn" ? "আপনার নাম লিখুন" : "Enter your name"}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group-item">
                      <label htmlFor="email">
                        {language === "bn" ? "আপনার ইমেইল" : "Your E-mail"}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        id="email"
                        placeholder={language === "bn" ? "আপনার ইমেইল লিখুন" : "Enter your email"}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group-item">
                      <label htmlFor="phone">
                        {language === "bn" ? "ফোন নম্বর" : "Phone Number"}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        name="phone"
                        id="phone"
                        placeholder="+8801XXXXXXXXX"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group-item">
                      <label htmlFor="subject">
                        {language === "bn" ? "বিষয়" : "Subject"}
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        name="subject"
                        id="subject"
                        placeholder={language === "bn" ? "বিষয় লিখুন" : "Enter your subject"}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group-item">
                      <label htmlFor="message">
                        {language === "bn" ? "বার্তা" : "Message"}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        id="message"
                        cols="30"
                        rows="4"
                        placeholder={language === "bn" ? "আপনার বার্তা লিখুন" : "Enter your message"}
                      ></textarea>
                    </div>
                  </div>
                  <div className="contact-us-btn">
                    <button type="submit" className="custom-btn" disabled={loading}>
                      <span>
                        {loading
                          ? language === "bn"
                            ? "পাঠানো হচ্ছে..."
                            : "Sending..."
                          : language === "bn"
                          ? "বার্তা পাঠান"
                          : "Send Message"}
                      </span>
                      {!loading && (
                        <span>
                          <GoArrowUpRight />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
