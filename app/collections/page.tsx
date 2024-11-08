import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AnimatedModalDemo } from "@/components/AnimatedModal";
import Image from "next/image";

const Collections = ()=>{
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <section className="pt-28 pb-10 bg-[#26150a] text-white px-40">
                <h1 className="text-3xl font-semibold px-40">Timeless Elegance: Discover Our Leather Belt Classics.</h1>
            </section>
            <section className="mt-20">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:mx-24 items-center gap-8 mx-5">
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/15.png"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/001</p>
                                <p className="text-base text-gray-700">Grain Profile Finish</p>
                                <p className="text-base text-gray-700">Nickel Finish</p>
                                <p className="text-base text-gray-700">35 mm</p>
                                <p className="text-base text-gray-700">Tan</p>
                                <p className="text-base text-gray-700">Profile Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/14.png"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/002</p>
                                <p className="text-base text-gray-700">Waxy Pull-Up Finish</p>
                                <p className="text-base text-gray-700">Black Powder Coated</p>
                                <p className="text-base text-gray-700">40 mm</p>
                                <p className="text-base text-gray-700">Brown</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/16.png"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/003</p>
                                <p className="text-base text-gray-700">Waxy Pull-Up Finish</p>
                                <p className="text-base text-gray-700">Black Powder Coated</p>
                                <p className="text-base text-gray-700">40 mm</p>
                                <p className="text-base text-gray-700">Black</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/21.png"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/004</p>
                                <p className="text-base text-gray-700">IP Grain Finish</p>
                                <p className="text-base text-gray-700">Black Powder Coated</p>
                                <p className="text-base text-gray-700">40 mm</p>
                                <p className="text-base text-gray-700">Black</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:mx-24 items-center gap-8 mx-5 mt-16">
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/4.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/005</p>
                                <p className="text-base text-gray-700">Grain Smooth Finish</p>
                                <p className="text-base text-gray-700">Antique Brass Finish</p>
                                <p className="text-base text-gray-700">35 mm</p>
                                <p className="text-base text-gray-700">Tan</p>
                                <p className="text-base text-gray-700">Formal Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/22.JPG"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/006</p>
                                <p className="text-base text-gray-700">Grain Smooth Finish</p>
                                <p className="text-base text-gray-700">Black Shiny Finish</p>
                                <p className="text-base text-gray-700">35 mm</p>
                                <p className="text-base text-gray-700">Black</p>
                                <p className="text-base text-gray-700">Formal Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/19.png"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/007</p>
                                <p className="text-base text-gray-700">P2C Finish</p>
                                <p className="text-base text-gray-700">Powder Coated Finish</p>
                                <p className="text-base text-gray-700">40 mm</p>
                                <p className="text-base text-gray-700">Brown</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/18.png"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/008</p>
                                <p className="text-base text-gray-700">P2C Finish</p>
                                <p className="text-base text-gray-700">Powder Coated Finish</p>
                                <p className="text-base text-gray-700">40 mm</p>
                                <p className="text-base text-gray-700">Black</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:mx-24 items-center gap-8 mx-5 mt-16">
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/20.png"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/009</p>
                                <p className="text-base text-gray-700">P2C Finish</p>
                                <p className="text-base text-gray-700">Black Powder Coated</p>
                                <p className="text-base text-gray-700">40 mm</p>
                                <p className="text-base text-gray-700">Brown</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/17.png"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/010</p>
                                <p className="text-base text-gray-700">P2C Finish</p>
                                <p className="text-base text-gray-700">Black Powder Coated</p>
                                <p className="text-base text-gray-700">40 mm</p>
                                <p className="text-base text-gray-700">Black</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/23.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/011</p>
                                <p className="text-base text-gray-700">Grain IP Finish</p>
                                <p className="text-base text-gray-700">Black Shiny Finish</p>
                                <p className="text-base text-gray-700">35 mm</p>
                                <p className="text-base text-gray-700">Black</p>
                                <p className="text-base text-gray-700">Formal Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/5.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/012</p>
                                <p className="text-base text-gray-700">Dye Finish</p>
                                <p className="text-base text-gray-700">Nickle Shiny Finish</p>
                                <p className="text-base text-gray-700">40 mm</p>
                                <p className="text-base text-gray-700">Yeloow</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:mx-24 items-center gap-8 mx-5 mt-16">
                <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/6.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/013</p>
                                <p className="text-base text-gray-700">Dye Finish</p>
                                <p className="text-base text-gray-700">Black Shiny Finish</p>
                                <p className="text-base text-gray-700">40 mm</p>
                                <p className="text-base text-gray-700">Grey</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/7.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/014</p>
                                <p className="text-base text-gray-700">Dye Finish</p>
                                <p className="text-base text-gray-700">Antique Brass Finish</p>
                                <p className="text-base text-gray-700">40 mm</p>
                                <p className="text-base text-gray-700">Pink</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/10.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/015</p>
                                <p className="text-base text-gray-700">Dye Finish</p>
                                <p className="text-base text-gray-700">Powder CoatedFinish</p>
                                <p className="text-base text-gray-700">35 mm</p>
                                <p className="text-base text-gray-700">Maroon</p>
                                <p className="text-base text-gray-700">Formal Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/9.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/016</p>
                                <p className="text-base text-gray-700">Dye Finish</p>
                                <p className="text-base text-gray-700">Nickel Shine Finish</p>
                                <p className="text-base text-gray-700">40 mm</p>
                                <p className="text-base text-gray-700">Orange</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:mx-24 items-center gap-8 mx-5 mt-16">
                <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/8.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/017</p>
                                <p className="text-base text-gray-700">Dye Finish</p>
                                <p className="text-base text-gray-700">Black Shiny Finish</p>
                                <p className="text-base text-gray-700">35 mm</p>
                                <p className="text-base text-gray-700">Grey</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/11.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/018</p>
                                <p className="text-base text-gray-700">Dye Finish</p>
                                <p className="text-base text-gray-700">Powder Coated Finish</p>
                                <p className="text-base text-gray-700">35 mm</p>
                                <p className="text-base text-gray-700">Maroon</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/13.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/019</p>
                                <p className="text-base text-gray-700">IP Finish ( Reversible )</p>
                                <p className="text-base text-gray-700">Satin Reversible Finish</p>
                                <p className="text-base text-gray-700">35 mm</p>
                                <p className="text-base text-gray-700">Black & Brown</p>
                                <p className="text-base text-gray-700">Reversible Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/12.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/020</p>
                                <p className="text-base text-gray-700">IP Finish ( Reversible )</p>
                                <p className="text-base text-gray-700">Satin Reversible Finish</p>
                                <p className="text-base text-gray-700">35 mm</p>
                                <p className="text-base text-gray-700">Black & Blue</p>
                                <p className="text-base text-gray-700">Reversible Belt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:mx-24 items-center gap-8 mx-5 mt-16">
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/3.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/021</p>
                                <p className="text-base text-gray-700">Smooth Finish</p>
                                <p className="text-base text-gray-700">Black Shiny Finish</p>
                                <p className="text-base text-gray-700">40 mm</p>
                                <p className="text-base text-gray-700">Black</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/2.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/022</p>
                                <p className="text-base text-gray-700">Smooth Finish</p>
                                <p className="text-base text-gray-700">Nickel Finish</p>
                                <p className="text-base text-gray-700">35 mm</p>
                                <p className="text-base text-gray-700">Tan</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-white rounded-lg px-5 pb-4">
                        <Image
                        src="/images/1.jpg"
                        alt="Vercel Logo"
                        className="rounded-xl md:col-span-1 col-span-3 md:justify-self-start"
                        width={265}
                        height={265}
                        />
                        <div className="flex gap-3">
                            <div>
                                <p className="font-semibold text-base text-gray-700">Design No:</p>
                                <p className="font-semibold text-base text-gray-700">Leather:</p>
                                <p className="font-semibold text-base text-gray-700">Buckle:</p>
                                <p className="font-semibold text-base text-gray-700">Width:</p>
                                <p className="font-semibold text-base text-gray-700">Colour:</p>
                                <p className="font-semibold text-base text-gray-700">Design:</p>
                            </div>
                            <div>
                                <p className="text-base text-gray-700">JS/023</p>
                                <p className="text-base text-gray-700">Smooth Finish</p>
                                <p className="text-base text-gray-700">Black Shiny</p>
                                <p className="text-base text-gray-700">35 mm</p>
                                <p className="text-base text-gray-700">Black</p>
                                <p className="text-base text-gray-700">Casual Belt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-40">
                <Footer />
            </div>
        </div>
    )
}

export default Collections;