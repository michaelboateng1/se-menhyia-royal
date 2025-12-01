"use client"
import { FaTimes } from 'react-icons/fa';
import Link from "next/link";
import { useContext } from "react";
import { AppStore } from "../store/store";

const MobileNav = () => {
    const {state, dispatch} = useContext(AppStore);
    const mobileNav = state.mobileNav;
    return (
          <nav className={`lg:hidden overflow-hidden fixed z-50 top-0 left-0 w-full h-full bg-white text-[#2a0b5f] transition-opacity duration-600 ${mobileNav ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
	      <div className="flex justify-end items-center  p-10 text-3xl">
	    	<FaTimes onClick={() => dispatch({type: "mobileNav", payload: !mobileNav})}/>
	      </div>
              	<ul className="flex flex-col gap-5 mt-10 justify-between items-center text-center font-semibold">
                  	<li>
                      		<Link href="/" onClick={() => dispatch({type: 'mobileNav', payload: !mobileNav})} className="text-lg hover:text-[#660908] transition-colors duration-300">Home</Link>
                  	</li>
                  	<li>
                      		<Link href="/about" onClick={() => dispatch({type: 'mobileNav', payload: !mobileNav})} className="text-lg hover:text-[#660908] transition-colors duration-300">About</Link>
                  	</li>
                  	<li>
                      		<Link href="/contact" onClick={() => dispatch({type: 'mobileNav', payload: !mobileNav})} className="text-lg hover:text-[#660908] transition-colors duration-300">Contact</Link>
                  	</li>
                  	<li>
                      		<Link href="/admissions" onClick={() => dispatch({type: 'mobileNav', payload: !mobileNav})} className="text-lg hover:text-[#660908] transition-colors duration-300">Admissions</Link>
                  	</li>
                  	<li>
                      		<Link href="/academics" onClick={() => dispatch({type: 'mobileNav', payload: !mobileNav})} className="text-lg hover:text-[#660908] transition-colors duration-300">Academics</Link>
                  	</li>
              	</ul>
          </nav>
    );
}

export default MobileNav
