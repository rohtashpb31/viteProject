
import { fetchProject, fetchProjectById } from "../../api/index";
import Image from "next/image";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../home.css'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Autoplay } from "swiper/modules";
// import "swiper/css/navigation";
import Reveal from "../../components/Reveal";


export default async function ProjectDetail({ params }) {

    const { slug } = params;

    const allProjects = await fetchProject();

    const match = allProjects.find((p) => p.slug === slug);

    if (!match) {
        return <p className="text-red-500 text-center py-10">Project Not Found</p>;
    }

    const project = await fetchProjectById(match._id);

    // REAL data yahan hai 👇
    const p = project.data;

    

    return (
        <>
            <Header />



            <div className=" mb-4  project-detail-wrap container space-pt-60">
                <div className="primary-card w-100 p-4 text-white">

                    {/* TITLE + BASIC DETAILS */}

                    <div className="row sm-row-revrse g-4">

                        <div className="col-md-7 text-left">
                            <Reveal>
                                <h2 className="text-white fw-bold mb-3">{p.projectName}</h2>
                            </Reveal>
                            <div className="row g-3">

                                <div className="col-md-6">
                                    <Reveal>
                                        <p><b>Client:</b> {p.client || "N/A"}</p>
                                    </Reveal>
                                </div>

                                <div className="col-md-6">
                                    <Reveal>
                                        <p><b>Location:</b> {p.location || "N/A"}</p>
                                    </Reveal>
                                </div>

                            </div>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <Reveal>
                                        <p><b>Department:</b> {p.department || "N/A"}</p>
                                    </Reveal>
                                </div>

                                <div className="col-md-6">
                                    <Reveal>
                                        <p><b>Status:</b> {p.status || "N/A"}</p>
                                    </Reveal>
                                </div>

                            </div>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <Reveal>
                                        <p><b>Work Value:</b> {p.workValue} Lakhs</p>
                                    </Reveal>
                                </div>

                                <div className="col-md-6">
                                    <Reveal>
                                        <p>
                                            <b>Work Order Date:</b>{" "}
                                            {p.workOrderDate
                                                ? new Date(p.workOrderDate).toLocaleDateString()
                                                : "N/A"}
                                        </p>
                                    </Reveal>

                                </div>

                                <div className="col-md-6">
                                    <Reveal>
                                        <p>
                                            <b>Completion Date:</b>{" "}
                                            {p.completionDate
                                                ? new Date(p.completionDate).toLocaleDateString()
                                                : "Ongoing"}
                                        </p>
                                    </Reveal>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="fw-bold">Ratings</h5>
                                    <div className="text-warning">
                                        {Array.from({ length: Math.round(p?.ratings?.overall || 0) }).map(
                                            (_, i) => (
                                                <span key={i}>⭐</span>
                                            )
                                        )}
                                        {(!p.ratings || p.ratings.overall === 0) && "No Rating"}
                                    </div>
                                </div>


                            </div>




                        </div>

                        <div className="col-md-5">
                            <div className="primary-card-image">

                                {p.bannerImage && (
                                    <div className="primary-card-imagewrap position-relative holographic-card">
                                        <Image
                                            src={p.bannerImage}
                                            fill
                                            className="project-image"
                                            alt={p.projectName}
                                            unoptimized
                                        />

                                    </div>
                                )}
                            </div>
                        </div>

                    </div>


                    <div className="col-md-12 col-lg-12 text-left text-white">





                        <div className="mt-3">
                            <Reveal>
                                <h5 className="fw-bold">Description</h5>
                            </Reveal>
                            <Reveal>
                                <p className="text-white-50">{p.description}</p>
                            </Reveal>
                        </div>




                        {/* DESCRIPTION */}


                        {/* SCOPE */}

                        <div className="mt-3">
                            <Reveal>
                                <h5 className="fw-bold">Scope of Work</h5>
                            </Reveal>
                            <Reveal>
                                <p className="text-white-50">{p.scope}</p>
                            </Reveal>
                        </div>


                    </div>

                    {/* PHOTO GALLERY SECTIONS */}
                    <div className="mt-4 text-white">
                        <div className="w-100">

                            <div className="mt-4 text-white text-center">
                                <h4 className="fw-bold mb-3 photo-gallery-heading">Photo Gallery</h4>

                                <div className="row g-3">

                                    <div className="col-md-4 col-sm-4 col-12">
                                        {/* BEFORE */}
                                        {p.photoGallery?.before?.length > 0 && (
                                            <div className="mb-4">
                                                <h5 className="fw-bold">Before Work</h5>
                                                
                                                    {p.photoGallery.before.map((img, idx) => (
                                                        <div  key={idx}>
                                                            <div className="gallery-img-wrap holographic-card position-relative">
                                                                <Image
                                                                    src={img}
                                                                    layout="fill"
                                                                    alt={`before-${idx}`}
                                                                    className="object-cover rounded"
                                                                    unoptimized
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-4 col-sm-4 col-12">

                                        {/* DURING */}
                                        {p.photoGallery?.during?.length > 0 && (
                                            <div className="mb-4">
                                                <h5 className="fw-bold">During Work</h5>
                                               
                                                    {p.photoGallery.during.map((img, idx) => (
                                                        <div  key={idx}>
                                                            <div className="gallery-img-wrap holographic-card position-relative">
                                                                <Image
                                                                    src={img}
                                                                    layout="fill"
                                                                    alt={`during-${idx}`}
                                                                    className="object-cover rounded"
                                                                    unoptimized
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                
                                            </div>
                                        )}

                                    </div>

                                    <div className="col-md-4 col-sm-4 col-12">

                                        {/* AFTER */}
                                        {p.photoGallery?.after?.length > 0 && (
                                            <div className="mb-4">
                                                <h5 className="fw-bold">After Work</h5>
                                                
                                                    {p.photoGallery.after.map((img, idx) => (
                                                        <div  key={idx}>
                                                            <div className="gallery-img-wrap holographic-card position-relative">
                                                                <Image
                                                                    src={img}
                                                                    layout="fill"
                                                                    alt={`after-${idx}`}
                                                                    className="object-cover rounded"
                                                                    unoptimized
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                
                                            </div>
                                        )}

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

            <Footer />
        </>
    );
}
