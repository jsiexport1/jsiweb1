import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

const About = ()=>{
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <section className="pt-32 pb-16 bg-[#26150a] text-white px-40">
                <h1 className="text-3xl font-semibold px-40">About J. S. Industries: <br /> Crafting Timeless Leather Belts</h1>
                <p className="mt-3 px-40 text-xs">At J. S. Industries, we do not just make leather belts; we create wearable stories. Our journey begins with a sketch—a simple idea on a napkin—and transforms into meticulously crafted accessories that ignite passion and action in our customers.</p>
            </section>
            <section className="grid grid-cols-2 my-24 items-center">
                <div className="col-span1 px-36">
                    <h1 className="text-3xl font-semibold text-[#98572b]">Our Mission</h1>
                    <p className="text-sm mt-2">Our goal is to inspire your customers—to evoke loyalty, spark curiosity, and leave a lasting impression. Whether you are a startup with big dreams or an established brand seeking innovation, we are here to guide you every step of the way.</p>
                </div>
                <div className="col-span1">
                    <Image
                        src="/images/man1.jpg"
                        alt="Vercel Logo"
                        className="col-span-1 rounded-xl"
                        width={600}
                        height={35}
                        priority
                    />
                </div>
            </section>
            <section className="grid grid-cols-2 my-32 items-center">
                <div className="col-span1 pl-36">
                    <Image
                        src="/images/man2.jpg"
                        alt="Vercel Logo"
                        className="col-span-1 rounded-xl"
                        width={600}
                        height={35}
                        priority
                    />
                </div>
                <div className="col-span1 px-36">
                    <h1 className="text-3xl font-semibold text-[#98572b]">What Sets Us Apart</h1>
                    <p className="text-sm mt-8">
                       1. Vertical Integration: We are not just a vendor; we are your partners. From design to production, we control the entire supply chain. This means lower costs, timely delivery, and exceptional quality.
                    </p>
                    <p className="text-sm mt-8">
                       2. Craftsmanship: Our founding partners are third-generation artisan manufacturers. We have honed our skills over decades, taking ideas from sketches to full-scale production. But we are selective—we work with those who want to make a dent in the world.
                    </p>
                    <p className="text-sm mt-8">
                       3. Materials and Techniques: We weave magic with leather, nylons, polyesters, and more. Our techniques include printing, embroidery, laser cutting, embossing, and hand painting. Each belt tells a unique story.
                    </p>
                </div>
            </section>
            <section className="text-center">
                <h1 className="text-3xl font-semibold text-[#98572b]">Why J. S. Industries?</h1>
                <p className="text-sm mt-4 px-96">We are not interested in average. If your vision aligns with making an impact, we are all ears. Budgets do not define us; your WHY does. Our belts are not just accessories; they are statements of individuality.</p>
            </section>

            <div className="mt-40">
                <Footer />
            </div>
        </div>
    )
}

export default About;