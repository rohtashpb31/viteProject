"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../../../public/about.css";
import "../globals.css";
import Image from "next/image";
import AboutHero from "../../../public/images/about/about-hero.jpg";
import AspectsSection from "../components/about/AspectsSection";
import Link from "next/link";
import CallIcon from "../../../public/images/icon/phone-call.png";
import Building from "../../../public/images/about/building.jpg";
import ExperienceIcon from "../../../public/images/icon/customer-review.png";
import ClientReview from "../components/client-review";
import Footer from "../components/Footer";
import { fetchAbout, fetchContactInfo } from "../api/index";
import Reveal from "../components/Reveal";

function About() {
    const [aboutData, setAboutData] = useState(null);
    const [infoContect, setInfoContect] = useState(null);

    useEffect(() => {
        async function loadAbout() {
            const data = await fetchAbout(); // API call
            setAboutData(data);
        }
        loadAbout();
    }, []);

    useEffect(() => {
        async function loadContactInfo() {
            const data = await fetchContactInfo(); // API call
            setInfoContect(data);
        }
        loadContactInfo();
    }, []);

    if (!aboutData) {
        return (
            <div className="text-center py-5 text-white">
                Loading About Information...
            </div>
        );
    }

    const { description, vision, mission } = aboutData;

    return (
        <>
            <Header />

            <div id="about-page">
                {/* about hero section start */}
                <div className="container">
                    <div className="about-hero primary-bg-wrap space-xs-m">
                        <div className="about-hero-image">
                            <Image src={AboutHero} layout="fill" alt="about hero" />
                        </div>

                        <div className="about-hero-content text-center">
                            <Reveal  className="delay-100">
                            <h2 className="text-white">
                                Transforming Infrastructure With{" "}
                                <span className="primary-text-color"> Innovation & Integrity </span>
                            </h2>
                            </Reveal>
                            <Reveal className="delay-200">
                            <p className="text-white">{description}</p>
                            </Reveal>
                        </div>
                    </div>
                </div>
                {/* about hero section end */}

                {/* about vision content section */}
                <div className="container">
                    <div className="about-vision-section text-center space-xs-pt">
                        <Reveal>
                        <h2 className="text-white space-xs-pb">
                            TURNING VISION <span className="primary-text-color"> INTO REALITY </span>
                        </h2>
                        </Reveal>

                        <div className="about-vision-content">
                            <div>
                                <Reveal>
                                <p className="text-white">{description}</p>
                               </Reveal>
                            </div>

                            <div>
                                <Reveal>
                                <p className="text-white">
                                    Vitel Infratech Pvt. Ltd. continues to deliver infrastructure excellence across
                                    various sectors with innovation and sustainability.
                                </p>
                                </Reveal>
                            </div>
                        </div>
                    </div>

                    {/* Vision & Mission Section */}
                    <div className="about-vision-mission space-pt-60">
                        <div className="row g-4">
                            {/* Vision */}
                            <div className="col-md-6">
                                <div className="card primary-bg-wrap text-center h-100">
                                    <Reveal>
                                    <h3 className="text-white">
                                        OUR <span className="primary-text-color">VISION</span>
                                    </h3>
                                    </Reveal>
                                    <div className="w-100">
                                        <Reveal>
                                        <p className="text-white">{vision}</p>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>

                            {/* Mission */}
                            <div className="col-md-6">
                                <div className="card primary-bg-wrap h-100">
                                    <div className="w-100 text-center">
                                        <Reveal>
                                        <h3 className="text-white">
                                            OUR <span className="primary-text-color">MISSION</span>
                                        </h3> 
                                        </Reveal>

                                        <ul className="list-group bg-none text-left">
                                            {mission.map((item, index) => (
                                                <Reveal>
                                                <li
                                                    key={index}
                                                    className="list-group-item bg-none border-none text-white"
                                                >
                                                    {item}
                                                </li>
                                                </Reveal>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEE OUR ASPECTS */}
                <AspectsSection />

                {/* Experience Section */}
                <section id="about-experience">
                    <div className="container">
                        <div className="primary-bg-wrap">
                            <div className="row g-4">
                                <div className="col-md-7 col-lg-7 col-sm-12 col-12">
                                    <div className="about-experience-content text-center">
                                        <Reveal>
                                        <h2 className="mb-3">
                                            We have 40+ years experience in Construction
                                        </h2>
                                        </Reveal>
                                        <div className="experience-icon">
                                            <Image src={ExperienceIcon} alt="experience" layout="fill" />
                                        </div>

                                        <p className="text-gray-300 mb-5 mt-3">Drop us a line.</p>

                                        <div className="d-flex flex-wrap align-items-center experience-btn-wrap justify-center">
                                            <Link
                                                href={`tel:${infoContect?.phone || ""}`}
                                                className="primary-btn d-flex align-items-center"
                                            >
                                                <span className="me-2">
                                                    <Image src={CallIcon} alt="call" width={15} height={15} />
                                                </span>
                                                {infoContect?.phone}
                                            </Link>

                                            <Link href="/contact" className="primary-btn">
                                                CONTACT US
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5 col-lg-5 col-sm-12 col-12">
                                    <div className="building-image">
                                        <Image src={Building} alt="building" layout="fill" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Review Section */}
                <ClientReview />

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}

export default About;
