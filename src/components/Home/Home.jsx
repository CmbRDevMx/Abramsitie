import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import { FaPhoneAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import Banner from "./Banner";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Logo from "./Logo";
import Countup from "./Countup";
import { Navigation } from "swiper/modules";

function Home() {
  const imageData1 = [
    {
      imageUrl: "img/comment_1_1.png",
      title: "Holden Caulfield 1",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
    {
      imageUrl: "img/comment_1_2.png",
      title: "Holden Caulfield 2",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
    {
      imageUrl: "img/comment_1_3.png",
      title: "Holden Caulfield 3",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
  ];
  const imageData2 = [
    {
      imageUrl: "img/comment_2_1.png",
      title: "Holden Caulfield 1",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
    {
      imageUrl: "img/comment_2_2.png",
      title: "Holden Caulfield 2",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
  ];
  const imageData3 = [
    {
      imageUrl: "img/comment_3_1.png",
      title: "Holden Caulfield 1",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
    {
      imageUrl: "img/comment_3_2.png",
      title: "Holden Caulfield 2",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
    {
      imageUrl: "img/comment_3_3.png",
      title: "Holden Caulfield 2",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
  ];
  const imageData4 = [
    {
      imageUrl: "img/comment_4_1.png",
      title: "Holden Caulfield 1",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
    {
      imageUrl: "img/comment_4_2.png",
      title: "Holden Caulfield 2",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
    {
      imageUrl: "img/comment_4_3.png",
      title: "Holden Caulfield 2",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
  ];

  const sliderData = [1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18];

  const breakpoints = {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
      // centeredSlides: true,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
      // centeredSlides: false,
    },
  };

  return (
    <>
      <Banner />

      <Logo />

      <About />

      <Service />

      <Countup />

      <div className="relative">
        {/* tastaimonial */}

        <section className=" container lg:max-w-[1236px] px-3 lg:px-2 mx-auto pt-[50px] space-y-5 text-center">
          <h1 className="main_heading ">See what others are saying</h1>
          <p className="lg:max-w-[645px] mx-auto">
             Lorem Ipsum has been the industry's text ever has been the
            industry's standard dummy text ever since the text ever since the
          </p>
          <div className="flex justify-center md:justify-center pb-[50px] ">
            <button className="flex items-center btn py-[10px] px-[30px] rounded-md">
              Learn More <FaArrowRightLong />
            </button>
          </div>
        </section>

        {/* review section */}

        <section className="relative review container mx-auto pb-10 md:pb-0">
          <HiArrowLeft className="absolute swiper-testimonial-prev cursor-pointer z-10 left-2 md:left-20 text-lg md:text-4xl font-bold top-1/2" />
          <HiArrowRight className="absolute swiper-testimonial-next cursor-pointer z-10 right-2 md:right-20 text-lg md:text-4xl font-bold top-1/2" />
          <Swiper
            className="mySwiper"
            // spaceBetween={10}
            // slidesPerView={2}
            breakpoints={breakpoints}
            centeredSlides={false}
            navigation={{
              nextEl: ".swiper-testimonial-next",
              prevEl: ".swiper-testimonial-prev",
            }}
            modules={[Navigation]}
            pagination={{ clickable: true }}
            // onSlideChange={() => console.log("slide change")}
          >
            {sliderData.map((slder) => (
              <SwiperSlide className="flex select-none justify-center py-2">
                <div className="myBorder rounded-md px-5 py-4 max-w-[300px] lg:max-w-[350px] space-y-4">
                  <h4 className="text-xl font-semibold">
                    “We approached Vlad to help us with the design of our new
                    startup’s app. Vlad was exemplary in understanding the
                    product and strategizing with us.”
                  </h4>
                  <div className="flex justify-center md:justify-start pt-4">
                    <img
                      src="img/Ellipse_1.png"
                      alt=""
                      className="w-10 h-10 mr-2"
                    />
                    <img src="img/Ellipse_2.png" alt="" className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="font-semibold">David Oivas</p>
                    <p className="text-sm">Marketing partner at Kera Dering</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <img
          src="/img/shadow.png"
          className="hidden md:block absolute left-0 -top-1/2 opacity-50 -z-10"
          alt=""
        />
      </div>

      {/* creative work */}
      <div className="relative">
        <section className="relative select-none container lg:max-w-[1236px] px-3 lg:px-2 mx-auto pt-[50px] space-y-5 text-center pb-[50px]">
          <h1 className="main_heading">Some of our creative work</h1>
          <p className="mx-auto lg:max-w-[645px]">
            Lorem Ipsum has been the industry's text ever has been the
            industry's standard dummy text ever since the text ever since the
          </p>
          <div className="flex justify-center md:justify-center pb-[50px]">
            <button className="flex items-center btn py-[10px] px-[30px] rounded-md">
              Book a call <FaPhoneAlt />
            </button>
          </div>

          <div className="mx-auto lg:h-[110dvh] max-w-[350px] md:max-w-[660px] lg:max-w-[860px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 h-auto flex flex-col gap-2.5 justify-center items-center">
              {imageData1.map((img) => (
                <div class="flex cursor-pointer w-full h-[50dvh] overflow-hidden lg:h-full relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 object-center h-auto lg:h-full w-full object-cover group-hover:opacity-50"
                    src={img.imageUrl}
                  />
                  <div class="p-5 flex items-center justify-center flex-col text-center text-gray-100 relative z-10 h-full w-full bg-black/80 transition-all duration-500 opacity-0 hover:opacity-100">
                    <h1 class="text-lg font-bold ">{img?.title}</h1>
                    <p class="text-sm pt-2">{img?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-1 flex flex-col gap-2.5 justify-center items-center">
              {imageData2.map((img) => (
                <div class="flex cursor-pointer w-full  h-[50dvh] overflow-hidden lg:h-full relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 object-center h-auto lg:h-full w-full object-cover group-hover:opacity-50"
                    src={img.imageUrl}
                  />
                  <div class="p-5 flex items-center justify-center flex-col text-center text-gray-100 relative z-10 h-full w-full bg-black/80 transition-all duration-500 opacity-0 hover:opacity-100">
                    <h1 class="text-lg font-bold ">{img?.title}</h1>
                    <p class="text-sm pt-2">{img?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-1 flex flex-col gap-2.5 justify-center items-center">
              {imageData3.map((img, index) => (
                <div
                  class={`flex cursor-pointer w-full ${
                    index === 1
                      ? " h-[50dvh] overflow-hidden lg:h-auto"
                      : " h-[50dvh] overflow-hidden lg:h-full"
                  } relative`}
                >
                  <img
                    alt="gallery"
                    class="absolute inset-0 object-center h-auto lg:h-full w-full object-cover group-hover:opacity-50"
                    src={img.imageUrl}
                  />
                  <div class="p-5 flex items-center justify-center flex-col text-center text-gray-100 relative z-10 h-full w-full bg-black/80 transition-all duration-500 opacity-0 hover:opacity-100">
                    <h1 class="text-lg font-bold ">{img?.title}</h1>
                    <p class="text-sm pt-2">{img?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-1 flex flex-col gap-2.5 justify-center items-center">
              {imageData4.map((img) => (
                <div class="flex cursor-pointer w-full  h-[50dvh] overflow-hidden lg:h-full relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 object-center h-auto lg:h-full w-full object-cover group-hover:opacity-50"
                    src={img.imageUrl}
                  />
                  <div class="p-5 flex items-center justify-center flex-col text-center text-gray-100 relative z-10 h-full w-full bg-black/80 transition-all duration-500 opacity-0 hover:opacity-100">
                    <h1 class="text-lg font-bold ">{img?.title}</h1>
                    <p class="text-sm pt-2">{img?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <img
          src="/img/shadow.png"
          className="hidden md:block absolute left-0 -bottom-1/4 -z-10 opacity-85"
          alt=""
        />
        <img
          src="/img/shadow-right.png"
          className="hidden md:block absolute right-0 top-0 -z-10"
          alt=""
        />
      </div>

      <Contact />
    </>
  );
}

export default Home;
