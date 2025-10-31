"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const LatestNews = () => {
  const swiperRef = useRef(null);

  const newsItems = [
    {
      id: 1,
      img: "/assets/images/new.png",
      title: "Parturient dis torquent nostra mattis congue",
      date: "April 20, 2024",
    },
    {
      id: 2,
      img: "/assets/images/new.png",
      title: "Euismod vulputate sit amet sapien dictum",
      date: "May 10, 2024",
    },
    {
      id: 3,
      img: "/assets/images/new.png",
      title: "Consectetur adipiscing elit sed do eiusmod",
      date: "June 5, 2024",
    },
    {
      id: 4,
      img: "/assets/images/new.png",
      title: "Felis donec et odio pellentesque diam volutpat",
      date: "July 15, 2024",
    },
    {
      id: 5,
      img: "/assets/images/new.png",
      title: "Mauris in aliquam sem fringilla ut morbi",
      date: "August 2, 2024",
    },
  ];

  return (
    <section
      className="latest-news"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="latest-news-header">
          <div>
            <h2 className="section-title">Latest News & Articles</h2>
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
          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            loop={true}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
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
                slidesPerView: 4, // ✅ show 4 cards on large screens
              },
            }}
          >
            {newsItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="latest-news-card">
                  <div className="latest-news-img">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={305}
                      height={214}
                    />
                  </div>
                  <div className="latest-news-content">
                    <Link href="#" className="news-title">
                      {item.title}
                    </Link>
                    <p className="news-meta">
                      <span>{item.date}</span> · <span>No Comments</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
