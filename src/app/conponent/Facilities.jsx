"use client";
import { useState } from "react";

import FacilitiesNav from "./FacilitiesNav";
import FacilitiesCard from "./FacilitiesCard";

const facilities = [
  {
    image_url: "46425883_1996769483735332_7583241781630730240_n.jpg",
    title: "Something",
    facility: "I.C.T Lab",
    tag: "classrooms",
  },
  {
    image_url: "46425883_1996769483735332_7583241781630730240_n.jpg",
    title: "Something",
    facility: "Lab",
    tag: "playingground",
  },
  {
    image_url: "46425883_1996769483735332_7583241781630730240_n.jpg",
    title: "Something",
    facility: "I.C.T Lab",
    tag: "labs",
  },
  {
    image_url: "46425883_1996769483735332_7583241781630730240_n.jpg",
    title: "Something",
    facility: "I.C.T Lab",
    tag: "playingground",
  },
  {
    image_url: "46425883_1996769483735332_7583241781630730240_n.jpg",
    title: "Something",
    facility: "I.C.T Lab",
    tag: "classrooms",
  },
  {
    image_url: "46425883_1996769483735332_7583241781630730240_n.jpg",
    title: "Something",
    facility: "I.C.T Lab",
    tag: "classrooms",
  },
];

const Facilities = () => {
  const [selected, setSelected] = useState("all");

  return (
    <section className="mt-5 py-5 px-10">
      <h2 className="text-2xl text-[#da9408] py-5 px-2 uppercase text-center w-[20%] text-nowrap mb-10 mx-auto border-b-4 border-[#da9408]">facilities</h2>
      <FacilitiesNav setSelected={setSelected} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center w-[95vw] gap-10 px-5 py-3 mt-10 h-auto">
        {facilities.map((data) => {
          const display = data.tag === selected || selected === "all";
          return display && <FacilitiesCard facilityData={data} selected={selected} />;
        })}
      </div>
    </section>
  );
};

export default Facilities;
