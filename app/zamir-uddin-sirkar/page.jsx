"use client";
import React from "react";
import Banner from "../components/Section/Banner";
import { useLanguage } from "../../context/languageContext";
import Image from "next/image";

const ZamirUddinPage = () => {
  const { language } = useLanguage();

  const bannerData = {
    title: language === "bn" ? "জামীর উদ্দিন সরকার" : "Zamir Uddin Sirker",
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
              <div className="who-content">
                <div className="subtitle">
                  {language === "bn"
                    ? "ব্যারিস্টার, রাজনীতিবিদ"
                    : "Barrister, Politician"}
                </div>
                <h2 className="section-title">
                  {language === "bn"
                    ? "জামীর উদ্দিন সরকার"
                    : " Zamir Uddin Sirker"}
                </h2>

                <ul>
                  <li>
                    {language === "bn" ? (
                      <>
                        <strong>
                          বেসরকারী বিশ্ববিদ্যালয় আইন ১৯৯২ প্রণয়ন করেন
                        </strong>{" "}
                        – ফলশ্রুতিতে বর্তমানে দেশে ১১২ টি নিবন্ধিত বেসরকারী
                        বিশ্ববিদ্যালয়ে ৩,৫৮,৪১৪ জন শিক্ষার্থী পড়াশুনা করছে
                        (বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশন, ২০২৩)
                      </>
                    ) : (
                      <>
                        <strong>
                          Enacted the Private Universities Act 1992
                        </strong>{" "}
                        – as a result, currently 3,58,414 students are studying
                        in 112 registered private universities in the country
                        (Bangladesh University Grants Commission, 2023)
                      </>
                    )}
                  </li>
                  <li>
                    {language === "bn" ? (
                      <>
                        <strong>
                          বাংলাদেশ উন্মুক্ত বিশ্ববিদ্যালয় আইন ১৯৯২ প্রণয়ন করেন
                        </strong>{" "}
                        - তালিকাভুক্ত শিক্ষার্থী সংখ্যার ভিত্তিতে এটি বিশ্বের ৮ম
                        বৃহত্তম বিশ্ববিদ্যালয় (উইকিপিডিয়া)। ২০২০ সালে বাউবির
                        সমস্ত আনুষ্ঠানিক প্রোগ্রামে মোট শিক্ষার্থীর সংখ্যা ছিল
                        ৯,৬৫,৮৩৮।
                      </>
                    ) : (
                      <>
                        <strong>Bangladesh Open University Act 1992</strong> -
                        It is the 8th largest university in the world based on
                        the number of enrolled students (Wikipedia). In 2020,
                        BAU had a total enrollment of 965,838 students in all
                        formal programs.
                      </>
                    )}
                  </li>
                  <li>
                    {language === "bn" ? (
                      <>
                        <strong>
                          জাতীয় বিশ্ববিদ্যালয় আইন, ১৯৯২ প্রণয়ন করেন
                        </strong>{" "}
                        – শিক্ষার্থীর সংখ্যা অনুযায়ী এটি বিশ্বের দ্বিতীয়
                        বৃহত্তম বিশ্ববিদ্যালয়। অধিভুক্ত ২২৫৭ টি শিক্ষা
                        প্রতিষ্ঠানে ৩৪,২৫,৮৩২ জন শিক্ষার্থী লেখাপড়া করছে (জাতীয়
                        বিশ্ববিদ্যালয় ওয়েবসাইট)।
                      </>
                    ) : (
                      <>
                        <strong>
                          Enacted the National University Act, 1992
                        </strong>{" "}
                        – It is the second largest university in the world in
                        terms of student population. 34,25,832 students are
                        studying in 2,257 affiliated educational institutions
                        (National University website).
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="leader-ship-single-content">
            <ul>
              <li>
                {language === "bn" ? (
                  <>
                    <strong>
                      খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (KUET)
                    </strong>{" "}
                    - ২০০৩ সালে বিআইটি খুলনাকে পরিপূর্ণ গবেষণাধর্মী
                    বিশ্ববিদ্যালয়ে পরিণত করেন। এখানে প্রায় আট হাজার জন
                    ছাত্রছাত্রী স্নাতক ও স্নাতকোত্তর প্রকৌশল ও প্রযুক্তি নিয়ে
                    পড়াশোনা করছে।
                  </>
                ) : (
                  <>
                    <strong>
                      Khulna University of Engineering and Technology (KUET)
                    </strong>{" "}
                    - In 2003, BIT transformed Khulna into a full-fledged
                    research university. Around eight thousand students are
                    studying undergraduate and postgraduate engineering and
                    technology here.
                  </>
                )}
              </li>
              <li>
                {language === "bn" ? (
                  <>
                    <strong>বাংলাদেশ জাতীয় সংসদ ভবন উদ্বোধন</strong> - ১৯৭৯ তিনি
                    গণপূর্ত ও নগর উন্নয়ন মন্ত্রণালয়ের দায়িত্বভার নেয়ার পর
                    পূর্ণাঙ্গ সংসদ অধিবেশন পরিচালনার উপযুক্ত হয়। সেসময়
                    বিশ্বখ্যাত স্থপতি লুই কানের ডিজাইন করা সংসদ ভবন কমপ্লেক্সের
                    ৭০-৮০ ভাগ কাজই অসমাপ্ত ছিল। তিনি এর সংরক্ষিত নকশা ও অঙ্কন
                    সংগ্রহ করেন। ফলে সংসদ ভবন “ব্যবহারযোগ্য” থেকে “রাষ্ট্রের
                    গণতান্ত্রিক কেন্দ্র” হয়ে ওঠে।
                  </>
                ) : (
                  <>
                    <strong>
                      Inauguration of the Bangladesh National Parliament
                      Building
                    </strong>{" "}
                    - 1979 After he took charge of the Ministry of Public Works
                    and Urban Development, he was able to conduct a full
                    parliamentary session. At that time, 70-80 percent of the
                    work of the Parliament Building complex designed by
                    world-renowned architect Louis Kahn was unfinished. He
                    collected its preserved designs and drawings. As a result,
                    the Parliament Building became the &quot;democratic center
                    of the state&quot; from a &quot;usable building&quot;.
                  </>
                )}
              </li>
              <li>
                {language === "bn" ? (
                  <>
                    <strong>
                      জিয়া আন্তর্জাতিক বিমানবন্দর (বর্তমানে হযরত শাহজালাল
                      আন্তর্জাতিক বিমানবন্দর) নির্মাণ
                    </strong>{" "}
                    - ১৯৭৯ সালে গণপূর্ত ও নগর উন্নয়ন প্রতিমন্ত্রী হিসেবে তিনি
                    ঢাকার নতুন আন্তর্জাতিক বিমানবন্দর নির্মাণ কাজের দায়িত্ব নেন।
                    প্রথমবারের মতো বাংলাদেশে একটি পূর্ণাঙ্গ আন্তর্জাতিক
                    বিমানবন্দর গড়ে তোলেন তিনি।
                  </>
                ) : (
                  <>
                    <strong>
                      Construction of Zia International Airport (now Hazrat
                      Shahjalal International Airport)
                    </strong>{" "}
                    - As the State Minister for Public Works and Urban
                    Development in 1979, he took charge of the construction of
                    Dhaka&apos;s new international airport. He built a
                    full-fledged international airport for the first time in
                    Bangladesh.
                  </>
                )}
              </li>
            </ul>
            {language === "bn" ? (
              <>
                <h4>বিস্তারিত</h4>
                <p>
                  পঞ্চগড়ের কৃতি সন্তান জমিরউদ্দিন সরকার একাধারে একজন প্রথিতযশা
                  আইনজীবী, প্রথম সারির প্রবীণ রাজনীতিবিদ এবং সদাসর্বদা
                  বাংলাদেশের স্বার্থরক্ষায় এক অকুতোভয় সৈনিক।
                </p>
                <p>
                  পাঁচ বারের নির্বাচিত সংসদ সদস্য তিনি। দুই দফায় বাংলাদেশ জাতীয়
                  সংসদের স্পীকার হিসেবে এবং দুইবার বাংলাদেশের অস্থায়ী
                  রাষ্ট্রপতি হিসেবে দায়িত্ব পালন করেছেন।
                </p>
                <p>
                  শহীদ রাষ্ট্রপতি জিয়াউর রহমানের মন্ত্রীসভায় গণপূর্ত ও নগর
                  উন্নয়ন প্রতিমন্ত্রী হিসেবে দায়িত্ব পালনের সময় তিনি বর্তমান
                  সংসদ ভবনের অসমাপ্ত কাজ শেষ করেন। ঢাকার জিয়া আন্তর্জাতিক
                  বিমানবন্দর তাঁর হাতেই তৈরি।{" "}
                </p>
                <p>
                  আবদুস সাত্তারের মন্ত্রিসভায় তিনি পররাষ্ট্র প্রতিমন্ত্রী
                  হিসেবে দায়িত্ব পালন করেন। পঞ্চম জাতীয় সংসদে বেগম খালেদা
                  জিয়ার প্রথম মন্ত্রীসভায় তিনি প্রথমে ভূমিপ্রতিমন্ত্রী ও
                  পরবর্তীতে শিক্ষামন্ত্রী হিসেবে দায়িত্ব পালন করেন। জাতীয়
                  বিশ্ববিদ্যালয় ও উন্মুক্ত বিশ্ববিদ্যালয় গড়ে ওঠে তাঁর হাত ধরে।
                  তাঁর অনুমতিক্রমে বাংলাদেশে প্রথম বেসরকারী বিশ্ববিদ্যালয়গুলোর
                  যাত্রা শুরু হয়। আঞ্চলিক বৈষম্য দূরীকরণে খুলনা প্রকৌশল
                  বিশ্ববিদ্যালয় প্রতিষ্ঠা ও প্রযুক্তিগত শিক্ষা সম্প্রসারণে তাঁর
                  অবদান বাংলাদেশের শিক্ষাব্যবস্থার ইতিহাসের গৌরবময় অধ্যায়। শুধু
                  পঞ্চগড় ১ আসনের শিক্ষাখাতেই তিনি ৳২,০৫,৫৬,১২,৭২০ মূল্যমানের কাজ
                  করেন, যার বর্তমান অর্থমান ৳১৪,৮০,০৪,১১,৫৮৪।
                </p>
                <p>
                  এছাড়া, সে সময় তিনি বিজ্ঞান ও প্রযুক্তি মন্ত্রী হিসেবেও
                  দায়িত্ব পালন করেন।
                </p>
                <p>
                  ষষ্ঠ জাতীয় সংসদে গঠিত স্বল্পকালীন বিএনপি সরকারের মন্ত্রীসভায়
                  তিনি ১৯ মার্চ ১৯৯৬ থেকে ৩০ মার্চ ১৯৯৬ সাল পর্যন্ত আইন, বিচার ও
                  সংসদ বিষয়ক মন্ত্রণালয়ের মন্ত্রী হিসেবে দায়িত্ব পালন করেন
                  এবং তত্ত্বাবধায়ক সরকার বিল প্রণয়নে গুরুত্বপূর্ণ ভূমিকা পালন
                  করেন।
                </p>
                <p>
                  জমির উদ্দিন সরকারের জন্ম ১৯৩১ সালে, তৎকালীন ব্রিটিশ ভারতের
                  তেঁতুলিয়ার নয়াবাড়ি গ্রামে। ঢাকা বিশ্ববিদ্যালয় থেকে এমএ ও
                  এলএলবি এবং লন্ডনের লিংকনস ইন থেকে ব্যারিস্টারি পাশ করার পর
                  তৎকালীন পূর্ব পাকিস্তান হাইকোর্ট থেকে সনদ নিয়ে ১৯৬০ সালে তিনি
                  ঢাকা হাইকোর্টে
                </p>
                <p>আইন পেশায় যোগদান করেন। </p>
                <p>
                  ১৯৪৫ সালে ছাত্র থাকা অবস্থায় তৎকালীন ছাত্র ফেডারেশনের মাধ্যমে
                  তাঁর রাজনৈতিক জীবনের শুরু। তিনি আওয়ামী মুসলিমের লীগের একজন
                  প্রতিষ্ঠাতা সদস্য ও মাওলানা ভাসানীর সহচর।
                </p>
                <p>
                  ১৯৭১ সালে হাইকোর্টে আইনজীবীদের যে গ্রুপটি মুক্তিযুদ্ধের পক্ষে
                  সক্রিয় ভূমিকা পালন করেছিলেন, জমির উদ্দিন সরকার তাদের অন্যতম।
                  আইন পেশায় সুনাম ও খ্যাতি অর্জন করায় শহীদ রাষ্ট্রপতি জিয়াউর
                  রহমান ১৯৭৭ সাল থেকে ১৯৮১ সাল পর্যন্ত তাকে পাঁচবার জাতিসংঘের
                  সাধারণ পরিষদের অধিবেশনে বাংলাদেশের প্রতিনিধি হিসেবে পাঠান। দল
                  গঠনের প্রথম পর্যায়ে জিয়াউর রহমান জাগদল গঠন করলে তিনি তাতে
                  যোগ দেন। পরে বিএনপি প্রতিষ্ঠিত হলে তিনি স্থায়ী কমিটির সদস্য
                  হন।
                </p>
                <p>
                  আইন ও রাজনীতি—উভয় জগতেই তাঁর ছিল গভীর পাণ্ডিত্য ও স্বচ্ছন্দ
                  বিচরণ, যা দিয়ে তিনি দেশের রাজনৈতিক অঙ্গনে এক অবিস্মরণীয় ছাপ
                  রেখেছেন। শিল্প ও বাণিজ্য আইন, সমুদ্র আইন, পরিবেশ আইন এবং
                  আন্তর্জাতিক চুক্তি প্রণয়নের মতো জটিল ও বিশেষায়িত ক্ষেত্রগুলোতে
                  তিনি ছিলেন বাংলাদেশের অন্যতম পথিকৃৎ।
                </p>
                <p>
                  তাঁরই দূরদর্শী নেতৃত্বে বাংলাদেশের সামুদ্রিক সীমানা নির্ধারণ,
                  বিনিয়োগ-বান্ধব পরিবেশ তৈরি এবং প্রাকৃতিক সম্পদ সুরক্ষার মতো
                  গুরুত্বপূর্ণ কাজগুলো গতি পায়। আন্তর্জাতিক ফোরামে তিনি ছিলেন
                  উপকূলীয় দেশগুলোর অধিকারের এক বলিষ্ঠ প্রবক্তা, যা বিশ্বমঞ্চে
                  বাংলাদেশের স্বার্থকে সুরক্ষিত করেছিল। দেশের প্রতি তাঁর গভীর
                  অনুরাগ এবং নিরলস প্রচেষ্টা বাংলাদেশকে একটি শক্তিশালী জাতি
                  হিসেবে গড়ে তুলতে তাৎপর্যপূর্ণ ভূমিকা রেখেছে।
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
                  In the education sector of Panchagarh 1 alone, he did work
                  worth ৳2,05,56,12,720, which is currently ৳14,80,04,11,584.
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
                  Court.
                </p>
                <p>Joined the legal profession.</p>
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
};

export default ZamirUddinPage;
