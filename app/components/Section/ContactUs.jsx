import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactUs = () => {
  return (
    <section
      className="contact-use"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-us-left">
              <h2 className="sub-title">Contact Us</h2>
              <h1 className="section-title">Get In Touch With Us</h1>
              <p>
                Parturient dis torquent nostra mattis congue ut sagittis nibh
                luctus viverra. Enim convallis tristique magna torquent egestas
                dictumst magna torquent egestas dictumst{" "}
              </p>
              <ul className="contact-us-info">
                <li>
                  <div className="contact-icon">
                    <GrLocation />
                  </div>
                  <div className="contact-list-text">
                    <h4>Location</h4>
                    <p>Dhaka: Level 3, House 5, Dhanmandi 1212</p>
                  </div>
                </li>
                <li>
                  <div className="contact-icon">
                    <FiPhone />
                  </div>
                  <div className="contact-list-text">
                    <h4>Phone Number</h4>
                    <a href="tel:+880170000000">+880170000000</a>
                  </div>
                </li>
                <li>
                  <div className="contact-icon">
                    <MdOutlineMailOutline />
                  </div>
                  <div className="contact-list-text">
                    <h4>Email Address</h4>
                    <a href="mailto:info@gmail.com">info@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-us-right">
              <form action="#" className="contact-us-form">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group-item">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group-item">
                      <label htmlFor="email">Your E-mail</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group-item">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="+8801XXXXXXXXX"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group-item">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your subject"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group-item">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <div className="contact-us-btn">
                    <button type="submit" className="custom-btn">
                      <span>Send Message</span>
                      <span>
                        <GoArrowUpRight />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
