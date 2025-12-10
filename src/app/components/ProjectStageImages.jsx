

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectStageImages({ before = [], during = [], after = [] }) {
    return (
        <div className="row g-3 mt-4 text-white">

            {/* BEFORE */}
            <div className="col-md-4 col-sm-6 col-12">
                {before.length > 0 && (
                    <div className="mb-4">
                        <h5 className="fw-bold mb-3">Before</h5>
                        <Swiper
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            spaceBetween={10}
                            slidesPerView={1}
                            modules={[Autoplay]}
                            style={{ width: "100%", height: "250px" }}
                        >
                            {before.map((img, i) => (
                                <SwiperSlide key={i} className="holographic-card">
                                    <Image
                                        src={img}
                                        width={300}
                                        height={200}
                                        alt="Before"
                                        className="img-fluid rounded"
                                        unoptimized
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>

            {/* DURING */}
            <div className="col-md-4 col-sm-6 col-12">
                {during.length > 0 && (
                    <div className="mb-4">
                        <h5 className="fw-bold mb-3">During</h5>
                        <Swiper
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            spaceBetween={10}
                            slidesPerView={1}
                            modules={[Autoplay]}
                            style={{ width: "100%", height: "250px" }}
                        >
                            {during.map((img, i) => (
                                <SwiperSlide key={i} className="holographic-card">
                                    <Image
                                        src={img}
                                        width={300}
                                        height={200}
                                        alt="During"
                                        className="img-fluid rounded"
                                        unoptimized
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>

            {/* AFTER */}
            <div className="col-md-4 col-sm-6 col-12">
                {after.length > 0 && (
                    <div className="mb-4">
                        <h5 className="fw-bold mb-3">After</h5>
                        <Swiper
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            spaceBetween={10}
                            slidesPerView={1}
                            modules={[Autoplay]}
                            style={{ width: "100%", height: "250px" }}
                        >
                            {after.map((img, i) => (
                                <SwiperSlide key={i} className="holographic-card">
                                    <Image
                                        src={img}
                                        width={300}
                                        height={200}
                                        alt="After"
                                        className="img-fluid rounded"
                                        unoptimized
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>
        </div>
    );
}
