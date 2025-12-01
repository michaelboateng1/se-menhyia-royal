const AdmissionInfo = ({ academics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {academics.map((academics, i) => (
        <section key={i} className={`flex flex-col ${i % 2 === 0 ? "justify-between bg-[#f4f7ff] text-black" : "flex-col-reverse justify-between customGradient text-white"} overflow-hidden`}>
          <div className="flex flex-col gap-4 py-10 px-20 items-start justify-start w-full h-[500px]">
            <h2 className="text-3xl text-[#da9408] font-bold">{academics.title}</h2>
            <p>{academics.description}</p>
          </div>
          <div className="w-full h-[500px]">
            <img src={academics.imageUrl} alt={academics.altText} className="w-full h-full object-cover" />
          </div>
        </section>
      ))}
    </div>
  );
};

export default AdmissionInfo;
