import Image from "next/image";
import Link from "next/link";

import { FaSortDown } from "react-icons/fa";
import { HiOutlineViewList } from "react-icons/hi";

const Navbar = () => {
  return (
    <section className="bg-[#ffffff] flex justify-between items-center w-full px-6 md:px-10 py-2">
      <img src="/images/images.jpeg" width={100} height={50} alt="Logo Image" className="h-auto w-[70px]" />
      <nav className="">
        <HiOutlineViewList className="md:hidden text-[#2a0b5f] text-4xl hover:cursor-pointer py-1" />
        <ul className="hidden md:flex justify-around list-none gap-6 md:gap-8 px-2">
          <li>
            <Link href="/" className="flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              Home
            </Link>
          </li>
          <li className="relative dropdown">
            <Link href="/contact" className="flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              <span>Contact</span>
              <FaSortDown />
            </Link>
            <ul className="hidden opacity-0 list-none p-4 bg-white rounded-lg absolute top-[50px] left-1/2 transform -translate-x-1/2">
              <li>
                <Link href="#" className="text-[#2a0b5f] capitalize text-nowrap pt-4 px-3">
                  for admissions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2a0b5f] capitalize text-nowrap pt-4 px-3">
                  for more info
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about" className="flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              <span>About</span>
              <FaSortDown />
            </Link>
          </li>
          <li>
            <Link href="/admissions" className="flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              <span>Admissions</span>
              <FaSortDown />
            </Link>
          </li>
          <li>
            <Link href="/academics" className="flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
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
