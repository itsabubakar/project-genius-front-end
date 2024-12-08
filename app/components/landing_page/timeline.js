export default function Timeline({start, end, heading, description}){
    return(
        
        <div className="h-[180px] flex flex-col items-center sm:flex-row gap-[16px] sm:gap[32px] text-center">
            <div className="w-[100px] h-[88px] flex flex-col items-center justify-center
                rounded-lg p-[16px] shadow-xl  font-medium">
                <p className="">{start}</p>
                {end ? (<>
                    to <p>{end}</p></>
                ): ""}

            </div>
            <div className="flex flex-col gap-[8px] sm:text-start">
                <h4 className="font-bold text-xl">{heading}</h4>
                <p className="inter">{description}</p>
            </div>

        </div>
    )
}