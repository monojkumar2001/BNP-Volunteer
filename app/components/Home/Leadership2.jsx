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
        language === "bn" ? "lang-leadership2-bn" : "lang-leadership2-en"
      }`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="row align-items-center leadership-wrpp">
          <div className="col-lg-6 ">
            <div className="who-content">
              <div className="subtitle">
                {language === "bn"
                  ? "ব্যারিস্টার, প্রার্থী"
                  : "Barrister, The candidate"}
              </div>
              <h2 className="section-title">
                {language === "bn" ? "নওশাদ জামির" : " Nawshad Zamir"}
              </h2>
              <p>
                {language === "bn" ? (
                  <>
                    <p>
                      মুহম্মদ নওশাদ জমির একজন অভিজ্ঞ আইনজীবী। তিনি লন্ডনের
                      লিঙ্কন&apos;স ইন থেকে ব্যারিস্টার (১৯৯৯) এবং বাংলাদেশ
                      সুপ্রিম কোর্টের একজন অ্যাডভোকেট (১৯৯৬) হিসেবে স্বীকৃতি লাভ
                      করেন। তিনি বিশ্বখ্যাত হার্ভার্ড বিশ্ববিদ্যালয় থেকে LLM এবং
                      অক্সফোর্ড বিশ্ববিদ্যালয় থেকে MSc in Taxation স্নাতকোত্তর
                      অর্জন করেন।
                    </p>
                    <p>
                      ২০০১ সালের থেকে তিনি রাজনীতির সাথে সরাসরি সম্পৃক্ত। ২০১৮
                      সালে বাংলাদেশ জাতীয়তাবাদী দলের পঞ্চগড় ১ আসনে মনোনয়ন পান।
                      তিনি প্রাক্তন প্রধানমন্ত্রী দেশনেত্রী বেগম খালেদা জিয়া এবং
                      দেশ নায়ক জনাব তারেক রহমানের আইনজীবী হিসেবে দায়িত্ব পালন
                      করেন।
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Muhammad Naushad is an experienced lawyer by profession.
                      He was admitted as a Barrister from Lincoln&apos;s Inn,
                      London (1999) and an Advocate of the Supreme Court of
                      Bangladesh (1996). He holds an LLM from the world-renowned
                      Harvard University and an MSc in Taxation from the
                      University of Oxford.
                    </p>
                    <p>
                      He has been directly involved in politics since 2001. In
                      2018, he was nominated by the Bangladesh Nationalist Party
                      from Panchagarh 1 constituency. He served as a lawyer for
                      former Prime Minister Begum Khaleda Zia and national hero
                      Mr. Tarique Rahman.
                    </p>
                  </>
                )}
              </p>
              <Link href="/nawshad-zamir" className="custom-btn">
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
