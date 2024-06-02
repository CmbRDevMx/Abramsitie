import { FaArrowRightLong } from "react-icons/fa6";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  const sliderData = [
    {
      name: "Kony Smith",
      designation: "Wild Ital CBD (Brand Awareness)",
      speech:
        "CST Social Marketing catapulted our brand's visibility by 30% in three months, resulting in a 25% spike in website traffic and sales. Their data-driven tactics are a surefire way to make waves in the market.",
    },
    {
      name: "Domaneik Rizzo",
      designation: "CIAO Pizza and Catering (Increase Foot Traffic)",
      speech:
        "Thanks to CST Social Marketing's laser-focused campaigns, we saw a 30% boost in store visits within 3 months. Their results-driven strategies bring customers through the door.",
    },
    {
      name: "Kwanza Simeon",
      designation: "City Lobster Seafood (Online Brand Reputation)",
      speech:
        "CST revamped our online reputation, lifting positive reviews by 40% and online orders by 35%. They're the backbone of our digital presence in the seafood scene.",
    },
    {
      name: "Judy Mason",
      designation: "Meli Melo Restaurant (Increase Online Orders)",
      speech:
        "CST's strategies led to a 40 % surge in online orders within 4 months. Their savvy content and social media tactics bring in new diners and revenue like clockwork.",
    },
    {
      name: "Jonathan Kelly",
      designation: "Wells Fargo (Product Desirability)",
      speech:
        "CST Social Marketing played a pivotal role in enhancing the desirability of our financial products. CST's expertise led to a 15% uptick in product inquiries and 20% rise in customer engagement. Their innovative approach makes our products stand out in a crowded market.",
    },
  ];

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
    <div className="relative">
      {/* tastaimonial */}

      <section
        className=" container px-3 lg:px-2 mx-auto  space-y-5 text-center"
        data-aos="fade-up"
      >
        <h1 className="main_heading ">What People Are Saying </h1>
        <p className="lg:max-w-[645px] mx-auto">
          60% of our clients double their revenue in the first 6 months. Here’s
          what they had to say about CST Social Marketing
        </p>
        <div className="flex justify-center md:justify-center pb-[50px] ">
          <button className="flex items-center btn py-[10px] px-[30px] rounded-md">
            Learn More <FaArrowRightLong />
          </button>
        </div>
      </section>

      {/* review section */}
      <section
        className="relative review container mx-auto pb-10 md:pb-0"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
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
          {sliderData.map((slider) => (
            <SwiperSlide className="flex select-none justify-center py-2">
              <div className="myBorder rounded-md px-5 py-4 max-w-[300px] lg:max-w-[350px] space-y-4">
                <h4 className="text-xl font-semibold">“{slider?.speech}”</h4>
                {/* <div className="flex justify-center md:justify-start pt-4">
                  <img
                    src="img/Ellipse_1.png"
                    alt=""
                    className="w-10 h-10 mr-2"
                  />
                  <img src="img/Ellipse_2.png" alt="" className="w-10 h-10" />
                </div> */}
                <div>
                  <p className="font-semibold">{slider?.name}</p>
                  <p className="text-sm">{slider?.designation}</p>
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
  );
};

export default Testimonial;
