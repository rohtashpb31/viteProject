"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../home.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { fetchProject } from "../api/index";
import Image from "next/image";

export default function ProjectGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // ⭐ Track current active image

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProject();
      setProjects(data || []);
    };
    loadProjects();
  }, []);

  // ---- Create flat array: [{img, projectName}] ----
  const allImages = projects.flatMap((project) => {
    const before = project?.photoGallery?.before || [];
    const during = project?.photoGallery?.during || [];
    const after = project?.photoGallery?.after || [];

    const all = [...before, ...during, ...after];

    return all.map((imgUrl) => ({
      img: imgUrl,
      title: project.projectName || "Project",
    }));
  });

  if (allImages.length === 0) {
    return <p style={{ textAlign: "center", padding: "20px" }}>Loading...</p>;
  }

  return (
    <>
      <div className="primary-card project-gallery-wrap">
        
        {/* ⭐ PROJECT TITLE OF ACTIVE IMAGE */}
        <h2 className="text-center text-xl font-semibold mb-3 text-white">
          {allImages[activeIndex]?.title}
        </h2>

        {/* Main Swiper */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 projectGallery-Swiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // ⭐ Track active image
        >
          {allImages.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="project-galleryImage">
                <Image src={item.img} alt="Project Image" layout="fill" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
           breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 7 },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {allImages.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className={`project-thumb-image ${
                  activeIndex === i ? "active-thumb" : "inactive-thumb"
                }`}
              >
                <Image src={item.img} alt="Thumb" layout="fill" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
