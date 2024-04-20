import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function About() {
  return (
    <section
      id="about"
      className="about py-8 md:pt-[50px] container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center"
    >
      <div
        className="mt-8 md:mt-0 md:w-1/2 relative"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="/img/pexels-ketut-subiyanto-4560060_1.png"
          alt=""
          className="w-full md:max-w-[580px] mx-auto relative"
        />
        <div className="hidden absolute inset-x-0 bottom-0 lg:flex lg:justify-center">
          {/* Show this div only on lg devices */}
          <div className="w-[110px] h-[110px] bg-customGreen rounded-md transform rotate-45 mb-[-56px]"></div>
        </div>
      </div>

      <div
        className="mt-8 md:mt-0 md:w-1/2 md:pl-8"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="space-y-7">
          <h1 className="main_heading text-center md:text-left">What We Do</h1>
          <p className="text-center md:text-left">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the text ever since theever since.
          </p>
          <div className="flex justify-center md:justify-start pb-[50px]">
            <button className="flex items-center btn py-1.5 md:py-[10px] px-7 md:px-[30px] rounded-full">
              Learn More <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
