'use client'

import Image from "next/image";
import SelectField from "./selectedField";
import InputField from "./inputField";
import ButtonBlue from "../../ui/buttonBlue";
import ButtonGlass from "../../ui/buttonGlass";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import Next from "../../../public/icons/arrow_next.svg";
import Previous from "../../../public/icons/arrow_back.svg";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  faculty: yup.string().required("Faculty is required"),
  department: yup.string().required("Department is required"),
  role: yup.string().required("Role is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Confirm Password is required"),
});

function MobileForm({ currentSection, nextSection, previousSection }) {
  const { handleSubmit, control, formState: { errors }, setError, register, trigger } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      faculty: "",
      department: "",
      role: "",
      password: "",
      confirmPassword: "",
    }
  });

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const validateSection = async (fields) => {
    const isValid = await trigger(fields);
    if (isValid) nextSection();
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://project-genius-back-end.onrender.com/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (Array.isArray(result.errors)) {
          result.errors.forEach((err) => {
            if (err.param) setError(err.param, { type: "manual", message: err.msg });
          });
        } else {
          setError("apiError", { type: "manual", message: result.message || "Something went wrong." });
        }
      } else {
        openModal();
        console.log("User finalized successfully:", result);
      }
    } catch (error) {
      setError("apiError", { type: "manual", message: "Network error, please try again." });
    }
  };

  return (
    <div className="block md:hidden">
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentSection === 1 && (
          <section className="flex flex-col gap-4 md:grid grid-cols-2">
            <InputField label="First Name" name="firstName" register={register} placeholder="Enter your first name" error={errors.firstName} />
            <InputField label="Last Name" name="lastName" register={register} placeholder="Enter your last name" error={errors.lastName} />
            <InputField label="Email" name="email" register={register} type="email" placeholder="Enter your email" error={errors.email} />
            <InputField label="Phone" name="phone" register={register} placeholder="Enter your phone number" error={errors.phone} />
            <ButtonBlue onClick={() => validateSection(["firstName", "lastName", "email", "phone"])} classname="w-full flex items-center justify-center gap-2">
              Next <Image src={Next} alt="arrow"/>
            </ButtonBlue>
          </section>
        )}

        {currentSection === 2 && (
          <section className="flex flex-col gap-4 md:grid grid-cols-2">
            
            <SelectField label="Select your Faculty" name="faculty" control={control} options={["Science", "Arts", "Engineering"]} errors={errors.faculty} />
            <SelectField label="Select your Department" name="department" control={control} options={["Computer"]} errors={errors.department} />
            <SelectField label="Select your Team Designation" name="role" control={control} options={["Member", "Lead"]} errors={errors.role} />
            
            <InputField label="Password" name="password" register={register} type="password" placeholder="Enter your password" error={errors.password} />
            <InputField label="Confirm Password" name="confirmPassword" register={register} type="password" placeholder="Confirm your password" error={errors.confirmPassword} />
            
            <div className="flex gap-4">
              <ButtonGlass classname="w-full flex items-center justify-center gap-2" onClick={previousSection}>
                <Image src={Previous} alt="previous"/> Previous
              </ButtonGlass>
              <ButtonBlue classname="w-[50%]" type="submit">Create account</ButtonBlue>
            </div>
          </section>
        )}

        {errors.apiError && <p className="text-error_dark">{errors.apiError.message}</p>}
      </form>
    </div>
  );
}

export default MobileForm;
