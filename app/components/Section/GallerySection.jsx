"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useLanguage } from "../../../context/languageContext";
import ReactLoadingSkeleton from "react-loading-skeleton";

const GallerySection = () => {
  const { language } = useLanguage();
  const [activeGallery, setActiveGallery] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleries, setGalleries] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allGalleries, setAllGalleries] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Fetch gallery data from API
  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/gallery`
        );
        const data = await res.json();

        if (res.ok) {
          // Set all galleries
          setAllGalleries(data.all_galleries || []);

          // Organize galleries by category slug
          const galleriesByCategory = {
            all: data.all_galleries || [],
          };

          // Add galleries by category slug
          data.categories?.forEach((category) => {
            if (category.slug) {
              galleriesByCategory[category.slug] = category.galleries || [];
            }
          });

          setGalleries(galleriesByCategory);
          setCategories(data.categories || []);
        }
      } catch (error) {
        console.error("Error fetching galleries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleries();
  }, []);

  const handleGallery = (slug) => {
    setActiveGallery(slug);
    setShowAll(false); // Reset showAll when changing category
  };

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Get current images based on active gallery
  const allCurrentImages = galleries[activeGallery] || [];
  const displayLimit = 16;
  const hasMore = allCurrentImages.length > displayLimit;
  const currentImages = showAll
    ? allCurrentImages
    : allCurrentImages.slice(0, displayLimit);

  return (
    <section
      className="gallery-section"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="gallery-wrapper">
          {/* === Header === */}
          <div className="gallery-header">
            {loading ? (
              <ul style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {[1, 2, 3, 4].map((index) => (
                  <li key={index} style={{ listStyle: "none" }}>
                    <ReactLoadingSkeleton 
                      width={100} 
                      height={35} 
                      borderRadius={5}
                      baseColor="#f0f0f0"
                      highlightColor="#e0e0e0"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                <li
                  onClick={() => handleGallery("all")}
                  className={activeGallery === "all" ? "active" : ""}
                  style={{ cursor: "pointer" }}
                >
                  {language === "bn" ? "সকল" : "All"}
                </li>
                {categories.map((category) => (
                  <li
                    key={category.id}
                    onClick={() => handleGallery(category.slug)}
                    className={activeGallery === category.slug ? "active" : ""}
                    style={{ cursor: "pointer" }}
                  >
                    {language === "bn" ? category.name_bn : category.name_en}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* === Gallery Content === */}
          <div className="gallery-content">
            {loading ? (
              <div className="row">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((index) => (
                  <div key={index} className="col-lg-3 col-md-6 mb-4">
                    <div className="gallery-card-img" style={{ overflow: "hidden", borderRadius: "8px" }}>
                      <ReactLoadingSkeleton 
                        height={200} 
                        width="100%"
                        baseColor="#f0f0f0"
                        highlightColor="#e0e0e0"
                        style={{ 
                          borderRadius: "8px",
                          aspectRatio: "305/200"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : currentImages.length > 0 ? (
              <>
                <div className="row">
                  {currentImages.map((item, index) => {
                    const imageSrc = typeof item === "string" ? item : item.image;
                    return (
                      <div
                        key={item.id || index}
                        className="col-lg-3 col-md-6"
                        onClick={() => handleImageClick(imageSrc)}
                      >
                        <div className="gallery-card-img">
                          <Image
                            src={imageSrc || "/assets/images/placeholder.png"}
                            width={305}
                            height={200}
                            alt={
                              typeof item === "string"
                                ? `Gallery ${index}`
                                : item.title_en || item.title_bn || `Gallery ${index}`
                            }
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                {hasMore && (
                  <div className="text-center mt-4">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="custom-btn"
                      style={{
                        padding: "12px 30px",
                        fontSize: "16px",
                        cursor: "pointer",
                      }}
                    >
                      <span>
                        {showAll
                          ? language === "bn"
                            ? "কম দেখান"
                            : "Show Less"
                          : language === "bn"
                          ? "আরও দেখুন"
                          : "See More"}
                      </span>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-5">
                <p>
                  {language === "bn"
                    ? "কোন ছবি পাওয়া যায়নি"
                    : "No images found"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* === Modal === */}
      {selectedImage && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div className="gallery-model-content">
            <Image src={selectedImage} alt="Large" width={1000} height={700} />
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                background: "white",
                border: "none",
                borderRadius: "50%",
                lineHeight: "24px",
                width: "44px",
                height: "44px",
                cursor: "pointer",
                fontSize: "24px",
              }}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
