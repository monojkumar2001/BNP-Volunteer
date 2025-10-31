"use client";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#", label: "About Us" },
    { href: "/#", label: "Programs" },
    { href: "/#", label: "Media" },
    { href: "/#", label: "Contact" },
  ];

  return (
    <header className="header-section">
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
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? "active" : ""}
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
                <div className="header-language-item">
                  <button>EN</button>
                </div>
              </div>
              <div className="header-btn">
                <Link href="#" className="latest-btn">
                  Latest Update
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
