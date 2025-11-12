"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./components/layout/Footer";
import React, { useEffect, useState } from "react";
import { LanguageProvider } from "../context/languageContext";
export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
