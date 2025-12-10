"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "../../globals.css";
import { Navigation, Autoplay } from "swiper/modules";

import { fetchHeroes } from "../../api/index";
import Reveal from "../Reveal";
import Link from "next/link";

export default function HomeSlider() {
    const [slide1, setSlide1] = useState(null);
    const [slide2, setSlide2] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadHeroes() {
            const data = await fetchHeroes();
            console.log("home slider data", data);
            

            if (Array.isArray(data)) {
                setSlide1(data[0]); // first slide data
                setSlide2(data[1]); // second slide data
                console.log("Slide 2 Image URL:", slide2?.backgroundImg);
            }

            setLoading(false);
        }

        loadHeroes();
    }, []);

    if (loading || !slide1 || !slide2) {
        return (
            <div style={{
                height: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "20px"
            }}>
                Loading...
            </div>
        );
    }

    return (
        <>
            <Swiper
                navigation={false}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >

                {/* -----------------------------------
                      SLIDE 1 (VIDEO OR IMAGE)
                ------------------------------------ */}
                <SwiperSlide>

                    {slide1.isVideoBackground ? (
                        <div className="hero-section home-slide">
                            <video
                                src={slide1.backgroundVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="slide-video"
                            />
                            <div className="hero-content">
                                <Reveal>
                                <h1>{slide1.title}</h1>
                                </Reveal>
                                <Reveal>
                                <p>{slide1.subtitle}</p>
                                </Reveal>
                                <Reveal>
                                <Link className="primary-btn" href={'/contact'} >GET IN TOUCH</Link>
                                </Reveal>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="hero-section home-slide"
                            style={{
                                backgroundImage: `url(${slide1.backgroundImg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="hero-content">
                                <Reveal>
                                <h1>{slide1.title}</h1>
                                </Reveal>
                                <Reveal>
                                <p>{slide1.subtitle}</p>
                                </Reveal>
                                <Reveal>
                                <Link className="primary-btn" href={'/contact'} >GET IN TOUCH</Link>
                                </Reveal>
                            </div>
                        </div>
                    )}

                </SwiperSlide>


                {/* -----------------------------------
                      SLIDE 2 (VIDEO OR IMAGE)
                ------------------------------------ */}
                <SwiperSlide>

                    {slide2.isVideoBackground ? (
                        <div className="hero-section home-slide">
                            <video
                                src={slide2.backgroundVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="slide-video"
                            />
                            <div className="hero-content">
                                <h1>{slide2.title}</h1>
                                <p>{slide2.subtitle}</p>
                                <button className="primary-btn">GET IN TOUCH</button>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="hero-section home-slide"
                            style={{
                                backgroundImage: `url(${slide2.backgroundImg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="hero-content">
                                <h1>{slide2.title}</h1>
                                <p>{slide2.subtitle}</p>
                                <button className="primary-btn">GET IN TOUCH</button>
                            </div>
                        </div>
                    )}

                </SwiperSlide>

            </Swiper>
        </>
    );
}
