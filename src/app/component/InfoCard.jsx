const InfoCard = ({ children, bgColor }) => {
  return <section className={`bg-[${bgColor}] shadow-lg rounded-lg px-4 py-8 text-center text-white md:w-[400px] w-full h-auto`}>{children}</section>;
};

export default InfoCard;
