import React from "react";
import Banner from "../components/Section/Banner";
import ContactUs from "../components/Section/ContactUs";

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
