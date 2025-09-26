"use client";
import React from "react";
import { useState, useEffect } from "react";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const images = ["140385158_3694857573926506_6586025298240270010_n.jpg", "141037434_3694850973927166_8463685071923821185_n.jpg", "165060036_3872392779506317_2932335964981565502_n.jpg", "165158288_3872392776172984_52699985938394164_n.jpg", "165172177_3872392742839654_6973448772588109516_n.jpg", "165241263_3872392792839649_5614509530255848085_n.jpg", "165491850_3872392769506318_6280323684505087135_n.jpg", "165639898_3872392762839652_4595636999444007239_n.jpg", "165975244_3872451109500484_1455683702820107925_n.jpg", "465226065_8654311911314356_5383156439751233946_n.jpg"];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" w-full h-[82vh] flex items-center justify-center relative overflow-hidden border-b-4 border-[#2a0b5f]">
      <div className="w-full h-full relative flex items-center justify-center z-30">
        <FaArrowAltCircleLeft className="absolute top-1/2 left-4 text-4xl text-white/70 hover:text-white cursor-pointer z-30 select-none" onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)} />
        <FaArrowAltCircleRight className="absolute top-1/2 right-4 text-4xl text-white/70 hover:text-white cursor-pointer z-30 select-none" onClick={() => setCurrent((prev) => (prev + 1) % images.length)} />
      </div>
      <div className="overlay"></div>
      {images.map((img, i) => (
        <img key={img} src={`/images/${img}`} loading="lazy" className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`} />
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((dots, i) => (
          <span key={i} className={`block w-3 h-3 rounded-full bg-white/70 border border-white transition-all duration-300 ${i === current ? "scale-125 bg-white" : "opacity-60"}`} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
