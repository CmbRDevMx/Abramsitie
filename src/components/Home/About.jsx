import React from "react";

function About() {
  return (
    <section
      id="about"
      className="about py-8 md:pt-[50px] md:pb-[120px] container mx-auto px-4 md:px-0 max-w-[1236px] flex flex-col md:flex-row items-center"
    >
      <div className="mt-8 md:mt-0 md:w-1/2 relative">
        <img
          src="/img/pexels-ketut-subiyanto-4560060_1.png"
          alt=""
          className="w-full md:max-w-[580px] mx-auto relative"
        />
        <div className="hidden lg:block absolute inset-x-0 bottom-0 lg:flex lg:justify-center">
          {/* Show this div only on lg devices */}
          <div className="w-[110px] h-[110px] bg-customGreen rounded-md transform rotate-45 mb-[-56px]"></div>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 md:pl-8">
        <div className="space-y-7">
          <h1 className="main_heading text-center md:text-left">What We Do</h1>
          <p className="text-center md:text-left">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the text ever since theever since.
          </p>
          <div className="flex justify-center md:justify-start pb-[50px]">
            <button className="flex items-center justify-center md:justify-start text-center md:text-left text-[18px] font-semibold leading-[22px] underline rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
