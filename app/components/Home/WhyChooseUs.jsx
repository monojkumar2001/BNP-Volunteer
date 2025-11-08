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
              {language === "bn" ? "কেন আমার পাশে দাঁড়াবেন" : "Why stand by me"}
            </span>
            <h4>
              {language === "bn"
                ? "যদি সমৃদ্ধ ভবিষ্যৎ চান, আমাকে ভোট দিন"
                : "If you want a prosperous future, vote for me."}
            </h4>
            {language === "bn" ? (
              <p className="lang-choose-content">
                <strong>
                  আসুন, এদেশটাকে বসবাসের জন্য আরও উন্নত ও সুন্দর করে গড়ে তুলি
                </strong>{" "}
                সবার জন্য একটি সমৃদ্ধ বাংলাদেশ। যেখানে বাঁচতে ভালো লাগবে। যেখানে
                স্বপ্ন দেখা যাবে নির্ভয়ে। এটি শুধু প্রতিশ্রুতি নয়, এটি আমাদের
                দৃঢ় অঙ্গীকার।
              </p>
            ) : (
              <p className="lang-choose-content">
                <strong>
                  Come, let&apos;s make this country a better and more beautiful
                  place to live
                </strong>{" "}
                A prosperous Bangladesh for everyone. Where it will be nice to
                live. Where dreams can be seen without fear. This is not just a
                promise, this is our firm commitment.
              </p>
            )}

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
                  <h5>Experienced & Professional</h5>
                  <p>Urna risus himenaeos dui sociosqu purus nisi magnis. </p>
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
                  <h5>Strong vision</h5>
                  <p>Urna risus himenaeos dui sociosqu purus nisi magnis. </p>
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
