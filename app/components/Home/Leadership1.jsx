"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useLanguage } from "../../../context/languageContext";

const Leadership = () => {
  const { language } = useLanguage();
  return (
    <section
      className={`leadership ${
        language === "bn" ? "lang-leadership-bn" : "lang-leadership-en"
      }`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="leadership-title">
          <h4>
            {language === "bn"
              ? "নেতৃত্বের উত্তরাধিকার"
              : "A Legacy of Leadership"}
          </h4>
          <h1 className="section-title leadership-titles">
            {language === "bn" ? "আশার ভবিষ্যৎ" : " A Future of Hope"}
          </h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="leadership-item-img">
              <Image
                src="/assets/images/leadership.png"
                alt="Leadership Image 1"
                width={633}
                height={670}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="who-content leadership-list-content">
              <div className="subtitle">
                {language === "bn"
                  ? "ব্যারিস্টার, রাজনীতিবিদ"
                  : "Barrister, Politician"}
              </div>
              <h2 className="section-title">
                {language === "bn" ? "জমির উদ্দিন সরকার" : " Jamiruddin Sircar"}
              </h2>
              <ul className="why-choose-list leadership-list-item">
                <li>
                  <div className="why-choose-icon">
                    <Image
                      src={"/assets/images/icon/check-2.svg"}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="why-choose-list-text">
                    <h5>
                      {language === "bn"
                        ? "পঞ্চগড় ১-এর শিক্ষাখাতে প্রায় ১৫ কোটি টাকা (মুদ্রাস্ফীতি সমন্বয়কৃত) রাষ্ট্রীয় বিনিয়োগ"
                        : "State investment of about 15 crore taka (inflation adjusted) in the education sector of Panchagarh 1"}
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="why-choose-icon">
                    <Image
                      src={"/assets/images/icon/check-2.svg"}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="why-choose-list-text">
                    <h5>
                      {language === "bn"
                        ? "দেশে বেসরকারী বিশ্ববিদ্যালয় চালু"
                        : "Private universities launched in the country"}
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="why-choose-icon">
                    <Image
                      src={"/assets/images/icon/check-2.svg"}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="why-choose-list-text">
                    <h5>
                      {language === "bn"
                        ? " জাতীয় বিশ্ববিদ্যালয় প্রতিষ্ঠা"
                        : "Establishment of the National University"}
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="why-choose-icon">
                    <Image
                      src={"/assets/images/icon/check-2.svg"}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="why-choose-list-text">
                    <h5>
                      {language === "bn"
                        ? " উন্মুক্ত বিশ্ববিদ্যালয় স্থাপন"
                        : "Establishment of open universities"}
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="why-choose-icon">
                    <Image
                      src={"/assets/images/icon/check-2.svg"}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="why-choose-list-text">
                    <h5>
                      {language === "bn"
                        ? "খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (কুয়েট) তৈরি"
                        : "Khulna University of Engineering and Technology (KUET) was established"}
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="why-choose-icon">
                    <Image
                      src={"/assets/images/icon/check-2.svg"}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="why-choose-list-text">
                    <h5>
                      {language === "bn"
                        ? "জাতীয় সংসদ ভবনকে পার্লামেন্ট সেশনের উপযুক্ত করে তোলা"
                        : "Making the National Parliament Building suitable for parliamentary sessions"}
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="why-choose-icon">
                    <Image
                      src={"/assets/images/icon/check-2.svg"}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="why-choose-list-text">
                    <h5>
                      {language === "bn"
                        ? "জিয়া আন্তর্জাতিক বিমানবন্দর নির্মাণ"
                        : "Construction of Zia International Airport"}
                    </h5>
                  </div>
                </li>
              </ul>
              <Link href="/zamir-uddin-sirkar" className="custom-btn">
                <span>{language === "bn" ? "আরও জানুন" : " Learn More"}</span>
                <span>
                  <GoArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
