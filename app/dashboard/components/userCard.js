import Image from "next/image"

function UserCard({photo, name, role, classname}){
    return (
        <div className={`flex px-4 py-3 gap-3 items-center border border-greyscale_border rounded-xl bg-greyscale_background_light ${classname}`}>
            <Image src={photo}  alt="image"/>
                <div className=" gap-1">
                    <p className="text-lg font-medium">{name}</p>
                    <p className="text-sm font-normal text-greyscale_subtitle">{role}</p>
                </div>
        </div>
    )
}

export default UserCard;