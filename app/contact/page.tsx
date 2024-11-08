import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

const Contact = ()=>{
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <section className="pt-28 pb-12 bg-[#26150a] text-white px-40 text-center">
                <h1 className="text-3xl font-semibold px-40">Contact Us</h1>
            </section>
            <section id="contact" className=" pt-24">
                <div className="grid grid-cols-2 items-center px-40">
                    <div className="md:col-span-1 col-span-2">
                        <Image
                            src="/images/contact.jpg"
                            alt="Vercel Logo"
                            className="col-span-1 rounded-xl"
                            width={600}
                            height={35}
                            priority
                        />
                    </div>
                    <div className="md:col-span-1 col-span-2 pl-28 text-[#98572b] font-semibold">
                        <h1 className="text-2xl">Office Address</h1>
                        <p className="mb-10">J. S. Industries <br /> Nirmal Nagar, Sahjani, <br /> Post Hadha, Shuklaganj, <br /> Unnao, Uttar Pradesh - 209861</p>
                        <a href="tel:+919555625069" target="_blank" className="text-[#98572b] flex">
                            <IoIosCall className="text-3xl mr-1" />
                            <p className="font-semibold pt-1">
                                +91 9555625069
                            </p>
                        </a>
                        <a href="mailto:info@jsiexport.com" target="_blank" className="text-[#98572b] flex my-5">
                            <IoIosMail className="text-3xl mr-1" />
                            <p className="font-semibold pt-1">
                                info@jsiexport.com
                            </p>
                        </a>
                        <a href="https://wa.me/919555625069" target="_blank" className="text-[#98572b] flex">
                            <FaWhatsapp className="text-3xl mr-1" />
                            <p className="font-semibold pt-1" >
                                +91 9555625069
                            </p>
                        </a>
                    </div>
                </div>
            </section>
            <div className="mt-20">
                <Footer />
            </div>
        </div>
    )
}

export default Contact;