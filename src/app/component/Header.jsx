import Link from "next/link";

import Navbar from "./Navbar";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full bg-white shadow fixed top-0 left-0 z-31">
      <section className="bg-[#660908] py-2 px-5 flex items-center justify-between">
        <div className="flex flex-wrap-reverse gap-1 md:gap-5 items-center justify-center md:justify-start w-full">
          <Link href="tel:+233-2345-245-234" className="text-white">
            <FaPhoneAlt className="inline mr-2 mb-1" />
            <span>+233-2345-245-234</span>
          </Link>
          <Link href="mailto:info@se-menhyia-royal.edu.gh" className="text-white">
            <MdEmail className="inline mr-2 mb-1" />
            <span>info@se-menhyia-royal.edu.gh</span>
          </Link>
        </div>

        <div className="hidden md:flex justify-around items-center gap-5">
          <Link href="/admissions" className="text-white flex items-center">
            <FaRegAddressCard className="inline mr-2 mb-1" />
            <span>Admissions</span>
          </Link>
          <Link href="/alumni" className="text-white flex items-center">
            <FaPeopleGroup className="inline mr-2 mb-1" />
            <span>Alumni</span>
          </Link>
        </div>
      </section>
      <Navbar />
    </header>
  );
};

export default Header;
