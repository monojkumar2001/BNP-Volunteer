import React from "react";
import Banner from "../components/Section/Banner";
import AboutSection from "../components/About/AboutSection";
import WorkSection from "../components/About/WorkSection";
import OurConcern from "../components/Home/OurConcern";
import MyPromises from "../components/About/MyPromises";
import MyPromisesCard from "../components/About/MyPromisesCard";
import BecomeVolunteer from "../components/Home/BecomeVolunteer";

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
