"use client"
import { useEffect, useState } from "react"
import tick from "../../../public/icons/tick.svg"
import { set } from "zod"
import Image from "next/image"

function Progress({id, title, description, deadlineDate, classname}) {
    const [deadline, setDeadline] = useState(true)

    useEffect(() => { 
        const currentDate = new Date()
        const deadline = new Date(deadlineDate)
        setDeadline(currentDate > deadline)
    },[deadlineDate])
    return (
        <div className="flex gap-4 inter h-[87px]">
            <div className="flex flex-col items-center">

                {deadline ? (
                    <div className="bg-primary rounded-full">
                        <Image src={tick} alt="tick" />
                    </div>

                    ) : (
                        <div>{id}</div>
                    )
                }
                
                <div className={`w-[2px] h-full bg-primary`}>

                </div>
            </div>

            <div>
                <h1 className="text-lg font-medium">{title}</h1>
                <p className="text-greyscale_text">{description}</p>
                {deadline && <div className="flex gap-2 items-center">Passed</div>}
            </div>
        </div>
    )

}

export default Progress