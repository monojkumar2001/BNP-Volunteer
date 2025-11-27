"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useLanguage } from "../../../context/languageContext";

const WhoWeAre = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
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
                    ? "কিভাবে দেশ গড়বো?"
                    : "How do we build our country?"}
                </div>
                <h2 className="section-title">
                  {language === "bn" ? (
                    <>
                      আগামী গড়ি মিলেমিশে <br /> ভোট দিন ধানের শীষে
                    </>
                  ) : (
                    <>Together for a Better Tomorrow</>
                  )}
                </h2>
                <p>
                  {language === "bn"
                    ? "বাংলাদেশের মানুষ সম্মানের সাথে মাথা উঁচু করে বাঁচতে চায়। কিন্তু জনস্বার্থে সকলে মিলে দীর্ঘমেয়াদী পরিকল্পনা বাস্তবায়নে আমরা কতটা সক্ষম? অক্সফোর্ডে পড়াকালিন সময় দেখেছি বিভিন্ন গোষ্ঠীর মাঝে যতই বিরোধ থাকুক, স্থানীয় সমস্যার সমাধানে সবাই মিলে কাজ করে। ক্ষুদ্র ব্যক্তিস্বার্থের তুলনায় সামষ্টিক সমৃদ্ধি বেশি প্রাধান্য পায়। নিজেদের ভবিষ্যতের স্বার্থে আমরা কেন পারবো না একযোগে কাজ করতে?"
                    : "When I was studying at Oxford, I observed something powerful: no matter how many divisions existed between groups, everyone came together to tackle local problems. The common good took precedence over individual interest. So why can’t we do the same for our future?"}
                </p>
                <Link href="/how-to-build" className="custom-btn">
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
                src="https://www.youtube.com/embed/AyHa7J2RsaQ?si=rkKoBbfXYeqMYJxT"
                title="YouTube video player"
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

export default WhoWeAre;
