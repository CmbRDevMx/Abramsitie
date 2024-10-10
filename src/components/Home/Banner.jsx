import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";
import './banner.css'

function Banner() {
  return (
    <section id="home" className="relative">
      <div
        className="banner container px-4 lg:px-2 mx-auto flex flex-col justify-between md:flex-row items-center"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="mt-8 md:mt-0 space-y-3 md:space-y-5 2xl:space-y-8 md:w-[43%]">
          <h1 className="main_heading text-3xl md:text-4xl lg:text-5xl">
            Everyone is Not Your Audience —<br /> Let’s Find Who Is
          </h1>
          <p className="2xl:text-xl">
            Welcome to CST Social Marketing! We know everyone is not your target audience,
            and many businesses miss the mark because of this. Our marketing process starts
            with deep target audience research and then crafting a marketing strategy that
            connects with your actual customers.
          </p>
          <div className="flex justify-center md:justify-start pb-6 md:pb-[50px] pt-4 md:pt-0">
            <Link to="service" spy={true} smooth={true} offset={0} duration={500}>
              <button className="flex items-center text-xl gap-2">
                <span className="font-bold underline underline-offset-2">
                  Our Services
                </span>{" "}
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-[65%] lg:w-[40%] xl:w-[60%]">
          <img
            src="/img/new-target-banner.png"
            alt=""
            className="custom-image"
          />
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
