"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useLanguage } from "../../../context/languageContext";

const Leadership3 = () => {
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
        <div className="row align-items-center ">
          <div className="col-lg-6 ">
            <div className="leadership-item-img">
              <Image
                src="/assets/images/leadership3.png"
                alt="Leadership Image 1"
                width={633}
                height={670}
              />
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="who-content leadership-list-content">
              <h2 className="section-title leadership-3-title">
                {language === "bn"
                  ? "একনজরে ব্যারিস্টার জমির উদ্দিন সরকারের উল্লেখযোগ্য কাজগুলিঃ"
                  : "Notable works of Zamir Uddin Sirker, the Barrister and Politician"}
              </h2>
              <ul className="why-choose-list leadership-3-list leadership-list-item">
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
                        ? "পঞ্চগড় ১ আসনের শিক্ষাখাতেই ১৯৯১-৯৬ সালে ৳২,০৫,৫৬,১২,৭২০ মূল্যমানের রাষ্ট্রীয় অর্থায়ন বরাদ্দকরণ, যার বর্তমান অর্থমান ৳১৪,৮০,০৪,১১,৫৮৪।"
                        : "The education sector in Panchagarh 1 constituency was allocated state funding worth ৳2,05,56,12,720 in 1991-96, which is currently worth ৳14,80,04,11,584."}
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
                        ? "বেসরকারী বিশ্ববিদ্যালয় আইন ১৯৯২ প্রণয়ন – ফলশ্রুতিতে বর্তমানে দেশে ১১২ টি নিবন্ধিত বেসরকারী বিশ্ববিদ্যালয়ে ৩,৫৮,৪১৪ জন শিক্ষার্থী পড়াশুনা করছে (বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশন, ২০২৩)"
                        : "The Private Universities Act 1992 was enacted – as a result, there are currently 3,58,414 students studying in 112 registered private universities in the country (Bangladesh University Grants Commission, 2023)"}
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
                        ? "বাংলাদেশ উন্মুক্ত বিশ্ববিদ্যালয় আইন ১৯৯২ প্রণয়ন - তালিকাভুক্ত শিক্ষার্থী সংখ্যার ভিত্তিতে এটি বিশ্বের ৮ম বৃহত্তম বিশ্ববিদ্যালয় (উইকিপিডিয়া)। ২০২০ সালে বাউবির সমস্ত আনুষ্ঠানিক প্রোগ্রামে মোট শিক্ষার্থীর সংখ্যা ছিল ৯,৬৫,৮৩৮।"
                        : "Bangladesh Open University Act 1992 - It is the 8th largest university in the world based on the number of enrolled students (Wikipedia). In 2020, BAU had a total enrollment of 965,838 students in all formal programs."}
                    </h5>
                  </div>
                </li>
              </ul>

              <Link href="/zamir-uddin-sirkar-details" className="custom-btn">
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

export default Leadership3;
