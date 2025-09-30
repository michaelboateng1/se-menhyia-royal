const ExtracurricularCard = (props) => {
  const { cardImage, cardImageAltText, cardTitle, cardBody, instituteImage, instituteAltText } = props;
  return (
    <section className="bg-[#ffffff] extracurricular-card max-w-xs w-full rounded-lg shadow-md flex flex-col">
      <div className="relative transition-all duration-300 extracurricular-image rounded-t-lg overflow-hidden h-48">
        <img src={`/images/${cardImage}`} alt={cardImageAltText} className="w-full h-full object-cover" />
      </div>
      <h2 className="px-4 py-4 text-[#2a0b5f] text-xl font-semibold">{cardTitle}</h2>

      <div className="relative mb-2">
        <div className="flex flex-col gap-[4px]">
          <div className="w-full h-[8px] bg-[#660908]"></div>
          <div className="w-[50%] h-[8px] bg-[#660908]"></div>
        </div>
        <img src={`/images/${instituteImage}`} alt={instituteAltText} className="h-[48px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow" />
      </div>

      <p className="px-4 pb-4 pt-3 text-[#2a0b5f] text-sm">{cardBody}</p>
    </section>
  );
};

export default ExtracurricularCard;
