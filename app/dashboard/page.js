import Heading from "../components/landing_page/header";
import UserCard from "./components/userCard";
import photo from "../../public/profile_image.png";
import Progress from "./components/progress";
import progressData from "../data/progressData";
const Dashboard = () =>
        <div className="px-3 py-6 md:px-6 lg:p-8 bg-greyscale_background_light flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-1">
            <h1 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-greyscale_title">Welcome back, Umar!</h1>
            <p className="text-greyscale_subtitle">You’re doing great keep innovating</p>

            </div>
            <hr />
            <section className="flex flex-col gap-6 p-4 lg:pb-[55px] shadow-xl rounded-xl">
                <div className="flex flex-col gap">
                    
                    <h1 className="text-2xl font-medium text-greyscale_title">Tech Titans</h1>
                    <p className="text-greyscale_subtitle">A team of digital pioneers shaping the future.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <UserCard 
                        photo={photo}
                        name={"Umar"}
                        role={"Team Leader"}
                    />
                    <div className="flex flex-col w-[100%] lg:flex-row gap-4">
                        <UserCard
                            photo={photo}
                            name={"Hamid"}
                            role={"Team Member"}
                            classname={"lg:w-[25%]"}
                        />
                        <UserCard
                            photo={photo}
                            name={"Baqir"}
                            role={"Team Member"}
                            classname={"lg:w-[25%]"}
                        />
                        <UserCard
                            photo={photo}
                            name={"Westie"}
                            role={"Team Member"}
                            classname={"lg:w-[25%]"}
                        />
                        <UserCard
                            photo={photo}
                            name={"John"}
                            role={"Team Member"}
                            classname={"lg:w-[25%]"}
                        />
                    </div>
                </div>
            </section>

            <section className="p-4 flex flex-col gap-6 w-full shadow-lg">
                <h1 className="text-2xl font-medium text-greyscale_title">Competition Progress</h1>
                {progressData.map((progress, index) => (
                    <Progress 
                        key={progress.id}
                        title={progress.title}
                        description={progress.description}/>
                ))}


            </section>
        </div>
    

export default Dashboard;