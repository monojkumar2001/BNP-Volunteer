import BecomeVolunteer from "./components/Home/BecomeVolunteer";
import ElectionCampaign from "./components/Home/ElectionCampaign";
import ElectionCard from "./components/Home/ElectionCard";
import GetInvolved from "./components/Home/GetInvolved";
import HeroSection from "./components/Home/HeroSection";
import LatestNews from "./components/Home/LatestNews";
import Leadership1 from "./components/Home/Leadership1";
import Leadership2 from "./components/Home/Leadership2";
import Leadership3 from "./components/Home/Leadership3";
import OurConcern from "./components/Home/OurConcern";
import PromiseTracker from "./components/Home/PromiseTracker";
import WhoWeAre from "./components/Home/WhoWeAre";
import WhyChooseUs from "./components/Home/WhyChooseUs";

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

export default function Home({ language }) {
  return (
    <>
      <HeroSection language={language} />
      <WhoWeAre />
      <OurConcern />
      <WhyChooseUs />
      <Leadership1 />
      <Leadership2 />
      {/* <Leadership3 /> */}
      {/* <ElectionCampaign />
      <ElectionCard />
      <PromiseTracker /> */}

      <GetInvolved />
      <BecomeVolunteer />
      <LatestNews />
    </>
  );
}
