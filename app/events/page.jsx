import React from "react";
import Banner from "../components/Section/Banner";
import GetInvolved from "../components/Home/GetInvolved";
import ElectionCampaign from "../components/Home/ElectionCampaign";
import FaqSection from "../components/Section/FaqSection";
export const metadata = {
  title: "Together for a Better Tomorrow",
  description: "Building a stronger future through unity and leadership.",
  keywords: "leadership, campaign, volunteer, community, development",
  icons: {
    icon: "/assets/favicon.ico",
  },
  openGraph: {
    title: "Together for a Better Tomorrow",
    description: "Building a stronger future through unity and leadership.",
    url: "https://yourwebsite.com", // your actual site URL
    siteName: "Your Site Name",
    images: [
      {
        url: "/assets/images/meta-img.jpg", // 👈 path to your image
        width: 1200,
        height: 630,
        alt: "Together for a Better Tomorrow",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Together for a Better Tomorrow",
    description: "Building a stronger future through unity and leadership.",
    images: ["/assets/images/meta-img.jpg"], // same image works for Twitter
  },
};
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
