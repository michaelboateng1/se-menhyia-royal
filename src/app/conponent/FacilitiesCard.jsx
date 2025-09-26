const FacilitiesCard = ({ facilityData, selected }) => {
  const { image_url, title, facility } = facilityData;
  return (
    <div className="rounded-[5px] w-full h-auto relative overflow-hidden border-2 border-[#ccc] hover:scale-105 transition-all duration-300 cursor-pointer">
      <img src={`/images/${image_url}`} alt="" className="w-full h-full object-cover" />
      <div className="facilities-text-bg w-full text-white py-10 px-5 absolute bottom-0 right-0">
        <h3 className="font-bold text-2xl text-[#fff] uppercase">{title}</h3>
        <p className="uppercase text-[#ccc]">{facility}</p>
      </div>
    </div>
  );
};

export default FacilitiesCard;
