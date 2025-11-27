"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import toast from "react-hot-toast";
import { useLanguage } from "../../../context/languageContext";
const HeroSection = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");

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
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/volunteer/check-phone?phone=${cleanedPhone}`
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
      
      // Validate phone number format
      const validation = validatePhoneNumber(cleanedValue);
      setPhoneError(validation.message);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setPhoneError("");

    // Validate phone number format
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

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/volunteer`,
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
        setFormData({ name: "", phone: "" });
        setPhoneError("");
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
      id="hero"
      className={`hero-section ${
        language === "bn" ? "lang-hero-bn" : "lang-hero-en"
      }`}
    >
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-title-item">
              <div className="hero-title-1">
                <h1>
                  {language === "bn" ? "আমাদের সাথে যোগ দিন।" : "Join us!"}
                </h1>
                <h1>
                  {language === "bn"
                    ? "চলুন দেশ গড়ি একসাথে।"
                    : "Let's build our country together!"}
                </h1>
              </div>
              <p>
                {language === "bn"
                  ? "দেশ গড়ায় যোগ দিন, ভলান্টিয়ার হিসেবে নাম লেখান"
                  : "Join in building the Bangladesh, Sign up as a Volunteer"}
              </p>
            </div>
            <div className="hero-form">
              <form onSubmit={handleSubmit}>
                <div className="hero-form-content">
                  <h2>
                    {language === "bn"
                      ? "স্বেচ্ছাসেবী/ভলান্টিয়ার কমিউনিটিতে যোগ দিন"
                      : "Join the volunteer community"}
                  </h2>
                  <p>
                    {language === "bn"
                      ? "আসুন, একসাথে দেশ গড়ি!"
                      : "For a better future"}
                  </p>
                </div>
                <div className="hero-form-input-wrap">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    required
                    onChange={handleChange}
                    placeholder={
                      language === "bn" ? "আপনার পুরো নাম" : "Your full name"
                    }
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={
                      language === "bn" ? "ফোন নম্বর " : "Phone Number "
                    }
                  />
                
                  <button className="custom-btn" type="submit" disabled={loading}>
                    {loading 
                      ? (language === "bn" ? "জমা হচ্ছে..." : "Submitting...")
                      : (language === "bn" ? "এখুনি যোগ দিন" : " Join us Now")
                    }
                    <span>
                      <GoArrowUpRight />
                    </span>
                  </button>
                </div>
                {message && (
                  <p style={{ marginTop: "10px", color: "#fff" }}>{message}</p>
                )}
              </form>
            </div>
          </div>
          <div className="hero-right-img">
            <Image
              src="/assets/images/hero-img.png"
              alt="Hero Image"
              width={542}
              height={769}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
