import React from "react";
import '../../globals.css'
import Image from "next/image";
import construction from '../../../../public/images/cunstruction.jpg'
import AboutVision from "../../../../public/images/about-vison.png"

const AboutCard = ({ aboutimage }) => {
  return (
    <div>
      <div className="container animated-card">
        <div className="box">
          <span></span>
          <div className="content">
            <div className="box-image">
              <Image
                src={AboutVision}
                width={600}
                height={700}
                alt="about image"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
