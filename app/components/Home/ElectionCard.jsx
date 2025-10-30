import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const ElectionCard = () => {
  return (
    <section className="election-card">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
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
                <h3>Vote Us</h3>
                <p>
                  Suspendisse erat dignissim ac porta metus accumsan habitasse
                  eu turpis leo aenean
                </p>

                <Link href="#" className="custom-btn">
                  <span>Find Program</span>
                  <span>
                    <GoArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
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
                <h3>Our Events</h3>
                <p>
                  Suspendisse erat dignissim ac porta metus accumsan habitasse
                  eu turpis leo aenean
                </p>

                <Link href="#" className="custom-btn">
                  <span> View Schedule</span>
                  <span>
                    <GoArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
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
                <h3>Support Center</h3>
                <p>
                  Suspendisse erat dignissim ac porta metus accumsan habitasse
                  eu turpis leo aenean
                </p>

                <Link href="#" className="custom-btn">
                  <span> Contact Us</span>
                  <span>
                    <GoArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectionCard;
