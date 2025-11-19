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

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/volunteer`,
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
        setFormData({ name: "", phone: "" });
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
      className={`hero-section ${
        language === "bn" ? "lang-hero-bn" : "lang-hero-en"
      }`}
    >
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-title-item">
              <div className="hero-title-1">
                <h1>{language === "bn" ? "আমার সাথে যোগ দিন" : "Join me"}</h1>
                <h1>
                  {language === "bn"
                    ? "চলুন না, দেশটাকে গড়ি একসাথে!"
                    : "Come on, let's build the Country together!"}
                </h1>
              </div>
              <p>
                {language === "bn"
                  ? "দেশ গড়ায় যোগ দিন, ভলান্টিয়ার হিসেবে নাম লেখান"
                  : "Join in building the Country, Sign up as a Volunteer"}
              </p>
            </div>
            <div className="hero-form">
              <form onSubmit={handleSubmit}>
                <div className="hero-form-content">
                  <h2>
                    {language === "bn"
                      ? "ভলান্টিয়ার কমিউনিটিতে যোগ দিন"
                      : "Join the volunteer community"}
                  </h2>
                  <p>
                    {language === "bn"
                      ? "আসুন, একসাথে দেশ গড়ি!"
                      : "Let's build a country together!"}
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
                      language === "bn" ? "ফোন নম্বর" : "Phone Number"
                    }
                  />
                  <button className="custom-btn" type="submit">
                    {language === "bn" ? "এখুনি যোগ দিন" : " Join us Now"}
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
