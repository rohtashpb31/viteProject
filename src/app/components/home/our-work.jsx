"use client";

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import "../../home.css"; // Make sure this path is correct
import '../../../../public/holographic-card.css'
import Reveal from "../Reveal";

const workData = [
    {
        img: "/images/how-work/Consultation.png",
        title: "Consultation",
        description:'Understanding your requirements, site analysis, and initial project planning with detailed feasibility study.',
        // price: "₹250 Lacs",
    },
    {
        img: "/images/how-work/Planning-&-Design.png",
        title: "Planning & Design",
        description:'Detailed project design, cost estimation, timeline planning, and resource allocation for optimal execution.',
        // price: "₹70.21 Lacs",
    },
    {
        img: "/images/how-work/Execution.png",
        title: "Execution",
        description:'Professional construction with quality materials, modern equipment, and expert supervision at every stage.',
        // price: "₹250 Lacs",
    },
    {
        img: "/images/how-work/Quality-Check.png",
        title: "Quality Check",
        description:'Comprehensive quality inspection, testing, and final handover ensuring 100% client satisfaction.',
        // price: "₹70.21 Lacs",
    },

];

const HowWeWork = () => {
    return (
        <div className="projects-wrapper how-we-work">
            <Container>
                <Reveal>
                <h2 className="projects-heading">Construction  <span className="primary-text-color">work</span> </h2>
                </Reveal>
                <Row className="justify-content-center">
                    {workData.map((item, index) => (
                        <Col
                            key={index}
                            xs={12}
                            sm={6}
                            md={6}
                            lg={3}
                            className="d-flex justify-content-center mb-4"
                        >
                            <Card className="primary-card">
                                <div className="primary-card-image">
                                    <div className="primary-card-imagewrap holographic-card position-relative">
                                        <Image
                                            src={item.img}
                                            layout="fill"
                                            className="project-image"
                                            alt={item.title}
                                        />
                                        
                                    </div>
                                </div>

                                <div className="card-body">
                                    <Reveal> 
                                     <h5 className="text-white">{item.title}</h5>
                                     </Reveal>
                                     <Reveal>
                                     <p className="text-white">
                                        {item.description}
                                     </p>
                                     </Reveal>
                                </div>

                                
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default HowWeWork;
