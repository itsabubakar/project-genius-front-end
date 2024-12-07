import Image from "next/image";
import Button from "./ui/headerButton";
import { HeroButton } from "./ui/hero-button";
import hero from "../public/svg/Hero image (1).svg"
import Link from "next/link";

export default function Home() {
    return (
        <div className="">
        <main className="gap-[64px]">
            <section className=" flex flex-col items-center
                px-[20px] sm:px-[24px] md:px-[32px] lg:px-[80px]
                py-[40px] sm:py-[64px] md:py-[80px]
                w-full text-center">
                <div className=" sm:w-[720px] flex flex-col gap-[20px]">
                    <h1 className="text-[36px] font-extrabold -tracking-[0.72px]">Generating Exciting New  Ideas And Useful Solutions</h1>
                    <p className="text-greyscale_text text-[16px]">
                    GENIUS 2.0 aims to foster a generation of problem solvers who address local challenges with sustainable and innovative solutions
                    </p>

                    <div className="flex flex-col sm:flex-row sm:justify-center gap-3 items-center">
                        
                        {/* DEBT CODES BELOW: was getting some error trying to make the component dynamic. To look further into it */}
                        <Link href={'/'}
                            className="inter bg-primary text-greyscale_surface_subtle px-[20px] py-[12px] w-[310px] sm:w-[143px] rounded-full block text-center"
                            >
                            Apply Now
                        </Link>

                        <Link href={'/'}
                            className="inter border-primary_dark border-2 text-greyscale_title px-[20px] py-[12px] w-[310px] sm:w-[143px] rounded-full block text-center"
                            >
                            Learn More
                        </Link>

                    </div>
                    <Image className="w-full h-[292px] " src={hero} />
                </div>
            </section>

        </main>
        </div>
    );
}
