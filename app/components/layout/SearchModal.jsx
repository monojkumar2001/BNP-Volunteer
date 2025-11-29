"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useLanguage } from "../../../context/languageContext";
import ReactLoadingSkeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SearchModal = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const searchInputRef = useRef(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchQuery.trim().length >= 2) {
        performSearch(searchQuery);
      } else {
        setSearchResults([]);
        setHasSearched(false);
      }
    }, 300); // Debounce 300ms

    return () => clearTimeout(delaySearch);
  }, [searchQuery, language]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const performSearch = async (query) => {
    try {
      setLoading(true);
      setHasSearched(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/search?q=${encodeURIComponent(query)}&lang=${language}`
      );
      const data = await res.json();

      if (res.ok) {
        setSearchResults(data.all || []);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClose = () => {
    setSearchQuery("");
    setSearchResults([]);
    setHasSearched(false);
    onClose();
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString(
      language === "bn" ? "bn-BD" : "en-US",
      {
        day: "numeric",
        month: language === "bn" ? "long" : "short",
        year: "numeric",
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="search-modal-overlay"
      onClick={handleClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 10000,
          display: "flex",
          flexDirection: "column",
        }}
    >
      <div
        className="search-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          backgroundColor: "#fff",
          padding: "20px 0",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <div className="container">
          {/* Search Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div style={{ flex: 1, maxWidth: "800px", margin: "0 auto" }} className="search-modal-title">
              <h2 style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "bold" }}>
                {language === "bn" ? "খুঁজুন" : "Search for anything"}
              </h2>

              {/* Search Input */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HiOutlineMagnifyingGlass
                  style={{
                    position: "absolute",
                    left: "15px",
                    fontSize: "20px",
                    color: "#666",
                  }}
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder={
                    language === "bn"
                      ? "খুঁজুন..."
                      : "Search..."
                  }
                  style={{
                    width: "100%",
                    padding: "10px 50px 10px 45px",
                    fontSize: "16px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    outline: "none"
                  }}
                />
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              style={{
                background: "transparent",
                border: "1px solid #ddd",
                fontSize: "28px",
                cursor: "pointer",
                color: "var(--black-color)",
                padding: "10px",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
                borderRadius: "50%",
              }}
            >
              <IoMdClose />
            </button>
          </div>

          {/* Search Results */}
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {loading ? (
              <div>
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    style={{
                      padding: "20px",
                      borderBottom: "1px solid #eee",
                      marginBottom: "10px",
                    }}
                  >
                    <ReactLoadingSkeleton height={20} width="70%" style={{ marginBottom: 10 }} />
                    <ReactLoadingSkeleton height={16} width="100%" style={{ marginBottom: 5 }} />
                    <ReactLoadingSkeleton height={16} width="60%" />
                  </div>
                ))}
              </div>
            ) : hasSearched && searchQuery.trim().length >= 2 ? (
              searchResults.length > 0 ? (
                <div>
                  <p
                    style={{
                      marginBottom: "20px",
                      color: "#666",
                      fontSize: "14px",
                    }}
                  >
                    {language === "bn"
                      ? `${searchResults.length} টি ফলাফল পাওয়া গেছে`
                      : `${searchResults.length} results found`}
                  </p>

                  {searchResults.map((item, index) => (
                    <Link
                      key={`${item.type}-${item.id}-${index}`}
                      href={item.url}
                      onClick={handleClose}
                      style={{
                        display: "block",
                        padding: "20px",
                        borderBottom: "1px solid #eee",
                        marginBottom: "10px",
                        borderRadius: "8px",
                        transition: "background 0.2s",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f5f5f5";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <div style={{ display: "flex", gap: "15px" }}>
                        {item.image && (
                          <div
                            style={{
                              width: "80px",
                              height: "60px",
                              borderRadius: "6px",
                              overflow: "hidden",
                              flexShrink: 0,
                            }}
                          >
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={80}
                              height={60}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        )}
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              display: "inline-block",
                              padding: "4px 8px",
                              backgroundColor:
                                item.type === "news"
                                  ? "#007bff"
                                  : item.type === "event"
                                  ? "#28a745"
                                  : "#ff6b35",
                              color: "#fff",
                              fontSize: "12px",
                              borderRadius: "4px",
                              marginBottom: "8px",
                            }}
                          >
                            {item.type === "news"
                              ? language === "bn"
                                ? "সংবাদ"
                                : "News"
                              : item.type === "event"
                              ? language === "bn"
                                ? "ইভেন্ট"
                                : "Event"
                              : language === "bn"
                              ? "সেন্ট্রাল বিএনপি"
                              : "Central BNP"}
                          </div>
                          <h3
                            style={{
                              fontSize: "18px",
                              fontWeight: "600",
                              marginBottom: "8px",
                              color: "#333",
                            }}
                          >
                            {item.title}
                          </h3>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#666",
                              marginBottom: "8px",
                              lineHeight: "1.6",
                            }}
                          >
                            {item.description}...
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "#999",
                            }}
                          >
                            {formatDate(item.created_at)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    color: "#999",
                  }}
                >
                  <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                    {language === "bn"
                      ? "কোন ফলাফল পাওয়া যায়নি"
                      : "No results found"}
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    {language === "bn"
                      ? `"${searchQuery}" এর জন্য কোন ফলাফল পাওয়া যায়নি`
                      : `No results found for "${searchQuery}"`}
                  </p>
                </div>
              )
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: "60px 20px",
                  color: "#999",
                }}
              >
                <p style={{ fontSize: "16px" }}>
                  {language === "bn"
                    ? "খুঁজতে শুরু করতে টাইপ করুন..."
                    : "Start typing to search..."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default SearchModal;

