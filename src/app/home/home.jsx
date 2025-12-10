'use client'
import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import "../home.css";
import Image from "next/image";
import Header from '../components/Header'
import HeroImg from '../../../public/images/home-img.jpg'
import Card from 'react-bootstrap/Card';
import construction from '../../../public/images/cunstruction.jpg'
import TiltCard from "../components/TiltCard";
import HomeSlider from '../components/home/home-slider'
import AboutCard from '../components/home/about-card'
import OurSection from '../components/home/our-projects'
import OurEquipment from '../components/home/Our-Equipment'
import Footer from '../components/Footer'
import OurWork from '../components/home/our-work'
import { fetchHomeAbout, fetchWork } from "../api/index";
import ClientTestimonial from '../components/Client-Testimonial'
import Achievements from "../components/Achievements";
import Reveal from "../components/Reveal";
import Link from "next/link";

export default function HomePage() {

  const [about, setAbout] = useState(null);
  const [homeWork, setHomeWork] = useState(null);


  useEffect(() => {
    async function loadAbout() {
      const data = await fetchHomeAbout();
 
      setAbout(data);
      setLoading(false);
    }

    loadAbout();
  }, []);

  useEffect(() => {
    async function loadAbout() {
      const data = await fetchWork();
     
      setHomeWork(data);

    }

    loadAbout();
  }, []);
 





  const title = about?.about?.[0]?.title || "";
  const words = title.split(" ");

  const normalText = words.slice(0, -2).join(" ");
  const spanText = words.slice(-2).join(" ");

  // const aboutImage = about?.about?.[0]?.image || "";
  // console.log('about image here ', aboutImage)

  return (
    <>
      <Header />

      {/* Hero section start here  */}

      <div className="container home-slider-wrap">
        <div className="homeSlideWrap">
          <HomeSlider />
        </div>
      </div>

      {/* Hero section end here  */}


      {/* about section start here  */}

      <div className="container">
        <section className="about-section">
          <div className="about-container">

            {/* LEFT TEXT */}
            <div className="flex items-start sm-row-revrse">
              <Card className="shadow-none bg-none border-none" style={{ width: '40rem' }}>
                <div className="about-text">
                  <Reveal>
                  <h2 className="about-title">
                    {/* WE ARE COMMITTED TO <span> BUILD BETTER </span> */}
                    {normalText} <span>{spanText}</span>
                  </h2>
                  </Reveal>

                  <Reveal>

                  <p className="about-desc">
                    {about?.about?.[0]?.description}
                  </p>
                  </Reveal>

                  {/* <p className="about-desc">
                    Over the years, we have successfully delivered projects across
                    multiple sectors, serving Government, Semi-Government, Corporate,
                    and Private organizations. Our approach blends techno-economical
                    methods, advanced construction technology, and sustainable practices
                    to deliver projects that stand as enduring landmarks.
                  </p> */}

                  <Link href="/contact"  className=" primary-btn mt-3">GET A QUOTE</Link>
                </div>
              </Card>

              <Card className="shadow-none bg-none flex items-center border-none justify-center" style={{ width: '30rem' }}>
             

                <AboutCard  />

              </Card>
            </div>




          </div>
        </section>
      </div>

      {/* about section end here  */}

      {/* our project section start here  */}

      <OurSection />

      {/* our project section end here  */}

      {/* our Equipment section start here  */}

      <OurEquipment />

      {/* our Equipment section end here  */}

      {/* our work section start here  */}

      <OurWork/> 

       {/* our work section end here  */}

      <Achievements/> 

      {/* client testimonial section start */}

      <ClientTestimonial/>

      {/* client testimonial section end */}


      {/* footer start here  */}

      <Footer />

    </>
  );
}
