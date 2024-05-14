import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Banner from "./Banner";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Logos from "./Logo";
import Countup from "./Countup";
import Aos from "aos";
import "aos/dist/aos.css";
import Testimonial from "./Testimonial";
import AppModal from "../Shared/AppModal";
import CreativeWork from "./CreativeWork";

function Home() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-raleway">
      <Banner />

      <Logos />

      <About />

      <div
        className="pb-16 mt-16 md:pb-24 md:mt-24 hid  2xl:mt-32 2xl:pb-32 overflow-hidden  "
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="max-h-screen  h-[400px] md:h-auto overflow-hidden">
          <img
            src="/img/banner1.png"
            alt=""
            className="hover:scale-150 transition-all h-full w-full object-cover duration-[2000ms]"
          />
        </div>
      </div>

      <Service />

      <Countup />

      <div
        className="py-16 md:py-24 2xl:py-32 overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="max-h-screen h-[400px] md:h-auto overflow-hidden">
          <img
            src="/img/banner1.png"
            alt=""
            className="hover:scale-150 transition-all h-full w-full object-cover duration-[2000ms]"
          />
        </div>
      </div>

      {/* testimonial section here  */}
      <Testimonial />

      {/* creative work */}
      <CreativeWork />

      <div
        className="py-16 md:py-24 2xl:py-32 overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="max-h-screen h-[400px] md:h-auto overflow-hidden">
          <img
            src="/img/banner1.png"
            alt=""
            className="hover:scale-150 transition-all h-full w-full object-cover duration-[2000ms]"
          />
        </div>
      </div>

      <Contact />

      <AppModal
        cancelButtonProps={{ className: "text-white" }}
        modalOpen={open}
        setModalOpen={setOpen}
      >
        <section
          id="contact"
          className="bg-black text-center text-white p-10 md:p-14 2xl:p-20 w-[360px] flex justify-center items-center  lg:w-[1124px] 2xl:w-[1424px] lg:h-[70.5dvh] 2xl:h-[56dvh] overflow-auto mx-auto"
          // data-aos="fade-up"
          // data-aos-duration="1500"
        >
          <div className="relative space-y-4">
            {/* LinkedIn icon */}
            <FaLinkedin className="absolute text-[38px] transform rotate-45 left-[7rem] top-20 text-blue-100 hidden lg:block" />

            {/* Instagram icon */}
            <BsInstagram className="absolute bg-red-500 text-[38px] rounded-md top-[-3rem] left-[18rem] transform rotate-12 text-white hidden lg:block" />

            <h2 className="main_heading text-white">
              Are you looking to scale your business through online marketing?
            </h2>

            {/* Facebook icon */}
            <FaFacebook className="absolute bg-white text-[38px] rounded-md top-[4rem] right-[7rem] transform rotate-12 text-blue-700 hidden lg:block" />

            <p className="text-xl md:text-2xl font-medium mx-auto lg:max-w-[726px] text-white">
              Book a free consultation call to see how CST can help you!
            </p>
            <div className="flex justify-center md:justify-center pb-[50px] relative ">
              {/* TikTok icon */}
              <FaTiktok className="absolute bg-white text-[40px] top-[2rem] left-[14rem] rounded-full transform rotate-12 hidden lg:block" />

              {/* Call button */}
              <button className="flex items-center btn mt-6 md:mt-4 py-[10px] px-[30px] rounded-md">
                Book a call <FaPhoneAlt />
              </button>

              {/* Twitter icon */}
              <FaTwitter className="absolute text-blue-500 text-[38px] top-[2rem] right-[14rem] transform rotate-12 hidden lg:block" />
            </div>
          </div>
        </section>
        {/* <div className="bg-black text-center text-white p-10 md:p-16 2xl:p-20 lg:max-w-[1024px] max-h-[80dvh] overflow-auto mx-auto">
          <h2 className="text-5xl font-bold">
            Are you looking to scale your business through online marketing?
          </h2>
          <h4 className="text-2xl font-semibold pt-6 pb-12">
            Book a free consultation call to see how CST can help you
          </h4>
          <div className="flex justify-center md:justify-center">
            <button className="flex items-center btn py-[10px] px-[30px] rounded-md">
              Book a call <FaPhoneAlt />
            </button>
          </div>
        </div> */}
      </AppModal>
    </div>
  );
}

export default Home;
