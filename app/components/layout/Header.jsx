"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Programs" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="header-section">
      <div className="container">
        <div className="header-nav">
          <Link href="/" className="site-logo">
            <Image
              src="/assets/images/logo.png"
              alt="Site Logo"
              width={141}
              height={141}
            />
          </Link>

          <nav className="main-menu">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? "active" : ""}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="header-right">
              <div className="header-action">
                <div className="header-search-item ">
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
