"use client";
import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";

function Banner({ title, description, bgImage }) {
    return (
        <>
            <div className="container space-xs-pt">
                <div className=" primary-bg-wrap">
                    <div
                        className="banner-global"
                        style={{
                            backgroundImage: bgImage ? `url(${bgImage})` : "none",
                        }}
                    >
                        <div className="overlay"></div>

                        <Container className="content">
                            <h4 className="title">{title}</h4>
                            <p className="desc">{description}</p>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
