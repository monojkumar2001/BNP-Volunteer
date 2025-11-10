"use client";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "../../../context/languageContext";
import { usePathname } from "next/navigation";

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
              <p>Head Office:</p>
              <p>Dhaka: Level 3, House 5, Dhanmandi 1212</p>
            </div>
          )}
          <div className="footer-social-media">
            <ul>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
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
