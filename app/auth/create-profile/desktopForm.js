import Image from "next/image";

import InputField from "./inputField";
import SelectField from "./selectedField.js";
import ButtonBlue from "../../ui/buttonBlue";
import ButtonGlass from "../../ui/buttonGlass";

import HidePassword from "../../../public/icons/password_eye.svg"

const DesktopForm = ({ previousSection, handleSubmit }) => (
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
                
                <InputField label="Password" type="password" placeholder="Enter your password" />
                <Image src={HidePassword} alt="Search" className=" h-fit relative top-12 right-8" />

            </div>
            <div className="flex justify-center">
                
            <InputField
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
            />
            <Image src={HidePassword} alt="Search" className=" h-fit relative top-12 right-8" />

            </div>
        </section>

        <div className="flex gap-2">
            <ButtonBlue onClick={handleSubmit} classname={"md:w-[50%]"}>
                Create account
            </ButtonBlue>
            
            <ButtonGlass onClick={previousSection} classname={"md:w-[50%]"}>
                Login
            </ButtonGlass>
        </div>
    </div>
);

export default DesktopForm;
