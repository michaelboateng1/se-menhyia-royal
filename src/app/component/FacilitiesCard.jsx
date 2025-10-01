const FacilitiesCard = ({ facilityData }) => {
  const { image_url, title, facility } = facilityData;
  return (
    <div className="rounded-[5px] w-[300px] h-[300px] relative overflow-hidden border-8 border-[#fff] cursor-pointer facilities-transition shadow-lg">
      <img src={`/images/${image_url}`} alt="" className="w-full h-full object-cover transition-all duration-[0.3s]" />
      <div className="flex flex-col justify-end facilities-text text-white p-5 absolute top-0 left-0 w-full h-full">
        <h3 className="font-bold text-xl text-[#fff] uppercase">{title}</h3>
        <p className="uppercase text-[#ccc]">{facility}</p>
      </div>
    </div>
  );
};

export default FacilitiesCard;
