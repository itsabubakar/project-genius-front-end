import Image from "next/image";
import hero from "../public/svg/Hero image (1).svg"
import Link from "next/link";

import infoData from "./data/inforcard"
import detailData from "./data/detailsData.js"
import timelineData from "./data/timelineData.js"
import regulationData from "./data/regulationData.js"

import Headings from "./components/landing_page/header.js"
import InfoCard from "./components/landing_page/infoCard.js"
import Details from "./components/landing_page/details.js"
import Timeline from "./components/landing_page/timeline"
import Heading from "./components/landing_page/header.js";
import Rules from "./components/landing_page/rules.js"

export default function Home() {
    return (
        <div className="">
        <main className="flex flex-col gap-[64px] sm:gap-[96px] md:gap-[112px] lg:gap-[120px]
                px-[20px] sm:px-[24px] md:px-[32px] lg:px-[80px]">
            <section className="bg-custom
                flex flex-col items-center
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
                            className="inter border-primary_pressed border-2 text-greyscale_title px-[20px] py-[12px] w-[310px] sm:w-[143px] rounded-full block text-center"
                            >
                            Learn More
                        </Link>

                    </div>
                    <Image className="w-full h-[292px] " alt="Lightbulb" src={hero} />
                </div>
            </section>

            <section className="flex flex-col items-center text-center gap-[54px]">
                
                <Headings 
                heading={"Why Project Genius?"}
                subHeading={"The Project Genius contest emerged from the necessity to address several key areas in education and personal among students"}
                />

                <div className="flex flex-wrap gap-[20px] justify-center pb-5">
                    {infoData.map((card, index) =>(
                        <InfoCard
                        key={index}
                            icon={card.icon}
                            heading={card.heading}
                            subheading={card.subheading}
                            />
                    ))}
                </div>

            </section>
            
            {/* DETAILS START */}
            <section className="flex flex-col gap-[56px] items-center text-center">
                <Headings 
                    heading="Key Details"
                    subHeading="The Project Genius contest is exclusively open to undergraduate students within Ahmadu Bello University. This contest aims to bring together a diverse group of students, encouraging collaboration and fostering a spirit of unity and teamwork within the University."
                />

                <div className="flex flex-col gap-[64px] sm:gap-[64px] justify-center">
                    {detailData.map((detail, index) => (
                        <Details 
                        key={index}
                        heading={detail.heading}
                        description={detail.description}
                        image={detail.image}
                        classname={index === 1 ? "md:flex-row-reverse" : "md:flex-row"}
                        />
                    ))}


                </div>
            </section>

            {/* COMPETITION TIMELINE START */}
            <section className="flex flex-col gap-[56px] items-center text-center">
                
            <h1 className="text-[28px] text-center md:text-start sm:text-[32px] md:[40px] font-bold">Competition Activities And Timeline</h1>

            <div className="flex flex-col gap-[40px] items-center">
                {timelineData.map((timeline, index) => (
                    <Timeline
                    key={index}
                    start={timeline.start}
                    end={timeline.end}
                    heading={timeline.heading}
                    description={timeline.description}
                />
                ))}
            </div>
            </section>

            {/* RULES SECTION */}
            <section className="flex flex-col gap-[56px] text-center items-center">
                <Heading 
                    heading="Rules And Guidelines"
                    subHeading="To ensure a fair and productive contest, participants must adhere to the following rules and guidelines. These rules are designed to maintain the integrity of the competition and to provide a clear framework within which participants can operate"
                />

                <div className="flex flex-wrap gap-[24px] justify-center ">
                    {regulationData.map((rule, index) => (
                        <Rules 
                        key={index}
                        heading={rule.heading}
                        details={rule.details}
                        />
                    ))}
                </div>
                

            </section>

        </main>
        </div>
    );
}
