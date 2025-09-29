const ExtracurricularCard = (props) => {
  const { cardImage, cardImageAltText, cardTitle, cardBody, instituteImage, instituteAltText } = props;
  return (
    <section className="bg-[#ffffff] extracurricular-card">
      <div className="relative transition-all duration-[0.3s] extracurricular-image">
        <img src={`/images/${cardImage}`} alt={cardImageAltText} className="w-full h-full object-cover" />
        {/* <p className="text-[#000000] bg-[#ffffff] px-3 py-2 absolute bottom-0 left-0">Abacus Traning</p> */}
      </div>
      <h2 className="px-3 py-4 text-[#2a0b5f] text-xl">{cardTitle}</h2>

      <div className="relative">
        <div className="flex flex-col gap-[4px]">
          <div className="w-full h-[8px] bg-[#660908]"></div>
          <div className="w-[50%] h-[8px] bg-[#660908]"></div>
        </div>
        <img src={`/images/${instituteImage}`} alt={instituteAltText} className="h-[55px] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]" />
      </div>

      <p className="p-4 text-[#2a0b5f]">{cardBody}</p>
    </section>
  );
};

export default ExtracurricularCard;
