"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../../../context/languageContext";

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
                                বেসরকারি বিশ্ববিদ্যালয় আইন ১৯৯২{" "}
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
                পঞ্চগড়ের কৃতি সন্তান মুহম্মদ জমির উদ্দিন সরকার একাধারে একজন প্রথিতযশা আইনজীবী, প্রথম সারির প্রবীণ রাজনীতিবিদ এবং সদাসর্বদা বাংলাদেশের স্বার্থরক্ষায় এক অকুতোভয় সৈনিক।

                </p>
                <p>
                মুহম্মদ জমির উদ্দিন সরকার ১৯৩১ সালে তৎকালীন ব্রিটিশ ভারতের তেঁতুলিয়ার নয়াবাড়ি গ্রামে জন্মগ্রহণ করেন। ব্রিটিশ আমলেই অষ্টম শ্রেণীতে পড়াকালীন সময়ে ছাত্র রাজনীতিতে নাম লিখান। ছাত্র আন্দোলনের কারণে কলেজ জীবনে জেল খেটেছেন। ১৯৫৩ সালে ঢাকা বিশ্ববিদ্যালয়ে আইন বিষয়ে পড়াশুনা শুরু করেন। ১৯৫৪ সালে যুক্তফ্রন্ট এর হয়ে জনাব মির্জা গোলাম হাফিজ এর সাথে পঞ্চগড়ে নির্বাচনী প্রচারণা করেন। ১৯৫৮ সালে ইকবাল হলের (বর্তমানে সার্জেন্ট জহুরুল হক হল) ভিপি নির্বাচিত হওয়া তাঁর রাজনৈতিক যাত্রার এক অন্যতম মাইলফলক। 

                </p>
                <p>
                ১৯৭০ সালে, পাকিস্তানের সাধারণ নির্বাচনে, প্রথমবারের মত স্বতন্ত্র প্রার্থী হিসেবে গরুগারি মার্কায় নির্বাচন করেন, এরপর স্বাধীন বাংলাদেশে ১৯৭৩ সালে আবারও স্বতন্ত্র প্রার্থী হিসেবে হাতি মার্কায় জাতীয় সংসদ নির্বাচন করেন।  ১৯৭১ সালে হাইকোর্টে আইনজীবীদের যে গ্রুপটি মুক্তিযুদ্ধের পক্ষে সক্রিয় ভূমিকা পালন করেছিলেন, জমির উদ্দিন সরকার তাদের অন্যতম।
                </p>
                <p>
                আইন পেশায় সুনাম ও খ্যাতি অর্জন করায় এবং পূর্বের সুদীর্ঘ রাজনৈতিক অভিজ্ঞতার কারণে শহীদ রাষ্ট্রপতি জিয়াউর রহমান ১৯৭৭ সাল থেকে ১৯৮১ সাল পর্যন্ত তাঁকে পাঁচবার জাতিসংঘের সাধারণ পরিষদের অধিবেশনে বাংলাদেশের প্রতিনিধি হিসেবে পাঠান। ১৯৭৯ এর সংসদ নির্বাচনে জয়লাভ করেন এবং শহীদ প্রেসিডেন্ট জিয়াউর রহমানের দেয়া প্রথম মন্ত্রিত্বের দায়িত্বভার গ্রহণ করেন গণপূর্ত মন্ত্রণালয়ের প্রতিমন্ত্রী হিসেবে। দল গঠনের প্রথম পর্যায়ে জিয়াউর রহমান তাকে  <strong>জাতীয়তাবাদী গণতান্ত্রিক দল (জাগদল) </strong> এর গঠনতন্ত্র প্রণয়নের দায়িত্ব দেন। পরবর্তীতে বাংলাদেশ জাতীয়তাবাদী দল <strong>(বিএনপি)</strong> গঠিত হলে তিনি <strong>স্থায়ী কমিটির</strong> প্রতিষ্ঠাতা সদস্য হন।
                </p>
                <p>
                তিনি পাঁচ বারের নির্বাচিত সংসদ সদস্য, দুইবার জাতীয় সংসদের <strong>স্পিকার</strong>  এবং দুইবার  বাংলাদেশ সরকারের <strong> ভারপ্রাপ্ত রাষ্ট্রপতি</strong> হিসেবে দায়িত্ব পালন করেছেন। শহীদ রাষ্ট্রপতি জিয়াউর রহমানের মন্ত্রীসভায় <strong> গণপূর্ত ও নগর উন্নয়ন প্রতিমন্ত্রী</strong> হিসেবে দায়িত্ব পালনের সময় তিনি বর্তমান <strong>সংসদ ভবনের অসমাপ্ত কাজ</strong> সম্পূর্ণ  করেন। তাঁর নেতৃত্বেই ঢাকার <strong>জিয়া আন্তর্জাতিক বিমানবন্দরের</strong> নির্মাণ কাজ পূর্ণতা পায়। 

                </p>
                <p>
                রাষ্ট্রপতি আবদুস সাত্তারের মন্ত্রিসভায় তিনি <strong>পররাষ্ট্র প্রতিমন্ত্রী</strong> হিসেবে দায়িত্ব পালন করেন। পঞ্চম জাতীয় সংসদে বেগম খালেদা জিয়ার প্রথম মন্ত্রীসভায় তিনি প্রথমে <strong>ভূমি প্রতিমন্ত্রী</strong> ও পরবর্তীতে <strong>শিক্ষামন্ত্রী</strong> হিসেবে দায়িত্ব পালন করেন। <strong>জাতীয় বিশ্ববিদ্যালয় ও উন্মুক্ত বিশ্ববিদ্যালয়</strong> গড়ে ওঠে তাঁর তত্ত্বাবধানে। এসময় বাংলাদেশে প্রথম <strong>বেসরকারী বিশ্ববিদ্যালয়</strong> গুলোর যাত্রা শুরু হয়। আঞ্চলিক বৈষম্য দূরীকরণে <strong>খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (কুয়েট)</strong> প্রতিষ্ঠা এবং কারিগরি শিক্ষার প্রসারে তাঁর অগ্রণী ভূমিকা প্রশংসার দসাবি রাখে। সাইক্লোনের হানা থেকে জীবন রক্ষার জন্য প্রায় দুইশতাধিক সমুদ্র উপকূলবর্তী প্রাইমারি স্কুল কাম সাইক্লোন শেল্টার নির্মাণ করা হয়। ১৯৯১-১৯৯৬ দেশের শিক্ষাব্যবস্থার ইতিহাসের এক গৌরবময় অধ্যায়।
                </p>
                <p>
               

