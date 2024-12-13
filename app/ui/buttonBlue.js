import Link from "next/link";

export default function ButtonBlue({children, classname, onClick}) {
    return (
            <button
                className={`inter bg-primary  text-greyscale_surface_subtle px-[20px] py-[12px]
                    w-[330px] sm:w-[163px] rounded-full block text-center
                    hover:bg-primary_hover  active:bg-primary_pressed active:transform active:scale-95 transition duration-500 ${classname}`}
                onClick={onClick}
            >
                {children}
            </button>
    )
}
