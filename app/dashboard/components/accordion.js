import { useState } from "react"

export default function Accordion({question, response}) {
    const [accordion, openAccordion] = useState(false)

    const handleAccordion = () => {
        if(!accordion) {
            openAccordion(true)
        }
        else {
            openAccordion(false)
        }
    }
    return (
        <article
            onClick={handleAccordion}
            className={`text-primary_pressed flex gap-3  p-4 shadow-lg rounded-lg`}>
            <div>
                +
            </div>
            <div  className=" flex flex-col flex-wrap">
                

            <h4 className="flex flex-col gap-2">{question}</h4>
            <p className={` ${accordion ? "block" : "hidden"} text-black mt-2`}>{response}</p>


            </div>
        </article>
    )
}