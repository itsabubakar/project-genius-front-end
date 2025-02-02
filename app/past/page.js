import Heading from "../components/landing_page/header";
import EventButtons from "../components/pastEvent/buttons";
import Event from '../../public/event_main.png';
import Image from "next/image";
export default function EventPage() {
    return (
        <section className="flex flex-col px-5 md:px-8 gap-5 text-center items-center">
            <Heading 
                heading="Events"
                subHeading="Explore past achievements and get ready for what's next in the world of innovation!"
            />
            <EventButtons />
            <Image
                className=""
                src={Event}/>

        </section>
    )
}