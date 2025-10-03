"use client";
import { useState } from "react";

import { RiArrowDownSLine } from "react-icons/ri";

const FreaquentlyAskedQuestions = ({ faq }) => {
  const [open, setopen] = useState(null);

  const toggleFAQ = (index) => {
    setopen(open === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto mt-5 py-5 px-4 md:px-10">
      <h2 className="mb-4 p-4 text-center font-bold text-2xl">Frequently Asked Questions</h2>
      <div className="container mx-auto max-w-[800px] space-y-4 p-4">
        {faq.map((item, i) => (
          <div key={i} className="border-t-4 border-[#da9408] rounded-[5px] shadow-sm p-4 mb-10">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFAQ(i)}>
              <h3 className={`text-xl font-bold px-4`}>{item.question}</h3>
              <RiArrowDownSLine className={`text-3xl transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
            </div>
            <p className={` transition-all duration-300 px-6 ${open === i ? "opacity-100 max-h-screen py-4 px-6" : "opacity-0 max-h-0 py-0 overflow-hidden"}`}>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreaquentlyAskedQuestions;
