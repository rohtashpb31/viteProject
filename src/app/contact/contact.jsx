"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import "../globals.css";
import "../../../public/contact.css";
import { submitContact } from "../api/index";

function Contact() {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    // VALIDATION FUNCTION
    const validateForm = () => {
        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!formValues.name.trim()) newErrors.name = "Name is required.";
        if (!emailRegex.test(formValues.email))
            newErrors.email = "Enter a valid email.";
        if (!phoneRegex.test(formValues.phone))
            newErrors.phone = "Phone must be 10 digits.";
        if (!formValues.subject.trim())
            newErrors.subject = "Subject is required.";
        if (!formValues.message.trim() || formValues.message.length < 10)
            newErrors.message = "Message must be at least 10 characters.";

        return newErrors;
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // remove error while typing
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess("");

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);

        try {
            const res = await submitContact(formValues);

            if (res.success) {
                setSuccess("Your message has been sent successfully!");
                setFormValues({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            } else {
                setErrors({ submit: res.message || "Something went wrong." });
            }
        } catch (err) {
            setErrors({ submit: "Failed to submit. Please try again later." });
        }

        setLoading(false);
    };

    return (
        <>
            <Header />

            <Banner
                title="CONTACT US"
                description="Build your future with us. Discover career opportunities that help you grow, learn, and contribute to the infrastructure of tomorrow."
                bgImage="/images/home-img3.png"
            />

            <section className="space-xs-pt">
                <div className="container text-center">
                    <div className="apply-form-box primary-bg-wrap">
                        <h2 className="text-center fw-bold text-white mb-5">Apply Now</h2>

                        {success && <p className="text-success fw-bold">{success}</p>}
                        {errors.submit && (
                            <p className="text-danger fw-bold">{errors.submit}</p>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="row g-4">
                                {/* NAME */}
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        className="form-control apply-input"
                                        placeholder="Name*"
                                    />
                                    {errors.name && (
                                        <small className="text-danger">{errors.name}</small>
                                    )}
                                </div>

                                {/* EMAIL */}
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        className="form-control apply-input"
                                        placeholder="Email*"
                                    />
                                    {errors.email && (
                                        <small className="text-danger">{errors.email}</small>
                                    )}
                                </div>

                                {/* PHONE */}
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="phone"
                                        maxLength="10"
                                        value={formValues.phone}
                                        onChange={handleChange}
                                        className="form-control apply-input"
                                        placeholder="Phone Number (10 digits)*"
                                    />
                                    {errors.phone && (
                                        <small className="text-danger">{errors.phone}</small>
                                    )}
                                </div>

                                {/* SUBJECT */}
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formValues.subject}
                                        onChange={handleChange}
                                        className="form-control apply-input"
                                        placeholder="Subject*"
                                    />
                                    {errors.subject && (
                                        <small className="text-danger">{errors.subject}</small>
                                    )}
                                </div>

                                {/* MESSAGE */}
                                <div className="col-md-12">
                                    <textarea
                                        rows="5"
                                        name="message"
                                        maxLength="200"
                                        value={formValues.message}
                                        onChange={handleChange}
                                        className="form-control apply-input"
                                        placeholder="Message*"
                                    ></textarea>
                                    {errors.message && (
                                        <small className="text-danger">{errors.message}</small>
                                    )}
                                </div>
                            </div>

                            <div className="text-center mt-5">
                                <button
                                    type="submit"
                                    className="primary-btn px-5 py-2"
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Contact;
