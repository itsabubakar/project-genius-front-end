export default function UserCard({photo, name, role}){
    
    <div className="hidden md:flex px-4 py-3 gap-3 items-center border rounded-xl">
        <Image src={photo} />
        <div className=" gap-1">
        <p className="text-lg font-medium">{name}</p>
        <p className="text-sm font-normal text-greyscale_subtitle">{role}</p>
        </div>
    </div>
}