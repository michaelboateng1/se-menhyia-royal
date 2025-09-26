"use client";
const FacilitiesNav = ({ setSelected }) => {
  return (
    <nav className="w-[50vw] mx-auto p-3 facilities-nav-font">
      <ul className="flex justify-around items-center list-none">
        <li className="py-2 px-5 border border-[#da9408] hover:bg-[#da9408] hover:shadow-xl hover:shadow-[hsla(40,93%,44%, 0.7)] transition-colors rounded-[10px] capitalize cursor-pointer" onClick={(e) => setSelected("all")}>
          all
        </li>
        <li className="py-2 px-5 border border-[#da9408] hover:bg-[#da9408] transition-colors duration-100 rounded-[10px] capitalize cursor-pointer" onClick={(e) => setSelected("classrooms")}>
          class rooms
        </li>
        <li className="py-2 px-5 border border-[#da9408] hover:bg-[#da9408] transition-colors duration-100 rounded-[10px] capitalize cursor-pointer" onClick={(e) => setSelected("playingground")}>
          playing ground
        </li>
        <li className="py-2 px-5 border border-[#da9408] hover:bg-[#da9408] transition-colors duration-100 rounded-[10px] capitalize cursor-pointer" onClick={(e) => setSelected("labs")}>
          labs
        </li>
      </ul>
    </nav>
  );
};

export default FacilitiesNav;
