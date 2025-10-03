const AdmissionInfo = ({ admissions }) => {
  return (
    <>
      {admissions.map((admission, i) => (
        <section key={i} className={`flex flex-col md:flex-row ${i % 2 === 0 ? "md:justify-between bg-[#f4f7ff]" : "md:flex-row-reverse md:justify-between"} overflow-hidden`}>
          <div className="flex flex-col gap-4 py-4 px-20 items-start justify-center md:w-[107ch]">
            <h2 className="text-3xl text-[#da9408] font-bold">{admission.title}</h2>
            <p>{admission.description}</p>
          </div>
          <div className="hidden md:block md:w-[900px]">
            <img src={admission.imageUrl} alt={admission.altText} className="w-full h-auto object-cover" />
          </div>
        </section>
      ))}
      {/* <section className="flex flex-col md:flex-row md:justify-between overflow-hidden">
        <div className="flex flex-col gap-4 py-4 px-20 items-start justify-center md:w-[107ch]">
          <h2 className="text-3xl text-[#da9408] font-bold">Primary Admissions</h2>
          <p>We announces for the information of the general public, applicants, parents and guardians that applications are open for the admission of prospective applicants for the 2025/2026 academic year.</p>
        </div>
        <div className="hidden md:block md:w-[900px]">
          <img src="/images/469020946_8843340025744876_3157290728349908696_n.jpg" alt="Primary Admissions" className="w-full h-auto object-cover" />
        </div>
      </section>
      <section className="flex flex-col md:flex-row-reverse md:justify-between overflow-hidden">
        <div className="flex flex-col gap-4 py-4 px-20 items-start justify-center md:w-[107ch]">
          <h2 className="text-3xl text-[#da9408] font-bold">Primary Admissions</h2>
          <p>We announces for the information of the general public, applicants, parents and guardians that applications are open for the admission of prospective applicants for the 2025/2026 academic year.</p>
        </div>
        <div className="hidden md:block md:w-[900px]">
          <img src="/images/469020946_8843340025744876_3157290728349908696_n.jpg" alt="Primary Admissions" className="w-full h-auto object-cover" />
        </div>
      </section> */}
    </>
  );
};

export default AdmissionInfo;
