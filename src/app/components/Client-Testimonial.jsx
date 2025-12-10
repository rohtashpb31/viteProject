"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Card } from "react-bootstrap";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

import "../home.css";
import "../globals.css";
import "../../../public/holographic-card.css";

import { Navigation, Autoplay } from "swiper/modules";
import ClientImage from '../../../public/images/client.jpg'
import { fetchTestimonials } from "../api/index";
import Reveal from "./Reveal";

// Star Icons
const StarFilled = "/images/icon/star-filled.png";  // Yellow star
const StarEmpty = "/images/icon/star-empty.png";    // Gray star

export default function ClientTestimonial() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            const res = await fetchTestimonials();
            console.log("Client Reviews:", res);

            if (Array.isArray(res)) {
                setReviews(res);
            }
        };

        getReviews();
    }, []);

    // ⭐ RATING FUNCTION — returns 5 stars with active/inactive image
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <div className="client-rating-img">
                <Image
                    key={i}
                    src={i < rating ? StarFilled : StarEmpty}
                    alt="rating star"
                    width={15}
                    height={15}
                />
            </div>
        ));
    };

    return (
        <>
            <div className="projects-wrapper pb-0">
                <Container>
                    <Reveal>
                    <h2 className="projects-heading">
                        Client <span className="primary-text-color">Review</span>
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
                        1024: { slidesPerView: 3, spaceBetween: 50 },
                    }}
                      modules={[Navigation, Autoplay]}
                    className="mySwiper our-equipment"
                >
                    {reviews.length > 0 ? (
                        reviews.map((item) => (
                            <SwiperSlide key={item._id}>
                                <Card className="primary-card client-testimonial-card">

                                    {/* CLIENT IMAGE */}
                                    <div className="client-image">
                                        <Image
                                            src={item?.image && item.image.trim() !== "" ? item.image : ClientImage}
                                            // src={ClientImage}
                                            alt={item?.name || "Client Image"}
                                            fill
                                            unoptimized
                                        />
                                    </div>


                                    {/* TEXT */}
                                    <div>
                                        <Reveal>
                                        <p className="card-title">{item.review}</p>
                                        </Reveal>
                                        <Reveal>
                                        <h5 className="primary-text-color mt-4">{item.name}</h5>
                                        </Reveal>
                                        <Reveal>
                                        {/* <p className="text-white-50">{item.place}</p> */}
                                        </Reveal> 
                                        <div className="client-rating d-flex gap-1 mt-2 ">
                                            {renderStars(item.rating)}
                                        </div>
                                    </div>

                                </Card>
                            </SwiperSlide>
                        ))
                    ) : (
                        <p className="text-center text-white">Loading reviews...</p>
                    )}
                </Swiper>
            </div>
        </>
    );
}
