"use client";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "../../../context/languageContext";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact-us";
  const { language } = useLanguage();
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-wrapper">
          {!isContactPage && (
            <div className="footer-content">
              <h2> {language === "bn" ? "যোগাযোগ করুন" : "Contact US"}</h2>
              <p>{language === "bn" ? "প্রধান কার্যালয়ঃ" : "Head Office:"}</p>
              <p>
                {language === "bn"
                  ? "জুরিস্ট চেম্বারস, ৩য় তলা, হোল্ডিং ৩৯এ, রোড ৭, ধানমন্ডি, ঢাকা ১২০৯"
                  : "Jurists Chambers, Level 3, House 39A, Road 7, Dhanmandi, Dhaka 1209"}
              </p>
            </div>
          )}
          <div className="footer-social-media">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/BarristerNawshadZamir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/NawshadZamir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@nawshadzamir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@NawshadZamir1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nawshadzamir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/nawshadzamir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-copyright">
            <p>Copyright @ 2025</p>
            <ul>
              <li>
                <Link href={"#"}>Terms</Link>
              </li>
              <li>
                <Link href={"#"}>Privacy</Link>
              </li>
              <li>
                <Link href={"#"}>Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
