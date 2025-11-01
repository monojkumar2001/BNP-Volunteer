import React from "react";
import Banner from "../components/Section/Banner";
import GalleryVideo from "../components/Section/GalleryVideo";
import GallerySection from "../components/Section/GallerySection";
import ElectionCampaign from "../components/Home/ElectionCampaign";
import OurConcern from "../components/Home/OurConcern";
import BecomeVolunteer from "../components/Home/BecomeVolunteer";

const GalleryPage = () => {
  const bannerData = {
    title: "Gallery",
    des: "Leadership, Experience, and values mean something",
    img: "/assets/images/gallery.png",
  };
  return (
    <>
      <Banner bannerData={bannerData} />
      <GalleryVideo />
      <GallerySection />
      <div className="gallery-campaign">
        <ElectionCampaign />
      </div>
      <div className="gallery-concern">
        <OurConcern />
      </div>
      <div className="gallery-become-volunteer">
        <BecomeVolunteer />
      </div>
    </>
  );
};

export default GalleryPage;
