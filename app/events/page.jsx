import React from "react";
import Banner from "../components/Section/Banner";
import GetInvolved from "../components/Home/GetInvolved";
import ElectionCampaign from "../components/Home/ElectionCampaign";
import FaqSection from "../components/Section/FaqSection";

const EventsPage = () => {
  const bannerData = {
    title: "Events",
    des: "Together, we can make every corner of our country shine",
    img: "/assets/images/event.png",
  };
  return (
    <>
      <Banner bannerData={bannerData} />
      <div className="event-involed">
        <GetInvolved />
      </div>
      <div className="gallery-campaign event-campain">
        <ElectionCampaign />
      </div>
      <FaqSection />
    </>
  );
};

export default EventsPage;
