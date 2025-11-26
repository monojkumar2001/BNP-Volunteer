"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useLanguage } from "../../../context/languageContext";
import ReactLoadingSkeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GoArrowUpRight } from "react-icons/go";

const CentralBnpSlider = () => {
  const swiperRef = useRef(null);
  const { language } = useLanguage();
  const [centralBnp, setCentralBnp] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  // Fetch central bnp from API
  useEffect(() => {
    const fetchCentralBnp = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${baseUrl}/api/central-bnp`);
        const data = await res.json();

        if (res.ok) {
          // Only show active central bnp (status = 1) and limit to 8-10 for slider
          const activeCentralBnp = data
            .filter((item) => item.status === 1)
            .slice(0, 10);
          setCentralBnp(activeCentralBnp);
        }
      } catch (error) {
        console.error("Error fetching central bnp:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCentralBnp();
  }, []);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "bn" ? "bn-BD" : "en-US", {
      day: "numeric",
      month: language === "bn" ? "long" : "short",
      year: "numeric",
    });
  };

  // Get image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/assets/images/placeholder.png";
    if (imagePath.startsWith("http")) return imagePath;
    return `${baseUrl}/${imagePath.replace(/^\/+/, "")}`;
  };

  return (
    <section
      className={`latest-news ${
        language === "bn" ? "lang-news-bn" : "lang-news-en"
      }`}
    >
      <div className="container">
        <div className="latest-news-header">
          <div>
            <h2 className="section-title">
              {language === "bn"
                ? "কেন্দ্রীয় বিএনপি"
                : "Central BNP"}
            </h2>
            <div className="bar"></div>
          </div>

          <div className="slider-btns">
            <button
              className="prev-btn"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <GrFormPrevious />
            </button>
            <button
              className="next-btn"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <MdOutlineNavigateNext />
            </button>
          </div>
        </div>
        <div className="latest-news-wrapper">
          {loading ? (
            <div className="row">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="col-lg-3 col-md-6 mb-4">
                  <div className="latest-news-card">
                    <div className="latest-news-img">
                      <ReactLoadingSkeleton height={214} />
                    </div>
                    <div className="latest-news-content">
                      <ReactLoadingSkeleton
                        height={20}
                        width="90%"
                        style={{ marginTop: 15 }}
                      />
                      <ReactLoadingSkeleton
                        height={14}
                        width={120}
                        style={{ marginTop: 10 }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : centralBnp.length > 0 ? (
            <Swiper
              modules={[Navigation, Autoplay]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={24}
              loop={centralBnp.length > 4}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={800}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              {centralBnp.map((item) => {
                const imageUrl = getImageUrl(item.image);
                const centralBnpSlug = item.slug || item.id;

                return (
                  <SwiperSlide key={item.id}>
                    <div className="latest-news-card">
                      <div className="latest-news-img">
                        <img
                          src={imageUrl}
                          alt={
                            language === "bn" ? item.title_bn : item.title_en
                          }
                        />
                      </div>
                      <div className="latest-news-content">
                        <Link href={`/central-bnp/${centralBnpSlug}`} className="news-title">
                          {language === "bn"
                            ? item.title_bn || item.title_en
                            : item.title_en || item.title_bn}
                        </Link>
                        <p className="news-meta">
                          <span>{formatDate(item.created_at)}</span>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div className="text-center py-5">
              <p>
                {language === "bn"
                  ? "কোন তথ্য পাওয়া যায়নি"
                  : "No data found"}
              </p>
            </div>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
          <Link href="/central-bnp" className="custom-btn">
            <span>{language === "bn" ? "আরও দেখুন" : " View More"}</span>
            <span>
              <GoArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CentralBnpSlider;

