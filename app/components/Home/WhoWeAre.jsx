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
        className={`who-section ${
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
                  {language === "bn" ? "আমরা কারা" : "Who are we"}
                </div>
                <h2 className="section-title">
                  {language === "bn"
                    ? "যদি তুমি আরও ভালো ভবিষ্যৎ চাও, তাহলে আমাদের ভোট দাও।"
                    : "Who we are If you want a better future, Vote for us."}
                </h2>
                <p>
                  {language === "bn"
                    ? "আমরা চাই একটি দায়িত্বশীল, অন্তর্ভুক্তিমূলক ও ভবিষ্যতের প্রতি যত্নপরায়ণ গণতান্ত্রিক বাংলাদেশ, যেখানে প্রতিটি নাগরিক তার ন্যায্য অধিকার, মর্যাদা ও সুযোগ পাবে। দুর্নীতি-মুক্ত প্রশাসন, শিক্ষা ও স্বাস্থ্য ব্যবস্থার সার্বভৌম গুণগত উন্নয়ন, এবং তরুণদের নেতৃত্বে দেশ গঠনের লক্ষ্যে নিরলসভাবে কাজ করতে আমরা বদ্ধ পরিকর। আমরা পারস্পরিক সম্মান, জবাবদিহিতা এবং আইনের ভিত্তিতে সুশাসন নিশ্চিত করে স্থায়ী প্রগতির পথে কাজ করব।"
                    : "We want a responsible, inclusive and future-oriented democratic Bangladesh, where every citizen gets their just rights, dignity and opportunities. We are committed to working relentlessly towards a corruption-free administration, sovereign quality development of education and health systems, and youth-led nation-building. We will work towards sustainable progress by ensuring mutual respect, accountability and good governance based on the law."}
                </p>
                <Link href="#" className="custom-btn">
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

export default WhoWeAre;
