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
                {language === "bn"
                  ? "মুহাম্মদ জমির উদ্দিন সরকার"
                  : " Muhammad Jamiruddin Sircar"}
              </h2>
              <div className="leadership-item-head">
                <h2>
                  {language === "bn"
                    ? "উল্লেখযোগ্য জাতীয় ও আঞ্চলিক অবদান"
                    : "National and Regional Contributions"}
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
                        {language === "bn" ? (
                          <>
                            <strong>পঞ্চগড় ১-এর শিক্ষাখাতে</strong> প্রায় ১৫00{" "}
                            <strong>কোটি টাকা</strong> (মুদ্রাস্ফীতি সমন্বয়কৃত)
                            রাষ্ট্রীয় বিনিয়োগ
                          </>
                        ) : (
                          <>
                            In Panchagarh-1, the government has invested
                            approximately 1,500 crore taka (inflation-adjusted)
                            in the education sector.
                          </>
                        )}
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
                        {language === "bn" ? (
                          <>
                            <strong> বেসরকারি বিশ্ববিদ্যালয় আইন , ১৯৯২</strong>
                            প্রণয়ন — যার ফলস্বরূপ বর্তমানে দেশে ১১২টি নিবন্ধিত
                            বেসরকারি বিশ্ববিদ্যালয়ে{" "}
                            <strong>
                              ৩,৫৮,৪১৪ জন ছাত্র-ছাত্রী অধ্যয়ন
                            </strong>{" "}
                            করছে (বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশন, ২০২৩)।
                          </>
                        ) : (
                          <>
                            The Private Universities Act 1992 was enacted – as a
                            result, there are currently 3,58,414 students
                            studying in 112 registered private universities in
                            the country (Bangladesh University Grants
                            Commission, 2023).
                          </>
                        )}
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
                        {language === "bn" ? (
                          <>
                            <strong>
                              {" "}
                              বাংলাদেশ উন্মুক্ত বিশ্ববিদ্যালয় আইন, ১৯৯২
                            </strong>{" "}
                            প্রতিষ্ঠা — যা বর্তমানে শিক্ষার্থীর সংখ্যার ভিত্তিতে
                            বিশ্বের অষ্টম বৃহত্তম বিশ্ববিদ্যালয়। ২০২০ সালে এর
                            সকল আনুষ্ঠানিক প্রোগ্রামে মোট{" "}
                            <strong>৯,৬৫,৮৩৮ জন</strong> শিক্ষার্থী নথিভুক্ত
                            ছিল।
                          </>
                        ) : (
                          <>
                            Bangladesh Open University Act 1992 - It is the 8th
                            largest university in the world based on the number
                            of enrolled students (Wikipedia). In 2020, BAU had a
                            total enrolment of 965,838 students in all formal
                            programs.
                          </>
                        )}
                      </h5>
                    </div>
                  </li>
             
                </ul>
              </div>

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
