export default function MainWrapper({children}) {
    return (
        
        <main className="flex flex-col items-center gap-[64px] px-5 sm:gap-[96px] md:gap-[112px] lg:gap-[120px]">{children}</main>
    )
}