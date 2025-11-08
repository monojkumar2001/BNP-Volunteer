"use client";
import React, { useEffect, useState } from "react";
import { useLanguage } from "../../../context/languageContext";

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [suffix, setSuffix] = useState("");

  useEffect(() => {
    // Target value থেকে suffix আলাদা করো (যেমন "50K" → value=50, suffix="K")
    const match = target.toString().match(/^(\d+)([a-zA-Z]*)$/);
    const end = match ? parseInt(match[1]) : parseInt(target);
    setSuffix(match && match[2] ? match[2] : "");

    let start = 0;
    const incrementTime = 20;
    const totalSteps = duration / incrementTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <h4>
      {count}
      {suffix}
    </h4>
  );
};

const PromiseTracker = () => {
  const { language } = useLanguage();

  // ✅ English & Bangla Label Support
  const stats = [
    {
      value: 1,
      label_en: "Delivered",
      label_bn: "সম্পন্ন হয়েছে",
    },
    {
      value: 46,
      label_en: "In Progress",
      label_bn: "চলমান",
    },
    {
      value: "50K",
      label_en: "Stalled",
      label_bn: "স্থগিত",
    },
    {
      value: "50K",
      label_en: "Broken",
      label_bn: "ভঙ্গ হয়েছে",
    },
    {
      value: "50K",
      label_en: "Thwarted",
      label_bn: "ব্যর্থ হয়েছে",
    },
  ];

  return (
    <section
      className={`promise-tracker ${
        language === "bn" ? "lang-promise-bn" : "lang-promise-en"
      }`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="leadership-title promise-tracker-title">
          <h4>{language === "bn" ? "৬৬টি প্রতিশ্রুতি" : "66 Promises"}</h4>
          <h1 className="section-title">
            {language === "bn" ? "প্রতিশ্রুতি ট্র্যাকার" : "Promise Tracker"}
          </h1>
        </div>

        <div className="promise-tracker-content">
          {stats.map((item, index) => (
            <div className="promise-tracker-item" key={index}>
              <Counter target={item.value} duration={2000} />
              <p>{language === "bn" ? item.label_bn : item.label_en}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseTracker;
