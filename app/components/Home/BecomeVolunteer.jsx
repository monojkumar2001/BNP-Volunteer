"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import toast from "react-hot-toast";
import { useLanguage } from "../../../context/languageContext";

const BecomeVolunteer = () => {
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
      labelBn:
        "চাঁদাবাজি, সংঘর্ষ বা আইন-শৃঙ্খলা সংক্রান্ত ইনসিডেন্ট রিপোর্ট করুন",
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
    setFormData({
      ...formData,
      [name]: value,
    });
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

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("openVolunteerModal", handleOpenModal);

    return () => {
      window.removeEventListener("openVolunteerModal", handleOpenModal);
    };
  }, []);

  const isCategoryThree = formData.category === "3";

  return (
    <>
      <section
        className={`become-volunteer ${
          language === "bn" ? "lang-volunteer-bn" : "lang-volunteer-en"
        }`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="become-volunteer-content">
            <span className="subtitle">
              {language === "bn"
                ? "ক্যাম্পেইন ভলান্টিয়ার হবার সুযোগ"
                : "Opportunity to become a campaign volunteer"}
            </span>
            <h2>
              {language === "bn"
                ? "পরিবর্তনের অংশ হতে চান? চলুন, ভবিষ্যৎটাকে বদলে দিই।"
                : "Want to be part of the change? Let's change the future."}
            </h2>
            <p>
              {language === "bn"
                ? "আমাদের টিমে যোগ দিন। একসাথে স্বপ্ন দেখি, একসাথে পথ চলি। আপনার অপেক্ষায় আছি আমরা।"
                : "Join our team. Let's dream together, let's walk together. We are waiting for you."}
            </p>
            <div className="become-volunteer-btn">
              <Link href="#" className="custom-btn-alt">
                <span>{language === "bn" ? "এখনই যোগ দিন" : "Join Now"}</span>
                <span>
                  <GoArrowUpRight />
                </span>
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="custom-btn"
                type="button"
              >
                <span>
                  {language === "bn" ? "যোগাযোগ করুন" : " Contact Us"}
                </span>
                <span>
                  <GoArrowUpRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
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
                    {language === "bn"
                      ? "বিষয় নির্বাচন করুন"
                      : "Select Category"}{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="form-control"
                  >
                    <option value="">
                      {language === "bn"
                        ? "বিষয় নির্বাচন করুন"
                        : "Select a category"}
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
                      {language === "bn" ? "স্থান/লোকেশন" : "Location"}{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder={
                        language === "bn"
                          ? "ইনসিডেন্টের স্থান/লোকেশন"
                          : "Incident location"
                      }
                      className="form-control"
                    />
                  </div>
                )}
                <div className="form-group-item">
                  <label htmlFor="message">
                    {language === "bn" ? "বার্তা" : "Message"}{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    placeholder={
                      language === "bn"
                        ? "আপনার মতামত বা অভিযোগ লিখুন"
                        : "Write your opinion or complaint"
                    }
                    className="form-control"
                  />
                </div>
                <div className="opinion-form-btn ">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="custom-btn-alt"
                  >
                    {language === "bn" ? "বাতিল" : "Cancel"}
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="custom-btn"
                  >
                    <span>
                      {loading
                        ? language === "bn"
                          ? "জমা হচ্ছে..."
                          : "Submitting..."
                        : language === "bn"
                        ? "জমা দিন"
                        : "Submit"}
                    </span>
                    <span>
                      <GoArrowUpRight />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BecomeVolunteer;
