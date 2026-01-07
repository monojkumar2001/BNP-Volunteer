"use client";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useLanguage } from "../../../context/languageContext";

const BecomeVolunteer = () => {
  const { language } = useLanguage();

  
  const handleVolunteerModalOpen = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event("openVolunteerModal"));
  };

  return (
    <>
      <section
        className={`become-volunteer ${
          language === "bn" ? "lang-volunteer-bn" : "lang-volunteer-en"
        }`}
      >
        <div className="container">
          <div className="become-volunteer-content">
            <span className="subtitle">
              {language === "bn"
                ? "ক্যাম্পেইন ভলান্টিয়ার হবার সুযোগ"
                : "From the Ground Up, For the People"}
            </span>
            <h2>
              {language === "bn"
                ? "পরিবর্তনের অংশ হতে চান? চলুন, ভবিষ্যৎটাকে বদলে দিই।"
                : "Whether it’s grassroots initiative or community engagement, I'm with you every moment. Together, let’s build a peaceful, prosperous Panchagarh."}
            </h2>
            <p>
              {language === "bn"
                ? "আমাদের টিমে যোগ দিন। একসাথে স্বপ্ন দেখি, একসাথে পথ চলি। আপনার অপেক্ষায় আছি আমরা।"
                : "If you’re ready to become part of this change, join our team of volunteers. Let’s dream together. Let's walk together. I’m waiting for you."}
            </p>
            <div className="become-volunteer-btn">
              <button type="button" onClick={handleVolunteerModalOpen} className="custom-btn-alt">
                <span>{language === "bn" ? "এখনই যোগ দিন" : "Join Now"}</span>
                <span>
                  <GoArrowUpRight />
                </span>
              </button>
              <Link
                href="/opinion"
                className="custom-btn"
              >
                {language === "bn" ? "এখুনি আপনার অভিযোগ দিন " : " Submit your complaint now."}
                <span>
                  <GoArrowUpRight />
                </span>
              </Link>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BecomeVolunteer;
