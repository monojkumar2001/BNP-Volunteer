import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const AboutSection = () => {
  return (
    <>
      <section
        className="leadership-2"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row align-items-center leadership-wrpp">
            <div className="col-lg-6 ">
              <div className="who-content">
                <div className="subtitle">about me</div>
                <h2 className="section-title">About Nawshad Zamir</h2>
                <p>
                  Parturient dis torquent nostra mattis congue ut sagittis nibh
                  luctus viverra. Enim convallis tristique magna torquent
                  egestas dictumst consectetur. Malesuada mus dictumst orci
                  litora nisl iaculis duis nostra enim vestibulum.
                </p>
                <p>
                  Parturient dis torquent nostra mattis congue ut sagittis nibh
                  luctus viverra. Enim convallis tristique magna torquent
                  egestas dictumst consectetur. Malesuada mus dictumst orci
                  litora nisl iaculis duis nostra enim vestibulum.
                </p>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="leadership-item-img">
                <Image
                  src="/assets/images/about.png"
                  alt="Leadership Image 1"
                  width={633}
                  height={713}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
