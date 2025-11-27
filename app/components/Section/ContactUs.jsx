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

  // Validate phone number format
  const validatePhoneNumber = (phone) => {
    // Remove spaces, dashes, and other characters
    const cleanedPhone = phone.replace(/[\s\-\(\)]/g, "");
    
    // Check for Bangladesh phone number format
    // Valid formats: 01XXXXXXXXX (11 digits), +8801XXXXXXXXX (14 digits), 8801XXXXXXXXX (13 digits)
    const phoneRegex = /^(\+880|880|0)?1[3-9]\d{8}$/;
    
    if (!cleanedPhone) {
      return {
        valid: false,
        message: language === "bn" ? "ফোন নম্বর প্রয়োজন" : "Phone number is required"
      };
    }
    
    if (!phoneRegex.test(cleanedPhone)) {
      return {
        valid: false,
        message: language === "bn" 
          ? "সঠিক ফোন নম্বর দিন (01XXXXXXXXX বা +8801XXXXXXXXX)" 
          : "Please enter a valid phone number (01XXXXXXXXX or +8801XXXXXXXXX)"
      };
    }
    
    return { valid: true, message: "" };
  };

  // Check if phone number already exists
  const checkDuplicatePhone = async (phone) => {
    try {
      const cleanedPhone = phone.replace(/[\s\-\(\)]/g, "");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact/check-phone?phone=${cleanedPhone}`
      );
      const data = await res.json();
      return data.exists || false;
    } catch (error) {
      console.error("Error checking duplicate phone:", error);
      return false;
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      // Only allow numbers, +, spaces, dashes, parentheses
      const cleanedValue = value.replace(/[^\d\+\s\-\(\)]/g, "");
      setFormData({
        ...formData,
        [name]: cleanedValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Validate phone number format if phone is provided
    if (formData.phone) {
      const phoneValidation = validatePhoneNumber(formData.phone);
      if (!phoneValidation.valid) {
        toast.error(phoneValidation.message, {
          duration: 4000,
          position: "top-right",
        });
        setLoading(false);
        return;
      }

      // Clean phone number (remove spaces, dashes, etc.)
      const cleanedPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
      
      // Check for duplicate phone number
      const isDuplicate = await checkDuplicatePhone(cleanedPhone);
      if (isDuplicate) {
        toast.error(
          language === "bn" 
            ? "এই ফোন নম্বরটি ইতিমধ্যে ব্যবহার করা হয়েছে" 
            : "This phone number has already been used",
          {
            duration: 4000,
            position: "top-right",
          }
        );
        setLoading(false);
        return;
      }
    }

    try {
      // Clean phone number before sending
      const cleanedPhone = formData.phone ? formData.phone.replace(/[\s\-\(\)]/g, "") : "";
      
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            phone: cleanedPhone,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(
          language === "bn" ? "সফলভাবে জমা হয়েছে!" : "Submitted successfully!",
          {
            duration: 4000,
            position: "top-right",
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
        // Check if error is due to duplicate phone
        const errorMessage = data.message && (data.message.includes("phone") || data.message.includes("already"))
          ? (language === "bn" 
              ? "এই ফোন নম্বরটি ইতিমধ্যে ব্যবহার করা হয়েছে" 
              : "This phone number has already been used")
          : (data.message || (language === "bn" ? "কিছু ভুল হয়েছে!" : "Something went wrong!"));
        
        toast.error(errorMessage, {
          duration: 4000,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(
        language === "bn" ? "সার্ভারে সমস্যা হচ্ছে!" : "Server error!",
        {
          duration: 4000,
          position: "top-right",
        }
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      data-aos="fade-up"
      className={`contact-use ${
        language === "bn" ? "lang-contact-bn" : "lang-contact-en"
      }`}
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
                {language === "bn"
                  ? "আমাদের সাথে যোগাযোগ করুন"
                  : "Get In Touch With Us"}
              </h1>
              <p>
                {language === "bn" ? (
                  <>
                    আপনার কোনো প্রশ্ন, পরামর্শ বা সহায়তা প্রয়োজন হলে
                    নির্দ্বিধায় আমাদের সাথে যোগাযোগ করুন। আমরা সর্বদা আপনার
                    পাশে আছি।
                  </>
                ) : (
                  <>
                    Feel free to contact us if you have any questions,
                    suggestions, or need assistance. We are always here to help.
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
                          জুরিস্ট চেম্বারস, ৩য় তলা, হোল্ডিং ৩৯এ, রোড ৭,
                          ধানমন্ডি, ঢাকা ১২০৯
                        </>
                      ) : (
                        <>
                          Jurists Chambers, Level 3, House 39A, Road 7,
                          Dhanmandi, Dhaka 1209
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
                    <h4>
                      {language === "bn" ? "ইমেইল ঠিকানা" : "Email Address"}
                    </h4>
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
                        placeholder={
                          language === "bn"
                            ? "আপনার নাম লিখুন"
                            : "Enter your name"
                        }
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
                        placeholder={
                          language === "bn"
                            ? "আপনার ইমেইল লিখুন"
                            : "Enter your email"
                        }
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
                        placeholder={
                          language === "bn"
                            ? "বিষয় লিখুন"
                            : "Enter your subject"
                        }
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
                        placeholder={
                          language === "bn"
                            ? "আপনার বার্তা লিখুন"
                            : "Enter your message"
                        }
                      ></textarea>
                    </div>
                  </div>
                  <div className="contact-us-btn">
                    <button
                      type="submit"
                      className="custom-btn"
                      disabled={loading}
                    >
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
