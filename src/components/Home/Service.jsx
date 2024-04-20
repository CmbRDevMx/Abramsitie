import { Popover } from "antd";
import Aos from "aos";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import "aos/dist/aos.css";

function Service() {
  useEffect(() => {
    Aos.init();
  }, []);

  const serviceData = [
    {
      title: "Paid Ads",
      description:
        " Boost your online presence with CST's Google Paid Ads Service. Boost your online presence with CST's Google Paid Ads Service. Boost your online presence with CST's Google Paid Ads Service.",
    },
    {
      title: "Target Audience Research",
      description:
        "Unlock the secrets of your audience with CST's Qualitative Research Boost your online presence with CST's Google Paid Ads Service. Boost your online presence with CST's Google Paid Ads Service. Boost your online presence with CST's Google Paid Ads Service.",
    },
    {
      title: "Google Ads",
      description:
        "Qualitative Research Boost your online presence with CST's Google Paid Ads Service. Boost your online presence with CST's Google Paid Ads Service. Boost your online presence with CST's Google Paid Ads Service.",
    },
    {
      title: "Billboard Ads",
      description:
        "Stand tall and grab attention with CST's Advertisement Service. Qualitative Research Boost your online presence with CST's Google Paid Ads Service. Boost your online presence with CST's Google Paid Ads Service. Boost your online presence with CST's Google Paid Ads Service.",
    },
    {
      title: "Marketing Consulting",
      description:
        "Let our seasoned experts guide you. Stand tall and grab attention with CST's Advertisement Service. Qualitative Research Boost your online presence with CST's Google Paid Ads Service. Boost your online presence with CST's Google Paid Ads Service. Boost your online presence with CST's Google Paid Ads Service.",
    },
  ];

  return (
    <section className="bg-black text-white">
      <div
        id="service"
        className="container lg:max-w-[1236px] px-3 lg:px-2 mx-auto py-[50px]"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h1 className="main_heading">A wide range of services</h1>
      </div>
      <div
        className="container lg:max-w-[1236px] px-3 lg:px-2 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {serviceData.map((service, index) => (
          <Popover
            key={index}
            content={
              <div className="max-w-[420px] rounded-3xl bg-[#FAFAFA59] px-4 2xl:px-8 py-6 2xl:py-10">
                <h2 className="text-2xl font-bold">{service?.title}</h2>
                <p className="py-4">{service?.description}</p>
                <div className="flex items-center justify-center">
                  <button className="text-sm 2xl:text-base flex items-center gap-2 font-medium text-white btn px-4 py-2 rounded-xl">
                    Book a call <IoCallOutline />
                  </button>
                </div>
              </div>
            }
          >
            <div className="border-t-2 border-gray-600 space-y-3 mb-[50px]">
              <h2 className="services_heading pt-[20px]">{service?.title}</h2>
              <p className="line-clamp-2">{service?.description}</p>
            </div>
          </Popover>
        ))}
      </div>
      <div
        className="flex justify-center pb-[50px] "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <button className="btn flex items-center bg-customGreen text-white py-[10px] px-[30px] rounded-xl">
          Learn More <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
}

export default Service;
