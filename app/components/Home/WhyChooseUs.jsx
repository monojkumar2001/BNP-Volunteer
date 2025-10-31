import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-me">
      <div className="container">
        <div className="why-choose-me-wrapper">
          <div className="why-choose-me-content">
            <span>why Choose Us</span>
            <h4>If you want a better future, Vote for us</h4>
            <p>
              Parturient dis torquent nostra mattis congue ut sagittis nibh
              luctus viverra.
            </p>
            <ul className="why-choose-list">
              <li>
                <div className="why-choose-icon">
                  <Image
                    src={"/assets/images/icon/check.svg"}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="why-choose-list-text">
                  <h5>Experienced & Professional</h5>
                  <p>Urna risus himenaeos dui sociosqu purus nisi magnis. </p>
                </div>
              </li>
              <li>
                <div className="why-choose-icon">
                  <Image
                    src={"/assets/images/icon/check.svg"}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="why-choose-list-text">
                  <h5>Strong vision</h5>
                  <p>Urna risus himenaeos dui sociosqu purus nisi magnis. </p>
                </div>
              </li>
              <li>
                <div className="why-choose-icon">
                  <Image
                    src={"/assets/images/icon/check.svg"}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="why-choose-list-text">
                  <h5>Honesty & Transparency</h5>
                  <p>Urna risus himenaeos dui sociosqu purus nisi magnis. </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
