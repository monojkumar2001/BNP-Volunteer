"use client";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../../context/languageContext";
import SearchModal from "./SearchModal";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const handleVolunteerModalOpen = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event("openVolunteerModal"));
    setMenuOpen(false);
  };

  const isNewsPage = pathname.startsWith("/news/");
  const isEventSinglePage =
    pathname.startsWith("/events/") && pathname !== "/events";
  const isCentralBnpPage = pathname.startsWith("/central-bnp");
  const isSinglePageHeader =
    isNewsPage || isEventSinglePage || isCentralBnpPage;
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
      { href: "/about", label: "About Me" },
      { href: "/events", label: "Event" },
      { href: "/gallery", label: "Media" },
      { href: "/contact-us ", label: "Contact" },
    ],
  };

  return (
    <header
      className={`header-section 
  ${scrolled ? "scrolled" : ""} 
  ${language === "bn" ? "lang-header-bn" : "lang-header-en"}
  ${isSinglePageHeader ? "single-page" : ""}`}
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
            <div className="logo-name-item">
              <span
                className={`logo-name ${
                  language === "bn" ? "logo-bn" : "logo-en"
                }`}
              >
                {language === "bn" ? "নওশাদ জমির" : "Nawshad Zamir"}
              </span>
              <p className="logo-name-text">
                {language === "bn"
                  ? "আন্তর্জাতিক বিষয়ক সম্পাদক - বিএনপি"
                  : "International Affairs Secretary - BNP"}
              </p>
            </div>
          </Link>

          {/* Menu Button for Mobile */}
          <button
          
            className={`menu-btn-ber ${scrolled ? "scrolled" : ""}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <RiMenu3Fill />
          </button>

          {/* Navigation */}
          <nav className={`main-menu ${menuOpen ? "open" : ""}`}>
            <button
             
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
                  <button
                    type="button"
                    onClick={() => setSearchOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
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
                      বাংলা
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
                      English
                    </button>
                  </div>
                </div>
              </div>
              <div className="header-btn">
                <button
                  
                  className="latest-btn"
                  onClick={handleVolunteerModalOpen}
                >
                  {language === "bn" ? "মতামত দিন" : "Leave a comment"}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
};

export default Header;
