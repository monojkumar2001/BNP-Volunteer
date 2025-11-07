"use client";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useLanguage } from "../../../context/languageContext";
const HeroSection = () => {
  const { language } = useLanguage();
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
              <div className="hero-title-1">
                <h1>
                  {language === "bn"
                    ? "দেশ গড়ায় যোগ দিন"
                    : "Join in building the Country"}
                </h1>
                <h1>
                  {language === "bn"
                    ? "ভলান্টিয়ার হিসেবে নাম লেখান"
                    : "Sign up as a Volunteer"}
                </h1>
              </div>
            </div>
            <div className="hero-form">
              <form action="">
                <div className="hero-form-content">
                  <h2>
                    {language === "bn"
                      ? "স্বেচ্ছাসেবী কমিউনিটিতে যোগ দিন"
                      : "Join in building the country"}
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
                    placeholder={
                      language === "bn"
                        ? "আপনার পুরো/সম্পূর্ণ নাম"
                        : "Full Name"
                    }
                  />
                  <input
                    type="text"
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
              </form>
            </div>
          </div>
          <div className="hero-right-img">
            <Image
              src="/assets/images/hero-img.png"
              alt="Hero Image"
              width={570}
              height={730}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
