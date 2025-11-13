"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useLanguage } from "../../../context/languageContext";

const OurConcern = () => {
  const { language } = useLanguage();
  return (
    <section
      className={`our-concern ${
        language === "bn" ? "lang-concern-bn" : "lang-concern-en"
      }`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="our-concern-wrapper">
          <div className="our-concern-item-img">
            <Image
              src="/assets/images/concern.png"
              alt="Our Concern Image"
              width={414}
              height={595}
            />
          </div>
          <div className="our-concern-list">
            <div className="who-content">
              <div className="subtitle">
                {language === "bn"
                  ? "আমাদের উদ্বেগের বিষয়গুলি"
                  : "Our Concern Issues"}
              </div>
              <h2 className="section-title">
                {language === "bn" ? "উপযুক্ত সময়ে " : "At the right time"}
              </h2>
              <h2 className="section-title">
                {language === "bn"
                  ? "উপযুক্ত কাজের জন্য "
                  : "For the right job"}
              </h2>
              <h2 className="section-title">
                {language === "bn" ? " উপযুক্ত নেতা" : "The right leader"}
              </h2>
              <p>
                {language === "bn"
                  ? " পঞ্চগড়ের জনগণের সমস্যাগুলো সমাধানে বিগত দুই দশকে তেমন কোন কাজ হয়নি। এবার সুযোগ এসেছে অপূর্ণ প্রতিশ্রুতিগুলো পূরণ করে মানুষের মুখে নিশ্চিন্ত হাসি ফোটাবার।"
                  : "Not much has been done in the last two decades to solve the problems of the people of Panchagarh. Now is the time to fulfill the unfulfilled promises and bring a smile to the faces of the people."}
              </p>
              <Link href="#" className="custom-btn">
                <span>
                  {language === "bn" ? "আরও প্রোগ্রাম" : "More Program"}
                </span>
                <span>
                  <GoArrowUpRight />
                </span>
              </Link>
            </div>
            <ul className="concern-list-items">
              <li>
                {language === "bn"
                  ? "শিক্ষাব্যবস্থা আধুনিকীকরণ"
                  : "Modernization of the education system"}
              </li>
              <li>
                {language === "bn"
                  ? "জনস্বাস্থ্য ব্যবস্থার সার্বিক উন্নয়ন"
                  : "Overall development of the public health system"}
              </li>
              <li>
                {language === "bn"
                  ? "দুর্নীতি প্রতিরোধ"
                  : "Corruption prevention"}
              </li>
              <li>
                {language === "bn"
                  ? "গণ যোগাযোগ ব্যবস্থা যুগপোযগীকরণ"
                  : "Modernization of mass communication systems"}
              </li>
              <li>
                {language === "bn"
                  ? "জলবায়ু বিপর্যয় ব্যবস্থাপনা "
                  : "Climate disaster management"}
              </li>
              <li>
                {language === "bn"
                  ? "আইন ও মানবাধিকার সুরক্ষা"
                  : "Law and human rights protection"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurConcern;
