// "use client";

// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Banner from "../components/Banner";
// import "../globals.css";
// import { Row, Col, Card } from "react-bootstrap";
// import Image from "next/image";
// import "../../../public/home.css";
// import "../../../public/holographic-card.css";
// import imgGallery from '../../../public/images/cunstruction.jpg'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Autoplay } from "swiper/modules";
// import "swiper/css/navigation";
// import Reveal from "../components/Reveal";

// function GALLERY() {
//     const [projects, setProjects] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchProjects();
//     }, []);

//     const fetchProjects = async () => {
//         try {
//             const res = await fetch("/api/projects");  // ✅ LOCAL PROXY ROUTE
//             const json = await res.json();

//             if (json?.success && json?.data) {
//                 setProjects(json.data);
//             } else if (Array.isArray(json)) {
//                 setProjects(json);
//             } else if (json?.data) {
//                 setProjects(json.data);
//             }

//         } catch (error) {
//             console.log("Error fetching projects:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const getProjectImage = (item) => {
//     // ⭐ First priority → bannerImage
//     if (item?.bannerImage) return item.bannerImage;

//     // ⭐ Fallback → gallery images
//     const gallery = item?.photoGallery;
//     if (gallery?.after?.length > 0) return gallery.after[0];
//     if (gallery?.during?.length > 0) return gallery.during[0];
//     if (gallery?.before?.length > 0) return gallery.before[0];

//     return "/images/ourproject/project1.png";
// };


//     return (
//         <>
//             <Header />


//             <Banner
//                 title="OUR PROJECT GALLERY"
//                 description="Explore our gallery to see our projects, equipment, and on-site operations that reflect our commitment to quality and innovation."
//                 bgImage="/images/home-img3.png"
//             />

//             <div className="projects-wrapper gallary-page-wrap">
//                 <div className="container">
//                     <div className="text-center mb-5">
//                         <Reveal>
//                             <h2 className="projects-heading mb-2">
//                                 OUR <span className="primary-text-color">PROJECT</span> GALLERY
//                             </h2>
//                         </Reveal>
//                         <Reveal>
//                             <p className="text-white-50 mx-auto" style={{ maxWidth: "600px" }}>
//                                 Explore our portfolio of successful infrastructure projects across various sectors
//                             </p>
//                         </Reveal>
//                     </div>

//                     {loading ? (
//                         <div className="text-center text-white">
//                             <h4>Loading...</h4>
//                         </div>
//                     ) : (
//                         <div className="justify-content-center row">
//                             {projects.map((item, index) => {
//                                const imgSrc = getProjectImage(item);

//                                 return (
//                                     <div
//                                         key={index}
//                                         className="d-flex justify-content-center mb-4 col-md-12 col-lg-12"
//                                     >
//                                         <Card className="primary-card w-100 p-4 text-white">

//                                             {/* TITLE + BASIC DETAILS */}

//                                             <div className="row sm-row-revrse g-4">

//                                                 <div className="col-md-7 text-left">
//                                                     <Reveal>
//                                                         <h2 className="text-white fw-bold mb-3">{item.projectName}</h2>
//                                                     </Reveal>
//                                                     <div className="row g-3">

//                                                         <div className="col-md-6">
//                                                             <Reveal>
//                                                                 <p><b>Client:</b> {item.client || "N/A"}</p>
//                                                             </Reveal>
//                                                         </div>

//                                                         <div className="col-md-6">
//                                                             <Reveal>
//                                                                 <p><b>Location:</b> {item.location || "N/A"}</p>
//                                                             </Reveal>
//                                                         </div>

//                                                     </div>

//                                                     <div className="row g-3">
//                                                         <div className="col-md-6">
//                                                             <Reveal>
//                                                                 <p><b>Department:</b> {item.department || "N/A"}</p>
//                                                             </Reveal>
//                                                         </div>

//                                                         <div className="col-md-6">
//                                                             <Reveal>
//                                                                 <p><b>Status:</b> {item.status || "N/A"}</p>
//                                                             </Reveal>
//                                                         </div>

//                                                     </div>

//                                                     <div className="row g-3">
//                                                         <div className="col-md-6">
//                                                             <Reveal>
//                                                                 <p><b>Work Value:</b> {item.workValue} Lakhs</p>
//                                                             </Reveal>
//                                                         </div>

//                                                         <div className="col-md-6">
//                                                             <Reveal>
//                                                                 <p>
//                                                                     <b>Work Order Date:</b>{" "}
//                                                                     {item.workOrderDate
//                                                                         ? new Date(item.workOrderDate).toLocaleDateString()
//                                                                         : "N/A"}
//                                                                 </p>
//                                                             </Reveal>

//                                                         </div>

//                                                         <div className="col-md-6">
//                                                             <Reveal>
//                                                                 <p>
//                                                                     <b>Completion Date:</b>{" "}
//                                                                     {item.completionDate
//                                                                         ? new Date(item.completionDate).toLocaleDateString()
//                                                                         : "Ongoing"}
//                                                                 </p>
//                                                             </Reveal>
//                                                         </div>
//                                                         <div className="col-md-6">
//                                                             <h5 className="fw-bold">Ratings</h5>
//                                                             <div className="text-warning">
//                                                                 {Array.from({ length: Math.round(item?.ratings?.overall || 0) }).map(
//                                                                     (_, i) => (
//                                                                         <span key={i}>⭐</span>
//                                                                     )
//                                                                 )}
//                                                                 {(!item.ratings || item.ratings.overall === 0) && "No Rating"}
//                                                             </div>
//                                                         </div>


