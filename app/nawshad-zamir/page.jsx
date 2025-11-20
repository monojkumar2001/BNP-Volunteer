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
                <div className="leadership-item-head">
                  <h2>
                    {language === "bn" ? "শিক্ষাজীবনঃ" : "Educational Career:"}
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
                            ? " অক্সফোর্ড বিশ্ববিদ্যালয় (এমএসসি)"
                            : "University of Oxford (MSc)"}
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* <ul>
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
                </ul> */}
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

          <div>
            <div className="leadership-item-head">
              <h2>{language === "bn" ? "কর্মজীবনঃ" : "Career:"}</h2>
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
                        ? "বেগম খালেদা জিয়া এবং জনাব তারেক রহমানের আইনজীবী"
                        : "Lawyers for Begum Khaleda Zia and Mr. Tarique Rahman"}
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
                        ? "একাদশ জাতীয় সংসদ নির্বাচনে (২০১৮) পঞ্চগড়-১ আসনে বিএনপির প্রার্থী"
                        : "BNP candidate for Panchagarh-1 constituency in the 11th National Parliament Election (2018)"}
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
                        ? "ত্রয়োদশ জাতীয় সংসদ নির্বাচনে (২০২৬) পঞ্চগড়-১ আসনে বিএনপির প্রার্থী"
                        : "BNP candidate for Panchagarh-1 constituency in the 13th National Parliament Election (2026)"}
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
                        ? "মহাপরিচালক, প্রধানমন্ত্রীর কার্যালয় (২০০৬) ও আইন উপদেষ্টা, স্বরাষ্ট্র মন্ত্রণালয় (২০০৬–২০০৭)"
                        : "Director General, Prime Minister's Office (2006) and Legal Advisor, Ministry of Home Affairs (2006–2007)"}
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
                        ? "আন্তর্জাতিক সালিশি, ইসলামী অর্থায়ন ও প্রকল্প অর্থায়নের আইনি বিশেষজ্ঞ"
                        : "Legal expert in international arbitration, Islamic finance and project finance"}
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
            <div className="leader-ship-single-content">
              {language === "bn" ? (
                <>
                  <p>
                    বাংলাদেশ জাতীয়তাবাদী দলের (বিএনপি){" "}
                    <strong>আন্তর্জাতিক বিষয়ক সম্পাদক</strong> মুহম্মদ নওশাদ
                    জমির একাধারে একজন ব্যারিস্টার, রাজনীতিবিদ এবং আন্তর্জাতিক
                    আইন বিশেষজ্ঞ। তিনি বিশ্বখ্যাত হার্ভার্ড ল স্কুল থেকে এলএলএম
                    ডিগ্রি এবং অক্সফোর্ড বিশ্ববিদ্যালয় থেকে ট্যাক্সেশনের ওপর
                    এমএসসি ডিগ্রি অর্জন করেন। তিনি বাংলাদেশ সুপ্রিম কোর্টের একজন
                    অ্যাডভোকেট এবং লন্ডনের লিংকনস ইন-এর ব্যারিস্টার-অ্যাট-ল
                    হিসেবে কর্মরত আছেন।
                  </p>
                  <p>
                    তিনি প্রাক্তন প্রধানমন্ত্রী দেশনেত্রী বেগম খালেদা জিয়া এবং
                    বিএনপি-র ভারপ্রাপ্ত চেয়ারপার্সন জনাব তারেক রহমানের আইনজীবী।
                  </p>
                  <p>
                    ২০০১ সাল থেকে মুহম্মদ নওশাদ জমির রাজনীতির সাথে সরাসরি
                    সম্পৃক্ত হন।{" "}
                    <strong>একাদশ জাতীয় সংসদ নির্বাচনে (২০১৮)</strong> তিনি
                    পঞ্চগড়-১ আসনে বিএনপির প্রার্থী ছিলেন। নির্বাচনের সময় তিনি
                    &apos;লেভেল প্লেয়িং ফিল্ড&apos; না থাকার অভিযোগ করেন। তবুও
                    গণতন্ত্র রক্ষার স্বার্থে তিনি নির্বাচনে অংশ নেন।
                  </p>
                  <p>
                    এছাড়াও, তিনি বিএনপি চেয়ারপারসনের ফরেন অ্যাফেয়ার্স
                    অ্যাডভাইজরি কমিটির সদস্য। পঞ্চগড় অঞ্চলের ব্যাপক উন্নয়নের
                    জন্য তাঁর সুদূরপ্রসারী পরিকল্পনার কারণে তিনি&apos;
                    <strong>উত্তরবঙ্গের স্বপ্নদর্শী নেতা</strong>&apos; নামে
                    পরিচিত।
                  </p>
                  <p>
                    <strong> ত্রয়োদশ জাতীয় সংসদ নির্বাচনে (২০২৬)</strong>{" "}
                    পঞ্চগড়-১ আসনের জন্য তিনি বিএনপির প্রাথমিক প্রার্থী হিসেবে
                    মনোনীত হয়েছেন। ২০২৫ সালের অক্টোবরে তিনি পঞ্চগড়ে বিএনপির ৩১
                    দফা এবং ১৮০ দিনের কর্মসূচি মানুষের দোরগোড়ায় পৌঁছে দিতে
                    &apos;
                    <strong> ঘরে ঘরে, জনে জনে</strong>&apos; নামক এক ব্যতিক্রমী
                    গণসংযোগ কর্মসূচির নেতৃত্ব দেন। মানুষের সমস্যাগুলো শোনা এবং
                    সরকারের গঠনমূলক সমালোচনা করার এই উদ্যোগ স্থানীয় পর্যায়ে
                    ব্যাপক সাড়া ফেলে।
                  </p>
                  <p>
                    বর্তমানে তিনি ঢাকার <strong>জুরিস্টস চেম্বার্স</strong>-এর
                    এ্যাক্টিং হেড অফ চেম্বার হিসেবে দায়িত্ব পালন করছেন। তাঁর
                    আইনচর্চা মূলত করপোরেট আইন, ইসলামি অর্থায়ন, এবং সাংবিধানিক
                    রিট নিয়ে আবর্তিত।
                  </p>
                  <p>
                    কর্মজীবনে{" "}
                    <strong>প্রধানমন্ত্রীর কার্যালয়ের মহাপরিচালক</strong> এবং
                    <strong>স্বরাষ্ট্র মন্ত্রণালয়ের আইন উপদেষ্টা</strong>র মতো
                    গুরুত্বপূর্ণ পদে কাজ করেছেন নওশাদ। পাশাপাশি তিনি বাণিজ্যিক
                    প্রতিষ্ঠান, ব্যাংক, বীমা, আইটি, টেলিকম এবং শিপিং কোম্পানিকে
                    নিয়মিত আইনি পরামর্শ দিয়ে থাকেন। বাংলাদেশে এইচএসবিসি
                    (HSBC)-এর &apos;আমানাহ&apos; পোর্টালের জন্য{" "}
                    <strong>শরিয়াহ</strong>
                    -সম্মত পণ্যগুলো তাঁর তদারকিতে তৈরি। রহিম আফরোজ এনার্জি
                    সার্ভিসেস লিমিটেড-এর জন্য মুদারাবা বন্ড কাঠামো তৈরিতেও তিনি
                    সহায়তা করেন। ইনফ্রাস্ট্রাকচার ইনভেস্টমেন্ট ফ্যাসিলিটেশন
                    সেন্টার (IIFC)-এর পরামর্শক হিসেবে তিনি চট্টগ্রাম বন্দরের নিউ
                    মুরিং কন্টেইনার টার্মিনালের জন্য কনসেশন চুক্তি এবং বিটিআরসি
                    (BTRC)-এর সেলুলার লাইসেন্স নিলামের নির্দেশিকা তৈরিতে সহায়তা
                    করেন।
                  </p>
                  <p>
                    আইন ও রাজনীতির বাইরে তিনি একজন লেখক ও চিন্তাবিদ। আন্তর্জাতিক
                    আইন ও মানবাধিকার বিষয়ে তাঁর গভীর বিশ্লেষণধর্মী লেখা
                    দেশি-বিদেশি বিভিন্ন জার্নাল ও সংবাদপত্রে প্রকাশিত হয়েছে।
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Muhammad Naushad Zamir, the{" "}
                    <strong>International Affairs Secretary</strong> of the
                    Bangladesh Nationalist Party (BNP), is a barrister,
                    politician and international law expert. He holds an LLM
                    degree from the world-renowned Harvard Law School and an MSc
                    degree in taxation from Oxford University. He is an advocate
                    of the Supreme Court of Bangladesh and a Barrister-at-Law at
                    Lincoln&apos;s Inn, London.
                  </p>
                  <p>
                    He is the lawyer of former Prime Minister and national
                    leader Begum Khaleda Zia and BNP Acting Chairperson Mr.
                    Tarique Rahman.
                  </p>
                  <p>
                    Muhammad Naushad has been directly involved in land politics
                    since 2001. He was the BNP candidate for Panchagarh-1
                    constituency in the{" "}
                    <strong>11th National Parliament election (2018)</strong>.
                    During the election, he complained about the lack of a
                    &apos;level playing field&apos;. Nevertheless, he
                    participated in the election in the interest of protecting
                    democracy.
                  </p>
                  <p>
                    He is also a member of the Foreign Affairs Advisory
                    Committee of the BNP Chairperson. He is known as the
                    <strong>
                      &apos;Visionary Leader of North Bengal&apos;
                    </strong>{" "}
                    due to his far-reaching plans for the comprehensive
                    development of the Panchagarh region.
                  </p>
                  <p>
                    He has been nominated as the primary candidate of BNP for
                    Panchagarh-1 constituency in the{" "}
                    <strong>13th National Parliament Election (2026)</strong>.
                    In October 2025, he led an exceptional mass outreach program
                    called <strong>&apos;Ghare Ghare, Jane Jane&apos;</strong>{" "}
                    in Panchagarh to take the BNP&apos;s 31-point and 180-day
                    program to the doorsteps of the people. This initiative to
                    listen to the problems of the people and constructively
                    criticize the government received a huge response at the
                    local level.
                  </p>
                  <p>
                    He is currently serving as the Acting Head of Chambers of
                    the <strong>Jurists&apos; Chambers</strong>, Dhaka. His
                    legal practice mainly revolves around corporate law, Islamic
                    finance, and constitutional writs.
                  </p>
                  <p>
                    During his career, Naushad has served in important positions
                    such as{" "}
                    <strong>
                      Director General of the Prime Minister&apos;s Office
                    </strong>{" "}
                    and
                    <strong>
                      {" "}
                      Legal Advisor to the Ministry of Home Affairs
                    </strong>
                    . He also regularly provides legal advice to commercial
                    institutions, banks, insurance, IT, telecom and shipping
                    companies. He supervised the development of Sharia-compliant
                    products for HSBC&apos;s &apos;Amanah&apos; portal in
                    Bangladesh. He also helped develop the Mudaraba bond
                    structure for Rahim Afroz Energy Services Limited. As a
                    consultant to the Infrastructure Investment Facilitation
                    Center (IIFC), he helped develop the concession agreement
                    for the New Mooring Container Terminal at Chittagong Port
                    and the guidelines for BTRC&apos;s cellular license auction.
                  </p>
                  <p>
                    Outside of law and politics, he is a writer and thinker. His
                    in-depth analytical writings on international law and human
                    rights have been published in various domestic and foreign
                    journals and newspapers.
                  </p>
                </>
              )}
            </div>

            <div className="leadership-item-head">
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
                          ২০২২ সালে তিনি &apos;<strong>CUBE</strong>&apos;
                          (Coalition for Upgradation of Bangladeshi Economy)
                          উদ্বোধনী অনুষ্ঠানে বাংলাদেশের রপ্তানি ও নেগোসিয়েশন
                          কৌশল নিয়ে গভীর আলোচনা করেন।
                        </>
                      ) : (
                        <>
                          In 2022, he gave an in-depth discussion on
                          Bangladesh&apos;s export and negotiation strategies at
                          the inaugural event of{" "}
                          <strong>&apos;CUBE&apos;</strong> (Coalition for
                          Upgradation of Bangladeshi Economy).
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
                          {" "}
                          &quot;
                          <strong>
                            ডু প্রিজনার্স হ্যাভ এ রাইট টু হেলথ অ্যান্ড মেডিকেল
                            কেয়ার ইন বাংলাদেশ?
                          </strong>
                          &quot;(Do prisoners have a right to health and medical
                          care in Bangladesh?) ২০১৮ সালে বিখ্যাত{" "}
                          <strong>নিউ ইয়র্ক টাইমস</strong>-এ প্রকাশিত হয়।
                        </>
                      ) : (
                        <>
                          His article{" "}
                          <strong>
                            &quot;Do Prisoners Have a Right to Health and
                            Medical Care in Bangladesh? &quot;
                          </strong>{" "}
                          was published in the famous{" "}
                          <strong>New York Times</strong> in 2018.
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
                          ম্যাক্স প্ল্যাঙ্ক এনসাইক্লোপিডিয়া অফ পাবলিক
                          ইন্টারন্যাশনাল ল-তে তিনি &apos;
                          <strong>
                            রান অফ কচ্ছ আরবিট্রেশন (ইন্ডো-পাকিস্তান ওয়েস্টার্ন
                            বাউন্ডারি)
                          </strong>
                          &apos; (Rann of Kutch Arbitration) নিয়ে লিখেছেন।
                        </>
                      ) : (
                        <>
                          In the Max Planck Encyclopedia of Public International
                          Law, he wrote about the{" "}
                          <strong>
                            &apos;Rann of Kutch Arbitration (Indo-Pakistan
                            Western Boundary)&apos;
                          </strong>
                          .
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
                          ২০১৬ সালে <strong>নিউ এজ</strong> পত্রিকায় তাঁর লেখা
                          &quot;{" "}
                          <strong>
                            ইজ বাংলাদেশ ভায়োলেটিং ইন্টারন্যাশনাল ল?
                          </strong>{" "}
                          &quot;(Is Bangladesh violating international law?)
                          নিবন্ধটি প্রকাশিত হয়।
                        </>
                      ) : (
                        <>
                          In 2016, his article{" "}
                          <strong>
                            &quot;Is Bangladesh violating international law?
                            &quot;
                          </strong>
                          was published in the <strong>New Age</strong>{" "}
                          magazine.
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
                          ১৯৯৩ সালে দ্য <strong>বাংলাদেশ টাইমস</strong>-এ তিনি
                          <strong>
                            &quot;দ্য গ্যাঞ্জেস ওয়াটার ডিসপিউট – ইক্যুইটি উইল
                            সাফার এ রং টু বি উইথআউট রেমিডি&quot;
                          </strong>{" "}
                          (The Ganges Water dispute - Equity will suffer a wrong
                          to be without remedy) শিরোনামে গঙ্গার পানি বণ্টন নিয়ে
                          একটি গুরুত্বপূর্ণ নিবন্ধ লেখেন।
                        </>
                      ) : (
                        <>
                          In 1993, he wrote an important article in The
                          <strong>Bangladesh Times</strong> titled{" "}
                          <strong>
                            &quot;The Ganges Water Dispute - Equity will suffer
                            a wrong to be without remedy&quot;
                          </strong>{" "}
                          on the sharing of Ganga water.
                        </>
                      )}
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NawshadZamirPage;
