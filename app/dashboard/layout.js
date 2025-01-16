"use client"
import Link from "next/link";
import Overview from "../../public/svg/overview.svg";
import rank from "../../public/icons/rank.svg";
import profile from "../../public/icons/profile.svg";
import help from "../../public/icons/help.svg";
import logout from "../../public/icons/logout.svg";
import Image from "next/image";
import Logo from "../ui/logo";
import photo from "../../public/profile_image.png";
import UserCard from "./components/userCard";
import { useState } from "react";
import Help from "./sections/help";
import UpdateProfile from "./sections/updateProfile";
import Subscribe from "../components/landing_page/subscribe";
import ButtonBlue from "../ui/buttonBlue";
import ButtonGlass from "../ui/buttonGlass";
import Footer from "../footer";


function Layout ({ children }) {

  const [activeTab, setActiveTab] = useState("overview")

  const handleTab = (tab) => {
    setActiveTab(tab)
  }
  const isActive = (tab) => {
    return activeTab === tab ? "bg-primary text-white" : ""
  }

  return (
    <>
    
    <div className="flex gap-4 px:4 md:px-6 min-h-screen py-2">
      {/* Sidebar  *** side bar is kept hidden for the meantime */}
      <aside className=" inter px-4 lg:px-5 hidden md:flex py-8 flex-col gap-6 w-full md:relative fixed font-medium h-screen md:w-[260px] lg:w-[300px] bg-white">
        <Logo
          classname={"hidden md:flex text-2xl font-extrabold cursor-pointer"}
        />

        

        <UserCard 
          photo={photo}
          name={"Umar"}
          role={"Team Leader"}
          classname={"w-full"}
        />

        <nav className="flex flex-col w-full gap-8">
          <ul className="flex w-full flex-col  gap-8">
              <li onClick={() => handleTab("overview")} className={`${isActive("overview")} h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center `}>
                <Image src={Overview} /> Overview
              </li>
            <Link href="/dashboard">
              <li className="h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center">
                <Image src={rank} className="text-primary"/> Rank and Progress
              </li>
            </Link>
              <li onClick={() => handleTab("update-profile")} className={`${isActive("update-profile")} h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center`}>
                <Image src={profile} /> Update profile
              </li>
              <li onClick={() => handleTab("help")} className={`${isActive("help")} h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center `}>
                <Image src={help}/>Find help
              </li>
          </ul>
          <hr className=""/>
          <button className="h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center "><Image src={logout}/> Logout</button>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">

        {/* Content */}
        <main className="flex-1 px-4 py-6 md:px-6 lg:p-8 bg-greyscale_background_light">
          {activeTab === "overview" && children}
          {activeTab === "help" && <Help />}
          {activeTab === "update-profile" && <UpdateProfile />}
        </main>
      </div>
    </div>
    
    
    <Footer />
    </>
  )
}
export default Layout;