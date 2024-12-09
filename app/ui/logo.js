export default function Logo({classname}){
    return(
        <h1 className={` font-extrabold cursor-pointer ${classname}`}>
            Project
            <span className="text-primary">
            Genius</span>
        </h1>
    )
}