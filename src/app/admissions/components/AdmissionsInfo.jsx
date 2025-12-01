const AdmissionInfo = ({ admissions }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {admissions.map((admissions, i) => (
        <section key={i} className={`flex flex-col ${i % 2 === 0 ? "justify-between bg-[#f4f7ff] text-black" : "flex-col-reverse justify-between customGradient text-white"} overflow-hidden`}>
          <div className="flex flex-col gap-4 py-4 px-20 items-start justify-center w-full h-[400px]">
            <h2 className="text-3xl text-[#da9408] font-bold">{admissions.title}</h2>
            <p>{admissions.description}</p>
          </div>
          <div className="w-full h-[400px]">
            <img src={admissions.imageUrl} alt={admissions.altText} className="w-full h-full object-cover" />
          </div>
        </section>
      ))}
    </div>
  );
};

export default AdmissionInfo;
