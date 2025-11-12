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
            <div className="who-content">
              <div className="subtitle">
                {language === "bn"
                  ? "ব্যারিস্টার, রাজনীতিবিদ"
                  : "Barrister, Politician"}
              </div>
              <h2 className="section-title">
                {language === "bn" ? "জমিরউদ্দিন সরকার" : " Zamir Uddin Sirker"}
              </h2>

              <ul>
                <li>
                  {language === "bn" ? (
                    <>
                      বেসরকারী বিশ্ববিদ্যালয় আইন ১৯৯২ প্রণয়ন করেন – ফলশ্রুতিতে
                      বর্তমানে দেশে ১১২ টি নিবন্ধিত বেসরকারী বিশ্ববিদ্যালয়ে
                      ৩,৫৮,৪১৪ জন শিক্ষার্থী পড়াশুনা করছে (বাংলাদেশ
                      বিশ্ববিদ্যালয় মঞ্জুরী কমিশন, ২০২৩)
                    </>
                  ) : (
                    <>
                      Enacted the Private Universities Act 1992 – as a result,
                      currently 3,58,414 students are studying in 112 registered
                      private universities in the country (Bangladesh University
                      Grants Commission, 2023)
                    </>
                  )}
                </li>
                <li>
                  {language === "bn" ? (
                    <>
                      বাংলাদেশ উন্মুক্ত বিশ্ববিদ্যালয় আইন ১৯৯২ প্রণয়ন করেন -
                      তালিকাভুক্ত শিক্ষার্থী সংখ্যার ভিত্তিতে এটি বিশ্বের ৮ম
                      বৃহত্তম বিশ্ববিদ্যালয় (উইকিপিডিয়া)। ২০২০ সালে বাউবির
                      সমস্ত আনুষ্ঠানিক প্রোগ্রামে মোট শিক্ষার্থীর সংখ্যা ছিল
                      ৯,৬৫,৮৩৮।
                    </>
                  ) : (
                    <>
                      Bangladesh Open University Act 1992 - It is the 8th
                      largest university in the world based on the number of
                      enrolled students (Wikipedia). In 2020, BAU had a total
                      enrollment of 965,838 students in all formal programs.
                    </>
                  )}
                </li>
                <li>
                  {language === "bn" ? (
                    <>
                      জাতীয় বিশ্ববিদ্যালয় আইন, ১৯৯২ প্রণয়ন করেন – শিক্ষার্থীর
                      সংখ্যা অনুযায়ী এটি বিশ্বের দ্বিতীয় বৃহত্তম
                      বিশ্ববিদ্যালয়। অধিভুক্ত ২২৫৭ টি শিক্ষা প্রতিষ্ঠানে
                      ৩৪,২৫,৮৩২ জন শিক্ষার্থী লেখাপড়া করছে (জাতীয় বিশ্ববিদ্যালয়
                      ওয়েবসাইট)।
                    </>
                  ) : (
                    <>
                      Enacted the National University Act, 1992 – It is the
                      second largest university in the world in terms of student
                      population. 34,25,832 students are studying in 2,257
                      affiliated educational institutions (National University
                      website).
                    </>
                  )}
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
