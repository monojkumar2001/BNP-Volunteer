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
                  : "OUR CHALLENGES"}
              </div>
              <h2 className="section-title">
                {language === "bn" ? "উপযুক্ত সময়ে " : "Identify the right job"}
              </h2>
              <h2 className="section-title">
                {language === "bn"
                  ? "উপযুক্ত কাজের জন্য "
                  : "At the right time"}
              </h2>
              <h2 className="section-title">
                {language === "bn"
                  ? " উপযুক্ত নেতা"
                  : "Choose the right leader"}
              </h2>
              <p>
                {language === "bn"
                  ? " পঞ্চগড়ের জনগণের সমস্যাগুলো সমাধানে বিগত দুই দশকে তেমন কোন কাজ হয়নি। এবার সুযোগ এসেছে অপূর্ণ প্রতিশ্রুতিগুলো পূরণ করে মানুষের মুখে নিশ্চিন্ত হাসি ফোটাবার।"
                  : "In the past two decades, the people of Panchagarh have seen few tangible solutions to their problems. Now is the opportunity to fulfil incomplete promises and bring genuine smiles to people’s faces."}
              </p>
              <Link href="/events" className="custom-btn">
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
                  : "The fragile state of our education and healthcare systems"}
              </li>
              <li>
                {language === "bn"
                  ? "ক্রমবর্ধমান বেকারত্ব ও অর্থনৈতিক মন্দা"
                  : "Rising unemployment and economic downturn"}
              </li>
              <li>
                {language === "bn"
                  ? "কৃষক-শ্রমিকের দুর্দশা "
                  : "The hardships faced by farmers and workers"}
              </li>
              <li>
                {language === "bn"
                  ? "গণ যোগাযোগ ব্যবস্থা যুগপোযগীকরণ"
                  : "Modernising public transport systems"}
              </li>
              <li>
                {language === "bn"
                  ? "পৌর-অঞ্চলে সীমিত নাগরিক সুবিধা"
                  : "Limited civic amenities in urban and semi-urban areas"}
              </li>
              <li>
                {language === "bn"
                  ? "রাস্তা-ঘাট সহ যোগাযোগ ব্যবস্থার সার্বিক দুরাবস্থা"
                  : "Overall deterioration of roads and connectivity"}
              </li>
              <li>
                {language === "bn"
                  ? "আইন-শৃঙ্খলা পরিস্থিতির তীব্র অবনতি"
                  : "A drastic decline in law and order"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurConcern;
