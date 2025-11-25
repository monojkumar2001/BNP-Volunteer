"use client";

import React from 'react'
import Image from 'next/image';
import { useLanguage } from '../../../context/languageContext';

const ZamirUddin = () => {
      const { language } = useLanguage();
  return (
    <>
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
                <div className="subtitle">
                  {language === "bn"
                    ? "ব্যারিস্টার, রাজনীতিবিদ"
                    : "Barrister, Politician"}
                </div>
                <h2 className="section-title">
                  {language === "bn"
                    ? "মুহাম্মদ জমির উদ্দিন সরকার"
                    : "Muhammad Jamiruddin Sircar"}
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
                              <strong>কোটি টাকা</strong> (মুদ্রাস্ফীতি
                              সমন্বয়কৃত) রাষ্ট্রীয় বিনিয়োগ
                            </>
                          ) : (
                            <>
                              In Panchagarh-1, the government has invested
                              approximately 1,500 crore taka
                              (inflation-adjusted) in the education sector.
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
                                বেসরকারি বিশ্ববিদ্যালয় আইন , ১৯৯২
                              </strong>
                              প্রণয়ন — যার ফলস্বরূপ বর্তমানে দেশে ১১২টি
                              নিবন্ধিত বেসরকারি বিশ্ববিদ্যালয়ে{" "}
                              <strong>
                                ৩,৫৮,৪১৪ জন ছাত্র-ছাত্রী অধ্যয়ন
                              </strong>{" "}
                              করছে (বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশন,
                              ২০২৩)।
                            </>
                          ) : (
                            <>
                              The Private Universities Act 1992 was enacted – as
                              a result, there are currently 3,58,414 students
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
                              প্রতিষ্ঠা — যা বর্তমানে শিক্ষার্থীর সংখ্যার
                              ভিত্তিতে বিশ্বের অষ্টম বৃহত্তম বিশ্ববিদ্যালয়।
                              ২০২০ সালে এর সকল আনুষ্ঠানিক প্রোগ্রামে মোট{" "}
                              <strong>৯,৬৫,৮৩৮ জন</strong> শিক্ষার্থী নথিভুক্ত
                              ছিল।
                            </>
                          ) : (
                            <>
                              Bangladesh Open University Act 1992 - It is the
                              8th largest university in the world based on the
                              number of enrolled students (Wikipedia). In 2020,
                              BAU had a total enrolment of 965,838 students in
                              all formal programs.
                            </>
                          )}
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
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
                          বাংলাদেশে <strong>জাতীয় বিশ্ববিদ্যালয়</strong>{" "}
                          কাঠামোর ভিত্তি স্থাপন।
                        </>
                      ) : (
                        <>
                          Establishment of the National University framework in
                          Bangladesh
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
                            খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (কুয়েট)
                          </strong>
                          প্রতিষ্ঠা।
                        </>
                      ) : (
                        <>
                          Establishment of Khulna University of Engineering and
                          Technology (KUET)
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
                          <strong>জাতীয় সংসদ ভবন</strong>কে সংসদীয় অধিবেশনের
                          জন্য উপযোগী করে তোলা (১৯৭৯)।
                        </>
                      ) : (
                        <>
                          Making of the National Parliament Building (জাতীয় সংসদ
                          ভবন) suitable for parliamentary sessions (1979)
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
                          <strong> জিয়া আন্তর্জাতিক বিমানবন্দর</strong>
                          (১৯৭৯)।
                        </>
                      ) : (
                        <>Construction of Zia International Airport (1979)</>
                      )}
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="leader-ship-single-content">
            {language === "bn" ? (
              <>
                <h4>বিস্তারিত</h4>
                <p>
                  পঞ্চগড়ের কৃতি সন্তান জমির উদ্দিন সরকার একাধারে একজন প্রথিতযশা
                  আইনজীবী, প্রথম সারির প্রবীণ রাজনীতিবিদ এবং সদাসর্বদা
                  বাংলাদেশের স্বার্থরক্ষায় এক অকুতোভয় সৈনিক।
                </p>
                <p>
                  পাঁচ বারের নির্বাচিত সংসদ সদস্য তিনি। তিনি দুইবার জাতীয়
                  সংসদের <strong>স্পিকার</strong> এবং দুইবার{" "}
                  <strong> ভারপ্রাপ্ত রাষ্ট্রপতি</strong> হিসেবে দায়িত্ব পালন
                  করেছেন।
                </p>
                <p>
                  শহীদ রাষ্ট্রপতি জিয়াউর রহমানের মন্ত্রীসভায়{" "}
                  <strong>গণপূর্ত ও নগর উন্নয়ন প্রতিমন্ত্রী</strong> হিসেবে
                  দায়িত্ব পালনের সময় তিনি বর্তমান{" "}
                  <strong>সংসদ ভবনের অসমাপ্ত কাজ</strong> শেষ করেন। তাঁর
                  নেতৃত্বেই ঢাকার{" "}
                  <strong>জিয়া আন্তর্জাতিক বিমানবন্দরের</strong> নির্মাণ কাজ
                  পূর্ণতা পায়।
                </p>
                <p>
                  রাষ্ট্রপতি আবদুস সাত্তারের মন্ত্রিসভায় তিনি{" "}
                  <strong> পররাষ্ট্র প্রতিমন্ত্রী</strong> হিসেবে দায়িত্ব পালন
                  করেন। পঞ্চম জাতীয় সংসদে বেগম খালেদা জিয়ার প্রথম মন্ত্রীসভায়
                  তিনি প্রথমে <strong>ভূমি প্রতিমন্ত্রী</strong> ও পরবর্তীতে
                  <strong>শিক্ষামন্ত্রী</strong> হিসেবে দায়িত্ব পালন করেন।
                  <strong>
                    জাতীয় বিশ্ববিদ্যালয় ও উন্মুক্ত বিশ্ববিদ্যালয়
                  </strong>{" "}
                  গড়ে ওঠে তাঁর হাত ধরে। তাঁর অনুমতিক্রমে বাংলাদেশে প্রথম
                  <strong>বেসরকারী বিশ্ববিদ্যালয়</strong>গুলোর যাত্রা শুরু হয়।
                  আঞ্চলিক বৈষম্য দূরীকরণে{" "}
                  <strong>
                    খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (কুয়েট)
                  </strong>{" "}
                  প্রতিষ্ঠা এবং কারিগরি শিক্ষার প্রসারে তাঁর ভূমিকা দেশের
                  শিক্ষাব্যবস্থার ইতিহাসের গৌরবময় অধ্যায়।
                </p>
                <p>
                  কেবল ১৯৯১–১৯৯৬ সালের মধ্যেই তিনি পঞ্চগড়-১ নির্বাচনী এলাকার
                  শিক্ষাখাতে <strong>২০৫ কোটি টাকা</strong> বরাদ্দ করেছিলেন, যা
                  আজকের বাজার মূল্যে প্রায় <strong>১,৫০০ কোটি</strong> টাকার
                  সমতুল্য।
                </p>
                <p>
                  সে সময়ে তিনি <strong>বিজ্ঞান ও প্রযুক্তি মন্ত্রী</strong>{" "}
                  হিসেবেও দায়িত্ব পালন করেন।
                </p>
                <p>
                  ষষ্ঠ সংসদের স্বল্পস্থায়ী বিএনপি সরকারে তিনি{" "}
                  <strong>আইন, বিচার ও সংসদ বিষয়ক মন্ত্রী</strong> হিসেবে (১৯
                  মার্চ ১৯৯৬ থেকে ৩০ মার্চ ১৯৯৬ পর্যন্ত) দায়িত্ব পালন করেন,
                  যেখানে তিনি তত্ত্বাবধায়ক সরকার বিল (কেয়ারটেকার গভর্নমেন্ট
                  বিল) খসড়া প্রণয়নে গুরুত্বপূর্ণ ভূমিকা রাখেন।
                </p>
                <p>
                  মুহাম্মদ জমির উদ্দিন সরকার ১৯৩১ সালে তৎকালীন ব্রিটিশ ভারতের
                  তেঁতুলিয়ার নয়াবাড়ি গ্রামে জন্মগ্রহণ করেন। ঢাকা
                  বিশ্ববিদ্যালয় থেকে <strong>এম.এ.</strong> ও{" "}
                  <strong>এলএল.বি.</strong> সম্পন্ন করার পর এবং লন্ডনের{" "}
                  <strong>লিংকনস ইন</strong> থেকে <strong>বার-অ্যাট-ল</strong>{" "}
                  শেষ করে তিনি ১৯৬০ সালে ঢাকা হাইকোর্টে আইনি পেশা শুরু করেন।
                </p>
                <p>
                  তাঁর রাজনৈতিক যাত্রা শুরু হয় ১৯৪৫ সালে ছাত্র ফেডারেশনের
                  মাধ্যমে। ১৯৪৭ সালের পূর্বে মাত্র ১৫ বছর বয়সে সরকারবিরোধী
                  আন্দোলনে অংশগ্রহণের কারণে তিনি গ্রেফতার হন। ১৯৫৩ সালে তিনি
                  <strong>
                    {" "}
                    ইকবাল হলের (বর্তমান সার্জেন্ট জহুরুল হক হল) ভিপি
                  </strong>{" "}
                  নির্বাচিত হন। তিনি মওলানা ভাসানীর ঘনিষ্ঠ সহচর ছিলেন এবং ১৯৫৪
                  সালের নির্বাচনে পঞ্চগড়ে <strong>যুক্তফ্রন্ট</strong> প্রার্থী
                  মির্জা গোলাম হাফিজের সক্রিয় কর্মী হিসেবে কাজ করেন।
                </p>
                <p>
                  ১৯৭০ সালের পাকিস্তান সাধারণ নির্বাচনে তিনি স্বতন্ত্র প্রার্থী
                  হিসেবে এবং ১৯৭৩ সালে স্বাধীন বাংলাদেশের প্রথম জাতীয় সংসদ
                  নির্বাচনে পঞ্চগড়-১ আসন থেকে স্বতন্ত্র প্রার্থী হিসেবে
                  প্রতিদ্বন্দ্বিতা করেন। <strong>১৯৭৯ সালে</strong> তিনি
                  প্রথমবারের মতো পঞ্চগড়-১ আসন থেকে সংসদ সদস্য নির্বাচিত হন।
                </p>
                <p>
                  ১৯৭১ সালে হাইকোর্টে আইনজীবীদের যে গ্রুপটি মুক্তিযুদ্ধের পক্ষে
                  সক্রিয় ভূমিকা পালন করেছিলেন, জমির উদ্দিন সরকার তাদের অন্যতম।
                  আইন পেশায় সুনাম ও খ্যাতি অর্জন করায় শহীদ রাষ্ট্রপতি জিয়াউর
                  রহমান ১৯৭৭ সাল থেকে ১৯৮১ সাল পর্যন্ত তাঁকে পাঁচবার জাতিসংঘের
                  সাধারণ পরিষদের অধিবেশনে বাংলাদেশের প্রতিনিধি হিসেবে পাঠান। দল
                  গঠনের প্রথম পর্যায়ে জিয়াউর রহমান{" "}
                  <strong>জাতীয়তাবাদী গণতান্ত্রিক দল (জাগদল)</strong> গঠন করলে
                  তিনি তাতে যোগ দেন। পরবর্তীতে বাংলাদেশ জাতীয়তাবাদী দল{" "}
                  <strong>(বিএনপি)</strong>
                  প্রতিষ্ঠিত হলে তিনি এর <strong>স্থায়ী কমিটির</strong>{" "}
                  প্রতিষ্ঠাতা সদস্য হন।
                </p>
                <p>
                  {" "}
                  আইন ও রাজনীতি — উভয় জগতেই তাঁর ছিল গভীর পাণ্ডিত্য ও স্বচ্ছন্দ
                  বিচরণ, যা দিয়ে তিনি দেশের রাজনৈতিক অঙ্গনে এক অবিস্মরণীয় ছাপ
                  রেখেছেন। শিল্প ও বাণিজ্য আইন, সমুদ্র আইন, পরিবেশ আইন এবং
                  আন্তর্জাতিক চুক্তি প্রণয়নের মতো জটিল ও বিশেষায়িত ক্ষেত্রগুলোতে
                  তিনি ছিলেন বাংলাদেশের অন্যতম পথিকৃৎ।
                </p>
                <p>
                  তাঁরই দূরদর্শী নেতৃত্বে বাংলাদেশের{" "}
                  <strong>
                    {" "}
                    সামুদ্রিক সীমানা নির্ধারণ, বিনিয়োগ-বান্ধব পরিবেশ তৈরি এবং
                    প্রাকৃতিক সম্পদ সুরক্ষা
                  </strong>
                  র মতো গুরুত্বপূর্ণ কাজগুলো গতি পায়। আন্তর্জাতিক ফোরামে তিনি
                  ছিলেন উপকূলীয় দেশগুলোর অধিকারের এক বলিষ্ঠ প্রবক্তা, যা
                  বিশ্বমঞ্চে বাংলাদেশের স্বার্থকে সুরক্ষিত করেছিল। দেশের প্রতি
                  তাঁর গভীর অনুরাগ এবং নিরলস প্রচেষ্টা বাংলাদেশকে একটি শক্তিশালী
                  জাতি হিসেবে গড়ে তুলতে তাৎপর্যপূর্ণ ভূমিকা রেখেছে।
                </p>
                <p>
                  {" "}
                  ১৯৭১ সালের মুক্তিযুদ্ধ চলাকালীন, তিনি হাইকোর্টের সেইসব
                  আইনজীবীদের মধ্যে ছিলেন, যারা বাংলাদেশের স্বাধীনতাকে
                  সক্রিয়ভাবে সমর্থন করেছিলেন। আইনি ক্ষেত্রে তাঁর খ্যাতি ও
                  রাজনৈতিক ভূমিকার কারণে রাষ্ট্রপতি জিয়াউর রহমান তাঁকে ১৯৭৭
                  থেকে ১৯৮১ সালের মধ্যে পাঁচবার জাতিসংঘ সাধারণ পরিষদে বাংলাদেশের
                  প্রতিনিধি হিসেবে নিযুক্ত করেন।
                </p>
                <p>
                  রাষ্ট্রপতি জিয়াউর রহমান যখন <strong>জাগো দল</strong> গঠন
                  করেন, তখন তিনি ছিলেন দলটির একজন প্রতিষ্ঠাতা সদস্য। পরবর্তীতে
                  বাংলাদেশ জাতীয়তাবাদী দল <strong>(বিএনপি)</strong> প্রতিষ্ঠিত
                  হলে তিনি এর
                  <strong> স্থায়ী কমিটির</strong> প্রতিষ্ঠাতা সদস্য হন।
                </p>
                <p>
                  আইন ও রাজনীতি উভয় ক্ষেত্রেই তিনি ছিলেন অসাধারণ প্রজ্ঞার
                  অধিকারী, যা জাতীয় অঙ্গনে এক স্থায়ী ছাপ রেখে গেছে। শিল্প ও
                  বাণিজ্যিক আইন, সামুদ্রিক আইন, পরিবেশ আইন, এবং আন্তর্জাতিক
                  চুক্তি প্রণয়নের মতো জটিল ও বিশেষায়িত ক্ষেত্রে তিনি ছিলেন
                  বাংলাদেশের অন্যতম পথিকৃৎ।
                </p>
                <p>
                  তাঁর <strong>সুদূরপ্রসারী নেতৃত্বে</strong> বাংলাদেশ তার
                  <strong>
                    {" "}
                    সামুদ্রিক সীমানা নির্ধারণ, বিনিয়োগ-বান্ধব পরিবেশ সৃষ্টি এবং
                    প্রাকৃতিক সম্পদ সুরক্ষার ক্ষেত্রে
                  </strong>{" "}
                  গুরুত্বপূর্ণ অগ্রগতি অর্জন করে। আন্তর্জাতিক অঙ্গনে তিনি
                  উপকূলীয় দেশগুলোর অধিকারের জন্য এক বলিষ্ঠ প্রবক্তা ছিলেন, যা
                  বাংলাদেশের স্বার্থকে দৃঢ়ভাবে সুরক্ষিত করেছে। তাঁর গভীর নিষ্ঠা
                  এবং অক্লান্ত পরিশ্রম বাংলাদেশকে একটি শক্তিশালী জাতি হিসেবে গড়ে
                  তুলতে সহায়ক ভূমিকা পালন করে।
                </p>
                <p>
                  এ পর্যন্ত মুহাম্মদ জমির উদ্দিন সরকারের ১৫ টি বই প্রকাশিত
                  হয়েছে। তাঁর আত্মজীবনী “ <strong>ফেলে আসা দিনগুলো</strong>”
                  ২০২৫-এর শেষের দিকে প্রকাশ পাবার কথা।
                </p>
              </>
            ) : (
              <>
                ` <h4>Details</h4>
                <p>
                  A respected son of Panchagarh, Zamir Uddin Sarkar is a
                  renowned lawyer, a veteran politician and always a fearless
                  soldier in protecting the interests of Bangladesh.
                </p>
                <p>
                  He is a five-time elected member of parliament. He has served
                  as the Speaker of the National Parliament of Bangladesh for
                  two terms and as the Acting President of Bangladesh for two
                  terms.
                </p>
                <p>
                  While serving as the State Minister for Public Works and Urban
                  Development in the cabinet of late President Ziaur Rahman, he
                  completed the unfinished work of the current Parliament
                  Building. Dhaka&apos;s Zia International Airport was built by
                  him.
                </p>
                <p>
                  He served as the Minister of State for Foreign Affairs in
                  Abdus Sattar&apos;s cabinet. In the first cabinet of Begum
                  Khaleda Zia in the fifth parliament, he first served as the
                  Minister of State for Land and later as the Minister of
                  Education. The National University and the Open University
                  were established under his leadership. With his permission,
                  the journey of the first private universities in Bangladesh
                  began. His contribution to the establishment of Khulna
                  Engineering University and the expansion of technical
                  education to eliminate regional disparities is a glorious
                  chapter in the history of the education system of Bangladesh.
                  The education sector in Panchagarh 1 constituency was
                  allocated state funding worth Tk 205 crore in 1991-96, the
                  current value of which is around Tk 1500 crore.
                </p>
                <p>
                  In addition, he also served as the Minister of Science and
                  Technology at that time.
                </p>
                <p>
                  In the cabinet of the short-lived BNP government formed in the
                  Sixth National Parliament, he served as the Minister of Law,
                  Justice and Parliamentary Affairs from 19 March 1996 to 30
                  March 1996 and played an important role in formulating the
                  caretaker government bills.
                </p>
                <p>
                  Zamir Uddin Sarkar was born in 1931 in Nayabari village of
                  Tentulia, then British India. After completing his MA and LLB
                  from Dhaka University and barristership from Lincoln&apos;s
                  Inn, London, he was admitted to the Dhaka High Court in 1960
                  after obtaining a certificate from the then East Pakistan High
                  Court Joined the legal profession.
                </p>
                <p>
                  His political career began in 1945, when he was still a
                  student, through the then Students&apos; Federation. He was a
                  founding member of the Awami Muslim League and an associate of
                  Maulana Bhasani.
                </p>
                <p>
                  Zamir Uddin Sarkar was one of the group of lawyers who played
                  an active role in the Liberation War in the High Court in
                  1971. Due to his reputation and fame in the legal profession,
                  late President Ziaur Rahman sent him as Bangladesh&apos;s
                  representative to the United Nations General Assembly five
                  times from 1977 to 1981. When Ziaur Rahman formed the Jagdal
                  in the first stage of the party&apos;s formation, he joined
                  it. Later, when the BNP was established, he became a member of
                  the standing committee.
                </p>
                <p>
                  His profound scholarship and ease in both the worlds of law
                  and politics left an unforgettable mark on the country&apos;s
                  political arena. He was one of Bangladesh&apos;s pioneers in
                  complex and specialized fields such as industrial and
                  commercial law, maritime law, environmental law, and
                  international treaty drafting.
                </p>
                <p>
                  Under his visionary leadership, important tasks such as
                  demarcation of Bangladesh&apos;s maritime boundaries, creation
                  of an investment-friendly environment, and protection of
                  natural resources gained momentum. He was a strong advocate
                  for the rights of coastal countries in international forums,
                  which safeguarded Bangladesh&apos;s interests on the world
                  stage. His deep love for the country and relentless efforts
                  played a significant role in building Bangladesh into a strong
                  nation.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ZamirUddin