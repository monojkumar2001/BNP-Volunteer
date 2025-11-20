"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

import Image from "next/image";
import ReactLoadingSkeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLanguage } from "../../../context/languageContext";
import { GoArrowUpLeft } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { FaClock } from "react-icons/fa";

const SingleEventSection = ({ slug }) => {
  const { language } = useLanguage();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullscreenVideo, setShowFullscreenVideo] = useState(false);
  const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/$/, "");

  useEffect(() => {
    if (!slug) return;
    const fetchEvent = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}/api/event/${slug}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setEvent(data);
      } catch (err) {
        console.error("Failed to fetch event:", err);
        setEvent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [slug]);

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

  // Format time with AM/PM
  const formatTime = (timeString) => {
    if (!timeString) return "";
    
    try {
      // Handle time in format HH:MM:SS or HH:MM
      const timeParts = timeString.split(":");
      if (timeParts.length >= 2) {
        let hours = parseInt(timeParts[0], 10);
        const minutes = timeParts[1];
        
        if (isNaN(hours)) return timeString;
        
        const period = hours >= 12 ? (language === "bn" ? "PM" : "PM") : (language === "bn" ? "AM" : "AM");
        
        // Convert to 12-hour format
        if (hours === 0) {
          hours = 12;
        } else if (hours > 12) {
          hours = hours - 12;
        }
        
        return `${hours}:${minutes} ${period}`;
      }
      
      return timeString;
    } catch (error) {
      console.error("Error formatting time:", error);
      return timeString;
    }
  };

  // Get image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/assets/images/placeholder.png";
    if (imagePath.startsWith("http")) return imagePath;
    return `${baseUrl}/${imagePath.replace(/^\/+/, "")}`;
  };

  // Convert YouTube URL to embed URL
  const convertYouTubeUrl = (url, autoplay = false) => {
    if (!url) return null;
    
    // Check if it's a YouTube URL
    const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/;
    const match = url.match(youtubeRegex);
    
    if (match) {
      const videoId = match[1];
      // Return embed URL with parameters
      const params = new URLSearchParams();
      if (autoplay) {
        params.append('autoplay', '1');
        params.append('mute', '1');
      }
      params.append('controls', '1');
      params.append('modestbranding', '1');
      params.append('rel', '0');
      return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    }
    
    return null;
  };

  // Check if URL is YouTube
  const isYouTubeUrl = (url) => {
    if (!url) return false;
    return /(?:youtube\.com|youtu\.be)/.test(url);
  };

  // Get video URL
  const getVideoUrl = (videoUrl) => {
    if (!videoUrl) return null;
    return videoUrl;
  };

  if (loading) {
    return (
      <section className="single-event-item">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="single-event-card" style={{ padding: 0 }}>
                <div className="single-event-img">
                  <ReactLoadingSkeleton height={500} />
                </div>
                <div className="single-event-content">
                  <h1 style={{ marginBottom: 10 }}>
                    <ReactLoadingSkeleton height={40} width="80%" />
                  </h1>
                  <p className="event-meta">
                    <ReactLoadingSkeleton height={16} width={200} />
                  </p>
                  <div className="event-body">
                    <ReactLoadingSkeleton height={20} count={8} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!event) {
    return (
      <section className="single-event-item">
        <div className="container">
          <div className="text-center py-5">
            <p>
              {language === "bn" ? "ইভেন্ট পাওয়া যায়নি" : "Event not found"}
            </p>
            <Link href="/events" className="custom-btn" style={{ marginTop: 20 }}>
              <span>
                {language === "bn" ? "ইভেন্টে ফিরে যান" : "Back to Events"}
              </span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const imageUrl = getImageUrl(event.image);
  const videoUrl = getVideoUrl(event.video_url);

  return (
    <>
      <section
        className={`single-event-item ${
          language === "bn" ? "lang-single-event-bn" : "lang-single-event-en"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="single-event-card" style={{ padding: 0 }}>
                {/* Event Image/Video */}
                <div
                  className="single-event-img"
                  style={{
                    position: "relative",
                    cursor: videoUrl ? "pointer" : "default",
                  }}
                  onClick={() => videoUrl && setShowFullscreenVideo(true)}
                >
                  {videoUrl ? (
                    isYouTubeUrl(videoUrl) ? (
                      <iframe
                        src={convertYouTubeUrl(videoUrl, false)}
                        style={{
                          width: "100%",
                          height: "450px",
                          display: "block",
                          border: "none",
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={
                          language === "bn" ? event.title_bn : event.title_en
                        }
                      />
                    ) : (
                      <video
                        src={videoUrl}
                        controls
                        poster={imageUrl}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          maxHeight: "600px",
                          objectFit: "cover",
                        }}
                      />
                    )
                  ) : (
                    <Image
                      src={imageUrl}
                      alt={language === "bn" ? event.title_bn : event.title_en}
                      width={1200}
                      height={600}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  )}
                  {videoUrl && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        right: "20px",
                        background: "rgba(0,0,0,0.7)",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      {language === "bn"
                        ? "পূর্ণ স্ক্রিন দেখুন"
                        : "View Fullscreen"}
                    </div>
                  )}
                </div>

                {/* Event Content */}
                <div className="single-event-content">
                  <h1>
                    {language === "bn"
                      ? event.title_bn || event.title_en
                      : event.title_en || event.title_bn}
                  </h1>

                  <div className="event-meta" style={{ marginBottom: "20px" }}>
                    {event.event_date && (
                      <div style={{ marginBottom: "10px" }}>
                        <Image
                          src={"/assets/images/icon/date.svg"}
                          width={20}
                          height={20}
                          alt="date"
                          style={{
                            marginRight: "8px",
                            verticalAlign: "middle",
                          }}
                        />
                        <span>{formatDate(event.event_date)}</span>
                      </div>
                    )}
                    {event.event_time && (
                      <div style={{ marginBottom: "10px" }}>
                        <span style={{ marginRight: "8px" }}>
                          <FaRegClock />
                        </span>
                        <span>{formatTime(event.event_time)}</span>
                      </div>
                    )}
                    {(event.location_en || event.location_bn) && (
                      <div>
                        <span style={{ marginRight: "8px" }}>
                          <FaMapMarkerAlt/>
                        </span>
                        <span>
                          {language === "bn"
                            ? event.location_bn || event.location_en
                            : event.location_en || event.location_bn}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Short Description */}
                  {(event.short_description_en ||
                    event.short_description_bn) && (
                    <div
                      className="event-short-description"
                      style={{
                        fontSize: "18px",
                        fontWeight: 500,
                        marginBottom: "20px",
                        color: "#666",
                      }}
                      dangerouslySetInnerHTML={{
                        __html:
                          language === "bn"
                            ? event.short_description_bn ||
                              event.short_description_en
                            : event.short_description_en ||
                              event.short_description_bn,
                      }}
                    />
                  )}

                  {/* Full Description */}
                  {(event.description_en || event.description_bn) && (
                    <div
                      className="event-body"
                      style={{ lineHeight: "1.8", marginBottom: "30px" }}
                      dangerouslySetInnerHTML={{
                        __html:
                          language === "bn"
                            ? event.description_bn || event.description_en
                            : event.description_en || event.description_bn,
                      }}
                    />
                  )}

                  <Link href="/events" className="custom-btn" style={{ fontSize: "16px", lineHeight: "30px" }}>
                    <span>
                      <GoArrowUpLeft />
                    </span>
                    <span>
                      {language === "bn"
                        ? "ইভেন্টে ফিরে যান"
                        : "Back to Events"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      {showFullscreenVideo && videoUrl && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
            padding: "20px",
          }}
          onClick={() => setShowFullscreenVideo(false)}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1400px",
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {isYouTubeUrl(videoUrl) ? (
              <iframe
                src={convertYouTubeUrl(videoUrl, true)}
                style={{
                  width: "100%",
                  height: "80vh",
                  minHeight: "500px",
                  border: "none",
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={language === "bn" ? event.title_bn : event.title_en}
              />
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "90vh",
                  objectFit: "contain",
                }}
              />
            )}
            <button
              onClick={() => setShowFullscreenVideo(false)}
              style={{
                position: "absolute",
                top: "-50px",
                right: "0",
                background: "white",
                border: "none",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                cursor: "pointer",
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#333",
              }}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleEventSection;

