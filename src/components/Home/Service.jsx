import { Popover } from "antd";
import Aos from "aos";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "aos/dist/aos.css";
import note from "../assets/note.png";
import google from "../assets/google.png";
import email from "../assets/email.png";
import brand from "../assets/brand.png";
import marketing from "../assets/marketing.png";
import phone from "../assets/phone.png";
import consulting from "../assets/consulting.png";

function Service() {
  useEffect(() => {
    Aos.init();
  }, []);

  const serviceData = [
    {
      title: "Social Media Marketing PPC",
      description:
        "Maximize your impact on social media with CST's paid advertisement service. Harness the power of platforms like Facebook, Instagram, TiK Tok, and X to reach your target audience with precision. Our team crafts visually stunning ads that drive engagement, conversions, and results, all while optimizing your advertising budget for maximum ROI.",
      img: phone,
    },
    {
      title: "Target Audience Research",
      description:
        "At CST Social Marketing, we utilize qualitative research to unlock valuable insights into your target audience's preferences. By conducting interviews, focus groups, and observational studies, we gain a deep understanding of what motivates your audience. This allows us to tailor your marketing strategy and campaigns with creative designs & messaging with precision.",
      img: note,
    },
    {
      title: "Google Paid Ads",
      description:
        "Boost your online presence with CST's Google Paid Ads Service. Reach customers at the moment they're searching for what you offer with targeted ads on Google. From search to display, our team creates compelling campaigns that drive traffic, leads, and conversions, putting your business front and center on the digital stage.",
      img: google,
    },
    {
      title: "Email & Direct Mail",
      description:
        "CST Social Marketing's Email and Direct Mail Marketing Services are designed to maximize your marketing impact. Whether it's delivering targeted email campaigns or designing eye-catching direct mail pieces, we help you reach your audience with precision, driving results and amplifying your brand's visibility.",
      img: email,
    },
    {
      title: "Video Production",
      description:
        "At CST Social Marketing, we specialize in bringing your brand's story to life through captivating video production. From concept to execution, our team specializes in creating memorable brand experiences that leave a lasting impression on your audience, driving brand awareness and affinity.",
    },
    {
      title: "Billboard Advertisement",
      description:
        "Stand tall and grab attention with CST's Billboard Advertisement Service. Whether it's towering over highways or dominating cityscapes, let us showcase your brand where it counts. Increase visibility, leave a memorable impression, and drive traffic to your business with our expertly crafted billboards.",
      img: brand,
    },
    {
      title: "Brand Management",
      description:
        "Trust CST Social Marketing to manage your brand's reputation with finesse. Our dedicated team employs advanced monitoring tools and strategic interventions to uphold your brand's integrity online. Whether it's combating negative reviews  or amplifying positive feedback, we're committed to preserving and strengthening your brand's reputation in the digital sphere.",
      img: marketing,
    },
    {
      title: "Marketing Consulting",
      description:
        "Unlock the full potential of your brand with CST Social Marketing's Marketing Consultation services. Our team of seasoned professionals collaborates closely with you to understand your goals, challenges, and unique market position, delivering personalized insights and strategies to propel your brand forward.",
      img: consulting,
    },
  ];

  return (
    <section className="bg-black text-white relative">
      <img
        src="/img/shadow-right.png"
        className="absolute right-0 pointer-events-none  top-[50%] -translate-y-1/2"
        alt=""
      />
      <div id="service" className="container lg:max-w-[1236px] px-3 lg:px-2 mx-auto py-[50px]" data-aos="fade-up" data-aos-duration="1500">
        <div className="flex items-center justify-between">
          <h1 className="main_heading text-2xl lg:text-4xl mr-4 sm:mr-8">Our wide range of services</h1>
          <img src="img/l-smma-3.png" alt="Sample" className="w-20 h-20 sm:w-32 sm:h-32 lg:w-64 lg:h-64" />
        </div>
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
                <h2 className="text-2xl font-bold">{service?.title} </h2>
                <p className="py-4">{service?.description}</p>
                {/* <div className="flex items-center justify-center">
                  <button className="text-sm 2xl:text-base flex items-center gap-2 font-medium text-white btn px-4 py-2 rounded-xl">
                    Book a call <IoCallOutline />
                  </button>
                </div> */}
                <div className="overflow-hidden rounded">
                  <img
                    className="w-full  max-h-[350px] object-contain rounded hover:scale-105 transition-all scale-100 duration-500"
                    src={service.img}
                    alt=""
                  />
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
        {/* <button className="btn flex items-center bg-customGreen text-white py-[10px] px-[30px] rounded-xl">
          Schedule A Call Today <FaArrowRightLong />
        </button> */}

          <button className="flex items-center text-xl gap-2">
            <span className="font-bold underline underline-offset-2">
              <a href="https://calendly.com/d/ck73-fkt-sz7/cst-marketing-call">Schedule A Call Today</a>
            </span>{" "}
            <FaArrowRightLong />
          </button>
      </div>
    </section>
  );
}

export default Service;
