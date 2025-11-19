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
                  ? "শিক্ষা ও স্বাস্থ্যব্যবস্থার নাজুক অবস্থা"
                  : "Poor state of education and healthcare systems"}
              </li>
              <li>
                {language === "bn"
                  ? "ক্রমবর্ধমান বেকারত্ব ও অর্থনৈতিক মন্দা"
                  : "Rising unemployment and economic recession"}
              </li>
              <li>
                {language === "bn"
                  ? "কৃষক-শ্রমিকের দুর্দশা "
                  : "The plight of farmers and workers"}
              </li>
              <li>
                {language === "bn"
                  ? "গণ যোগাযোগ ব্যবস্থা যুগপোযগীকরণ"
                  : "Modernization of mass communication systems"}
              </li>
              <li>
                {language === "bn"
                  ? "পৌর-অঞ্চলে সীমিত নাগরিক সুবিধা"
                  : "Limited civic amenities in municipal areas"}
              </li>
              <li>
                {language === "bn"
                  ? "রাস্তা-ঘাট সহ যোগাযোগ ব্যবস্থার সার্বিক দুরাবস্থা"
                  : "Overall poor condition of the communication system, including roads and bridges"}
              </li>
              <li>
                {language === "bn"
                  ? "আইন-শৃঙ্খলা পরিস্থিতির তীব্র অবনতি"
                  : "Severe deterioration of the law and order situation"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurConcern;
