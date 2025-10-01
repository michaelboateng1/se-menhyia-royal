import Image from "next/image";
import Link from "next/link";

import Dropdown from "./Dropdown";

import { FaSortDown } from "react-icons/fa";
import { HiOutlineViewList } from "react-icons/hi";

const contactDropdown = [
  {
    url: "/moreinfo",
    text: "something",
  },
  {
    url: "/somthingelse",
    text: "somthingelse",
  },
  {
    url: "/somthingelse",
    text: "somthingelse",
  },
];

const aboutDropdown = [
  {
    url: "/moreinfo",
    text: "something",
  },
  {
    url: "/somthingelse",
    text: "somthingelse",
  },
  {
    url: "/somthingelse",
    text: "somthingelse",
  },
];

const amissionsDropdown = [
  {
    url: "/moreinfo",
    text: "something",
  },
  {
    url: "/somthingelse",
    text: "somthingelse",
  },
  {
    url: "/somthingelse",
    text: "somthingelse",
  },
];

const academicsDropdown = [
  {
    url: "/moreinfo",
    text: "something",
  },
  {
    url: "/somthingelse",
    text: "somthingelse",
  },
  {
    url: "/somthingelse",
    text: "somthingelse",
  },
];
const Navbar = () => {
  return (
    <section className="bg-[#ffffff] flex justify-between items-center w-full px-6 md:px-10">
      <img src="/images/images.jpeg" width={100} height={50} alt="Logo Image" className="h-auto w-[70px]" />
      <nav className="">
        <HiOutlineViewList className="md:hidden text-[#2a0b5f] text-4xl hover:cursor-pointer py-1" />
        <ul className="hidden md:flex justify-around list-none gap-6 md:gap-8 px-2">
          <li>
            <Link href="/" className="py-4 flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link href="/contact" className="py-4 flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              <span>Contact</span>
              <FaSortDown />
            </Link>
            <Dropdown links={contactDropdown} />
          </li>
          <li className="relative group">
            <Link href="/about" className="py-4 flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              <span>About</span>
              <FaSortDown />
            </Link>
            <Dropdown links={aboutDropdown} />
          </li>
          <li className="relative group">
            <Link href="/admissions" className="py-4 flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              <span>Admissions</span>
              <FaSortDown />
            </Link>
            <Dropdown links={amissionsDropdown} />
          </li>
          <li className="relative group">
            <Link href="/academics" className="py-4 flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              <span>Academics</span>
              <FaSortDown />
            </Link>
            <Dropdown links={academicsDropdown} />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
