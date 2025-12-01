"use client"

import Link from "next/link";
import {AppStore} from "../store/store";
import {useContext} from "react";

import Dropdown from "./Dropdown";

import { FaSortDown } from "react-icons/fa";
import { HiOutlineViewList } from "react-icons/hi";

const aboutDropdown = [
  {
    url: "about/about-us",
    text: "About Us",
  },
  {
    url: "about/faq",
    text: "Frequently Asked Questions",
  }
];



const Navbar = () => {
  const {state, dispatch} = useContext(AppStore);
  const hundleMobileNav = () => {
		console.log("you clicked me")
		dispatch({type: "mobileNav", payload: !state.mobileNav});
	}
  return (
    <section className="bg-[#ffffff] flex justify-between items-center w-full px-6 lg:px-10">
      <img src="/images/images.jpeg" width={100} height={50} alt="Logo Image" className="h-auto w-[70px]" />
      <nav className="">
        <HiOutlineViewList className="lg:hidden text-[#2a0b5f] text-4xl hover:cursor-pointer py-1" onClick={() => hundleMobileNav()} />
        <ul className="hidden lg:flex justify-around list-none gap-6 lg:gap-8 px-2">
          <li>
            <Link href="/" className="py-4 flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link href="/about" className="py-4 flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              <span>About</span>
              <FaSortDown />
            </Link>
            <Dropdown links={aboutDropdown} />
          </li>
          <li className="relative group">
            <Link href="/contact" className="py-4 flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              Contact
            </Link>
          </li>
          <li className="relative group">
            <Link href="/admissions" className="py-4 flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              <span>Admissions</span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/academics" className="py-4 flex gap-2 justify-around text-[#2a0b5f] text-xl uppercase hover:text-[#da9408] transition-colors">
              <span>Academics</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};


export default Navbar;
