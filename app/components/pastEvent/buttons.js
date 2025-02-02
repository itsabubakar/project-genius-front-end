export default function EventButtons() {
    return (
        <div className="w-full px-3 md:px-6 py-2 flex justify-center gap-2">
            <button className="w-[50%] lg:w-[539px] bg-primary_subtle hover:bg-primary_hover transition duration-500 py-3 rounded-full">
                Past Events
            </button>
            <button className="w-[50%] lg:w-[539px] bg-primary_subtle hover:bg-primary_hover transition duration-500 py-3 rounded-full">
                Upcoming Events
            </button>
        </div>
    )
}