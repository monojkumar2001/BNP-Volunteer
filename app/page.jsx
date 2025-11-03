import BecomeVolunteer from "./components/Home/BecomeVolunteer";
import ElectionCampaign from "./components/Home/ElectionCampaign";
import ElectionCard from "./components/Home/ElectionCard";
import GetInvolved from "./components/Home/GetInvolved";
import HeroSection from "./components/Home/HeroSection";
import LatestNews from "./components/Home/LatestNews";
import Leadership1 from "./components/Home/Leadership1";
import Leadership2 from "./components/Home/Leadership2";
import OurConcern from "./components/Home/OurConcern";
import PromiseTracker from "./components/Home/PromiseTracker";
import WhoWeAre from "./components/Home/WhoWeAre";
import WhyChooseUs from "./components/Home/WhyChooseUs";

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

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <Leadership1 />
      <Leadership2 />
      <OurConcern />
      <ElectionCampaign />
      <ElectionCard />
      <PromiseTracker />
      <WhyChooseUs />
      <GetInvolved />
      <BecomeVolunteer />
      <LatestNews />
    </>
  );
}
