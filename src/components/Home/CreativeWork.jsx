import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
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
      imageUrl: "/img/work/work/i-said-it.png",
      title: "Social Media PPC Advertisement",
      des: "Brand Awareness Campaign",
      // className: "row-span-2",
    },
    {
      imageUrl: "/img/work/6.jpg",
      title: "Social Media PPC Advertisement",
      des: "Increase online sales traffic",
      className: "row-span-2",
      imgClass: "object-fill",
    },
    {
      imageUrl: "/img/work/work/Post 5.png",
      title: "Social Media PPC Advertisement",
      des: "Print & PPC Advertisement Brand Awareness",
      // className: "row-span-2",
      // imgClass: "object-fill",
    },
    {
      imageUrl: "/img/work/work/lnh.jpg",
      title: "Creative Marketing",
      des: "Print & PPC Advertisement Brand Awareness"
      // className: "row-span-2",
    },
    {
      imageUrl: "/img/work/work/4.png",
      title: "Social Media Paid Advertisement",
      des: "Increase online sales traffic"
      // className: "row-span-2",
    },
    {
      imageUrl: "/img/work/work/doordash.png",
      title: "Social Media Paid Advertisement",
      des: "Increase online sales traffic"
      // className: "row-span-2",
    },
    {
      imageUrl: "/img/work/work/7.jpg",
      title: "Social Media Paid Advertisement",
      des: "Increase online sales traffic",
      // className: "row-span-2",
    },
    {
      imageUrl: "/img/work/work/Story 1.png",
      title: "Social Media Paid Advertisement",
      des: "Increase online sales traffic",
      className: "row-span-2",
      imgClass: "object-fill",
    },
    {
      imageUrl: "/img/work/work/8.jpg",
      title: "Social Media PPC Advertisement",
      des: "Brand Awareness Campaign",
      // className: "row-span-2",
    },
    {
      imageUrl: "/img/work/3.png",
      title: "Brand Awareness Campaign",
      des: "Drive online sign up",
      // className: "row-span-2",
    },
  ];
  return (
    <div className="relative pt-16 md:pt-24 2xl:pt-32">
      <section
        className="relative select-none container lg:max-w-[1236px] px-3 lg:px-2 mx-auto space-y-5 text-center -mt-20 md:-mt-24 lg:-mt-28 xl:-mt-32 2xl:-mt-40"
        data-aos="fade-up"
      >
        <div className="flex justify-center">
          <img src="img/l-smma-2.png" alt="Sample" className="w-40 h-40 lg:w-64 lg:h-64" />
        </div>
        <h1 className="main_heading">Some of our creative work</h1>
        {/* <p className="mx-auto lg:max-w-[645px]">
          Lorem Ipsum has been the industry's text ever has been the industry's
          standard dummy text ever since the text ever since the
        </p> */}
        <div className="flex justify-center md:justify-center pb-[50px]">
          <button className="flex items-center text-xl gap-2">
            <span className="font-bold underline underline-offset-2">
              <a href="https://calendly.com/d/ck73-fkt-sz7/cst-marketing-call">SCHEDULE A CALL</a>
            </span>{" "}
            <FaArrowRightLong />
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
          <div className={`relative overflow-hidden ${img.className} group`} key={img.imageUrl}>
            <img
              alt="gallery"
              className={`min-h-full w-full md:max-h-[400px] 2xl:max-h-[550px] object-top transition-all duration-500 hover:scale-110 ${img?.imgClass}`}
              src={img.imageUrl}
            />
            <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 flex items-start justify-start p-4 group-hover:opacity-100 opacity-0">
              <div className="text-white p-4 bg-black bg-opacity-75 rounded">
                <h2 className="text-base font-bold">{img.title}</h2> {/* reduced from text-lg to text-base */}
                <h2 className="text-xl">{img.des}</h2> {/* reduced from text-2xl to text-xl */}
              </div>
            </div>
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
