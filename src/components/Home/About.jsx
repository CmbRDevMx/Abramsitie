import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";

function About() {
  return (
    <section
      id="about"
      className="about pt-8 md:pt-[50px] container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center"
    >
      {/* <div
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
          Show this div only on lg devices
          <div className="w-[110px] h-[110px] bg-customGreen rounded-md transform rotate-45 mb-[-56px]"></div>
        </div>
      </div> */}

      <div
        className="mt-8 md:mt-0 w-full text-center md:pl-8"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="space-y-7 text-center">
          <h1 className="font-raleway font-semibold	2xl:text-8xl md:text-7xl text-5xl text-center">
            What We Do
          </h1>
          <p className="text-center max-w-4xl text-lg md:text-xl 2xl:text-2xl mx-auto">
            At CST Social Marketing, we specialize in crafting and executing
            precision marketing strategies that resonate with your target
            audience.
            <br />
            <br />
            By leveraging qualitative research, we uncover the intricacies of
            your audience's preferences and behaviors, empowering us to create
            campaigns that deliver tangible results. Our objective ensures your
            brand reaches the right people with the right message, every time
          </p>
          <div className="flex justify-center">
          <Link
              to="service"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button className="flex items-center text-xl gap-2">
                <span className="font-bold underline underline-offset-2">
                  WORK WITH US
                </span>{" "}
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
