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
    image_url: "474620083_9136532429758966_2734070134717654559_n.jpg",
    title: "Something",
    facility: "Lab",
    tag: "playingground",
  },
  {
    image_url: "482319218_9370807792998094_6614674720508934283_n.jpg",
    title: "Something",
    facility: "I.C.T Lab",
    tag: "labs",
  },
  {
    image_url: "481904423_9370807692998104_3925062726241165675_n.jpg",
    title: "Something",
    facility: "I.C.T Lab",
    tag: "playingground",
  },
  {
    image_url: "469181416_8843340015744877_598972008993789511_n.jpg",
    title: "Something",
    facility: "I.C.T Lab",
    tag: "classrooms",
  },
  {
    image_url: "469419844_8843339762411569_1302861286277831352_n.jpg",
    title: "Something",
    facility: "I.C.T Lab",
    tag: "classrooms",
  },
];

const Facilities = () => {
  const [selected, setSelected] = useState("all");

  return (
    <section className="max-w-7xl mx-auto mt-5 py-5 px-4 md:px-10">
      <h2 className="text-2xl text-[#da9408] py-5 px-3 md:px-5 uppercase md:text-center md:w-[200px] text-nowrap mb-10 md:mb-20 md:mx-auto md:border-b-4 md:border-[#da9408]">facilities</h2>
      <FacilitiesNav setSelected={setSelected} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center max-w-7xl mx-auto gap-8 md:gap-10 px-0 py-3 mt-10 h-auto">
        {facilities.map((data, i) => {
          const display = data.tag === selected || selected === "all";
          return display && <FacilitiesCard key={i} facilityData={data} selected={selected} />;
        })}
      </div>
    </section>
  );
};

export default Facilities;
