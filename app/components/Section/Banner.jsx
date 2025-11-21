"use client";
import React from "react";
import { useLanguage } from "../../../context/languageContext";

const Banner = ({ bannerData }) => {
  const { language } = useLanguage();
  return (
    <section
      className={`banner  ${
        language === "bn" ? "lang-banner-bn" : "lang-banner-en"
      }`}
      style={{
        backgroundImage: `url(${bannerData.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="banner-content">
          <h1>
            {language === "bn" ? (
              <>{bannerData?.title_bn}</>
            ) : (
              <>{bannerData?.title_en}</>
            )}
          </h1>
          <p>
            {language === "bn" ? (
              <>{bannerData?.des_bn}</>
            ) : (
              <>{bannerData?.des_en}</>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
