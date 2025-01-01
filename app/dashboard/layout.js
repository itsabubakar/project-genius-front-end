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
export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen py-2 bg-greyscale_surface_subtle">
      {/* Sidebar  *** side bar is kept hidden for the meantime */}
      <aside className="hidden inter p-4 gap-6 w-full fixed font-medium flex-col h-screen md:w-[260px] lg:w-[300px] bg-white">
        <Logo
          classname={"hidden md:flex text-2xl font-extrabold cursor-pointer"}
        />

        <UserCard 
          photo={photo}
          name={"Umar"}
          role={"Team Leader"}
        />

        <nav className="flex flex-col w-full gap-8">
          <ul className="flex w-full flex-col  gap-8">
            <Link href="/dashboard">
              <li className="h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center text-white bg-primary">
                <Image src={Overview} /> Overview
              </li>
            </Link>
            <Link href="/dashboard">
              <li className="h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center">
                <Image src={rank} className="text-primary"/> Rank and Progress
              </li>
            </Link>
            <Link href="/dashboard/profile">
              <li className="h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center">
                <Image src={profile} /> Update profile
              </li>
            </Link>
            <Link href="/dashboard/settings">
              <li className="h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center ">
                <Image src={help}/>FInd help
              </li>
            </Link>
          </ul>
          <hr className=""/>
          <button className="h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center "><Image src={logout}/> Logout</button>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">

        {/* Content */}
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}