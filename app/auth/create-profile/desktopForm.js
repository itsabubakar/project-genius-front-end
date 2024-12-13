import InputField from "./inputField";
import SelectField from "./selectedField.js";
import ButtonBlue from "../../ui/buttonBlue";
import ButtonGlass from "../../ui/buttonGlass";

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
            <InputField label="Password" type="password" placeholder="Enter your password" />
            <InputField
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
            />
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
