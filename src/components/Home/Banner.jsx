import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function Banner() {
  return (
    <section id="home" className="relative">
      <div
        className="banner container px-4 lg:px-2 mx-auto flex flex-col md:flex-row items-center"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="mt-8 md:mt-0 space-y-3 md:space-y-5 md:w-1/2 md:pr-8">
          <h1 className="main_heading ">
            CST Social Marketing: Where Visibility Meets Desire
          </h1>
          <p>
            Finding your ideal customers in a crowded digital market is our
            specialty. CST Social Marketing uses Qualitative research to place
            your products or services in front of your target audience.
          </p>
          <div className="flex justify-center md:justify-start pb-6 md:pb-[50px] pt-4 md:pt-0 ">
            <button className="flex items-center btn py-1.5 md:py-[10px] px-7 md:px-[30px] rounded-full">
              Learn More <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img src="/img/banner.png" alt="" className="w-full" />
        </div>
      </div>

      <img
        src="/img/shadow.png"
        className="hidden md:block absolute left-0 top-0 -z-10 opacity-25"
        alt=""
      />
    </section>
  );
}

export default Banner;
