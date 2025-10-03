import InfoCard from "@/app/component/InfoCard";
import { MdContactPhone } from "react-icons/md";
import { HiMiniInformationCircle } from "react-icons/hi2";

import { FaHome } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-nowrap gap-10 p-4 mt-20 mx-auto">
      <InfoCard bgColor="#660908">
        <FaHome className="text-center text-3xl text-white bg-[#660908] p-3 rounded-full w-[60px] h-[60px] mx-auto -mt-[55px] drop-shadow-md" />
        <h2 className="font-bold text-lg pt-4 pb-2">Info Card</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </InfoCard>
      <InfoCard bgColor="#da9408">
        <MdContactPhone className="text-center text-3xl text-white bg-[#da9408] p-3 rounded-full w-[60px] h-[60px] mx-auto -mt-[55px] drop-shadow-md" />
        <h2 className="font-bold text-lg pt-4 pb-2">Info Card</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </InfoCard>
      <InfoCard bgColor="#2a0b5f">
        <HiMiniInformationCircle className="text-center text-3xl text-white bg-[#2a0b5f] p-3 rounded-full w-[60px] h-[60px] mx-auto -mt-[55px] drop-shadow-md" />
        <h2 className="font-bold text-lg pt-4 pb-2">Info Card</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </InfoCard>
    </div>
  );
};

export default ContactInfo;
