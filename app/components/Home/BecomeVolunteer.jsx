import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const BecomeVolunteer = () => {
  return (
    <section className="become-volunteer">
      <div className="container">
        <div className="become-volunteer-content">
          <span className="subtitle">Become volunteer</span>
          <h2>Interested in joining our team? Let's make a better future.</h2>
          <p>
            Parturient dis torquent nostra mattis congue ut sagittis nibh luctus
            viverra.
          </p>
          <div className="become-volunteer-btn">
            <Link href="#" className="custom-btn-alt">
              <span> Get Involved</span>
              <span>
                <GoArrowUpRight />
              </span>
            </Link>
            <Link href="#" className="custom-btn">
              <span> Get Involved</span>
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

export default BecomeVolunteer;
