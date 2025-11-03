import React from "react";
import Banner from "../components/Section/Banner";
import AboutSection from "../components/About/AboutSection";
import WorkSection from "../components/About/WorkSection";
import OurConcern from "../components/Home/OurConcern";
import MyPromises from "../components/About/MyPromises";
import MyPromisesCard from "../components/About/MyPromisesCard";
import BecomeVolunteer from "../components/Home/BecomeVolunteer";
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
const AboutPage = () => {
  const bannerData = {
    title: "About",
    des: "Together, we can make every corner of our country shine",
    img: "/assets/images/about-bg.png",
  };
  return (
    <>
      <Banner bannerData={bannerData} />
      <AboutSection />
      <WorkSection />
      <OurConcern />
      <MyPromises />
      <MyPromisesCard />
      <div className="about-become-volunteer">
        <BecomeVolunteer />
      </div>
    </>
  );
};

export default AboutPage;
