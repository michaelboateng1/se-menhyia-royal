import Image from "next/image";
import Link from "next/link";

import { FaSortDown } from "react-icons/fa";
import { HiOutlineViewList } from "react-icons/hi";

const Navbar = () => {
  return (
    <section className="bg-[#ffffff] flex justify-between items-center w-full px-4">
      <img src="/images/images.jpeg" width={100} height={50} alt="Logo Image" className="pl-5" />
      <nav className="pr-8 md:pr-0">
        <HiOutlineViewList className="md:hidden text-[#2a0b5f] text-4xl hover:cursor-pointer" />
        <ul className="hidden md:flex justify-around list-none gap-8 px-2">
          <li>
            <Link href="/" className="flex gap-2 justify-around text-[#2a0b5f] text-2xl uppercase hover:text-[#da9408] transition-colors">
              <span>Home</span>
              <FaSortDown />
            </Link>
          </li>
          <li>
            <Link href="/contact" className="flex gap-2 justify-around text-[#2a0b5f] text-2xl uppercase hover:text-[#da9408] transition-colors">
              <span>Contact</span>
              <FaSortDown />
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex gap-2 justify-around text-[#2a0b5f] text-2xl uppercase hover:text-[#da9408] transition-colors">
              <span>About</span>
              <FaSortDown />
            </Link>
          </li>
          <li>
            <Link href="/admissions" className="flex gap-2 justify-around text-[#2a0b5f] text-2xl uppercase hover:text-[#da9408] transition-colors">
              <span>Admissions</span>
              <FaSortDown />
            </Link>
          </li>
          <li>
            <Link href="/academics" className="flex gap-2 justify-around text-[#2a0b5f] text-2xl uppercase hover:text-[#da9408] transition-colors">
              <span>Academics</span>
              <FaSortDown />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
