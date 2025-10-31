import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Leadership = () => {
  return (
    <section className="leadership" data-aos="fade-up" data-aos-duration="3000">
      <div className="container">
        <div className="leadership-title">
          <h4>A Legacy of Leadership</h4>
          <h1 className="section-title"> A Future of Hope</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="leadership-item-img">
              <Image
                src="/assets/images/leadership.png"
                alt="Leadership Image 1"
                width={633}
                height={670}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="who-content">
              <div className="subtitle">Barrister, politician</div>
              <h2 className="section-title">Zamir Uddin Sirker</h2>
              <p>
                Parturient dis torquent nostra mattis congue ut sagittis nibh
                luctus viverra. Enim convallis tristique magna torquent egestas
                dictumst consectetur. Malesuada mus dictumst orci litora nisl
                iaculis duis nostra enim vestibulum.
              </p>
              <Link href="#" className="custom-btn">
                <span> Learn more</span>
                <span>
                  <GoArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
