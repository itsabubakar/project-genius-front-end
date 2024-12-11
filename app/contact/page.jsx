import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <section>
      <div className="bg-custom flex flex-col items-center w-full py-20">
        <div className="flex flex-col justify-center items-center w-[90%] sm:w-[70%] md:backdrop:w-[65%] ">
          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0D0E11]">
            <h1 className="text-center">Reach out with your questions,</h1>
            <h1 className="text-center">feedback, or partnership</h1>
            <h1 className="text-center">inquiries</h1>
          </div>
          <div className=" text-[#4F5569] mt-8">
            <p className="text-center">
              Got a question or feedback? Fill out the form or reach out through
              email and social
            </p>
            <p className="text-center">
              media, and we’ll get back to you as soon as possible
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex flex-col lg:flex-row  flex-wrap items-center justify-around px-5 md:px-12 pb-16 mt-28">
        <div className="first w-[100%] md:w-[80%] lg:w-[45%]">
          <div className="mb-4">
            <h1 className="text-3xl font-semibold mb-4">
              Get in Touch With Us
            </h1>
            <p className="#4F5569">
              Have an inquiry? Fill out the form, and we’ll respond promptly.
            </p>
          </div>
          <div className="h-[525px] bg-[#FFFFFF]  shadow-2xl rounded-2xl p-6 space-y-8 w-full overflow-y-auto">
            <div className="flex flex-col">
              <label className="text-[#4F5569]">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="h-12 outline-none rounded-xl pl-4 bg-[#F3F4F6]  focus:outline-[#7494EC]  "
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#4F5569]">Email Address</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email address"
                className="h-12 outline-none rounded-xl pl-4 bg-[#F3F4F6] focus:outline-[#7494EC]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#4F5569]">Message</label>
              <textarea
                type=""
                name="message"
                placeholder="Enter your message here"
                className="outline-none rounded-xl pl-4 min-h-[109px] max-h-[150px]resize-y bg-[#F3F4F6] pt-4 focus:outline-[#7494EC]"
              />
            </div>
            <div className="w-full h-12 bg-[#1D4ED8]  hover:bg-[#7494EC] cursor-pointer text-[#F3F4F6] flex justify-center items-center rounded-full">
              Send Message
            </div>
          </div>
        </div>
        <div className="second w-[100%] lg:w-[45%] mt-16 lg:mt-0">
          <div className="mb-4">
            <h1 className="text-3xl font-semibold mb-4">
              Reach Out, Stay Updated
            </h1>
            <p className="#4F5569">
              Contact us via email or follow us on social media to stay updated.
            </p>
          </div>
          <div className="h-[525px] bg-[#FFFFFF] shadow-2xl  rounded-2xl p-6 space-y-8">
            <div className="w-full h-[72px] flex justify-between items-center bg-[#E9EEFC] rounded-2xl px-4 cursor-pointer">
              <div className="flex">
                <Image
                  alt="twitter-logo"
                  src="/icons/twitter.png"
                  width={24}
                  height={24}
                />
                <h1 className="text-[#06102D] font-medium ml-4">X (Twitter)</h1>
              </div>
              <Image
                alt="arrow"
                src="/icons/arrow.png"
                width={24}
                height={24}
              />
            </div>
            <div className="w-full h-[72px] flex justify-between  items-center bg-[#E9EEFC] rounded-2xl px-4 cursor-pointer">
              <div className="flex">
                <Image
                  alt="instagram-logo"
                  src="/icons/instagram.png"
                  width={24}
                  height={24}
                />
                <h1 className="text-[#06102D] font-medium ml-4">Instagram</h1>
              </div>
              <Image
                alt="arrow"
                src="/icons/arrow.png"
                width={24}
                height={24}
              />
            </div>
            <div className="w-full h-[72px] flex justify-between  items-center bg-[#E9EEFC] rounded-2xl px-4 cursor-pointer">
              <div className="flex">
                <Image
                  alt="phone-logo"
                  src="/icons/phone.png"
                  width={24}
                  height={24}
                />
                <h1 className="text-[#06102D] font-medium ml-4">
                  + 234 703 0207 301
                </h1>
              </div>
              <Image
                alt="arrow"
                src="/icons/arrow.png"
                width={24}
                height={24}
              />
            </div>
            <div className="w-full h-[72px] flex justify-between  items-center bg-[#E9EEFC] rounded-2xl px-4 cursor-pointer">
              <div className="flex">
                <Image
                  alt="email-logo"
                  src="/icons/email.png"
                  width={24}
                  height={24}
                />
                <h1 className="text-[#06102D] font-medium ml-4">
                  info@projectgenius.com.ng
                </h1>
              </div>
              <Image
                alt="info card"
                src="/icons/arrow.png"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
