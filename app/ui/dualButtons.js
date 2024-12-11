import Link from "next/link";

export default function DualButtons({classname, text_color}) {
    return (
        <div className={`flex gap-4 ${classname}`}>
            <Link href={'/'}
                className="inter bg-primary  text-greyscale_surface_subtle px-[20px] py-[12px]
                    w-[310px] sm:w-[163px] rounded-full block text-center
                    hover:bg-primary_hover  active:bg-primary_pressed active:transform active:scale-95 transition duration-500"
                >
                Apply Now
            </Link>

            <Link href={'/'}
                className={`inter border-Primary_border_dark border-2 px-[20px] py-[12px]
                    w-[310px] xm:w-[350px] sm:w-[163px] rounded-full block text-center text-Primary_border_dark
                    hover:border-primary_hover active:border-primary_pressed active:bg-primary_subtle active:transform active:scale-95 transition duration-500 ${text_color}`}
                >
                Learn More
            </Link>
        </div>
    )
}
