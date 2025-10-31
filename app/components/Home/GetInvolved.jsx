import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const GetInvolved = () => {
  return (
    <section
      className="get-involed-live"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="get-involved-header">
          <div className="row">
            <div className="col-md-6">
              <div className="get-involved-title">
                <h1 className="section-title">
                  We will Make this country a better place to live
                </h1>
                <div className="bar-item"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="get-involved-content">
                <p>
                  Parturient dis torquent nostra mattis congue ut sagittis nibh
                  luctus viverra. Enim convallis tristique magna torquent
                  egestas dictumst consectetur.
                </p>
                <Link href="#" className="custom-btn">
                  <span>Discover more</span>
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
                    src={"/assets/images/get-involved.png"}
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
                    src={"/assets/images/get-involved.png"}
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
                    src={"/assets/images/get-involved.png"}
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
                    src={"/assets/images/get-involved.png"}
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
                    src={"/assets/images/get-involved.png"}
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
                    src={"/assets/images/get-involved.png"}
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
