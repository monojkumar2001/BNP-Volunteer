"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLanguage } from "../../../context/languageContext";
import Banner from "./Banner";

const OpinionItem = () => {
  const { language } = useLanguage();
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Only allow numbers, +, spaces, dashes, parentheses
      const cleanedValue = value.replace(/[^\d\+\s\-\(\)]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: cleanedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
    }

    try {
      // Clean phone number before sending
      const cleanedPhone = formData.phone
        ? formData.phone.replace(/[\s\-\(\)]/g, "")
        : null;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/opinion`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name || null,
            phone: cleanedPhone || null,
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
      } else {
        const errorMessage =
          data.message ||
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

  const isCategoryThree = formData.category === "3";
  const bannerData = {
    // title_en: "Events",
    // title_bn: "ইভেন্টগুলি",
    img: "/assets/images/opinion.jpg",
  };
  return (
    <>
      <Banner bannerData={bannerData} />
      <section
        className={`who-section who-single-section ${
          language === "bn" ? "lang-who-bn" : "lang-who-en"
        }`}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <h2 className="section-title opinion-form-title">
                {language === "bn"
                  ? "মতামত এবং অভিযোগঃ"
                  : "Opinions and Complaints"}
              </h2>
              <div
                className={`opinion-form-description-wrapper ${
                  language === "bn" ? "lang-volunteer-bn" : "lang-volunteer-en"
                }`}
                style={{
                  marginBottom: "30px",
                }}
              >
                {language === "bn" ? (
                  <>
                    <p
                      className="opinion-form-description"
                      style={{
                        fontSize: "20px",
                        lineHeight: "36px",
                        color: "#333",
                        marginBottom: "25px",
                        fontWeight: "500",
                        fontFamily: "var(--bangla-font)",
                      }}
                    >
                      আপনার মতামত ও প্রস্তাব দিন। পঞ্চগড়–১ আসনের উন্নয়ন ও
                      ভবিষ্যৎ পরিকল্পনায় আপনার কথা আমাদের কাছে অত্যন্ত
                      গুরুত্বপূর্ণ।
                    </p>

                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "32px",
                        color: "#555",
                        marginBottom: "20px",
                        fontWeight: "600",
                        fontFamily: "var(--bangla-font)",
                      }}
                    >
                      এই ফর্মের মাধ্যমে আপনি—
                    </p>

                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0 0 25px 0",
                      }}
                    >
                      <li
                        style={{
                          fontSize: "18px",
                          lineHeight: "36px",
                          color: "#444",
                          marginBottom: "15px",
                          paddingLeft: "30px",
                          position: "relative",
                          fontFamily: "var(--bangla-font)",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "0",
                            top: "12px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary-color)",
                          }}
                        ></span>
                        ১. আপনার এলাকার সমস্যা তুলে ধরতে পারেন
                      </li>
                      <li
                        style={{
                          fontSize: "18px",
                          lineHeight: "36px",
                          color: "#444",
                          marginBottom: "15px",
                          paddingLeft: "30px",
                          position: "relative",
                          fontFamily: "var(--bangla-font)",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "0",
                            top: "12px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary-color)",
                          }}
                        ></span>
                        ২. উন্নয়নমূলক প্রস্তাব ও মতামত দিতে পারেন
                      </li>
                      <li
                        style={{
                          fontSize: "18px",
                          lineHeight: "36px",
                          color: "#444",
                          marginBottom: "15px",
                          paddingLeft: "30px",
                          position: "relative",
                          fontFamily: "var(--bangla-font)",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "0",
                            top: "12px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary-color)",
                          }}
                        ></span>
                        ৩. পঞ্চগড়–১ কে আরও সুন্দর ও সমৃদ্ধ করতে আপনার ভাবনা
                        জানাতে পারেন
                      </li>
                    </ul>

                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "32px",
                        color: "#555",
                        marginBottom: "30px",
                        fontFamily: "var(--bangla-font)",
                      }}
                    >
                      আপনার দেওয়া প্রতিটি তথ্য ও প্রস্তাব গুরুত্বের সাথে বিবেচনা
                      করা হবে এবং একটি জবাবদিহিমূলক, মানবিক ও উন্নয়নমুখী
                      পঞ্চগড়–১ গড়ার পথে সহায়ক হবে।
                    </p>

                    <div
                      style={{
                        borderTop: "2px solid #e0e0e0",
                        paddingTop: "25px",
                        marginTop: "30px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                          lineHeight: "36px",
                          color: "var(--primary-color)",
                          fontWeight: "600",
                          marginBottom: "10px",
                          fontFamily: "var(--bangla-font)",
                        }}
                      >
                        পরিবর্তনের লক্ষ্য
                      </p>
                      <p
                        style={{
                          fontSize: "18px",
                          lineHeight: "32px",
                          color: "#333",
                          fontWeight: "500",
                          marginBottom: "5px",
                          fontFamily: "var(--bangla-font)",
                        }}
                      >
                        ব্যারিস্টার মুহাম্মদ নওশাদ জমির
                      </p>
                      <p
                        style={{
                          fontSize: "16px",
                          lineHeight: "28px",
                          color: "#666",
                          fontFamily: "var(--bangla-font)",
                        }}
                      >
                        পঞ্চগড়–১
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <p
                      className="opinion-form-description"
                      style={{
                        fontSize: "20px",
                        lineHeight: "35px",
                        color: "#333",
                        marginBottom: "25px",
                        fontWeight: "500",
                      }}
                    >
                      Share your opinions and suggestions. Your voice is
                      extremely important to us in the development and future
                      planning of Panchagarh-1 constituency.
                    </p>

                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "28px",
                        color: "#555",
                        marginBottom: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Through this form, you can—
                    </p>

                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0 0 25px 0",
                      }}
                    >
                      <li
                        style={{
                          fontSize: "18px",
                          lineHeight: "35px",
                          color: "#444",
                          marginBottom: "15px",
                          paddingLeft: "30px",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "0",
                            top: "12px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary-color)",
                          }}
                        ></span>
                        1. Raise issues in your area
                      </li>
                      <li
                        style={{
                          fontSize: "18px",
                          lineHeight: "35px",
                          color: "#444",
                          marginBottom: "15px",
                          paddingLeft: "30px",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "0",
                            top: "12px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary-color)",
                          }}
                        ></span>
                        2. Provide development proposals and opinions
                      </li>
                      <li
                        style={{
                          fontSize: "18px",
                          lineHeight: "35px",
                          color: "#444",
                          marginBottom: "15px",
                          paddingLeft: "30px",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "0",
                            top: "12px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary-color)",
                          }}
                        ></span>
                        3. Share your thoughts to make Panchagarh-1 more
                        beautiful and prosperous
                      </li>
                    </ul>

                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "30px",
                        color: "#555",
                        marginBottom: "30px",
                      }}
                    >
                      Every piece of information and proposal you provide will
                      be considered with importance and will help in building an
                      accountable, humane, and development-oriented
                      Panchagarh-1.
                    </p>

                    <div
                      style={{
                        borderTop: "2px solid #e0e0e0",
                        paddingTop: "25px",
                        marginTop: "30px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                          lineHeight: "32px",
                          color: "var(--primary-color)",
                          fontWeight: "600",
                          marginBottom: "10px",
                        }}
                      >
                        Vision for Change
                      </p>
                      <p
                        style={{
                          fontSize: "18px",
                          lineHeight: "28px",
                          color: "#333",
                          fontWeight: "500",
                          marginBottom: "5px",
                        }}
                      >
                        Barrister Muhammad Nawshad Zamir
                      </p>
                      <p
                        style={{
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: "#666",
                        }}
                      >
                        Panchagarh-1
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <div className="contact-us-right">
                <form onSubmit={handleSubmit}>
                  <div
                    className={`opinion-form-content ${
                      language === "bn" ? "lang-opinion-bn" : "lang-opinion-en"
                    }`}
                  >
                    <div className="form-group-item">
                      <label htmlFor="name">
                        {language === "bn" ? "নাম" : "Name"}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={
                          language === "bn" ? "আপনার নাম" : "Your name"
                        }
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
                          : "Select Topic"}
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
                            {language === "bn"
                              ? option.labelBn
                              : option.labelEn}
                          </option>
                        ))}
                      </select>
                    </div>
                    {isCategoryThree && (
                      <div className="form-group-item">
                        <label htmlFor="location">
                          {language === "bn"
                            ? "ঘটনার স্থান"
                            : "Incident Location"}
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
                        rows={6}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default OpinionItem;
