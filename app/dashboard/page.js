"use client";
import { useEffect, useState } from "react";
import Heading from "../components/landing_page/header";
import UserCard from "./components/userCard";
import Progress from "./components/progress";
import progressData from "../data/progressData";

const currentStep = 1;

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
    }, []);

    useEffect(() => {
        const fetchUserDashboard = async () => {
            try {
                const response = await fetch("https://project-genius-back-end.onrender.com/app/dashboard", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const result = await response.json();

                if (response.status === 200) {
                    setUserData(result);
                } else if (response.status === 401) {
                    setError("Invalid login ID");
                } else {
                    setError(result.message || "Something went wrong");
                }
            } catch (error) {
                setError("Network error, please try again");
            } finally {
                setLoading(false);
            }
        };

        fetchUserDashboard();
    }, []);

    if (loading) {
        return <div>Loading user data...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!user) {
        return <div>No user data available</div>;
    }

    return (
        <div className="flex flex-col gap-6 lg:gap-8">
            {/* Welcome Message */}
            <div className="flex flex-col gap-1">
                <h1 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-greyscale_title">
                    Welcome back, {user.firstName}!
                </h1>
                <p className="text-greyscale_subtitle">You’re doing great, keep innovating!</p>
            </div>
            <hr />

            {/* Team Section */}
            <section className="flex flex-col gap-6 p-4 lg:pb-[55px] shadow-xl rounded-xl">
                {userData?.team ? (
                    <>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-medium text-greyscale_title">{userData.team}</h1>
                            <p className="text-greyscale_subtitle">A team of digital pioneers shaping the future.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-semibold">Team Members</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {userData.members?.map((member, index) => (
                                    <UserCard key={index} name={member.first_name} role={member.role} />
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-gray-500 text-lg">
                        {userData?.message || "You are not part of a team yet."}
                    </div>
                )}
            </section>

            {/* Progress Section */}
            <section className="p-8 rounded-2xl flex flex-col gap-6 w-full shadow-lg">
                <h1 className="text-2xl font-medium text-greyscale_title">Competition Progress</h1>
                <div className="flex flex-col gap-1">
                    {progressData.map((progress, index) => (
                        <Progress
                            key={progress.id}
                            id={progress.id}
                            title={progress.title}
                            description={progress.description}
                            active={progress.date}
                            isLast={index === progressData.length - 1}
                            isNext={index === currentStep + 1}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;