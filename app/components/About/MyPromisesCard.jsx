import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const MyPromisesCard = () => {
  return (
    <section
      className="election-card promises-card"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="election-card-item">
              <div className="election-card-img">
                <Image
                  src="/assets/images/icon/mdi_vote.svg"
                  alt="Ballot Box Icon"
                  width={74}
                  height={74}
                />
              </div>
              <div className="election-card-content">
                <h3>Health Care</h3>
                <p>
                  Suspendisse erat dignissim ac porta metus accumsan habitasse
                  eu turpis leo aenean
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="election-card-item">
              <div className="election-card-img">
                <Image
                  src="/assets/images/icon/mdi_events.svg"
                  alt="Ballot Box Icon"
                  width={74}
                  height={74}
                />
              </div>
              <div className="election-card-content">
                <h3>Safer Communities</h3>
                <p>
                  Suspendisse erat dignissim ac porta metus accumsan habitasse
                  eu turpis leo aenean
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="election-card-item">
              <div className="election-card-img">
                <Image
                  src="/assets/images/icon/mdi_email-edit.svg"
                  alt="Ballot Box Icon"
                  width={74}
                  height={74}
                />
              </div>
              <div className="election-card-content">
                <h3>Climate Change</h3>
                <p>
                  Suspendisse erat dignissim ac porta metus accumsan habitasse
                  eu turpis leo aenean
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPromisesCard;
