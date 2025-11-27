"use client";

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import toast from "react-hot-toast";
import { useLanguage } from "../../../context/languageContext";

const OpinionModal = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    message: "",
    location: "",
  });

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("openVolunteerModal", handleOpenModal);

    return () => {
      window.removeEventListener("openVolunteerModal", handleOpenModal);
    };
  }, []);

  const categoryOptions = [
    {
      value: "1",
      labelBn: "আপনার পরামর্শ বা অভিমত জানান",
      labelEn: "Share your advice or opinion",
    },
    {
      value: "2",
      labelBn: "অভিযোগ জানান",
      labelEn: "Report a complaint",
    },
    {
      value: "3",
      labelBn: "চাঁদাবাজি, সংঘর্ষ বা আইন-শৃঙ্খলা সংক্রান্ত ইনসিডেন্ট রিপোর্ট করুন",
      labelEn: "Report extortion, conflict or law and order incident",
    },
    {
      value: "4",
      labelBn: "অন্য যে কোন বিষয়ে যোগাযোগ করুন",
      labelEn: "Contact for any other matter",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/opinion`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name || null,
            phone: formData.phone || null,
            category: formData.category || null,
            message: formData.message || null,
            location: formData.location || null,
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
          phone: "",
          category: "",
          message: "",
          location: "",
        });
        setIsModalOpen(false);
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

  const isCategoryThree = formData.category === "3";

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
          padding: "30px",
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
            top: "15px",
            right: "15px",
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#333",
          }}
        >
          <IoMdClose />
        </button>

        <h2 className="section-title opinion-form-title">
          {language === "bn"
            ? "মতামত এবং অভিযোগঃ"
            : "Opinions and Complaints"}
        </h2>
        <p
          className={`opinion-form-description ${
            language === "bn" ? "lang-volunteer-bn" : "lang-volunteer-en"
          }`}
        >
          {language === "bn"
            ? "যেকোন রমের অভিযোগ বা মতামত নির্ভয়ে দিন। কথা দিচ্ছি, সম্পূর্ণ গোপনীয়তা রক্ষা করা হবে।"
            : "Give any complaint or opinion without fear. We promise complete confidentiality will be maintained."}
        </p>

        <form onSubmit={handleSubmit}>
          <div
            className={`opinion-form-content ${
              language === "bn" ? "lang-opinion-bn" : "lang-opinion-en"
            }`}
          >
            <div className="form-group-item">
              <label htmlFor="name">
                {language === "bn" ? "নাম" : "Name"} (
                {language === "bn" ? "Optional" : "Optional"})
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={language === "bn" ? "আপনার নাম" : "Your name"}
              />
            </div>
            <div className="form-group-item">
              <label htmlFor="phone">
                {language === "bn" ? "ফোন নম্বর" : "Phone Number"} (
                {language === "bn" ? "ঐচ্ছিক" : "Optional"})
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={
                  language === "bn"
                    ? "আপনার ফোন নম্বর"
                    : "Your phone number"
                }
                style={{
                  padding: "10px 16px",
                }}
              />
            </div>
            <div className="form-group-item">
              <label htmlFor="category">
                {language === "bn" ? "বিষয় নির্বাচন করুন" : "Select Topic"}
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">
                  {language === "bn"
                    ? "একটি অপশন নির্বাচন করুন"
                    : "Select an option"}
                </option>
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {language === "bn" ? option.labelBn : option.labelEn}
                  </option>
                ))}
              </select>
            </div>
            {isCategoryThree && (
              <div className="form-group-item">
                <label htmlFor="location">
                  {language === "bn" ? "ঘটনার স্থান" : "Incident Location"}
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder={
                    language === "bn"
                      ? "ঘটনার লোকেশন লিখুন"
                      : "Enter incident location"
                  }
                />
              </div>
            )}
            <div className="form-group-item">
              <label htmlFor="message">
                {language === "bn"
                  ? "আপনার মতামত বা অভিযোগ লিখুন"
                  : "Your opinion or complaint"}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={
                  language === "bn"
                    ? "বিস্তারিত লিখুন..."
                    : "Write your message..."
                }
                rows={5}
              />
            </div>
          </div>
          <button
            type="submit"
            className="custom-btn"
            style={{ width: "100%", justifyContent: "center" }}
            disabled={loading}
          >
            <span>
              {loading
                ? language === "bn"
                  ? "পাঠানো হচ্ছে..."
                  : "Submitting..."
                : language === "bn"
                ? "জমা দিন"
                : "Submit"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default OpinionModal;


