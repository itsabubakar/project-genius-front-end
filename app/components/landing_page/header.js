function Heading({heading, subHeading}) {
    return(
        <div className="flex flex-col gap-[16px]">
            <h1 className="text-[28px] sm:text-[32px] md:[40px] font-bold">{heading}</h1>
            <p className="text-greyscale_text">{subHeading}s</p>
        </div>
    )
}

export default Heading