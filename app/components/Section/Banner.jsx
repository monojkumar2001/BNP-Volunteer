import React from "react";

const Banner = ({ bannerData }) => {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${bannerData.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="banner-content">
          <h1>{bannerData.title}</h1>
          <p>{bannerData.des}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
