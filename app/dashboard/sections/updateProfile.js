export default function UpdateProfile() {
    return (
        <section className=" px-3 py-6 flex flex-col items-center gap-16">
            <div className="flex flex-col w-full  gap-8">
                <h2 className="text-[32px] md:text-[44px] font-bold">Manage Your Profile</h2>
                <br />
                <form className="inter flex flex-col gap-8  text-greyscale_text">
                    <div className="flex flex-col">
                        <label>First name</label>
                        
                    <input type="text" placeholder="Enter your first name" className="px-4 py-3 rounded-xl bg-greyscale_surface_subtle" />
                    </div>
                    <div className="flex flex-col">
                        <label>Last name</label>
                        <input type="text" placeholder="Enter your last name" className="px-4 py-3 rounded-xl bg-greyscale_surface_subtle" />
                    </div>
                    <div className="flex flex-col">
                        <label>Email address</label>
                        <input type="email" placeholder="Can't change your email address" className="p-3 rounded-xl bg-greyscale_disabled" />
                    </div>
                    <div className="flex flex-col">
                        <label>Phone number</label>
                        <input type="text" placeholder="Phone Number" className="p-3 rounded-xl bg-greyscale_surface_subtle" />
                    </div>
                    <button className="px-5 py-3 md:w-[360px] bg-primary text-white rounded-full">Update Profile</button>
                </form>
            </div>
        </section>
    )
}