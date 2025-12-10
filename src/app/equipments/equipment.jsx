"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import "../globals.css";
import { Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import "../home.css";
import "../../../public/holographic-card.css";
import { fetchEquipment } from "../api/index";
import fallbackImg from "../../../public/images/cunstruction.jpg";
import Reveal from "../components/Reveal";

function EQUIPMENTS() {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchEquipment();
      setEquipments(data);
    }
    loadData();
  }, []);

  return (
    <>
      <Header />

      <Banner
        title="High-Performance Equipment for Reliable Construction"
        description="We use advanced, well-maintained construction equipment to ensure safe, accurate, and highly efficient project execution."
        bgImage="/images/home-img3.png"
      />

      

      <section className="projects-wrapper Card-Width">
        <div className="container">
          <div className="text-center mb-5">
            <Reveal>
            <h2 className="projects-heading">
              <span className="primary-text-color"> Our </span> Equipment
            </h2>
            </Reveal>
          </div>

          <Row className="justify-content-center">
            {equipments.map((item, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                className="d-flex justify-content-center mb-4"
              >
                <Card className="primary-card">
                  <div className="primary-card-image">
                    <div className="primary-card-imagewrap holographic-card">
                      <Image
                        src={item.image || fallbackImg}
                        alt={item.title}
                        layout="fill"
                        unoptimized
                      />
                    </div>
                  </div>

                  <Card.Body className="text-center">
                    <Reveal>
                    <Card.Title className="card-title">{item.title}</Card.Title>
                    </Reveal>
                    <Reveal>
                    <Card.Text className="text-gray-300 small">
                      {item.description}
                    </Card.Text>
                    </Reveal>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default EQUIPMENTS;
