"use client";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { fetchSate } from "../api/index";
import Reveal from "./Reveal";

const Achievements = () => {
    const [data, setData] = useState(null);
    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const loadStats = async () => {
            const res = await fetchSate();
            if (Array.isArray(res) && res.length > 0) {
                setData(res[0]);
            }
        };
        loadStats();
    }, []);

    // Trigger counter only when section becomes visible in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect(); // stop observing after counter starts
                }
            },
            {
                threshold: 0.5,       // at least 50% section visible then trigger
                root: null,
                rootMargin: "0px",
            }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    if (!data) return null;

    return (
        <section className="py-16" ref={sectionRef}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                        {data.headline}
                    </h2>
                </Reveal>

                <div className="container">
                    <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 md:grid-cols-4 gap-10 primary-bg-wrap">
                        {data.stats.map((item) => {
                            const pureNumber = parseInt(item.number);

                            return (
                                <div
                                    key={item._id}
                                    className="shadow-md rounded-xl p-6 flex flex-col items-center"
                                >
                                    <h3 className="text-4xl font-extrabold text-blue-600">
                                        <CountUp
                                            start={startCount ? 0 : null}
                                            end={pureNumber}
                                            duration={2}
                                            separator=","
                                            key={item._id + startCount}
                                        />
                                        {item.number.includes("+") && "+"}
                                        {item.number.includes("%") && "%"}
                                    </h3>

                                    <Reveal>
                                        <p className="text-white mt-2 text-lg font-medium">
                                            {item.label}
                                        </p>
                                    </Reveal>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
