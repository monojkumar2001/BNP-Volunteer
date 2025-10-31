import React from "react";

const PromiseTracker = () => {
  return (
    <section className="promise-tracker">
      <div className="container">
        <div className="leadership-title promise-tracker-title">
          <h4>66 Promises</h4>
          <h1 className="section-title"> Promise Tracker</h1>
        </div>
        <div className="promise-tracker-content">
          <div className="promise-tracker-item">
            <h4>01</h4>
            <p>Delivered </p>
          </div>
          <div className="promise-tracker-item">
            <h4>46</h4>
            <p>In Progress </p>
          </div>
          <div className="promise-tracker-item">
            <h4>50K</h4>
            <p>Stalled </p>
          </div>
          <div className="promise-tracker-item">
            <h4>50K</h4>
            <p>Broken </p>
          </div>
          <div className="promise-tracker-item">
            <h4>50K</h4>
            <p>Thwarted </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseTracker;
