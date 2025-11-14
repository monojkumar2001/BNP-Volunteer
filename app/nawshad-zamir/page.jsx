"use client";
import React from "react";
import Banner from "../components/Section/Banner";
import { useLanguage } from "../../context/languageContext";
import Image from "next/image";

const NawshadZamirPage = () => {
  const { language } = useLanguage();

  const bannerData = {
    title_en: "Nawshad Zamir",
    title_bn: "নওশাদ জমির",
    img: "/assets/images/about-bg.png",
  };
  return (
    <>
      <Banner language={language} bannerData={bannerData} />
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
              <div className="who-content">
                <div className="subtitle">
                  {language === "bn"
                    ? "ব্যারিস্টার, প্রার্থী"
                    : "Barrister, The candidate"}
                </div>
                <h2 className="section-title">
                  {language === "bn"
                    ? "মুহম্মদ নওশাদ জমির"
                    : "Muhammad Nawshad Zamir"}
                  ?
                </h2>

                <ul>
                  <li>
                    {language === "bn" ? (
                      <>
                        মুহম্মদ নওশাদ জমির একজন অভিজ্ঞ আইনজীবী। তিনি লন্ডনের
                        লিঙ্কন&apos;স ইন থেকে ব্যারিস্টার (১৯৯৯) এবং বাংলাদেশ
                        সুপ্রিম কোর্টের একজন অ্যাডভোকেট (১৯৯৬) হিসেবে স্বীকৃতি
                        লাভ করেন। তিনি বিশ্বখ্যাত হার্ভার্ড বিশ্ববিদ্যালয় থেকে
                        LLM এবং অক্সফোর্ড বিশ্ববিদ্যালয় থেকে MSc in Taxation
                        স্নাতকোত্তর অর্জন করেন।
                      </>
                    ) : (
                      <>
                        Muhammad Naushad is an experienced lawyer by profession.
                        He was admitted as a Barrister from Lincoln&apos;s Inn,
                        London (1999) and an Advocate of the Supreme Court of
                        Bangladesh (1996). He holds an LLM from the
                        world-renowned Harvard University and an MSc in Taxation
                        from the University of Oxford.
                      </>
                    )}
                  </li>
                  <li>
                    {language === "bn" ? (
                      <>
                        ২০০১ সালের থেকে তিনি রাজনীতির সাথে সরাসরি সম্পৃক্ত। ২০১৮
                        সালে বাংলাদেশ জাতীয়তাবাদী দলের পঞ্চগড় ১ আসনে মনোনয়ন পান।
                        তিনি প্রাক্তন প্রধানমন্ত্রী দেশনেত্রী বেগম খালেদা জিয়া
                        এবং দেশ নায়ক জনাব তারেক রহমানের আইনজীবী হিসেবে দায়িত্ব
                        পালন করেন।
                      </>
                    ) : (
                      <>
                        He has been directly involved in politics since 2001. In
                        2018, he was nominated by the Bangladesh Nationalist
                        Party from Panchagarh 1 constituency. He served as a
                        lawyer for former Prime Minister Begum Khaleda Zia and
                        national hero Mr. Tarique Rahman.
                      </>
                    )}
                  </li>
                  <li>
                    {language === "bn" ? (
                      <>
                        তিনি বাণিজ্যিক প্রতিষ্ঠান, ব্যাংক (ইসলামিক ব্যাংকসহ),
                        বীমা, আইটি, টেলিকম এবং শিপিং কোম্পানিকে নিয়মিত আইনি
                        পরামর্শ দিয়ে থাকেন। ইনফ্রাস্ট্রাকচার ইনভেস্টমেন্ট
                        ফ্যাসিলিটেশন কোম্পানির (IIFC) বিশেষজ্ঞ চুক্তি পরামর্শক
                        হিসেবেও দায়িত্ব পালন করেছেন তিনি।
                      </>
                    ) : (
                      <>
                        He regularly provides legal advice to commercial
                        institutions, banks (including Islamic banks),
                        insurance, IT, telecom and shipping companies. He has
                        also served as an expert contract consultant to the
                        Infrastructure Investment Facilitation Company (IIFC).
                      </>
                    )}
                  </li>
                </ul>
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
          <p className="leadership2-single-content">
            {language === "bn"
              ? "আদালতে আইন অনুশীলনের পাশাপাশি তিনি নিয়মিত আন্তর্জাতিক সালিশি (আরবিট্রেশন) পরিচালনা করেন। সৌদি আরবের জেদ্দায় অবস্থিত ইসলামিক ডেভেলপমেন্ট ব্যাংকে (IDB) পাওয়ার প্রজেক্ট, এয়ারক্রাফট ফাইন্যান্সিং এবং জাহাজ নির্মাণ চুক্তি বিষয়ে আইনজীবী হিসেবে কাজ করেছেন নওশাদ। হার্ভার্ড বিশ্ববিদ্যালয়ের ইসলামিক ফাইন্যান্স ইনফরমেশন প্রোগ্রামে পরামর্শক হিসেবেও দায়িত্ব পালন করেছেন। বিচার ব্যবস্থার সংস্কার, আদালত প্রশাসন এবং মামলা ব্যবস্থাপনায় তাঁর পরামর্শক হিসেবে কাজের অভিজ্ঞতা বাংলাদেশের আইনি খাতে নতুন মাত্রা যোগ করেছে। এছাড়াও, তিনি বিশ্বখ্যাত ‘ম্যাক্স প্ল্যাঙ্ক এনসাইক্লোপিডিয়া অফ পাবলিক ইন্টারন্যাশনাল ল’-এর একজন সম্মানিত কন্ট্রিবিউটর।"
              : "In addition to practicing law in court, he regularly conducts international arbitrations. Naushad has worked as a lawyer for the Islamic Development Bank (IDB) in Jeddah, Saudi Arabia, on power projects, aircraft financing, and shipbuilding contracts. He has also served as a consultant to the Islamic Finance Information Program at Harvard University. His experience as a consultant in judicial reform, court administration, and case management has added new dimensions to the legal sector in Bangladesh. He is also a respected contributor to the world-renowned ‘Max Planck Encyclopedia of Public International Law’."}
          </p>
        </div>
      </section>
    </>
  );
};

export default NawshadZamirPage;
