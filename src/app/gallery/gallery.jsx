"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import "../home.css";
import "../../../public/holographic-card.css";
import { fetchProject } from "../api/index";
import Reveal from "../components/Reveal";
import Link from "next/link";
import Header from '../components/Header';
import Footer from '../components/Footer'
import ClientReview from '../components/Client-Testimonial'
import ProjectGallery from "../components/ProjectGallery"

const GalleryPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProject() {
            try {
                const res = await fetchProject();
                console.log("API Response:", res);

                let list = [];

                // Detect response structure
                if (Array.isArray(res)) {
                    list = res;
                } else if (res?.data && Array.isArray(res.data)) {
                    list = res.data;
                } else if (res?.projects && Array.isArray(res.projects)) {
                    list = res.projects;
                } else {
                    console.warn("Unknown API structure:", res);
                }

                // ⭐ Generate slug for each project
                list = list.map((p) => ({
                    ...p,
                    slug: p.projectName
                        ?.toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "") || p._id,  // fallback id as slug
                }));

                console.log("Projects with slug:", list);

                setProjects(list);
            } catch (err) {
                console.error("Error fetching projects:", err);
            }

            setLoading(false);
        }

        loadProject();
    }, []);

    if (loading) return <p className="text-center text-light py-5">Loading Projects...</p>;

    return (
        <>

        <Header/>
      
        <div className="container">
               <ProjectGallery/>
           </div>

        <div className="projects-wrapper">
            <Container>
                <Reveal>
                    <h2 className="projects-heading" style={{ fontSize: "42px", fontWeight: "800" }}>
                        OUR <span className="primary-text-color">PROJECTS</span>
                    </h2>
                </Reveal>

                <Row className="justify-content-center">
                    {projects.length === 0 && (
                        <p className="text-center text-secondary">No Projects Found</p>
                    )}

                    {projects.map((item, index) => (
                        <Col
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            className="d-flex justify-content-center mb-4"
                        >
                            <Link href={`/projects/${item.slug}`} className="projects-link">
                                <Card className="primary-card">
                                    <div className="primary-card-image">
                                        <div className="primary-card-imagewrap holographic-card h-100">
                                            <Image
                                                src={item.bannerImage || item.image || "/placeholder.png"}
                                                layout="fill"
                                                alt={item.projectName}
                                            />
                                        </div>
                                    </div>

                                    <Card.Body className="text-center">
                                        <Reveal>
                                            <Card.Title className="card-title">
                                                {item.projectName}
                                            </Card.Title>
                                        </Reveal>

                                        <Reveal>
                                            <Card.Text className="project-price">
                                                Approx. {item.workValue || item.value || "—"} Lac
                                            </Card.Text>
                                        </Reveal>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>

        <div className="container">
              <ClientReview/>
        </div>

        <Footer/>
        </>
    );
};

export default GalleryPage;
