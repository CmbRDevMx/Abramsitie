import React from "react";

function Logos() {
  return (
    <>
      <section
        className="container px-4  mx-auto flex justify-between items-center gap-1 md:gap-4 py-4 md:py-8"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <img
          src="img/Litter-Robot-Logo_1.png"
          alt=""
          className="max-w-[70px] md:max-w-[150px] object-cover grayscale-[0%]"
        />
        <img
          src="img/Adobe-Logo_2.png"
          alt=""
          className="max-w-14 md:max-w-[150px] object-cover grayscale-[0%]"
        />
        <img
          src="img/Procurify-Logo_3.png"
          alt=""
          className="max-w-12 md:max-w-[150px] object-cover grayscale-[0%]"
        />
        <img
          src="img/First-Lite-Logo_4.png"
          alt=""
          className="max-w-12 md:max-w-[150px] object-cover grayscale-[0%]"
        />
        <img
          src="img/Crossover-Symmetry-Logo_5.png"
          alt=""
          class="max-w-16 md:max-w-[150px] object-cover grayscale-[0%]"
        />
      </section>
    </>
  );
}

export default Logos;
