"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useLanguage } from "../../../context/languageContext";

const FaqSection = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  // Reset activeIndex when language changes
  useEffect(() => {
    setActiveIndex(null);
  }, [language]);

  const faqData = {
    bn: [
      {
        question: "আপনার প্ল্যাটফর্ম কী কী সেবা প্রদান করে?",
        answer:
          "আমরা সম্পূর্ণ ওয়েব সমাধান প্রদান করি, যার মধ্যে রয়েছে ওয়েবসাইট উন্নয়ন, SaaS পণ্য এবং আপনার চাহিদা অনুযায়ী AI-চালিত ব্যবসায়িক সরঞ্জাম।",
      },
      {
        question: "আমি কীভাবে আপনার সহায়তা দলটির সাথে যোগাযোগ করতে পারি?",
        answer:
          "আপনি ইমেইল বা আমাদের যোগাযোগ ফর্মের মাধ্যমে যেকোনো সময় আমাদের সাথে যোগাযোগ করতে পারেন। আমরা সাধারণত ২৪ ঘণ্টার মধ্যে উত্তর দিই।",
      },
      {
        question: "আপনারা কি কাস্টম মূল্য পরিকল্পনা প্রদান করেন?",
        answer:
          "হ্যাঁ! আমরা আপনার প্রকল্পের আকার, বৈশিষ্ট্য এবং সময়সীমার ভিত্তিতে নমনীয় মূল্য প্রদান করি।",
      },
      {
        question: "ক্রয়ের আগে কি আমি একটি বিনামূল্যে ডেমো পেতে পারি?",
        answer:
          "নিশ্চিতভাবেই। আমরা আমাদের বেশিরভাগ সেবার জন্য বিনামূল্যে ডেমো অফার করি যাতে আপনি প্রতিশ্রুতিবদ্ধ হওয়ার আগে পণ্যটি অনুভব করতে পারেন।",
      },
    ],
    en: [
      {
        question: "What services does your platform offer?",
        answer:
          "We provide full-stack web solutions, including website development, SaaS products, and AI-driven business tools tailored to your needs.",
      },
      {
        question: "How can I contact your support team?",
        answer:
          "You can reach us anytime via email or our contact form. We usually reply within 24 hours.",
      },
      {
        question: "Do you offer custom pricing plans?",
        answer:
          "Yes! We provide flexible pricing based on your project's size, features, and timeline.",
      },
      {
        question: "Can I get a free demo before purchasing?",
        answer:
          "Absolutely. We offer free demos for most of our services so you can experience the product before committing.",
      },
    ],
  };

  const currentFaqData = faqData[language] || faqData.en;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="faq-section"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="faq-wrapper">
          {/* Left Side */}
          <div className="faq-left">
            <h1 className="section-title">
              {language === "bn"
                ? "প্রায়শই জিজ্ঞাসিত প্রশ্ন"
                : "Frequently Asked Questions"}
            </h1>
            <p className="section-subtitle">
              {language === "bn" ? (
                <>
                  কোনো প্রশ্ন আছে? আমাদের কাছে উত্তর আছে। আমাদের প্ল্যাটফর্ম,
                  বৈশিষ্ট্য এবং সেবা সম্পর্কে নিচে আরও জানুন।
                </>
              ) : (
                <>
                  Got questions? We've got answers. Learn more about our
                  platform, features, and services below.
                </>
              )}
            </p>
          </div>

          {/* Right Side */}
          <div className="faq-right">
            {currentFaqData.map((faq, index) => (
              <div
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>

                  <Image
                    src={
                      activeIndex === index
                        ? "/assets/images/icon/minus.svg"
                        : "/assets/images/icon/plus.svg"
                    }
                    alt="Toggle Icon"
                    width={20}
                    height={20}
                  />
                </button>
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: activeIndex === index ? "200px" : "0px",
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
