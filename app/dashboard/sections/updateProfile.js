export default function UpdateProfile() {
    return (
        <section className=" px-3 py-6 flex flex-col items-center gap-16">
            <div className="flex flex-col w-full  gap-8">
                <h2 className="text-[32px] md:text-[44px] font-bold">Manage Your Profile</h2>
                <br />
                <form className="inter flex flex-col gap-8  text-greyscale_text">
                    <label className="aboslute mx-auto md:mx-0 w-60 h-60">
                        <div className=" w-full h-full relative rounded-full"
                        style={{
                            backgroundImage: `url("/user.png")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                            
                        }}>
                            
                            <div className="absolute top-[80%] left-[190px] bg-primary w-fit p-3 rounded-full">
                                {/* The actual file input */}
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0, // Hide the input
                                    cursor: 'pointer',
                                    }}
                                />
                                {/* The SVG icon */}
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="Icons">
                                    <path
                                        id="Vector"
                                        d="M5.83333 19.7083H18.1667C18.9844 19.7083 19.7687 19.3834 20.3469 18.8052C20.9252 18.227 21.25 17.4427 21.25 16.625V9.43051C21.25 8.61276 20.9252 7.82851 20.3469 7.25027C19.7687 6.67203 18.9844 6.34718 18.1667 6.34718H16.7483C16.3396 6.34682 15.9477 6.18416 15.6589 5.89496L14.5078 4.74385C14.2189 4.45465 13.8271 4.29199 13.4183 4.29163H10.5817C10.1729 4.29199 9.78106 4.45465 9.49222 4.74385L8.34111 5.89496C8.05227 6.18416 7.6604 6.34682 7.25167 6.34718H5.83333C5.01558 6.34718 4.23132 6.67203 3.65309 7.25027C3.07485 7.82851 2.75 8.61276 2.75 9.43051V16.625C2.75 17.4427 3.07485 18.227 3.65309 18.8052C4.23132 19.3834 5.01558 19.7083 5.83333 19.7083Z"
                                        stroke="#F3F4F6"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Vector_2"
                                        d="M12.0017 16.6251C14.2722 16.6251 16.1128 14.7844 16.1128 12.5139C16.1128 10.2434 14.2722 8.40283 12.0017 8.40283C9.73124 8.40283 7.89062 10.2434 7.89062 12.5139C7.89062 14.7844 9.73124 16.6251 12.0017 16.6251Z"
                                        stroke="#F3F4F6"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </label>
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