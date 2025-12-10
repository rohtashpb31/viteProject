"use client";

import Image from "next/image";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Reveal from "../Reveal";

export default function AspectsSection() {
    const aspects = [
        {
            icon: "/images/about/functionality.png",
            title: "EXPERTISE & EXECUTION",
            desc: "Comprehensive infrastructure and civil solutions delivered with precision and care. Projects completed on schedule without compromising quality or budget.",
        },
        {
            icon: "/images/about/intellectual-property.png",
            title: "QUALITY & INNOVATION",
            desc: "Strict adherence to industry standards, safety norms, and compliance. Smart construction methods and materials that ensure lasting results.",
        },
        {
            icon: "/images/about/social-science.png",
            title: "TEAM & SUSTAINABILITY",
            desc: "Experienced engineers and trained professionals driving every milestone. Environmentally responsible construction with efficient resource use.",
        },
    ];

    return (
        <section style={{ padding: "80px 0" }} className="aspectsSection">
            <Container>
                {/* Heading */}
                <Reveal>
                <h2 className="text-center text-white fw-bold" style={{ fontSize: "48px" }}>
                    SEE OUR <span className="primary-text-color">ASPECTS</span>
                </h2>
                </Reveal>
                <Reveal>
                <p className="text-center mt-3 mb-5" style={{ color: "#c5c5c5", maxWidth: "820px", margin: "0 auto" }}>
                    At Vitel Infratech Pvt. Ltd., we are defined by the core principles that guide every
                    project — from concept to completion. Here's what makes us a trusted name in infrastructure.
                </p>
                </Reveal>

                {/* Cards */}
                <Row className="g-4 mt-4  animated-card">
                    {aspects.map((item, index) => (
                        <Col key={index} lg={4} md={6} sm={6}>
                            <Card className="shadow-lg bg-none">
                                <div className="box">
                                    <span></span>
                                    <div className="content">
                                        <div className="box-image">
                                        <div>

                                            <div className="aspects-icon mb-3">
                                                 <Image src={item.icon} alt="icon" layout="fill" />
                                            </div>
                                        <Reveal>    
                                        <h4 className="fw-bold text-center">
                                           
                                            {item.title}    
                                        </h4>
                                        </Reveal>

                                        <Reveal>
                                        <p className="text-center mt-3" style={{ color: "#e0e0e0", fontSize: "16px" }}>
                                            {item.desc}
                                        </p>
                                        </Reveal>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>


            </Container>

            
        </section>
    );
}
