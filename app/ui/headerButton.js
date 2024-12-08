export default function Button({children}) {
    return (
        <button className="hidden sm:block px-[20px] py-[12px] w-[127px] text-greyscale_surface_subtle bg-primary rounded-full text[18px] ">
            {children}
        </button>
    )
}