//                                                     </div>




//                                                 </div>

//                                                 <div className="col-md-5">
//                                                     <div className="primary-card-image">
//                                                         <div className="primary-card-imagewrap holographic-card">
//                                                             <Image
//                                                                 src={imgSrc}
//                                                                 fill
//                                                                 className="project-image"
//                                                                 alt={item.projectName}
//                                                                 unoptimized
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                             </div>


//                                             <div className="col-md-12 col-lg-12 text-left text-white">





//                                                 <div className="mt-3">
//                                                     <Reveal>
//                                                         <h5 className="fw-bold">Description</h5>
//                                                     </Reveal>
//                                                     <Reveal>
//                                                         <p className="text-white-50">{item.description}</p>
//                                                     </Reveal>
//                                                 </div>




//                                                 {/* DESCRIPTION */}


//                                                 {/* SCOPE */}

//                                                 <div className="mt-3">
//                                                     <Reveal>
//                                                         <h5 className="fw-bold">Scope of Work</h5>
//                                                     </Reveal>
//                                                     <Reveal>
//                                                         <p className="text-white-50">{item.scope}</p>
//                                                     </Reveal>
//                                                 </div>


//                                             </div>

//                                             {/* PHOTO GALLERY SECTIONS */}
//                                             <div className="mt-4 text-white">
//                                                 <div className="row g-3">

//                                                     {/* BEFORE IMAGES */}
//                                                     <div className="col-md-4 col-lg-4 col-sm-6 col-12">
//                                                         {item.photoGallery?.before?.length > 0 && (
//                                                             <div className="mb-4">
//                                                                 <h5 className="fw-bold mb-3">Before</h5>

//                                                                 <Swiper
//                                                                     autoplay={{ delay: 2500, disableOnInteraction: false }}
//                                                                     spaceBetween={10}
//                                                                     modules={[Autoplay]}
//                                                                     slidesPerView={1}
//                                                                     style={{ width: "100%", height: "250px" }}
//                                                                 >
//                                                                     {item.photoGallery.before.map((img, i) => (
//                                                                         <SwiperSlide key={i} className="holographic-card">
//                                                                             <Image
//                                                                                 src={img}
//                                                                                 width={300}
//                                                                                 height={200}
//                                                                                 alt="Before"
//                                                                                 className="img-fluid rounded"
//                                                                                 unoptimized
//                                                                             />
//                                                                         </SwiperSlide>
//                                                                     ))}
//                                                                 </Swiper>

//                                                             </div>
//                                                         )}
//                                                     </div>

//                                                     {/* DURING IMAGES */}
//                                                     <div className="col-md-4 col-lg-4 col-sm-6 col-12">
//                                                         {item.photoGallery?.during?.length > 0 && (
//                                                             <div className="mb-4">
//                                                                 <Reveal>
//                                                                     <h5 className="fw-bold mb-3">During</h5>
//                                                                 </Reveal>
//                                                                 <Swiper
//                                                                     autoplay={{ delay: 2500, disableOnInteraction: false }}
//                                                                     spaceBetween={10}
//                                                                     slidesPerView={1}
//                                                                     modules={[Autoplay]}
//                                                                     style={{ width: "100%", height: "250px" }}
//                                                                 >
//                                                                     {item.photoGallery.during.map((img, i) => (
//                                                                         <SwiperSlide key={i} className="holographic-card">
//                                                                             <Image
//                                                                                 src={img}
//                                                                                 width={300}
//                                                                                 height={200}
//                                                                                 alt="During"
//                                                                                 className="img-fluid rounded"
//                                                                                 unoptimized
//                                                                             />
//                                                                         </SwiperSlide>
//                                                                     ))}
//                                                                 </Swiper>

//                                                             </div>
//                                                         )}
//                                                     </div>

//                                                     {/* AFTER IMAGES */}
//                                                     <div className="col-md-4 col-lg-4 col-sm-6 col-12">
//                                                         {item.photoGallery?.after?.length > 0 && (
//                                                             <div className="mb-4">
//                                                                 <Reveal>
//                                                                     <h5 className="fw-bold mb-3">After</h5>
//                                                                 </Reveal>
//                                                                 <Swiper
//                                                                     autoplay={{ delay: 2500, disableOnInteraction: false }}
//                                                                     spaceBetween={10}
//                                                                     modules={[Autoplay]}
//                                                                     slidesPerView={1}
//                                                                     style={{ width: "100%", height: "250px" }}
//                                                                 >
//                                                                     {item.photoGallery.after.map((img, i) => (
//                                                                         <SwiperSlide key={i} className="holographic-card">
//                                                                             <Image
//                                                                                 src={img}
//                                                                                 width={300}
//                                                                                 height={200}
//                                                                                 alt="After"
//                                                                                 className="img-fluid rounded"
//                                                                                 unoptimized
//                                                                             />
//                                                                         </SwiperSlide>
//                                                                     ))}
//                                                                 </Swiper>

//                                                             </div>
//                                                         )}
//                                                     </div>

//                                                 </div>
//                                             </div>


//                                         </Card>
//                                     </div>

//                                 );
//                             })}
//                         </div>
//                     )}
//                 </div>
//             </div>

//             <Footer />
//         </>
//     );
// }

// export default GALLERY;
