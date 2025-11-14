import React from "react";
import Banner from "../components/Section/Banner";
import AllNewsItem from "../components/News/AllNewsItem";

const AllNewsPage = () => {
  const bannerData = {
    title_en: "All News",
    title_bn: "সকল খবর",
    img: "/assets/images/about-bg.png",
  };
  return (
    <>
      <Banner bannerData={bannerData} />
      <AllNewsItem />
    </>
  );
};

export default AllNewsPage;
