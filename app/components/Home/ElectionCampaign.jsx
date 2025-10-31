"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const ElectionCampaign = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate election date (50 days from now)
  const electionDate = new Date();
  electionDate.setDate(electionDate.getDate() + 50);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = electionDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="election" data-aos="fade-up" data-aos-duration="3000">
      <div className="container">
        <div className="election-wrapper">
          <div className="election-content">
            <div className="election-location">
              <div className="election-icon">
                <Image
                  src="/assets/images/icon/date.svg"
                  alt="Date Icon"
                  width={24}
                  height={24}
                />
                <span>{electionDate.toDateString()}</span>
              </div>
              <div className="election-icon">
                <Image
                  src="/assets/images/icon/location.png"
                  alt="Location Icon"
                  width={24}
                  height={24}
                />
                <span>Tetulia, Panchagarh District, Atwari</span>
              </div>
            </div>

            <div className="who-content">
              <h2 className="section-title">Election Campaign</h2>
              <p>
                Urna risus himenaeos dui sociosqu purus nisi magnis. Conubia
                integer eu ante molestie vitae sapien dis tristique si praesent
                hac. Maximus blandit dignissim facilisi ut euismod odio erat.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="election-count-timer">
              <div className="timer-item">
                <span className="days">{timeLeft.days}</span>
                <span className="label">Days</span>
              </div>
              <div className="timer-item">
                <span className="days">{timeLeft.hours}</span>
                <span className="label">Hours</span>
              </div>
              <div className="timer-item">
                <span className="days">{timeLeft.minutes}</span>
                <span className="label">Minutes</span>
              </div>
              <div className="timer-item">
                <span className="days">{timeLeft.seconds}</span>
                <span className="label">Seconds</span>
              </div>
            </div>

            <div className="election-btn">
              <Link href="#" className="custom-btn">
                <span>Get ticket</span>
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

export default ElectionCampaign;
