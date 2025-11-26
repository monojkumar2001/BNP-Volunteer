"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLanguage } from "../../../context/languageContext";

const AllCentralBnpItem = () => {
  const [centralBnp, setCentralBnp] = useState([]);
  const { language } = useLanguage();
  const [loading, setLoading] = useState(true);
  const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
  // Fetch central bnp from API
  useEffect(() => {
    const fetchCentralBnp = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/central-bnp`
        );
        const data = await res.json();
        setCentralBnp(data);
      } catch (error) {
        console.error("Failed to fetch central bnp:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCentralBnp();
  }, []);

  console.log("centralBnp", centralBnp);

  return (
    <section className="all-news-item">
      <div className="container">
        <div className="row">
          {/* 🔥 Loading Skeleton */}
          {loading &&
            [...Array(9)].map((_, i) => (
              <div className="col-lg-4 col-md-6 mb-4" key={i}>
                <div className="latest-news-card">
                  <Skeleton height={214} />

                  <div className="latest-news-content mt-3">
                    <Skeleton height={20} width={180} />
                    <Skeleton height={15} width={120} className="mt-2" />
                  </div>
                </div>
              </div>
            ))}

          {/* 🔥 Actual Central BNP */}
          {!loading &&
            centralBnp.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div
                  className={`latest-news-card ${
                    language === "bn"
                      ? "lang-latest-news-bn"
                      : "lang-latest-news-en"
                  }`}
                >
                  <div className="latest-news-img">
                    <img
                      src={`${base_url}/${item.image}`}
                      alt={item.title_en}
                    />
                  </div>

                  <div className="latest-news-content">
                    <Link href={`/central-bnp/${item.slug}`} className="news-title">
                      {language === "bn" ? (
                        <>{item.title_bn} </>
                      ) : (
                        <>{item.title_en}</>
                      )}
                    </Link>

                    <div className="news-readmore-btn">
                      <Link
                        href={`/central-bnp/${item.slug}`}
                        className="news-read-more-btn"
                      >
                        {language === "bn" ? <>আরও পড়ুন</> : <> Read More</>}
                      </Link>
                    </div>

                    <p className="news-meta">
                      {language === "bn" ? (
                        <>
                          {new Date(item.created_at).toLocaleDateString(
                            "bn-BD",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}{" "}
                        </>
                      ) : (
                        <>
                          {new Date(item.created_at).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AllCentralBnpItem;

