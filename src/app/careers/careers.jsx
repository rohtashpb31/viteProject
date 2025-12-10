"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import "../globals.css";
import "../../../public/careers.css";
import Reveal from "../components/Reveal";

import { submitCareerApplication } from "../api"; // <-- IMPORT API

function CAREERS() {
  // FORM STATES
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  // HANDLE FILE UPLOAD
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Only PDF files are allowed!");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File must be less than 5MB!");
      return;
    }

    setResume(file);
  };

  // HANDLE FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !phone || !resume) {
      alert("Please fill all fields and upload resume!");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("resume", resume);

      const response = await submitCareerApplication(formData);

      alert("Application submitted successfully!");
      console.log("API Response:", response);

      // Reset form
      setFullName("");
      setEmail("");
      setPhone("");
      setResume(null);
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Something went wrong! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Banner
        title="CAREERS"
        description="Build your future with us. Discover career opportunities that help you grow, learn, and contribute to the infrastructure of tomorrow."
        bgImage="/images/home-img3.png"
      />

      <section className="space-xs-pt">
        <div className="container text-center">
          <div className="primary-bg-wrap">
            <div className="row align-items-center">
              <div className="col-md-6">
                <Reveal>
                <h2 className="fw-bold text-white section-title">CAREERS</h2>
                </Reveal>
                <Reveal>
                <p className="mt-3 text-white-50 fs-5">
                  At Vitel Infratech, we don't just build projects – we build careers.
                </p>
                </Reveal>

                <Reveal>

                <p className="mt-4 text-white-50 fs-5" style={{ maxWidth: "900px", margin: "0 auto" }}>
                  We provide a growth-oriented environment, with a strong focus on skill development,
                  innovation, and safety. We invite passionate engineers, project managers, and skilled
                  workers to join our team.
                </p>
                </Reveal>

                <Reveal>
                <p className="mt-4 fs-4">
                  <span style={{ fontSize: "24px" }}></span>
                  <a href="#" className="ms-2 fw-semibold career-link">
                    Explore our Careers section to view current opportunities and apply online.
                  </a>
                </p>
                </Reveal>
              </div>

              <div className="col-md-6">
                <div className="apply-form-box">
                  <h2 className="text-center fw-bold text-primary mb-5">Apply Now</h2>

                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">

                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control apply-input"
                          placeholder="Full Name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>

                      <div className="col-md-12">
                        <input
                          type="email"
                          className="form-control apply-input"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="col-md-12">
                        <input
                          type="text"
                          maxLength="10"
                          className="form-control apply-input"
                          placeholder="Phone Number (10 digits only)"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="upload-box w-100 d-flex align-items-center">
                          <i className="bi bi-file-earmark-text me-3 fs-3"></i>
                          <span>{resume ? resume.name : "Upload Resume (PDF Only, Max 5MB)"}</span>
                          <input type="file" accept="application/pdf" hidden onChange={handleResumeUpload} />
                        </label>
                      </div>

                    </div>

                    <div className="text-center mt-5">
                      <button
                        type="submit"
                        className="apply-btn px-5 py-2"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "APPLY NOW"}
                      </button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CAREERS;
