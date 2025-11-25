import React from "react";
import Banner from "../components/Section/Banner";
import ZamirUddin from "../components/Section/ZamirUddin";
export const metadata = {
  title: "Barrister Jamiruddin Sircar | International Affairs Secretary - BNP",
  description: "Building a stronger future through unity and leadership.",
  keywords:
    "leadership, campaign, volunteer, community, development, bnp, international affairs, secretary, barrister, nawshad zamir",
  icons: {
    icon: "/assets/favicon.ico",
  },
  openGraph: {
    title: "Barrister Jamiruddin Sircar | International Affairs Secretary - BNP",
    description: "Building a stronger future through unity and leadership.",
    url: "https://nawshadzamir.com", // your actual site URL
    siteName: "Barrister Jamiruddin Sircar | International Affairs Secretary - BNP",
    images: [
      {
        url: "/assets/images/meta-img.jpg", // 👈 path to your image
        width: 1200,
        height: 630,
        alt: "Barrister Jamiruddin Sircar | International Affairs Secretary - BNP",
      },
      {
        url: "/assets/images/meta-img.png", // 👈 path to your image
        width: 1200,
        height: 630,
        alt: "Barrister Jamiruddin Sircar | International Affairs Secretary - BNP",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barrister Jamiruddin Sircar | International Affairs Secretary - BNP",
    description: "Building a stronger future through unity and leadership.",
    images: ["/assets/images/meta-img.jpg", "/assets/images/logo.png"], // same image works for Twitter
  },
};

const ZamirUddinPage = () => {


  const bannerData = {
    title_en: "Muhammad Jamiruddin Sircar",
    title_bn: "মুহাম্মদ জমির উদ্দিন সরকার",
    img: "/assets/images/about-bg.png",
  };
  return (
    <>  
      <Banner bannerData={bannerData} />
      <ZamirUddin/>
    </>
  );
};

export default ZamirUddinPage;
