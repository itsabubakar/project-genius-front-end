"use client"
import { useState } from "react";
import Heading from "../../components/landing_page/header";
import ButtonBlue from "../../ui/buttonBlue";
import AuthLayout from "../auth-components/layout";
import Modal from "../modal";
import { useRouter } from "next/router";
export default function ForgotPassword() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true); // Open modal
    const closeModal = () => setModalOpen(false); // Close modal

    const HandleSubmit = (e) => {
        e.preventDefault();


        openModal();
    }

    return (
        <AuthLayout>
            <div className="text-center flex flex-col items-center">
                
            <Heading 
                heading={"Forgot your password?"}
                subHeading={"Let’s get you back on track. Submit your email to reset your password."}
            />
            
            <form className="flex flex-col gap-4 items-center">

                <div className=" flex flex-col gap-2 text-greyscale_text">
                    <input type="email"
                        className="w-[350px] md:w-[600px] px-4 py-3 rounded-xl bg-greyscale_surface_subtle 
                        focus:outline-primary "
                        placeholder="Confirm email address"/>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    
                    <ButtonBlue
                    classname={"disabled:bg-greyscale_subtitle"}
                    onClick={HandleSubmit}>
                        Submit
                    </ButtonBlue>
                </div>

                {modalOpen && (
                    <Modal
                        heading={"Reset Link Sent"}
                        subHeading={"Check your inbox for a link to reset your password."}
                        modalClose={closeModal}
                    />
                )}
                
            </form>
            
            </div>
        </AuthLayout>
    )
}