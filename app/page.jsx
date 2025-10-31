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
  description: "",
  keywords: "",
  icons: {
    icon: "/assets/favicon.ico",
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
