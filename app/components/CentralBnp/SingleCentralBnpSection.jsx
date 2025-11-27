"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLanguage } from "../../../context/languageContext";
import { GoArrowUpLeft } from "react-icons/go";

const SingleCentralBnpSection = ({ slug }) => {
  const { language } = useLanguage();
  const [centralBnp, setCentralBnp] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(
    /\/$/,
    ""
  );

  useEffect(() => {
    if (!slug) return;
    const fetchCentralBnp = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}/api/central-bnp/${slug}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setCentralBnp(data);
      } catch (err) {
        console.error("Failed to fetch central bnp item:", err);
        setCentralBnp(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCentralBnp();
  }, [slug]);

  if (loading) {
    return (
      <section className="single-news-item">
        <div className="container">
          <div className="single-news-item-container">
          <div className="row">
            <div className="col-12">
              <div className="latest-news-card" style={{ padding: 0 }}>
                <div className="latest-news-img">
                  <Skeleton height={400} />
                </div>

                <div className="latest-news-content">
                  <h1 style={{ marginBottom: 10 }}>
                    <Skeleton height={40} width="80%" />
                  </h1>

                  <p className="news-meta">
                    <Skeleton height={16} width={150} />
                  </p>

                  <div className="news-body">
                    <Skeleton height={20} count={5} />
                  </div>

                  <div style={{ marginTop: 24 }}>
                    <Skeleton height={40} width={150} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  }

  if (!centralBnp) {
    return (
      <section className="all-news-item">
        <div className="container">
          <p>Central BNP not found.</p>
          <Link href="/central-bnp">Back to Central BNP</Link>
        </div>
      </section>
    );
  }

  const imagePath = centralBnp.image || centralBnp.image_url || "";
  const imageSrc = imagePath
    ? `${baseUrl}/${String(imagePath).replace(/^\/+/, "")}`
    : "/assets/default-news.jpg";

  const formattedDate = centralBnp.created_at
    ? new Date(centralBnp.created_at).toLocaleDateString(
        language === "bn" ? "bn-BD" : "en-US",
        language === "bn"
          ? { day: "numeric", month: "long", year: "numeric" }
          : { month: "short", day: "numeric", year: "numeric" }
      )
    : "";

  return (
    <section
      className={`single-news-item ${
        language === "bn" ? "lang-single-news-bn" : "lang-single-news-en"
      }`}
    >
      <div className="container">
        <div className="single-news-item-container">
        <div className="row">
          <div className="col-12">
            <div className="latest-news-card" style={{ padding: 0 }}>
              {imageSrc && (
                <div className="latest-news-img">
                  <img
                    src={imageSrc}
                    alt={centralBnp.title_en || centralBnp.title}
                    style={{ width: "100%", display: "block" }}
                  />
                </div>
              )}

              <div className="latest-news-content single-news-content">
                <h1>{language === "bn" ? centralBnp.title_bn : centralBnp.title_en}</h1>

                <p className="news-meta">{formattedDate}</p>

                <div
                  className="single-news-body"
                  dangerouslySetInnerHTML={{
                    __html:
                      language === "bn"
                        ? centralBnp.content_bn ||
                          centralBnp.description_bn ||
                          centralBnp.description_en
                        : centralBnp.content_en || centralBnp.description_en,
                  }}
                />

                <Link href="/central-bnp" className="custom-btn">
                  <span>
                    <GoArrowUpLeft />
                  </span>
                  <span>
                    {language === "bn" ? "পেছনে যান" : " Back to Central BNP"}
                  </span>
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

export default SingleCentralBnpSection;

