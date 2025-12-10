"use client";
import { useRef } from "react";

export default function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    card.classList.add("tilt-reset");

    setTimeout(() => {
      card.classList.remove("tilt-reset");
    }, 200);
  };

  return (
    <div className="tilt-card position-relative">
      <div
        ref={cardRef}
        className={`tilt-card-inner ${className}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {children}
      </div>
    </div>
  );
}
