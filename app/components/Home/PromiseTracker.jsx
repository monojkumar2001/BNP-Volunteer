"use client";
import React, { useEffect, useState } from "react";

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [suffix, setSuffix] = useState("");

  useEffect(() => {
    // Target value থেকে suffix আলাদা করো (যেমন "50K" → value=50, suffix="K")
    const match = target.toString().match(/^(\d+)([a-zA-Z]*)$/);
    const end = match ? parseInt(match[1]) : parseInt(target);
    setSuffix(match && match[2] ? match[2] : "");

    let start = 0;
    const incrementTime = 20;
    const totalSteps = duration / incrementTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <h4>
      {count}
      {suffix}
    </h4>
  );
};

const PromiseTracker = () => {
  const stats = [
    { value: 1, label: "Delivered" },
    { value: 46, label: "In Progress" },
    { value: "50K", label: "Stalled" },
    { value: "50K", label: "Broken" },
    { value: "50K", label: "Thwarted" },
  ];

  return (
    <section
      className="promise-tracker"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="leadership-title promise-tracker-title">
          <h4>66 Promises</h4>
          <h1 className="section-title">Promise Tracker</h1>
        </div>

        <div className="promise-tracker-content">
          {stats.map((item, index) => (
            <div className="promise-tracker-item" key={index}>
              <Counter target={item.value} duration={2000} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseTracker;
