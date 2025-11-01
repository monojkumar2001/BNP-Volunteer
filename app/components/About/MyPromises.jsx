import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const MyPromises = () => {
  return (
    <section
      className="my-promises"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="my-promises-wrapper">
          <div className="my-promises-header">
            <div className="my-promises-title">
              <span>my promises</span>
              <h1 className="section-title">What I Will Fight For</h1>
            </div>
            <Link href={"/"} className="custom-btn schedule-btn">
              <span>View Schedule</span>
              <span>
                <GoArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPromises;
