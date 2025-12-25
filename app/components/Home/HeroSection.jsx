"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import toast from "react-hot-toast";
import { useLanguage } from "../../../context/languageContext";
const HeroSection = () => {
  const { language } = useLanguage();

  const handleVolunteerModalOpen = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event("openComplaintModal"));
  };

  const handleVolunModalOpen = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event("openVolunteerModal"));
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
            <div className="hero-form-content">
              <h2>
                {language === "bn"
                  ? "যেখানে দেখবেন অন্যায় অনিয়ম সেখানেই প্রতিরোধ গড়ে তুলুন ..."
                  : "Wherever you see injustice and irregularities, build resistance there..."}
              </h2>
              <div className="hero-btn-items">
                <button
                  className="custom-btn custom-btn-join"
                  type="button"
                  onClick={handleVolunModalOpen}
                >
                  {language === "bn" ? "এখুনি যোগ দিন" : " Join us Now"}
                  <span>
                    <GoArrowUpRight />
                  </span>
                </button>
                <button
                  className="custom-btn"
                  onClick={handleVolunteerModalOpen}
                  type="button"
                >
                  {language === "bn"
                    ? "এখুনি আপনার অভিযোগ দিন "
                    : " Submit your complaint now."}
                  <span>
                    <GoArrowUpRight />
                  </span>
                </button>
              </div>
            </div>

            {/* <div className="hero-form">
              <form onSubmit={handleSubmit}>
                <div className="hero-form-content">
                  <h2>
                    {language === "bn"
                      ? "যেখানে দেখবেন অন্যায় অনিয়ম সেখানেই প্রতিরোধ গড়ে তুলুন ..."
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

                  <button
                    className="custom-btn"
                    type="submit"
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
                </div>
                {message && (
                  <p style={{ marginTop: "10px", color: "#fff" }}>{message}</p>
                )}
              </form>
            </div> */}
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
