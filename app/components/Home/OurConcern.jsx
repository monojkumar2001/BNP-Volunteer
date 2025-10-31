import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const OurConcern = () => {
  return (
    <section className="our-concern">
      <div className="container">
        <div className="our-concern-wrapper">
          <div className="our-concern-item-img">
            <Image
              src="/assets/images/concern.png"
              alt="Our Concern Image"
              width={414}
              height={595}
            />
          </div>
          <div className="our-concern-list">
            <div className="who-content">
              <div className="subtitle">Our concern issues</div>
              <h2 className="section-title">
                Right leader at right time for the right reson
              </h2>
              <p>
                Parturient dis torquent nostra mattis congue ut sagittis nibh
                luctus viverra. Enim convallis tristique magna torquent egestas
                dictumst consectetur.
              </p>
              <Link href="#" className="custom-btn">
                <span> Learn more</span>
                <span>
                  <GoArrowUpRight />
                </span>
              </Link>
            </div>
            <ul className="concern-list-items">
              <li>Education System</li>
              <li>Public Health Issues </li>
              <li>Corruption Issues </li>
              <li>Public Transportation System </li>
              <li>Climate Change Issues </li>
              <li>Human Right & Law</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurConcern;
