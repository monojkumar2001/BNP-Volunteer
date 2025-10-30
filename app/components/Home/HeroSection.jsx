import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-title-item">
              <div className="hero-title-1">
                <h1>Together </h1>
                <h1>for a Better Tomorrow</h1>
              </div>

              <p>Together, we can make every corner of our country shine</p>
            </div>
            <div className="hero-form">
              <form action="">
                <div className="hero-form-content">
                  <h2>JOIN AS VOLUNTEER</h2>
                  <p>Hey, let’s create a country together!</p>
                </div>
                <div className="hero-form-input-wrap">
                  <input type="text" placeholder="Full Name" />
                  <input type="text" placeholder="Phone Number" />
                  <button className="custom-btn" type="submit">
                    Join us Now
                    <span>
                      <GoArrowUpRight />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="hero-right-img">
            <Image
              src="/assets/images/hero-img.png"
              alt="Hero Image"
              width={587}
              height={768}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
