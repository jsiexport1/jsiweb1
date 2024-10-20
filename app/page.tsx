"use client";
import { ImagesSliderDemo } from "@/components/ImageSlider";
import { Navbar } from "@/components/Navbar";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { AnimatedModalDemo } from "@/components/AnimatedModal";
import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [is06BW, setIs06BW] = useState(false);
  const [is04BW, setIs04BW] = useState(false);
  return (
    <div>
      <a href="https://wa.me/919555625069" target="_blank" className="text-white fixed z-50 md:mt-[85vh] md:ml-[195vh] mt-[80vh] ml-[35vh] bg-[#25d366] cursor-pointer rounded-full font-semibold p-3">
        <FaWhatsapp className="text-3xl" />
      </a>
      <Navbar />
      <section id="home" className="z-10 text-white pt-20 md:pt-0">
          <ImagesSliderDemo />
      </section>
      <section id="collections" className="pt-16">
        <h1 className="text-4xl font-semibold text-center mb-12 text-[#98572b]">Our Collections</h1>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-5 md:mx-24 items-center gap-16 mx-5">
          <div className="col-span-1 bg-white rounded-lg px-5">
            <Image
              src="/images/5.jpg"
              alt="Vercel Logo"
              className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
              width={200}
              height={200}
            />
            <p className="font-semibold text-lg text-center">JS/012</p>
            <div className="pb-4 pt-2">
              <AnimatedModalDemo/>
            </div>
          </div>
          <div className="col-span-1 bg-white rounded-lg px-5">
            <Image
              src="/images/10.jpg"
              alt="Vercel Logo"
              className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
              width={200}
              height={200}
            />
            <p className="font-semibold text-lg text-center">JS/015</p>
            <div className="pb-4 pt-2">
              <AnimatedModalDemo/>
            </div>
          </div>
          <div className="col-span-1 bg-white rounded-lg px-5">
            <Image
              src="/images/11.jpg"
              alt="Vercel Logo"
              className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
              width={200}
              height={200}
            />
            <p className="font-semibold text-lg text-center">JS/018</p>
            <div className="pb-4 pt-2">
              <AnimatedModalDemo/>
            </div>
          </div>
          <div className="col-span-1 bg-white rounded-lg px-5">
            <Image
              src="/images/8.jpg"
              alt="Vercel Logo"
              className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
              width={200}
              height={200}
            />
            <p className="font-semibold text-lg text-center">JS/017</p>
            <div className="pb-4 pt-2">
              <AnimatedModalDemo/>
            </div>
          </div>
          <div className="col-span-1 bg-white rounded-lg px-5">
            <Image
              src="/images/6.jpg"
              alt="Vercel Logo"
              className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
              width={200}
              height={200}
            />
            <p className="font-semibold text-lg text-center">JS/013</p>
            <div className="pb-4 pt-2">
              <AnimatedModalDemo/>
            </div>
          </div>
        </div>
      </section>
      <section id="story" className="md:h-[70vh] h-[95vh] pt-12 md:pt-0">
        <div className="h-[100vh] flex flex-col-reverse justify-center md:grid md:grid-cols-2 md:items-center md:gap-16 px-5 md:px-24">
          <div className="col-span-1 text-left md:text-left mt-10 md:mt-0">
              <div>
                <span className="text-3xl">WHAT WE WORK</span>
                <div className="w-40 border-b-2 h-5 border-gray-300"></div>
                <div className="mt-5">
                   <h1 className="text-xl font-semibold">Top-notch Quality</h1>
                   <p className="text-gray-700 text-sm pt-2">
                    With a worldwide network of tanneries, <br /> we manufacture the finest quality leather products.
                   </p>
                   <h1 className="text-xl font-semibold pt-3">Handcrafted Construction</h1>
                   <p className="text-gray-700 text-sm pt-2">
                    All the leather products are made by <br /> our experienced and skilled craftsmen.
                   </p>
                   <h1 className="text-xl font-semibold pt-3">Extensive Collection</h1>
                   <p className="text-gray-700 text-sm pt-2">
                   We manufacture and export a wide collection of <br /> leather products, each with its unique design and features.
                   </p>
                </div>
              </div>
          </div>
          <div className="col-span-1">
            <Image
              src="/images/man.jpg"
              alt="Vercel Logo"
              className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
              width={700}
              height={700}
            />
          </div>
        </div>
      </section>
      <section id="contact" className="h-[70vh] pt-40">
        <div className="md:text-center pl-6 md:pl-0">
          <h1 className="text-[#98572b] font-semibold text-4xl">Contact Us</h1>
          <div className="grid md:grid-cols-3 grid-cols-3 gap-5 md:justify-items-center pt-8 md:pt-12 md:px-0 items-center">
            <a href="tel:+919555625069" target="_blank" className="text-[#98572b] cursor-pointer flex md:flex-col flex-row items-center col-span-3 md:col-span-1 rounded-full font-semibold text-xl pt-4 pb-3">
              <IoIosCall className="md:text-8xl text-4xl mr-1" />
              <p className="md:pt-4">
                 +91 9555625069
              </p>
            </a>
            <a href="mailto:info@jsiexport.com" target="_blank" className="text-[#98572b] cursor-pointer flex md:flex-col flex-row items-center col-span-3 md:col-span-1 rounded-full font-semibold text-xl pt-4 pb-3">
              <IoIosMail className="md:text-8xl text-4xl mr-1" />
              <p className="md:pt-4">
                info@jsiexport.com
              </p>
            </a>
            <a href="https://wa.me/919555625069" target="_blank" className="text-[#98572b] cursor-pointer flex md:flex-col flex-row items-center col-span-3 md:col-span-1 rounded-full font-semibold text-xl pt-4 pb-3">
              <FaWhatsapp className="md:text-8xl text-4xl mr-1" />
              <p className="md:pt-4" >
                +91 9555625069
              </p>
            </a>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
