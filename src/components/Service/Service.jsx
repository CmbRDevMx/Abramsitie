import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Service() {
  return (
    <section className="bg-customGreen">
      <div
        id="service"
        className="container lg:max-w-[1236px] px-3 lg:px-2 mx-auto py-[50px]"
      >
        <h1 className="main_heading">A wide range of services</h1>
      </div>
      <div className="container lg:max-w-[1236px] px-3 lg:px-2 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="border-t-2 border-gray-600 space-y-3 pb-[50px]">
          <h2 className="services_heading pt-[20px]">
            Target Audience Research
          </h2>
          <p>
            Unlock the secrets of your audience with CST's Qualitative Research
          </p>
        </div>
        <div className="border-t-2 border-gray-600 space-y-3 pb-[50px]">
          <h2 className="services_heading pt-[20px]">Google Ads</h2>
          <p>Boost your online presence with CST's Google Paid Ads Service.</p>
        </div>
        <div className="border-t-2 border-gray-600 space-y-3 pb-[50px]">
          <h2 className="services_heading pt-[20px]">Billboard Ads</h2>
          <p>Stand tall and grab attention with CST's Advertisement Service.</p>
        </div>
        <div className="border-t-2 border-gray-600 space-y-3 pb-[50px]">
          <h2 className="services_heading pt-[20px]">Marketing Consulting</h2>
          <p>Let our seasoned experts guide you.</p>
        </div>
      </div>
      <div className="flex justify-center pb-[50px] ">
        <button className="btn flex items-center bg-black text-white py-[10px] px-[30px] rounded-xl">
          Learn More <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
}

export default Service;
