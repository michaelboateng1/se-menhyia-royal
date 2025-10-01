const SchoolActivitiesCard = ({ cardImage, cardImageAltText, cardTitle }) => {
  return (
    <div className="relative max-w-xs w-full h-60 rounded-lg overflow-hidden shadow-lg hover:shadow-0">
      <img src={`/images/${cardImage}`} alt={cardImageAltText} className="w-full h-full object-cover" />
      <h3 className="absolute bottom-0 left-0 right-0 bg-[#ffffff] bg-opacity-50 text-[#2a0b5f] p-2 text-center font-semibold text-lg">{cardTitle}</h3>
    </div>
  );
};

export default SchoolActivitiesCard;
