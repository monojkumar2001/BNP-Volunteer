"use client";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../../context/languageContext";
const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  const isNewsPage = pathname.startsWith("/news/");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = {
    bn: [
      { href: "/", label: "হোম" },
      { href: "/about", label: "আমার সম্পর্কে" },
      { href: "/events", label: "ইভেন্ট" },
      { href: "/gallery", label: "মিডিয়া" },
      { href: "/contact-us ", label: "যোগাযোগ" },
    ],
    en: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/events", label: "Event" },
      { href: "/gallery", label: "Media" },
      { href: "/contact-us ", label: "Contact" },
    ],
  };

  return (
    <header
      className={`header-section 
  ${scrolled ? "scrolled" : ""} 
  ${language === "bn" ? "lang-header-bn" : "lang-header-en"}`}
    >
      <div className="container">
        <div className="header-nav">
          {/* Logo */}
          <Link href="/" className="site-logo">
            <Image
              src="/assets/images/logo.png"
              alt="Site Logo"
              width={141}
              height={141}
            />
            <span
              style={{
                color: isNewsPage ? "#000000" : "",
              }}
              className={`logo-name ${
                language === "bn" ? "logo-bn" : "logo-en"
              }`}
            >
              {language === "bn" ? "নওশাদ জমির" : "Nawshad Zamir"}
            </span>
          </Link>

          {/* Menu Button for Mobile */}
          <button
            style={{
              color: isNewsPage ? "#000000" : "",
            }}
            className={`menu-btn-ber ${scrolled ? "scrolled" : ""}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <RiMenu3Fill />
          </button>

          {/* Navigation */}
          <nav className={`main-menu ${menuOpen ? "open" : ""}`}>
            <button
              style={{
                color: isNewsPage ? "#000000" : "",
              }}
              className="close-menu-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <IoMdClose />
            </button>
            <ul>
              {navLinks[language]?.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href.trim() ? "active" : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="header-right">
              <div className="header-action">
                <div className="header-search-item">
                  <button type="button">
                    <Image
                      src="/assets/images/icon/search.svg"
                      alt="Site search"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
                <div className="header-language-switcher">
                  <div className="header-language-item">
                    <button
                      onClick={() => {
                        setLanguage("bn");
                        setMenuOpen(false);
                      }}
                      className={language === "bn" ? "active" : ""}
                    >
                      বাং
                    </button>
                  </div>
                  <div className="header-language-item">
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setMenuOpen(false);
                      }}
                      className={language === "en" ? "active" : ""}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </div>
              <div className="header-btn">
                <Link href="#" className="latest-btn">
                  {language === "bn" ? "সর্বশেষ আপডেট" : "Latest Update"}
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
