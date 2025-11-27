import React from "react";
import Banner from "../components/Section/Banner";
import GetInvolved from "../components/Home/GetInvolved";
import FaqSection from "../components/Section/FaqSection";
export const metadata = {
  title: "Barrister Nawshad Zamir | International Affairs Secretary - BNP",
  description: "Building a stronger future through unity and leadership.",
  keywords:
    "leadership, campaign, volunteer, community, development, bnp, international affairs, secretary, barrister, nawshad zamir",
  icons: {
    icon: "/assets/favicon.ico",
  },
  openGraph: {
    title: "Barrister Nawshad Zamir | International Affairs Secretary - BNP",
    description: "Building a stronger future through unity and leadership.",
    url: "https://nawshadzamir.com", // your actual site URL
    siteName: "Barrister Nawshad Zamir | International Affairs Secretary - BNP",
    images: [
      {
        url: "/assets/images/meta-img.jpg", // 👈 path to your image
        width: 1200,
        height: 630,
        alt: "Barrister Nawshad Zamir | International Affairs Secretary - BNP",
      },
      {
        url: "/assets/images/meta-img.png", // 👈 path to your image
        width: 1200,
        height: 630,
        alt: "Barrister Nawshad Zamir | International Affairs Secretary - BNP",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barrister Nawshad Zamir | International Affairs Secretary - BNP",
    description: "Building a stronger future through unity and leadership.",
    images: ["/assets/images/meta-img.jpg", "/assets/images/logo.png"], // same image works for Twitter
  },
};
const EventsPage = () => {
  const bannerData = {
    // title_en: "Events",
    // title_bn: "ইভেন্টগুলি",
    img: "/assets/images/event.png",
  };
  return (
    <>
      <Banner bannerData={bannerData} />
      <div className="event-involed">
        <GetInvolved />
      </div>
      {/* <div className="gallery-campaign event-campain">
        <ElectionCampaign />
      </div> */}
      {/* <FaqSection /> */}
    </>
  );
};

export default EventsPage;
