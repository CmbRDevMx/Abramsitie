import React from "react";
import Marquee from "react-fast-marquee";

function Logos() {
  const imagess = [
    "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139009/Website-assets/LifeCare/pngegg_6_znodor.png",
    "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139009/Website-assets/LifeCare/pngegg_3_vsnljn.png",
    "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139009/Website-assets/LifeCare/pngegg_2_zn4mh8.png",
    "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139008/Website-assets/LifeCare/Sheba.xyz_Logo_cdfc1n.png",
    "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139008/Website-assets/LifeCare/pngegg_1_cymmyz.png",
    "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139008/Website-assets/LifeCare/pngegg_4_hghuv0.png",
    "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139008/Website-assets/LifeCare/pngegg_5_l6dlsh.png",
    "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139008/Website-assets/LifeCare/pngegg_yty145.png",
  ];

  const images = [
    "/img/1.png",
    "/img/2.png",
    "/img/3.png",
    "/img/4.png",
    "/img/5.png",
    "/img/6.png",
    "/img/7.png",
    "/img/8.png",
    "/img/9.png",
    "/img/10.png",
    "/img/11.png",
    "/img/12.png",
    "/img/13.png",
    "/img/14.png",
    "/img/15.png",
  ];
  return (
    <>
      {/* <section
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
      </section> */}

      <section className="px-10 py-6 md:p-14 2xl:p-20">
        <Marquee>
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="flex h-full items-center gap-10 md:gap-36 2xl:gap-48 pl-10 md:pl-36 2xl:pl-48"
          >
            {images?.map((img, index) => {
              return (
                <div key={index} className="">
                  {/* <img
                  className="h-full w-full object-contain"
                  src={img}
                  alt=""
                /> */}
                  <img
                    src={img}
                    alt=""
                    className="max-w-14 md:max-w-32 2xl:max-w-[150px] object-contain grayscale-0"
                  />
                </div>
              );
            })}
          </div>
        </Marquee>
      </section>
    </>
  );
}

export default Logos;
