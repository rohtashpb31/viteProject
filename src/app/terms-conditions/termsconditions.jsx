"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { fetchTermsAndConditions } from "../api/index";

function Terms() {
  const [termsData, setTermsData] = useState(null);

  useEffect(() => {
    const loadTerms = async () => {
      const data = await fetchTermsAndConditions();
      setTermsData(data);
    };
    loadTerms();
  }, []);

  return (
    <>
      <Header />

      <Banner
        title={termsData?.title || "OUR TERMS & CONDITIONS"}
        description="Stay informed and protected. Read our Terms & Conditions to understand the rules, responsibilities, and guidelines for using our services with confidence."
        bgImage="/images/home-img3.png"
      />

      <section className="privacy-section py-5">
        <div className="container ">
          <div className="primary-bg-wrap">
            <h2 className="privacy-title">{termsData?.title || "Terms and Conditions"}</h2>

            {/* <p className="updated-date">
              <strong>Last updated:</strong>{" "}
              {termsData?.updatedAt
                ? new Date(termsData.updatedAt).toLocaleDateString()
                : "Loading..."}
            </p> */}

            {/* Content Render */}
            <div
              className="intro-text"
              dangerouslySetInnerHTML={{
                __html: termsData?.content || "<p>Loading...</p>",
              }}
            />
          </div>
        </div>
      </section>

      <style>{`
        .privacy-section {
          color: #d9e7ff;
        }

        .privacy-section .privacy-title {
          font-size: 42px;
          font-weight: 700;
          border-bottom: 2px solid #0d6efd;
          padding-bottom: 10px;
          margin-bottom: 20px;
          color: #3ba4ff;
        }

        .privacy-section .updated-date {
          font-size: 18px;
          margin-bottom: 25px;
        }

        .privacy-section .intro-text {
          font-size: 20px;
          margin-bottom: 30px;
          color: #ffffff;
          font-weight: 600;
        }

        .privacy-section .privacy-list {
          list-style: none;
          padding-left: 0;
        }

        .intro-text p {
          font-size: 16px;
          color: #fff;
        }



        .privacy-section .privacy-list li {
          margin-bottom: 18px;
          font-size: 18px;
          line-height: 1.8;
          color: #d5e4ff;
        }
      `}</style>

      <Footer />
    </>
  );
}

export default Terms;
