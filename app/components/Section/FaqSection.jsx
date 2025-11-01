"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
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
        "Yes! We provide flexible pricing based on your project’s size, features, and timeline.",
    },
    {
      question: "Can I get a free demo before purchasing?",
      answer:
        "Absolutely. We offer free demos for most of our services so you can experience the product before committing.",
    },
  ];

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
            <h1 className="section-title">Frequently Asked Questions</h1>
            <p className="section-subtitle">
              Got questions? We’ve got answers. Learn more about our platform,
              features, and services below.
            </p>
          </div>

          {/* Right Side */}
          <div className="faq-right">
            {faqData.map((faq, index) => (
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
