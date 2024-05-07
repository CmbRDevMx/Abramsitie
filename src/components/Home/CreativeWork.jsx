import { FaPhoneAlt } from "react-icons/fa";

const CreativeWork = () => {
  const imageDataOld = [
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

  const imageData = [
    {
      imageUrl: "/img/poster1.png",
    },
    {
      imageUrl: "/img/poster2.png",
    },
    {
      imageUrl: "/img/poster3.png",
    },
    {
      imageUrl: "/img/poster4.png",
    },
    {
      imageUrl: "/img/poster5.png",
    },
    {
      imageUrl: "/img/poster6.png",
    },
    {
      imageUrl: "/img/poster7.png",
    },
    {
      imageUrl: "/img/poster8.png",
    },
    {
      imageUrl: "/img/poster9.png",
    },
  ];
  return (
    <div className="relative  pt-16 md:pt-24 2xl:pt-32">
      <section
        className="relative select-none container lg:max-w-[1236px] px-3 lg:px-2 mx-auto space-y-5 text-center"
        data-aos="fade-up"
      >
        <h1 className="main_heading">Some of our creative work</h1>
        <p className="mx-auto lg:max-w-[645px]">
          Lorem Ipsum has been the industry's text ever has been the industry's
          standard dummy text ever since the text ever since the
        </p>
        <div className="flex justify-center md:justify-center pb-[50px]">
          <button className="flex items-center btn py-[10px] px-[30px] rounded-md">
            Book a call <FaPhoneAlt />
          </button>
        </div>
      </section>

      <div
        className="mx-4 md:mx-14 2xl:mx-20 grid grid-cols-1 md:grid-cols-3 gap-5"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {imageData?.map((img) => (
          <div className="overflow-hidden ">
            <img
              alt="gallery"
              className="h-full w-full object-contain transition-all duration-500 hover:scale-110"
              src={img.imageUrl}
            />

            {/* <div className="p-5 flex items-center justify-center flex-col text-center text-gray-100 relative z-10 h-full w-full bg-black/80 transition-all duration-500 opacity-0 hover:opacity-100">
              <h1 className="text-lg font-bold ">{img?.title}</h1>
              <p className="text-sm pt-2">{img?.description}</p>
              <button className="bg-customGreen text-white rounded-full px-4 py-1 text-sm md:text-base font-medium mt-2.5">
                View case study
              </button>
            </div> */}
          </div>
        ))}
      </div>

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
  );
};

export default CreativeWork;
