"use client";

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import toast from "react-hot-toast";
import { useLanguage } from "../../../context/languageContext";
import { GoArrowUpRight } from "react-icons/go";

const VolunteerModel = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("openVolunteerModal", handleOpenModal);

    return () => {
      window.removeEventListener("openVolunteerModal", handleOpenModal);
    };
  }, []);

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
        message:
          language === "bn" ? "ফোন নম্বর প্রয়োজন" : "Phone number is required",
      };
    }

    if (!phoneRegex.test(cleanedPhone)) {
      return {
        valid: false,
        message:
          language === "bn"
            ? "সঠিক ফোন নম্বর দিন (01XXXXXXXXX বা +8801XXXXXXXXX)"
            : "Please enter a valid phone number (01XXXXXXXXX or +8801XXXXXXXXX)",
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
        const errorMessage =
          data.message &&
          (data.message.includes("phone") || data.message.includes("already"))
            ? language === "bn"
              ? "এই ফোন নম্বরটি ইতিমধ্যে ব্যবহার করা হয়েছে"
              : "This phone number has already been used"
            : data.message ||
              (language === "bn" ? "কিছু ভুল হয়েছে!" : "Something went wrong!");

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

  if (!isModalOpen) return null;
  return (
    <div
      className="modal-overlay"
      onClick={() => setIsModalOpen(false)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "20px",
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "45px 30px 30px 30px",
          maxWidth: "600px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <button
          onClick={() => setIsModalOpen(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            fontSize: "24px",
            backgroundColor: "#000000",
            cursor: "pointer",
            color: "#fff",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IoMdClose />
        </button>

        <h2 className="section-title opinion-form-title">
          {language === "bn"
            ? "স্বেচ্ছাসেবী/ভলান্টিয়ার কমিউনিটিতে যোগ দিন"
            : "Join the Volunteer Community"}
        </h2>
        <p
          className={`opinion-form-description ${
            language === "bn" ? "lang-volunteer-bn" : "lang-volunteer-en"
          }`}
        >
          {language === "bn" ? "আসুন, একসাথে দেশ গড়ি!" : "For a better future"}
        </p>

        <form onSubmit={handleSubmit}>
          <div
            className={`opinion-form-content ${
              language === "bn" ? "lang-opinion-bn" : "lang-opinion-en"
            }`}
          >
            <div className="form-group-item">
              <label htmlFor="name">
                {language === "bn" ? "আপনার পুরো নাম" : "Your full name"}
              </label>
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
            </div>
            <div className="form-group-item">
              <label htmlFor="phone">
                {language === "bn" ? "ফোন নম্বর" : "Phone Number"}
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder={language === "bn" ? "ফোন নম্বর " : "Phone Number "}
              />
            </div>
            {phoneError && <p className="error-text">{phoneError}</p>}
          </div>
          <button
            type="submit"
            className="custom-btn"
            style={{ width: "100%", justifyContent: "center" }}
            disabled={loading}
          >
            {loading
              ? language === "bn"
                ? "জমা হচ্ছে..."
                : "Submitting..."
              : language === "bn"
              ? "এখুনি যোগ দিন"
              : " Join us Now"}
            <span>
              <GoArrowUpRight />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerModel;
