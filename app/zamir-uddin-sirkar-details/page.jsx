"use client";
import React from "react";
import Banner from "../components/Section/Banner";
import { useLanguage } from "../../context/languageContext";
import Image from "next/image";

const ZamirUddinPage = () => {
  const { language } = useLanguage();

  const bannerData = {
    title_en: "Zamir Uddin Sirker",
    title_bn: "জমির উদ্দিন সরকার",
    img: "/assets/images/about-bg.png",
  };
  return (
    <>
      <Banner bannerData={bannerData} />
      <section
        className={`leadership leadership-single ${
          language === "bn" ? "lang-leadership-bn" : "lang-leadership-en"
        }`}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
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
                <h2 className="section-title leadership-3-title">
                  {language === "bn"
                    ? "একনজরে ব্যারিস্টার জমির উদ্দিন সরকারের উল্লেখযোগ্য কাজগুলিঃ"
                    : "Notable works of Zamir Uddin Sirker, the Barrister and Politician"}
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
              </div>
            </div>
          </div>
          <div className="leadership-item-head leadership-3-item-head">
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
                        জাতীয় বিশ্ববিদ্যালয় আইন, ১৯৯২ প্রণয়ন – শিক্ষার্থীর
                        সংখ্যা অনুযায়ী এটি বিশ্বের দ্বিতীয় বৃহত্তম
                        বিশ্ববিদ্যালয়। অধিভুক্ত ২২৫৭ টি শিক্ষা প্রতিষ্ঠানে
                        ৩৪,২৫,৮৩২ জন শিক্ষার্থী লেখাপড়া করছে (জাতীয়
                        বিশ্ববিদ্যালয় ওয়েবসাইট)।
                      </>
                    ) : (
                      <>
                        Bangladesh Open University Act 1992 - It is the 8th
                        largest university in the world based on the number of
                        enrolled students (Wikipedia). In 2020, BAU had a total
                        enrollment of 965,838 students in all formal programs.
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
                        খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (KUET)
                        প্রতিষ্ঠা - ২০০৩ সালে বিআইটি খুলনাকে পরিপূর্ণ
                        গবেষণাধর্মী বিশ্ববিদ্যালয়ে পরিণত করেন। এখানে প্রায় আট
                        হাজার জন ছাত্রছাত্রী স্নাতক ও স্নাতকোত্তর প্রকৌশল ও
                        প্রযুক্তি নিয়ে পড়াশোনা করছে।
                      </>
                    ) : (
                      <>
                        Khulna University of Engineering and Technology (KUET)
                        was established in 2003, transforming BIT Khulna into a
                        full-fledged research university. Around eight thousand
                        students are studying undergraduate and postgraduate
                        engineering and technology here.
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
                        বাংলাদেশ জাতীয় সংসদ ভবনকে পার্লামেন্ট সেশনের উপযোগী করে
                        তোলা - ১৯৭৯ তিনি গণপূর্ত ও নগর উন্নয়ন মন্ত্রণালয়ের
                        দায়িত্বভার নেয়ার পর পূর্ণাঙ্গ সংসদ অধিবেশন পরিচালনার
                        উপযুক্ত হয়। সেসময় বিশ্বখ্যাত স্থপতি লুই কানের ডিজাইন করা
                        সংসদ ভবন কমপ্লেক্সের ৭০-৮০ ভাগ কাজই অসমাপ্ত ছিল। তিনি এর
                        সংরক্ষিত নকশা ও অঙ্কন সংগ্রহ করেন। ফলে সংসদ ভবন কেবল
                        &quot;ব্যবহারযোগ্য&quot; থেকে &quot;রাষ্ট্রের
                        গণতান্ত্রিক কেন্দ্র&quot; হয়ে ওঠে।
                      </>
                    ) : (
                      <>
                        Making the Bangladesh National Parliament Building
                        suitable for parliamentary sessions - 1979 After he took
                        charge of the Ministry of Public Works and Urban
                        Development, it became suitable for conducting a full
                        parliamentary session. At that time, 70-80 percent of
                        the work of the Parliament Building complex designed by
                        world-renowned architect Louis Kahn was unfinished. He
                        collected its preserved designs and drawings. As a
                        result, the Parliament Building became the
                        &quot;democratic center of the state&quot; from being
                        merely &quot;usable&quot;.
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
                        জিয়া আন্তর্জাতিক বিমানবন্দর (বর্তমানে হযরত শাহজালাল
                        আন্তর্জাতিক বিমানবন্দর) নির্মাণ - ১৯৭৯ সালে গণপূর্ত ও
                        নগর উন্নয়ন প্রতিমন্ত্রী হিসেবে তিনি ঢাকার নতুন
                        আন্তর্জাতিক বিমানবন্দর নির্মাণ কাজের দায়িত্ব নেন।
                        প্রথমবারের মতো বাংলাদেশে একটি পূর্ণাঙ্গ আন্তর্জাতিক
                        বিমানবন্দর গড়ে তোলেন তিনি।
                      </>
                    ) : (
                      <>
                        Construction of Zia International Airport (now Hazrat
                        Shahjalal International Airport) - As the State Minister
                        for Public Works and Urban Development in 1979, he took
                        charge of the construction of Dhaka&apos;s new
                        international airport. He built a full-fledged
                        international airport for the first time in Bangladesh.
                      </>
                    )}
                  </h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ZamirUddinPage;
