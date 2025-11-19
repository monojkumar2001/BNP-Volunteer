"use client";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useLanguage } from "../../../context/languageContext";

const BecomeVolunteer = () => {
  const { language } = useLanguage();
  return (
    <section
      className={`become-volunteer ${
        language === "bn" ? "lang-volunteer-bn" : "lang-volunteer-en"
      }`}
      data-aos="fade-up"
      data-aos-duration="3000"
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
            <Link href="#" className="custom-btn">
              <span>{language === "bn" ? "যোগাযোগ করুন" : " Contact Us"}</span>
              <span>
                <GoArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeVolunteer;
