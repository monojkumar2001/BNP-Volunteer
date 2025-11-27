"use client";
import Image from "next/image";
import React from "react";
import { useLanguage } from "../../../context/languageContext";

const WhyChooseUs = () => {
  const { language } = useLanguage();
  return (
    <section
      data-aos="fade-up"
      className={`why-choose-me ${
        language === "bn" ? "lang-choose-bn" : "lang-choose-en"
      }`}
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="why-choose-me-wrapper">
          <div className="why-choose-me-content">
            <span>
              {language === "bn"
                ? "কেন আমার পাশে দাঁড়াবেন?"
                : "WHY STAND WITH ME?"}
            </span>
            <h4>
              {language === "bn"
                ? "যদি সমৃদ্ধ ভবিষ্যৎ চান, আমাকে ভোট দিন"
                : "If you believe in a prosperous future, then I ask for your vote."}
            </h4>
            {language === "bn" ? (
              <p className="lang-choose-content">
                একটি দেশ, যেখানে জীবন হবে স্বস্তির; যেখানে নির্ভয়ে স্বপ্ন গড়া
                যাবে, এটি শুধু প্রতিশ্রুতি নয়, আমাদের দৃঢ় অঙ্গীকার।
              </p>
            ) : (
              <p className="lang-choose-content">
                A country where life is peaceful, where dreams can be built
                without fear — this is not just a promise, it is our strong
                commitment.
              </p>
            )}
            <div className="list-item-head">
              <h2>
                {language === "bn"
                  ? "আমার ওয়াদা:"
                  : "My pledges to the people:"}
              </h2>
            </div>
            <ul className="why-choose-list">
              <li>
                <div className="why-choose-icon">
                  <Image
                    src={"/assets/images/icon/check.svg"}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="why-choose-list-text">
                  <h5>
                    {language === "bn"
                      ? "বিশ্ববিদ্যালয় ও মেডিক্যাল কলেজ স্থাপন"
                      : "Establishing a university and a medical college in Panchagarh"}
                  </h5>
                </div>
              </li>
              <li>
                <div className="why-choose-icon">
                  <Image
                    src={"/assets/images/icon/check.svg"}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="why-choose-list-text">
                  <h5>
                    {language === "bn"
                      ? "বেকারত্ব নিরসনে টেকসই সমাধান"
                      : "Sustainable solutions to unemployment in Panchagarh"}
                  </h5>
                </div>
              </li>
              <li>
                <div className="why-choose-icon">
                  <Image
                    src={"/assets/images/icon/check.svg"}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="why-choose-list-text">
                  <h5>
                    {language === "bn"
                      ? " আধুনিক পৌরসভা ও উন্নত অবকাঠামো"
                      : "Modern Panchagarh municipality and upgraded infrastructure"}
                  </h5>
                </div>
              </li>
              <li>
                <div className="why-choose-icon">
                  <Image
                    src={"/assets/images/icon/check.svg"}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="why-choose-list-text">
                  <h5>
                    {language === "bn"
                      ? " গ্রাম পর্যন্ত পাকা রাস্তার নেটওয়ার্ক"
                      : "A fully‐paved road network right to the village level "}
                  </h5>
                </div>
              </li>
              <li>
                <div className="why-choose-icon">
                  <Image
                    src={"/assets/images/icon/check.svg"}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="why-choose-list-text">
                  <h5>
                    {language === "bn"
                      ? "দুর্নীতি প্রতিরোধ, আইন ও মানবাধিকারের সুরক্ষা"
                      : "Zero tolerance for corruption, and protection of the law and human rights"}
                  </h5>
                </div>
              </li>
              <li>
                <div className="why-choose-icon">
                  <Image
                    src={"/assets/images/icon/check.svg"}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="why-choose-list-text">
                  <h5>
                    {language === "bn"
                      ? "সার, বীজ ও কৃষিজাত পণ্যের ন্যায্যমূল্য"
                      : "Fair pricing for fertiliser, seeds, and agricultural produce"}
                  </h5>
                </div>
              </li>
              <li>
                <div className="why-choose-icon">
                  <Image
                    src={"/assets/images/icon/check.svg"}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="why-choose-list-text">
                  <h5>
                    {language === "bn"
                      ? "পর্যটন শিল্পের সার্বিক উন্নয়ন"
                      : "Comprehensive development of the tourism industry in Panchagarh"}
                  </h5>
                </div>
              </li>

              {/* <li>
                <div className="why-choose-icon">
                  <Image
                    src={"/assets/images/icon/check.svg"}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="why-choose-list-text">
                  <h5>Honesty & Transparency</h5>
                  <p>Urna risus himenaeos dui sociosqu purus nisi magnis. </p>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
