"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useLanguage } from "../../../context/languageContext";

const GetInvolved = () => {
  const { language } = useLanguage();
  return (
    <section
      className={`get-involed-live ${
        language === "bn" ? "lang-involed-bn" : "lang-involed-en"
      }`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="get-involved-header">
          <div className="row">
            <div className="col-md-6">
              <div className="get-involved-title">
                <h1 className="section-title">
                  {language === "bn" ? (
                    <>
                      মানুষের তরে, মানুষের মাঝে <br /> ঘরে ঘরে, জনে জনে
                    </>
                  ) : (
                    <>
                      Among people, among people, <br /> from house to house,
                      one by one
                    </>
                  )}
                </h1>
                <div className="bar-item"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="get-involved-content">
                <p>
                  {language === "bn" ? (
                    <>
                      তৃণমূল উদ্যোগ কিংবা কমিউনিটি এনগেজমেন্ট – আপনাদের সাথে আছি
                      আমি প্রতিক্ষণ। একসাথে গড়বো শান্তির সমৃদ্ধিময় পঞ্চগড়।
                    </>
                  ) : (
                    <>
                      Grassroots initiatives or community engagement – ​​I am
                      with you every moment. Together we will build a peaceful
                      and prosperous Panchagarh.
                    </>
                  )}
                </p>
                <Link href="/events" className="custom-btn">
                  <span>{language === "bn" ? "আরও জানুন" : " Learn More"}</span>
                  <span>
                    <GoArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="get-involved-wrapper">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="get-involved-card">
                <div className="get-involved-img">
                  <Image
                    src={"/assets/images/event/1.png"}
                    width={414}
                    alt="event"
                    height={575}
                  />
                </div>
                <div className="get-involved-date">
                  <Image
                    src={"/assets/images/icon/date.svg"}
                    width={24}
                    height={24}
                  />
                  <span>30 May 2025</span>
                </div>
                <div className="get-involved-card-content">
                  <p>Tetulia, Panchagarh</p>
                  <h3>Human Rights Conference</h3>
                  <Link href="#" className="custom-btn">
                    <span> Get Involved</span>
                    <span>
                      <GoArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="get-involved-card">
                <div className="get-involved-img">
                  <Image
                    src={"/assets/images/event/2.png"}
                    width={414}
                    height={575}
                    alt="event"
                  />
                </div>
                <div className="get-involved-date">
                  <Image
                    src={"/assets/images/icon/date.svg"}
                    width={24}
                    height={24}
                  />
                  <span>30 May 2025</span>
                </div>
                <div className="get-involved-card-content">
                  <p>Tetulia, Panchagarh</p>
                  <h3>Human Rights Conference</h3>
                  <Link href="#" className="custom-btn">
                    <span> Get Involved</span>
                    <span>
                      <GoArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="get-involved-card">
                <div className="get-involved-img">
                  <Image
                    src={"/assets/images/event/3.png"}
                    width={414}
                    height={575}
                  />
                </div>
                <div className="get-involved-date">
                  <Image
                    src={"/assets/images/icon/date.svg"}
                    width={24}
                    height={24}
                  />
                  <span>30 May 2025</span>
                </div>
                <div className="get-involved-card-content">
                  <p>Tetulia, Panchagarh</p>
                  <h3>Human Rights Conference</h3>
                  <Link href="#" className="custom-btn">
                    <span> Get Involved</span>
                    <span>
                      <GoArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="get-involved-card">
                <div className="get-involved-img">
                  <Image
                    src={"/assets/images/event/4.png"}
                    width={414}
                    height={575}
                  />
                </div>
                <div className="get-involved-date">
                  <Image
                    src={"/assets/images/icon/date.svg"}
                    width={24}
                    height={24}
                  />
                  <span>30 May 2025</span>
                </div>
                <div className="get-involved-card-content">
                  <p>Tetulia, Panchagarh</p>
                  <h3>Human Rights Conference</h3>
                  <Link href="#" className="custom-btn">
                    <span> Get Involved</span>
                    <span>
                      <GoArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="get-involved-card">
                <div className="get-involved-img">
                  <Image
                    src={"/assets/images/event/5.png"}
                    width={414}
                    height={575}
                  />
                </div>
                <div className="get-involved-date">
                  <Image
                    src={"/assets/images/icon/date.svg"}
                    width={24}
                    height={24}
                  />
                  <span>30 May 2025</span>
                </div>
                <div className="get-involved-card-content">
                  <p>Tetulia, Panchagarh</p>
                  <h3>Human Rights Conference</h3>
                  <Link href="#" className="custom-btn">
                    <span> Get Involved</span>
                    <span>
                      <GoArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="get-involved-card">
                <div className="get-involved-img">
                  <Image
                    src={"/assets/images/event/6.png"}
                    width={414}
                    height={575}
                  />
                </div>
                <div className="get-involved-date">
                  <Image
                    src={"/assets/images/icon/date.svg"}
                    width={24}
                    height={24}
                  />
                  <span>30 May 2025</span>
                </div>
                <div className="get-involved-card-content">
                  <p>Tetulia, Panchagarh</p>
                  <h3>Human Rights Conference</h3>
                  <Link href="#" className="custom-btn">
                    <span> Get Involved</span>
                    <span>
                      <GoArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
