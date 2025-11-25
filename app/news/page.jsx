import React from "react";
import Banner from "../components/Section/Banner";
import AllNewsItem from "../components/News/AllNewsItem";
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