কেবল ১৯৯১–১৯৯৬ সালের মধ্যেই তিনি পঞ্চগড়-১ নির্বাচনী এলাকার শিক্ষাখাতে <strong>২০৫ কোটি টাকা</strong> বরাদ্দ করেছিলেন, যা আজকের বাজার মূল্যে প্রায় <strong>১,৫০০ কোটি</strong> টাকার সমতুল্য। সে সময়ে তিনি <strong>বিজ্ঞান ও প্রযুক্তি মন্ত্রী </strong> হিসেবেও দায়িত্ব পালন করেন।

                </p>
                <p>
                 

তিনি  ষষ্ঠ সংসদের বি এনপি সরকারের <strong>আইন, বিচার ও সংসদ বিষয়ক মন্ত্রী</strong> হিসেবে ১৯ মার্চ ১৯৯৬ থেকে ৩০ মার্চ ১৯৯৬ পর্যন্ত দায়িত্ব পালন করেন, যেখানে তিনি তত্ত্বাবধায়ক সরকার বিল (কেয়ারটেকার গভর্নমেন্ট বিল) খসড়া প্রণয়নে গুরুত্বপূর্ণ ভূমিকা রাখেন।
                </p>
                <p>
                

অষ্টম সংসদে তাকে প্রধানমন্ত্রী বেগম খালেদা জিয়া <strong>জাতীয় সংসদের স্পিকার</strong> হিসেবে দায়িত্ব অর্পণ করেন। স্পিকার থাকাকালীন সময়ে দুবার তিনি পদাধিকার বলে <strong> ভারপ্রাপ্ত রাষ্ট্রপতির</strong> দায়িত্ব পালন করেন।  ২০০১ সাল থেকে ২০০৮ সাল পর্যন্ত তিনি জাতীয়ও সংসদের স্পিকারের দায়িত্ব পালন করেন। ১/১১ সরকারের মাইনাস টু পলিসি এর বিপক্ষে তিনি অগ্রণী ভূমিকা পালন করেন। 
                </p>
                <p>
                আইন ও রাজনীতি — উভয় জগতেই তাঁর ছিল গভীর পাণ্ডিত্য ও স্বচ্ছন্দ বিচরণ, যা দিয়ে তিনি দেশের রাজনৈতিক অঙ্গনে এক অবিস্মরণীয় ছাপ রেখেছেন। শিল্প ও বাণিজ্য আইন, সমুদ্র আইন, পরিবেশ আইন এবং আন্তর্জাতিক চুক্তি প্রণয়নের মতো জটিল ও বিশেষায়িত ক্ষেত্রগুলোতে তিনি ছিলেন বাংলাদেশের অন্যতম পথিকৃৎ।
                </p>
                <p>
                তাঁরই দূরদর্শী নেতৃত্বে বাংলাদেশের <strong>সামুদ্রিক সীমানা নির্ধারণ, বিনিয়োগ-বান্ধব পরিবেশ তৈরি এবং প্রাকৃতিক সম্পদ সুরক্ষা</strong>র মতো গুরুত্বপূর্ণ কাজগুলো গতি পায়। আন্তর্জাতিক ফোরামে তিনি ছিলেন উপকূলীয় দেশগুলোর অধিকারের এক বলিষ্ঠ প্রবক্তা, যা বিশ্বমঞ্চে বাংলাদেশের স্বার্থকে সুরক্ষিত করেছিল। দেশের প্রতি তাঁর গভীর অনুরাগ এবং নিরলস প্রচেষ্টা বাংলাদেশকে একটি শক্তিশালী জাতি হিসেবে গড়ে তুলতে তাৎপর্যপূর্ণ ভূমিকা রেখেছে।
                </p>
                <p>
                এ পর্যন্ত মুহাম্মদ জমির উদ্দিন সরকারের ১৫ টি বই প্রকাশিত হয়েছে। তাঁর আত্মজীবনী “<strong>ফেলে আসা দিনগুলি</strong>” ২০২৫-এর শেষের দিকে প্রকাশ পাবার কথা।
                </p>
               
              </>
            ) : (
              <>
                `
                <h4>
                  <strong>Details</strong>
                </h4>
                <p>
                Barrister Muhammad Jamiruddin Sircar, a distinguished son of Panchagarh, is a prominent senior lawyer, a senior statesman, and an unwavering guardian of Bangladesh’s national interests.
                </p>
                <p>
                Muhammad Jamiruddin Sircar was born in 1931 at Nayabari village of Tetulia, then a part of British India. After earning an LLB and an MA from the University of Dhaka, he began practising at the Dinajpur District Bar. He obtained the prestigious title of Barrister-at-Law from the Honourable Society of Lincoln’s Inn, London, United Kingdom, and started practising at the Dhaka High Court in 1969.

                </p>
                <p>
                His political journey began in 1945 while he was a student in class 8. Then, in 1948, whilst being a college student, he was arrested during the anti-government protests. He enrolled in the Department of Law at Dhaka University in 1953.   He was a close associate of <strong>Maulana Bhashani</strong> and served as an ally and activist for the <strong>United Front (যুক্তফ্রন্ট)</strong> candidate, Mirza Golam Hafeez, in the 1954 election in Panchagarh.  He was the elected VP of Iqbal Hall (presently Surgent Zahurul Haq Hall) in 1958.  
                </p>
                <p>
                He participated in the Pakistan general election in 1970 and then again in 1973’s First National Parliamentary Election of Bangladesh
as an independent candidate in the Panchagar 1 constituency. He was elected to Parliament for the first time in 1979 from the Panchagarh 1 constituency.

                </p>
                <p>
                During the Liberation War of 1971, he was among the group of High Court lawyers who actively supported Bangladesh’s independence.  Due to his reputation and prominence in the legal arena and his long political engagement, President Ziaur Rahman appointed him as <strong>Bangladesh's delegate to the United Nations General Assembly five times</strong> between 1977 and 1981.

                </p>
                <p>
                He was a founder member of the <strong>JAGODAL</strong> party when it was formed, and later, upon the establishment of the <strong>Bangladesh Nationalist Party (BNP)</strong>, he was a founding member of its Standing Committee.



                </p>
                <p>
                He was elected to Parliament <strong>five times</strong>; served <strong>twice as the Speaker</strong> of the Jatiya Sangsad (National Parliament) and <strong>twice as the Acting President of Bangladesh.</strong>

                </p>
                <p>
                President Ziaur Rahman appointed him as the State Minister for Public Works and Urban Development in 1979.  He completed the unfinished work of the present Parliament Building. Under his leadership, <strong>Dhaka's Zia International Airport</strong> was completed.
In the cabinet of President Abdus Sattar, he served as the <strong>State Minister of Foreign Affairs.</strong>

                </p>
                <p>
                In the 5<sup>th</sup> Parliament, he joined the first cabinet of Prime Minister Begum Khaleda Zia, as the <strong>State Minister of Land</strong> and later as the <strong>Education Minister</strong>. He also served the <strong>Ministry of Science and Technology</strong> during that period.  

                </p>
                <p>
                Bangladesh’s first private universities began their journey during his tenure.  Both the <strong>National University</strong> and the <strong>Open University</strong> were established under his leadership. He played a vital role in establishing <strong>Khulna University of Engineering & Technology (KUET)</strong> and expanding the horizon of technical education. During this period, over 200 <strong>cyclone-shelter cum primary schools</strong> were established in Bangladesh's coastal areas, significantly reducing the death toll from natural disasters. All these achievements marked a historic chapter in the country’s education sector.
                </p>
                <p>
                During 1991–1996, he allocated <strong>205 crore BDT</strong> to the education sector of Panchagarh-1 constituency, equivalent to roughly <strong>1,500 crore BDT</strong> in today’s value. 

                </p>
                <p>
                In the BNP regime, during the 6th Parliament, he served as the <strong>Minister of Law, Justice and Parliamentary Affairs</strong> from 19 March 1996 to 30 March 1996, where he played an essential role in drafting the <strong>Caretaker Government Bill</strong>.

                </p>
                <p>
                In the 8<sup>th</sup> parliament, he was appointed as the Speaker for National Parliament by Begum Khaleda Zia, the then Honourable Prime Minister of Bangladesh, for the tenure 2001 to 2008. He also served as the acting President of the country twice. He played a vital and distinctive role in the 1/11 crisis against the minus two formula. 

                </p>
                <p>
                In both law and politics, he was a scholar of exceptional depth, leaving an enduring mark on the national stage. He was one of Bangladesh’s pioneers in complex and specialised fields, including <strong>industrial and commercial law, maritime law, environmental law</strong>, and the formulation of <strong>international treaties</strong>.

                </p>
                <p>
                Under his farsighted leadership, Bangladesh made significant progress in defining its maritime boundaries, creating an investment-friendly environment, and safeguarding natural resources. On the international stage, he was a powerful advocate for the rights of coastal nations, ensuring Bangladesh’s interests remained firmly protected. His profound dedication and tireless efforts played a vital role in shaping Bangladesh into a stronger nation.

                </p>
                <p>He has published 15 books, and his autobiography <strong>“ফেলে আসা দিনগুলি”</strong> is due later this year.
                </p>
              </>
            )}
          </div>
          <div className="leadership-item-head">
            <h2>
              {language === "bn" ? (
                <>
                  <strong>তাঁর প্রকাশিত গ্রন্থসমূহ</strong>
                </>
              ) : (
                <>
                  <strong>Notable Works</strong>
                </>
              )}
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
                      <>Glimpses of International Law (১৯৯৭)</>
                    ) : (
                      <>Glimpses of International Law (1997)</>
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
                       Stronger United Nations for Peaceful Welfare World (২০০৩)
                      </>
                    ) : (
                      <>
                        Stronger United Nations for Peaceful Welfare World
                        (2003)
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
                      <>লন্ডনে ছাত্র আন্দোলন (২০০৫)</>
                    ) : (
                      <>লন্ডনে ছাত্র আন্দোলন (2005)</>
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
                      <>লন্ডনে বন্ধুবান্ধব (২০০৬)</>
                    ) : (
                      <>লন্ডনে বন্ধুবান্ধব (2006)</>
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
                      <>লন্ডনে ছাত্রজীবন (২০০৬)</>
                    ) : (
                      <>লন্ডনে ছাত্রজীবন (2006)</>
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
                      <>অষ্টম সংসদে স্পিকার (২০০৬)</>
                    ) : (
                      <>অষ্টম সংসদে স্পিকার (2006)</>
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
                      <>এক নজরে সংসদ সম্পর্কিত বিধিবিধান (২০০৬)</>
                    ) : (
                      <>এক নজরে সংসদ সম্পর্কিত বিধিবিধান (2006)</>
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
                        পাল রাজ থেকে পলাশী এবং ব্রিটিশ রাজ থেকে বঙ্গভবন (২০০৬)
                      </>
                    ) : (
                      <>
                        পাল রাজ থেকে পলাশী এবং ব্রিটিশ রাজ থেকে বঙ্গভবন (2006)
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
                      <>Law of the Sea (২০০৩)</>
                    ) : (
                      <>The Law of the Sea (2003)</>
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
                       Law of the International Rivers and Other Water Courses (২০০৭)

                      </>
                    ) : (
                      <>
                        Law of the International Rivers and others Water Courses
                        (2007)
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
                      <>ব্রিটিশ ভারতে গণতন্ত্রের উন্মেষ (২০০৭)</>
                    ) : (
                      <>ব্রিটিশ ভারতে গণতন্ত্রের উন্মেষ (2007)</>
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
                        পাকিস্তানে গণতন্ত্রের বিপর্যয় এবং স্বাধীন বাংলাদেশের
                        অভ্যুদয় (২০০৮)
                      </>
                    ) : (
                      <>
                        পাকিস্তানে গণতন্ত্রের বিপর্যয় এবং স্বাধীন বাংলাদেশের
                        অভ্যুদয় (2008)
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
                      <>সুরাইয়া ফারাহ চৌধুরী</>
                    ) : (
                      <>সুরাইয়া ফারাহ চৌধুরী</>
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
                      <>বাংলাদেশের গণতন্ত্রের উত্তরণ এবং ডিগবাজি</>
                    ) : (
                      <>বাংলাদেশের গণতন্ত্রের উত্তরণ এবং ডিগবাজি</>
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
                      <>গণতন্ত্রের উৎপত্তি এবং ক্রমবিকাশ</>
                    ) : (
                      <>গণতন্ত্রের উৎপত্তি এবং ক্রমবিকাশ</>
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

export default ZamirUddin;
