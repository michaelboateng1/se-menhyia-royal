const AcademicsCard = ({ title, description, imageUrl, moveTop, index }) => {
  return (
    <div className={`container flex flex-col md:flex-row gap-6 md:items-center md:justify-center ${moveTop ? "flex-col md:flex-row-reverse" : ""} ${index !== 0 ? "md:-mt-14" : "mt-20"}`}>
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold mb-2 text-[#da9408]">{title}</h2>
        <p className="md:w-[40ch]">{description}</p>
      </div>
      <div className="border-8 border-white rounded-md overflow-hidden md:w-[450px] drop-shadow-lg">
        <img src={`/images/${imageUrl}`} alt="" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default AcademicsCard;
