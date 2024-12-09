function Heading({heading, subHeading, classname}) {
    return(
        <div className="flex flex-col gap-[16px] md:w-[714]">
            <h1 className={`text-[28px] sm:text-[32px] md:[40px] font-bold ${classname}`}>{heading}</h1>
            <p className="text-greyscale_text md:w-[718px]">{subHeading}</p>
        </div>
    )
}

export default Heading