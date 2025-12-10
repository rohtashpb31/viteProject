"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Card, Container } from "react-bootstrap";

import "swiper/css";
import "swiper/css/navigation";
import "../../home.css";
import "../../globals.css";
import "../../../../public/holographic-card.css";

import { Navigation, Autoplay } from "swiper/modules";
import { fetchEquipment } from "../../api/index";
import Reveal from "../Reveal";

export default function App() {

  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    async function loadEquipment() {
      const data = await fetchEquipment();
      console.log("Equipment API Response:", data);
      setEquipment(data);
    }

    loadEquipment(); // 👉 Correct function call
  }, []);

  return (
    <>
      <div className="projects-wrapper pb-0">
        <Container>
            <Reveal>
          <h2 className="projects-heading">
            <span className="primary-text-color"> Our </span> Equipment
          </h2>
          </Reveal>
        </Container>
      </div>

      <div className="container">
        <Swiper
          navigation={false}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 40 },
            1024: { slidesPerView: 4, spaceBetween: 50 },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper our-equipment"
        >

          {/* ------------------------------------
              🔥 Dynamic Slides From API (map)
          -------------------------------------- */}
          {equipment.length > 0 &&
            equipment.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <Card className="primary-card h-100">
                    <div className="primary-card-image">
                      <div className="primary-card-imagewrap holographic-card">
                        <Image
                          src={item.image}  // API image URL
                          fill
                          className="project-image"
                          alt={item.title}
                        />
                      </div>
                    </div>

                    <Card.Body className="text-center">
                        <Reveal>
                      <Card.Title className="card-title text-ellips">
                        {item.title}
                      </Card.Title>
                      </Reveal>
                    </Card.Body>
                  </Card>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
