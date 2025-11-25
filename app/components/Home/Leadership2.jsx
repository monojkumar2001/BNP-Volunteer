"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useLanguage } from "../../../context/languageContext";

const Leadership2 = () => {
  const { language } = useLanguage();
  return (
    <section
      className={`leadership-2 ${
        language === "bn" ? "lang-leadership-bn" : "lang-leadership-en"
      }`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="row align-items-center leadership-wrpp">
          <div className="col-lg-6 ">
            <div className="who-content leadership-list-content">
              <div className="subtitle">
                {language === "bn"
                  ? "ব্যারিস্টার, প্রার্থী"
                  : "Barrister, The candidate"}
              </div>
              <h2 className="section-title">
                {language === "bn"
                  ? "মুহাম্মদ নওশাদ জমির"
                  : "Muhammad Nawshad Zamir"}
              </h2>
              <div className="leadership-item-head">
                {/* <h2>
                  {language === "bn" ? "শিক্ষাজীবনঃ" : "Educational Career:"}
                </h2> */}
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
                          ? "হার্ভার্ড ল স্কুল (এলএলএম)"
                          : "Harvard Law School (LLM)"}
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
                          ? "অক্সফোর্ড বিশ্ববিদ্যালয় (এমএসসি)"
                          : "University of Oxford (MSc)"}
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
                          ? "ঢাকা বিশ্ববিদ্যালয় (এলএলবি, এলএলএম – ফার্স্ট ক্লাস ফার্স্ট)"
                          : "Dhaka University (LLB, LLM – First Class First)"}
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
                          ? "বিএনপি-র আন্তর্জাতিক বিষয়ক সম্পাদক"
                          : "BNP International Affairs Secretary"}
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
                          ? " বেগম খালেদা জিয়া এবং জনাব তারেক রহমানের আইনজীবী"
                          : "Lawyers of Begum Khaleda Zia and Mr. Tarique Rahman"}
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>

              <Link href="/about" className="custom-btn">
                <span>{language === "bn" ? "আরও জানুন" : " Learn More"}</span>
                <span>
                  <GoArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="leadership-item-img">
              <Image
                src="/assets/images/leadership2.png"
                alt="Leadership Image 1"
                width={633}
                height={670}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership2;
