"use client"
import Image from "next/image";

import InputField from "./inputField";
import SelectField from "./selectedField.js";
import ButtonBlue from "../../ui/buttonBlue";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DesktopForm = ({ handleSubmit }) => {
    const router = useRouter();
/*
    const handleNavigation = () => {
        router.push('/auth')
        console.log("working");
    };*/ // code not functioning for page navigation
return (
    <div className="hidden md:flex flex-col gap-4">
        <section className="flex flex-col gap-4 md:grid grid-cols-2">
            <InputField label="First name" placeholder="Enter your first name" />
            <InputField label="Last name" placeholder="Enter your last name" />
            <InputField label="Email" type="email" placeholder="Enter your email address" />
            <InputField label="Phone number" placeholder="Enter your phone number" />
        </section>

        <section className="flex flex-col gap-4 md:grid grid-cols-2">
            <SelectField label="Select your Faculty" options={["Engineering", "Sciences"]} />
            <SelectField
                label="Select your Department"
                options={["Computer Engineering", "Mechanical Engineering", "Civil Engineering"]}
            />
            <SelectField
                label="Select your Team Designation"
                options={["Team Leader", "Team Member"]}
            />
            <div className="flex justify-center">
                
                <InputField label="Password"
                    type="password"
                    placeholder="Enter your password" />

            </div>
            <div className="flex justify-center">
                
            <InputField
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
            />

            </div>
        </section>

        <div className="flex gap-2">
            <ButtonBlue onClick={handleSubmit} classname={"md:w-[50%]"}>
                Create account
            </ButtonBlue>
            
            <Link
                href={"/auth"}
                className={`inter text-Primary_border_dark border-primary_pressed border-2 px-[20px] py-[12px]
                    w-[330px] xm:w-[350px] sm:w-[163px] md:w-[50%] rounded-full block text-center
                    hover:text-primary_hover hover:border-primary_hover active:border-primary_pressed active:bg-primary_subtle active:transform active:scale-95 transition duration-500`}
                
                >
                Login
            </Link>
        </div>
    </div>
);
};

export default DesktopForm;
