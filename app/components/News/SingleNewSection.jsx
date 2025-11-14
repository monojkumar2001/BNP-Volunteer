"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../../context/languageContext";

const SingleNewSection = ({ slug }) => {
  const { language } = useLanguage();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(
    /\/$/,
    ""
  );

  useEffect(() => {
    if (!slug) return;
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}/api/news/${slug}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Failed to fetch news item:", err);
        setNews(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [slug]);

  if (loading) {
    return (
      <section className="all-news-item">
        <div className="container">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (!news) {
    return (
      <section className="all-news-item">
        <div className="container">
          <p>News not found.</p>
          <Link href="/news">Back to News</Link>
        </div>
      </section>
    );
  }

  const imagePath = news.image || news.image_url || "";
  const imageSrc = imagePath
    ? `${baseUrl}/${String(imagePath).replace(/^\/+/, "")}`
    : "/assets/default-news.jpg";

  const formattedDate = news.created_at
    ? new Date(news.created_at).toLocaleDateString(
        language === "bn" ? "bn-BD" : "en-US",
        language === "bn"
          ? { day: "numeric", month: "long", year: "numeric" }
          : { month: "short", day: "numeric", year: "numeric" }
      )
    : "";

  return (
    <section className="single-news-item">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="latest-news-card" style={{ padding: 0 }}>
              {imageSrc && (
                <div className="latest-news-img">
                  <img
                    src={imageSrc}
                    alt={news.title_en || news.title}
                    style={{ width: "100%", display: "block" }}
                  />
                </div>
              )}

              <div className="latest-news-content">
                <h1
                  className={language === "bn" ? "lang-latest-news-bn" : ""}
                  style={{ marginBottom: 10 }}
                >
                  {language === "bn"
                    ? news.title_bn || news.title_en
                    : news.title_en || news.title}
                </h1>

                <p className="news-meta">{formattedDate}</p>

                <div
                  className="news-body"
                  dangerouslySetInnerHTML={{
                    __html:
                      language === "bn"
                        ? news.content_bn ||
                          news.description_bn ||
                          news.description_en
                        : news.content_en || news.description_en,
                  }}
                />

                <div style={{ marginTop: 24 }}>
                  <Link href="/news" className="btn btn-secondary">
                    {language === "bn" ? "পেছনে যান" : "Back to News"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleNewSection;
