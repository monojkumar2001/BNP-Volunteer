import React from "react";
import Banner from "../components/Section/Banner";
import GalleryVideo from "../components/Section/GalleryVideo";
import GallerySection from "../components/Section/GallerySection";
import ElectionCampaign from "../components/Home/ElectionCampaign";
import OurConcern from "../components/Home/OurConcern";
import BecomeVolunteer from "../components/Home/BecomeVolunteer";
import ContactUs from "../components/Section/ContactUs";
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
const ContactUsPage = () => {
  const bannerData = {
    title_en: "Contact Us",
    title_bn: "আমাদের সাথে যোগাযোগ করুন",
    des_en: "Leadership, Experience, and values mean something",
    des_bn: "নেতৃত্ব, অভিজ্ঞতা এবং মূল্যবোধের কিছু অর্থ আছে",
    img: "/assets/images/contact.png",
  };
  return (
    <>
      <Banner bannerData={bannerData} />
      <ContactUs />
    </>
  );
};

export default ContactUsPage;
