"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function PrivacyPolicy() {
    const [policy, setPolicy] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPolicy = async () => {
            try {
                const res = await fetch("https://api.vitelinfratech.com/api/privacy-policy");

                if (!res.ok) {
                    throw new Error("Failed to fetch policy");
                }

                const json = await res.json();

                if (json.success) {
                    setPolicy(json.data);
                } else {
                    setError("Unable to load policy content.");
                }
            } catch (err) {
                setError("Something went wrong while fetching policy.");
            }

            setLoading(false);
        };

        fetchPolicy();
    }, []);

    return (
        <>
            <Header />

            <Banner
                title="PRIVACY POLICY"
                description="Your privacy matters to us. Learn how we collect, use, and safeguard your personal information with complete transparency and trust."
                bgImage="/images/home-img3.png"
            />

            <section className="space-xs-pt space-xs-pb">
                <div className="container primary-bg-wrap">
                    {loading && (
                        <p className="text-center fw-bold">Loading...</p>
                    )}

                    {error && (
                        <p className="text-center text-danger fw-bold">{error}</p>
                    )}

                    {!loading && policy && (
                        <div className="policy-content"
                            dangerouslySetInnerHTML={{ __html: policy.content }}
                        ></div>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}
