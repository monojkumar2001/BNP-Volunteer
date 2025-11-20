"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useLanguage } from "../../../context/languageContext";
import ReactLoadingSkeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GetInvolved = () => {
  const { language } = useLanguage();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/events`
        );
        const data = await res.json();

        if (res.ok) {
          // Only show active events (status = 1) and limit to 6
          const activeEvents = data.filter((event) => event.status === 1).slice(0, 6);
          setEvents(activeEvents);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString(
      language === "bn" ? "bn-BD" : "en-US",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
  };

  // Get image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/assets/images/placeholder.png";
    if (imagePath.startsWith("http")) return imagePath;
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}/${imagePath.replace(/^\/+/, "")}`;
  };


  return (
    <section
      className={`get-involed-live ${
        language === "bn" ? "lang-involed-bn" : "lang-involed-en"
      }`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="get-involved-header">
          <div className="row">
            <div className="col-md-6">
              <div className="get-involved-title">
                <h1 className="section-title">
                  {language === "bn" ? (
                    <>
                      ঘরে ঘরে, জনে জনে <br />
                      মানুষের তরে, মানুষের মাঝে
                    </>
                  ) : (
                    <>
                      Among people, among people, <br /> from house to house,
                      one by one
                    </>
                  )}
                </h1>
                <div className="bar-item"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="get-involved-content">
                <p>
                  {language === "bn" ? (
                    <>
                      তৃণমূল উদ্যোগ কিংবা কমিউনিটি এনগেজমেন্ট – আপনাদের সাথে আছি
                      আমি প্রতিক্ষণ। একসাথে গড়বো শান্তির সমৃদ্ধিময় পঞ্চগড়।
                    </>
                  ) : (
                    <>
                      Grassroots initiatives or community engagement – ​​I am
                      with you every moment. Together we will build a peaceful
                      and prosperous Panchagarh.
                    </>
                  )}
                </p>
                <Link href="/events" className="custom-btn">
                  <span>{language === "bn" ? "আরও জানুন" : " Learn More"}</span>
                  <span>
                    <GoArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="get-involved-wrapper">
          {loading ? (
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="get-involved-card">
                    <div className="get-involved-img">
                      <ReactLoadingSkeleton height={575} />
                    </div>
                    <div className="get-involved-date">
                      <ReactLoadingSkeleton width={150} height={24} />
                    </div>
                    <div className="get-involved-card-content">
                      <ReactLoadingSkeleton width={120} height={16} />
                      <ReactLoadingSkeleton width={200} height={24} style={{ marginTop: 10 }} />
                      <ReactLoadingSkeleton width={130} height={40} style={{ marginTop: 15 }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : events.length > 0 ? (
            <div className="row">
              {events.map((event) => {
                const imageUrl = getImageUrl(event.image);
                const eventSlug = event.slug || event.id;
                
                return (
                  <div key={event.id} className="col-lg-4 col-md-6">
                    <Link href={`/events/${eventSlug}`}>
                      <div
                        className="get-involved-card"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="get-involved-img" style={{ position: "relative", overflow: "hidden" }}>
                          <Image
                            src={imageUrl}
                            width={414}
                            height={575}
                            alt={language === "bn" ? event.title_bn : event.title_en}
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="get-involved-date">
                          <Image
                            src={"/assets/images/icon/date.svg"}
                            width={24}
                            height={24}
                            alt="date"
                          />
                          <span>
                            {event.event_date ? formatDate(event.event_date) : ""}
                          </span>
                        </div>
                        <div className="get-involved-card-content">
                          <p>
                            {language === "bn"
                              ? event.location_bn || event.location_en
                              : event.location_en || event.location_bn}
                          </p>
                          <h3>
                            {language === "bn"
                              ? event.title_bn || event.title_en
                              : event.title_en || event.title_bn}
                          </h3>
                          <div className="custom-btn">
                            <span>
                              {language === "bn" ? "জড়িত হন" : "Get Involved"}
                            </span>
                            <span>
                              <GoArrowUpRight />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-5">
              <p>
                {language === "bn"
                  ? "কোন ইভেন্ট পাওয়া যায়নি"
                  : "No events found"}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
