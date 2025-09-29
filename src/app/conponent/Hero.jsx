"use client";
import React from "react";
import { useState, useEffect } from "react";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const images = [
  {
    image: "140385158_3694857573926506_6586025298240270010_n.jpg",
    caption: "students in a classroom setting",
  },
  {
    image: "141037434_3694850973927166_8463685071923821185_n.jpg",
    caption: "Students enjoying their time",
  },
  {
    image: "165060036_3872392779506317_2932335964981565502_n.jpg",
    caption: "A lively classroom atmosphere",
  },
  {
    image: "165158288_3872392776172984_52699985938394164_n.jpg",
    caption: "Collaborative group work",
  },
  {
    image: "165172177_3872392742839654_6973448772588109516_n.jpg",
    caption: "Engaging in hands-on activities",
  },
  {
    image: "165241263_3872392792839649_5614509530255848085_n.jpg",
    caption: "Abacus training session",
  },
  {
    image: "165491850_3872392769506318_6280323684505087135_n.jpg",
    caption: "Peaceful study environment",
  },
  {
    image: "165639898_3872392762839652_4595636999444007239_n.jpg",
    caption: "Collaborative learning",
  },
  {
    image: "165975244_3872451109500484_1455683702820107925_n.jpg",
    caption: "Students engaged in a project",
  },
  {
    image: "465226065_8654311911314356_5383156439751233946_n.jpg",
    caption: "A beautiful view of the campus",
  },
];

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
      {images.map((slide, i) => (
        <img key={i} src={`/images/${slide.image}`} alt={slide.caption} loading="lazy" className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`} />
      ))}

      <h1 className="school-name absolute top-2/4 left-2/4 transform -translate-x-1/2 text-3xl md:text-5xl font-bold text-white drop-shadow-lg md:text-nowrap z-20">Se-Manhyia Royal International School</h1>

      {
        images.map((slide, i) => (
          <div key={i} className={`absolute bottom-20 md:bottom-32 w-full text-center text-white px-4 transition-opacity duration-1000 ${i === current ? "opacity-100 z-20" : "opacity-0 z-0"}`}>
            <p className="school-name text-2xl md:text-4xl font-semibold drop-shadow-lg">{slide.caption}</p>
          </div>
        ))[current]
      }

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((dots, i) => (
          <span key={i} className={`block w-3 h-3 rounded-full bg-white/70 border border-white transition-all duration-300 ${i === current ? "scale-125 bg-white" : "opacity-60"}`} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
