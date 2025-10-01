import Link from "next/link";

const Dropdown = ({ links }) => {
  return (
    <ul className="dropdown-menu list-none p-4 bg-white rounded-lg absolute top-[50px] left-1/2 transform -translate-x-1/2 opacity-0 scale-95 pointer-events-none transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto shadow-lg z-50">
      {links.map((l, i) => (
        <li key={i}>
          <Link href={`/${l.url}`} className="w-full text-[#2a0b5f] uppercase text-nowrap transition-colors hover:text-[#da9408] px-3 py-4 inline-block transition-colors">
            {l.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
