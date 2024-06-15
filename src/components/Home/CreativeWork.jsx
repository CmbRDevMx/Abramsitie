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
      imageUrl: "/img/work/1.jpg",
    },
    {
      imageUrl: "/img/work/2.jpg",
    },
    {
      imageUrl: "/img/work/3.png",
    },
    {
      imageUrl: "/img/work/4.png",
    },
    {
      imageUrl: "/img/work/5.jpg",
    },
    {
      imageUrl: "/img/work/6.jpg",
    },
    {
      imageUrl: "/img/work/7.jpg",
    },
    {
      imageUrl: "/img/work/8.jpg",
    },
    {
      imageUrl: "/img/work/9.jpg",
    },
    {
      imageUrl: "/img/work/10.png",
    },
    {
      imageUrl: "/img/work/11.jpg",
    },
    {
      imageUrl: "/img/work/12.png",
    },
  ];
  return (
    <div className="relative  pt-16 md:pt-24 2xl:pt-32">
      <section
        className="relative select-none container lg:max-w-[1236px] px-3 lg:px-2 mx-auto space-y-5 text-center"
        data-aos="fade-up"
      >
        <h1 className="main_heading">Some of our creative work</h1>
        {/* <p className="mx-auto lg:max-w-[645px]">
          Lorem Ipsum has been the industry's text ever has been the industry's
          standard dummy text ever since the text ever since the
        </p> */}
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
          <div className="overflow-hidden row-span-2">
            <img
              alt="gallery"
              className="min-h-full max-h-[405px] 2xl:max-h-[571px] w-full object-cover object-top transition-all duration-500 hover:scale-110"
              src={img.imageUrl}
            />
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
