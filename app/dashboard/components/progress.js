import tick from "../../../public/icons/tick.svg"

function Progress({id, title, description, classname}) {
    return (
        <div className="flex gap-4 inter">
            <div className="flex flex-col ">

                <div>{id}</div>
                
                <div className="w-[2px] h-[64px] bg-primary">

                </div>
            </div>

            <div>
                <h1 className="text-lg font-medium">{title}</h1>
                <p className="text-greyscale_text">{description}</p>
            </div>
        </div>
    )

}

export default Progress