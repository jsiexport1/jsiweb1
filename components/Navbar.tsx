"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); 

    return (
      <nav className={`fixed z-50 md:block md:px-10 transition-all duration-300 bg-[#98572b] py-1`}>
      <div className="mx-auto px-6 sm:px-6 lg:px-8 bg-zinc-900 md:bg-transparent pt-4 md:py-0">
        <div className="relative grid grid-cols-3 w-[100vw] h-16 items-center justify-between">
            <a href="#home">
                <Image
                    src="/logotext.png"
                    alt="Vercel Logo"
                    className="col-span-1 rounded-full"
                    width={80}
                    height={35}
                    priority
                />
            </a>
            <div className="sm:hidden col-span-2 pl-40 block">
                <button onClick={()=>setIsMenu(!isMenu)}>
                    <IoMenu className="text-4xl text-white" />
                </button>
            </div>
            <div className="col-span-2">
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        <a href="/" className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white" aria-current="page">Home</a>
                        <a href="#collections" className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Collections</a>
                        <a href="/about" className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white">About</a>
                        <a href="#contact" className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={`sm:hidden ${isMenu ? "block" : "hidden"} bg-zinc-900 pb-4"`}>
      <div className="space-y-1 px-2 pb-3 pt-2 transition-all duration-300">
        <a href="/" onClick={()=>setIsMenu(false)} className="block rounded-md px-5 py-2 text-base font-medium text-gray-300 hover:text-white" aria-current="page">Home</a>
        <a href="#collections" onClick={()=>setIsMenu(false)} className="block rounded-md px-5 py-2 text-base font-medium text-gray-300 hover:text-white">Collections</a>
        <a href="/about" onClick={()=>setIsMenu(false)} className="block rounded-md px-5 py-2 text-base font-medium text-gray-300 hover:text-white">About</a>
        <a href="#contact" onClick={()=>setIsMenu(false)} className="block rounded-md px-5 py-2 text-base font-medium text-gray-300 hover:text-white">Contact</a>
      </div>
    </div>
  </nav>
    );
};

