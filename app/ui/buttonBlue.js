"use client"

import { useState } from "react";
import Link from "next/link";

export default function ButtonBlue({children, classname, onClick}) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked); // Toggle click state
        if (onClick) {
            onClick(); // Trigger the passed onClick function if provided
        }
    };
    return (
            <button
                className={`inter text-greyscale_surface_subtle px-[20px] py-[12px]
                    w-[330px] sm:w-[163px] rounded-full block text-center
                    transition duration-500
                    ${isClicked ? " after:bg-greyscale_subtitle" : "bg-primary"}
                    hover:bg-primary_hover  active:transform active:scale-95 ${classname}`}
                onClick={handleClick}
            >
                {children}
            </button>
    )
}
