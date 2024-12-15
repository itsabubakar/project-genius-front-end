import Heading from "../components/landing_page/header";
import ButtonBlue from "../ui/buttonBlue";
import ButtonGlass from "../ui/buttonGlass";
import AuthLayout from "./auth-components/layout";
export default function Login(){
    return (
        <AuthLayout>
            
            <form className="flex flex-col gap-4">
                
                <Heading 
                    heading={"Let's continue building"}
                    subHeading={"Log in to pick up where you left off"}
                    classname={"gap-2"}
                />

                <div className=" flex flex-col gap-2 text-greyscale_text">
                    <label>Email address</label>
                    <input type="email"
                        className="w-[350px] md:w-[400px] px-4 py-3 rounded-xl bg-greyscale_surface_subtle focus:outline-primary"
                        placeholder="Enter your email address"/>
                </div>
                
                <div className=" flex flex-col gap-2 text-greyscale_text">
                    <label>Password</label>
                    <input type="password"
                        className="w-[350px] md:w-[400px] px-4 py-3 rounded-xl bg-greyscale_surface_subtle 
                        focus:outline-primary "
                        placeholder="Enter your password"/>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row justify-center items-center ">
                    
                    <ButtonBlue
                    classname={"active:bg-greyscale_subtitle md:w-[50%]"}>
                        Login
                    </ButtonBlue>
                    <ButtonGlass classname="md:w-[50%]">
                        Create account
                    </ButtonGlass>
                </div>
                <p className="text-right text-greyscale_text">Forgot Password?</p>
                
            </form>
        </AuthLayout>
    )
}