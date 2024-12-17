import Image from "next/image";
import InputField from "./inputField";
import SelectField from "./selectedField";
import ButtonBlue from "../../ui/buttonBlue";
import ButtonGlass from "../../ui/buttonGlass";

import Next from "../../../public/icons/arrow_next.svg"
import Previous from "../../../public/icons/arrow_back.svg"
const MobileForm = ({
    currentSection,
    nextSection,
    previousSection,
    handleSubmit,
}) =>
    (
    <div className="block md:hidden">
        {currentSection === 1 && (
            <section className="flex flex-col gap-4 md:grid grid-cols-2">
                <InputField label="First name" placeholder="Enter your first name" />
                <InputField label="Last name" placeholder="Enter your last name" />
                <InputField label="Email" type="email" placeholder="Enter your email address" />
                <InputField label="Phone number" type="number" placeholder="Enter your phone number" />
                <div className="flex gap-2 items-center">
                    <ButtonBlue onClick={nextSection} classname={"w-full sm:w-full flex items-center justify-center gap-2"}>
                        Next
                        <Image src={Next} alt="arrow"/>
                    </ButtonBlue>
                </div>
            </section>
        )}

        {currentSection === 2 && (
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
                <div>
                    <InputField
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div>
                    <InputField
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                
                <div className="flex gap-4">
                    <ButtonGlass classname={"w-full flex items-center justify-center gap-2"} onClick={previousSection}>
                    <Image src={Previous} alt="previous"/>
                        Previous
                    </ButtonGlass>
                    <ButtonBlue classname="w-[50%]" onClick={handleSubmit}>
                        Create account
                    </ButtonBlue>
                </div>
            </section>
        )}
    </div>
);

export default MobileForm;
