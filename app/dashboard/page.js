import Heading from "../components/landing_page/header";
import Layout from "./layout"
// pages/specific-page.js
function Dashboard() {
    return (
        <div className="px-3 py-6 bg-greyscale_background_light flex flex-col gap-6">
            <Heading 
                heading={"Welcome back, Umar!"}
                subHeading={"You’re doing great keep innovating"}
                classname={"gap-0"}/>
            <h1 className="text-3xl font-bold text-greyscale_title"></h1>
            <p className="text-greyscale_subtitle"></p>
            <hr />
            <section className="p-4 bg-greyscale_surface_subtle rounded-xl">
                <h1 className="text-3xl font-bold text-greyscale_title">Tech Titans</h1>
                <p className="text-greyscale_subtitle">A team of digital pioneers shaping the future.</p>
            </section>
        </div>
    )
}


export default Dashboard;