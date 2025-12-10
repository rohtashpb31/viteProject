"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import '../../../public/services.css'
import '../../../public/holographic-card.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from "../components/Banner";
import Reveal from "../components/Reveal";

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [servicesData, setServicesData] = useState([]);
    const [categories, setCategories] = useState(["All"]);
    const [loading, setLoading] = useState(true);

    // ---- FETCH SERVICES FROM API ----
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://api.vitelinfratech.com/api/services");
                const data = await res.json();

                // data = object with categories
                // convert to array for "All"
                const allServices = Object.keys(data).flatMap((cat) =>
                    data[cat].map((item) => ({
                        ...item,
                        category: cat
                    }))
                );

                setServicesData(allServices);
                setCategories(["All", ...Object.keys(data)]);
                setLoading(false);
            } catch (error) {
                console.log("API error:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // ---- FILTERING LOGIC ----
    const filteredServices =
        activeTab === "All"
            ? servicesData
            : servicesData.filter((item) => item.category === activeTab);

    return (
        <>
            <Header />

            <Banner
                title="Building Reliable Infrastructure Through Expertise & Innovation"
                description="We deliver high-quality infrastructure solutions across construction, utilities, energy, and telecom. With advanced engineering, sustainable practices, and years of proven experience, VIPL ensures every project is executed with precision, safety, and long-term value."
                bgImage="/images/home-img3.png"
            />

            <section className="services-section container py-5">
                <Reveal>
                <h2 className="section-title text-center mb-4">Our Services</h2>
                </Reveal>
                {/* Tabs */}
                <div className="tabs-wrapper d-flex flex-wrap justify-content-center gap-3 mb-5">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`tab-btn ${activeTab === cat ? "active" : ""}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Loading */}
                {loading && (
                    <p className="text-center">Loading services...</p>
                )}

                {/* Cards */}
                {!loading && (
                    <div className="row g-4">
                        {filteredServices.map((service, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="service-card">

                                    <div className="service-img">
                                        <div className="primary-card-imagewrap holographic-card">
                                            {/* IMAGE (your UI kept same) */}
                                            {service.image && (
                                                <Image
                                                    src={service.image}
                                                    layout="fill"
                                                    className="project"
                                                    alt={service.title}
                                                    unoptimized
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <Reveal>
                                    <h4 className="service-title">{service.title}</h4>
                                    </Reveal>
                                    <Reveal>
                                    <p className="service-desc">{service.description}</p>
                                    </Reveal>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <Footer />
        </>
    );
}
