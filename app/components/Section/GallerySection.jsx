"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const GallerySection = () => {
  const [activeGallery, setActiveGallery] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleGallery = (name) => {
    setActiveGallery(name);
  };

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // --- গ্যালারি ডেটা ---
  const galleries = {
    all: [
      "/assets/images/gallery/1.png",
      "/assets/images/gallery/2.png",
      "/assets/images/gallery/3.png",
      "/assets/images/gallery/4.png",
      "/assets/images/gallery/5.png",
      "/assets/images/gallery/6.png",
      "/assets/images/gallery/7.png",
      "/assets/images/gallery/8.png",
      "/assets/images/gallery/9.png",
      "/assets/images/gallery/10.png",
      "/assets/images/gallery/11.png",
      "/assets/images/gallery/12.png",
    ],
    campaign: [
      "/assets/images/gallery/1.png",
      "/assets/images/gallery/3.png",
      "/assets/images/gallery/5.png",
    ],
    conference: [
      "/assets/images/gallery/2.png",
      "/assets/images/gallery/4.png",
      "/assets/images/gallery/6.png",
    ],
    ActCampaign: [
      "/assets/images/gallery/2.png",
      "/assets/images/gallery/4.png",
      "/assets/images/gallery/6.png",
      "/assets/images/gallery/11.png",
      "/assets/images/gallery/12.png",
    ],
  };

  // active item অনুযায়ী image list
  const currentImages = galleries[activeGallery] || [];

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
            <ul>
              <li
                onClick={() => handleGallery("all")}
                className={activeGallery === "all" ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                All
              </li>
              <li
                onClick={() => handleGallery("campaign")}
                className={activeGallery === "campaign" ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                Campaign
              </li>
              <li
                onClick={() => handleGallery("conference")}
                className={activeGallery === "conference" ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                Conference
              </li>
              <li
                onClick={() => handleGallery("ActCampaign")}
                className={activeGallery === "ActCampaign" ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                Act Campaign
              </li>
            </ul>
          </div>

          {/* === Gallery Content === */}
          <div className="gallery-content">
            <div className="row">
              {currentImages.map((img, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6"
                  onClick={() => handleImageClick(img)}
                >
                  <div className="gallery-card-img">
                    <Image
                      src={img}
                      width={305}
                      height={200}
                      alt={`Gallery ${index}`}
                    />
                  </div>
                </div>
              ))}
            </div>
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
