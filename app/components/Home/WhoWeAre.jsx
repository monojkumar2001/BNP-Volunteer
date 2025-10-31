"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const WhoWeAre = () => {
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
      <section
        className="who-section"
        data-aos="fade-up"
        data-aos-duration="3000"
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
                <div className="subtitle">WHO WE ARE</div>
                <h2 className="section-title">
                  If you want a better future, Vote for us.
                </h2>
                <p>
                  Parturient dis torquent nostra mattis congue ut sagittis nibh
                  luctus viverra. Enim convallis tristique magna torquent
                  egestas dictumst consectetur. Malesuada mus dictumst orci
                  litora nisl iaculis duis nostra enim vestibulum.
                </p>
                <Link href="#" className="custom-btn">
                  <span> Learn more</span>
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
