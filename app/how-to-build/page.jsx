"use client";
import React, { useEffect, useState } from "react";
import Banner from "../components/Section/Banner";
import { useLanguage } from "../../context/languageContext";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";

const NawshadZamirPage = () => {
  const { language } = useLanguage();

  const bannerData = {
    title_en: "Nawshad Zamir",
    title_bn: "নওশাদ জামির",
    img: "/assets/images/about-bg.png",
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleKey);
      // prevent background scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Banner bannerData={bannerData} />
      <section
        className={`who-section who-single-section ${
          language === "bn" ? "lang-who-bn" : "lang-who-en"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="who-image-wrapper">
                <Image
                  src="/assets/images/who.png"
                  alt="Who we are"
                  width={633}
                  height={507}
                />
                <div className="play-overlay">
                  <button
                    className="play-btn"
                    aria-label="Play video"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Image
                      src="/assets/images/icon/play.svg"
                      alt="Play Icon"
                      width={104}
                      height={104}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="who-content">
                <div className="subtitle">
                  {language === "bn"
                    ? "কিভাবে দেশ গড়বো"
                    : "How to build a country"}
                </div>
                <h2 className="section-title">
                  {language === "bn" ? (
                    <>
                      আগামী গড়ি মিলেমিশে <br /> ভোট দিন ধানের শীষে
                    </>
                  ) : (
                    <>
                      Build the future together <br /> Vote for the rice grain
                    </>
                  )}
                </h2>
                <p>
                  {language === "bn"
                    ? "বাংলাদেশের মানুষ সম্মানের মাথা উঁচু করে বাঁচতে চায়। কিন্তু জনস্বার্থে সকলে মিলে দীর্ঘমেয়াদী পরিকল্পনা বাস্তবায়নে আমরা কতটা সক্ষম? যখন আমি অক্সফোর্ডে পড়ি, তখন দেখতাম, নানান গোষ্ঠীর মাঝে যতই বিরোধ থাকুক, স্থানীয় সমস্যার সমাধানে সবাই মিলে কাজ করে। ক্ষুদ্র ব্যক্তিস্বার্থের তুলনায় সামষ্টিক সমৃদ্ধি বেশি প্রাধান্য পায়। নিজেদের ভবিষ্যতের স্বার্থে আমরা কেন পারবো না একযোগে কাজ করতে?"
                    : "The people of Bangladesh want to live with dignity. But how capable are we of working together to implement long-term plans for the common good? When I was studying at Oxford, I saw that no matter how much conflict there was between different groups, everyone worked together to solve local problems. Collective prosperity took precedence over petty individual interests. Why can't we work together for our own future?"}
                </p>
              </div>
            </div>
          </div>

          <p className="who-single-content">
            {language === "bn"
              ? "আমরা তো চাই একটি দায়িত্বশীল, অন্তর্ভুক্তিমূলক ও ভবিষ্যতের প্রতি যত্নপরায়ণ গণতান্ত্রিক বাংলাদেশ, যেখানে প্রতিটি নাগরিক তার ন্যায্য অধিকার, মর্যাদা ও সুযোগ পাবে। দুর্নীতি-মুক্ত প্রশাসন, শিক্ষা ও স্বাস্থ্য ব্যবস্থার সার্বভৌম গুণগত উন্নয়ন, এবং তরুণদের নেতৃত্বে দেশ গঠনের লক্ষ্যে নিরলসভাবে কাজ করতে আমরা বদ্ধ পরিকর। আমরা পারস্পরিক সম্মান, জবাবদিহিতা এবং আইনের ভিত্তিতে সুশাসন নিশ্চিত করে স্থায়ী প্রগতির পথে কাজ করব।"
              : "We want a responsible, inclusive and future-oriented democratic Bangladesh, where every citizen gets their fair rights, dignity and opportunities. We are committed to working relentlessly towards a corruption-free administration, sovereign quality development of education and health systems, and youth-led nation-building. We will work towards sustainable progress by ensuring mutual respect, accountability and good governance based on the law."}
          </p>
        </div>
      </section>
      {isModalOpen && (
        <div
          className="who-video-modal"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            aria-label="Video dialog"
          >
            <button
              className="modal-close"
              aria-label="Close video"
              onClick={closeModal}
            >
              <IoMdClose />
            </button>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/3-1jCSeuMl0?si=vBK5oJ4JCMmkEryR&amp;controls=0"
                title="Who we are video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NawshadZamirPage;
