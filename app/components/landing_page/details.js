import Image from "next/image"
export default function Details({heading, description, image, classname}) {
    return(
        <div className={`flex flex-col  items-center gap-[56px] w-[473px] md:w-fit ${classname}`}>
            <div className="flex flex-col gap-[8px] md:w-[500px]">
                <h1 className="text-[20px] font-bold">{heading}</h1>
                <p className="inter">{description}</p>
            </div>

            <Image src={image} className="" alt="detail image"/>


        </div>
    )
}