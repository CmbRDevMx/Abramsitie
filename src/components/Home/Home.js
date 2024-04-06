import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPhoneAlt,FaLinkedin,FaFacebook,FaTiktok ,FaTwitter   } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";




function Home() {
  return (
    <>
    <section className='banner container lg:max-w-[1236px] px-3 lg:px-2 mx-auto flex flex-col md:flex-row items-center'>
        <div className='space-y-5 md:w-1/2 md:pr-8'>
            <h1 className='main_heading '>Transforming likes into leads.</h1>
            <p>Let us take your social media presence to the next level and convert engagement into actionable leads today.</p>
            <div className="flex justify-center md:justify-start pb-[50px] ">
            <button className='flex items-center btn py-[10px] px-[30px] rounded-full'>Learn More <FaArrowRightLong/></button>
            </div>
        </div>
        <div className='mt-8 md:mt-0 md:w-1/2'>
            <img src="/img/banner.png" alt="" className='w-full' />
        </div>
    </section>

    <section class="logo_section container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center items-center gap-4 py-4 md:py-8">
        <img src="img/Litter-Robot-Logo_1.png" alt="" className="max-w-[150px] grayscale-[0%]" />
        <img src="img/Adobe-Logo_2.png" alt="" className="max-w-[150px] grayscale-[0%]" />
        <img src="img/Procurify-Logo_3.png" alt="" className="max-w-[150px] grayscale-[0%]" />
        <img src="img/First-Lite-Logo_4.png" alt="" className="max-w-[150px] grayscale-[0%]" />
        <img src="img/Crossover-Symmetry-Logo_5.png" alt="" class="max-w-[150px] grayscale-[0%]" />
    </section>
    <section className='banner py-8 md:pt-[50px] md:pb-[120px] container mx-auto px-4 md:px-0 max-w-[1236px] flex flex-col md:flex-row items-center'>
        <div className='mt-8 md:mt-0 md:w-1/2 relative'>
            <img src="/img/pexels-ketut-subiyanto-4560060_1.png" alt="" className="w-full md:max-w-[580px] mx-auto relative" />
            <div className="hidden lg:block absolute inset-x-0 bottom-0 lg:flex lg:justify-center">
            {/* Show this div only on lg devices */}
            <div className="w-[110px] h-[110px] bg-customGreen rounded-md transform rotate-45 mb-[-56px]"></div>
        </div>
        </div>
        <div className='mt-8 md:mt-0 md:w-1/2 md:pl-8'>
            <div className='space-y-7'>
                <h1 className='main_heading text-center md:text-left'>What We Do</h1>
                <p className='text-center md:text-left'>Lorem Ipsum has been the industry's standard dummy text ever since the text ever since theever since.</p>
                <div className="flex justify-center md:justify-start pb-[50px]">
                    <button className='flex items-center justify-center md:justify-start text-center md:text-left text-[18px] font-semibold leading-[22px] underline rounded-full'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
        
    </section>



    <section className='bg-customGreen'>
        <div className='container lg:max-w-[1236px] px-3 lg:px-2 mx-auto py-[50px]'>
            <h1 className='main_heading'>A wide range of services</h1>
        </div>
        <div className='container lg:max-w-[1236px] px-3 lg:px-2 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className='border-t-2 border-gray-600 space-y-3 pb-[50px]'>
                <h2 className='services_heading pt-[20px]'>Paid Ads</h2>
                <p>Boost your online presence with CST's Google Paid Ads Service.</p>
            </div>
            <div className='border-t-2 border-gray-600 space-y-3 pb-[50px]'>
                <h2 className='services_heading pt-[20px]'>Target Audience Research</h2>
                <p>Unlock the secrets of your audience with CST's Qualitative Research</p>
            </div>
            <div className='border-t-2 border-gray-600 space-y-3 pb-[50px]'>
                <h2 className='services_heading pt-[20px]'>Google Ads</h2>
                <p>Boost your online presence with CST's Google Paid Ads Service.</p>
            </div>
            <div className='border-t-2 border-gray-600 space-y-3 pb-[50px]'>
                <h2 className='services_heading pt-[20px]'>Billboard Ads</h2>
                <p>Stand tall and grab attention with CST's Advertisement Service.</p>
            </div>
            <div className='border-t-2 border-gray-600 space-y-3 pb-[50px]'>
                <h2 className='services_heading pt-[20px]'>Marketing Consulting</h2>
                <p>Let our seasoned experts guide you.</p>
            </div>
        </div>
        <div className="flex justify-center pb-[50px] ">
            <button className='btn flex items-center bg-black text-white py-[10px] px-[30px] rounded-xl'>Learn More <FaArrowRightLong/></button>
        </div>
    </section>

    <section className='banner container lg:max-w-[1236px] px-3 pt-[50px] lg:px-2 mx-auto flex flex-col md:flex-row items-center'>
        <div className='space-y-5 md:w-1/2 md:pr-8'>
            <h2 className='blog_heading'>427%</h2>
            <h2 className=' blog_heading2 '>Brand Awareness</h2>

            <p>Tor msai khai is a realy good way to descripe.Tor msai khai is a realy good way to descripe.Tor msai .</p>
            <div className="flex justify-center md:justify-start pb-[50px]">
                <button className='flex items-center justify-center md:justify-start text-center md:text-left text-[18px] font-semibold leading-[22px] underline rounded-full'>
                View Case Study 
                </button>
            </div>
        </div>
        <div className='mt-8 md:mt-0 md:w-1/2'>
            <img src="/img/brand_awareness_c1.png" alt="" className='w-full' />
        </div>
    </section>
    
    <section className='banner container lg:max-w-[1236px] px-3 pt-[50px] lg:px-2 mx-auto flex flex-col md:flex-row items-center'>
        <div className='mt-8 md:mt-0 md:w-1/2'>
            <img src="/img/brand_awareness_c2.png" alt="" className='w-full' />
        </div>
        <div className='space-y-5 md:w-1/2 md:pr-8 text-right'>
            <h2 className='blog_heading '>68%</h2>
            <h2 className=' blog_heading2 '>Retargeting</h2>

            <p>Tor msai khai is a realy good way to descripe.Tor msai khai is a realy good way to descripe.Tor msai .</p>
            <div className="flex justify-center md:justify-end pb-[50px]">
                <button className='flex items-center justify-center md:justify-start text-center md:text-left text-[18px] font-semibold leading-[22px] underline rounded-full'>
                View Case Study 
                </button>
            </div>
        </div>

    </section>

    <section className='banner container lg:max-w-[1236px] px-3 pt-[50px] lg:px-2 mx-auto flex flex-col md:flex-row items-center justify-between'>
        <div className='md:w-1/2 md:pr-8'>
            <div className='space-y-5'>
                <h2 className='blog_heading'>128%</h2>
                <h2 className='blog_heading2'>Qualitative Research</h2>
                <p>Tor msai khai is a really good way to describe. Tor msai khai is a really good way to describe. Tor msai.</p>
                <div className="flex justify-center md:justify-start pb-8 md:pb-0">
                    <button className='flex items-center justify-center md:justify-start text-center md:text-left text-[18px] font-semibold leading-[22px] underline rounded-full'>
                        View Case Study 
                    </button>
                </div>
            </div>
        </div>
        <div className='md:w-1/2 flex items-end '>
            <img src="/img/wepik-export-20240331113312uh3q_1.png" alt="" className='z-10 lg:mb-2 w-full md:max-w-[400px] mx-auto md:mr-0 shadow' />

        </div>
    </section>


    <section className=' container lg:max-w-[1236px] px-3 lg:px-2 mx-auto pt-[50px] space-y-5 text-center'>
    <h1 className='main_heading '>See what others are saying</h1>
            <p className='lg:max-w-[645px] mx-auto'> Lorem Ipsum has been the industry's  text ever has been the industry's standard dummy text ever since the  text ever since the</p>
            <div className="flex justify-center md:justify-center pb-[50px] ">
            <button className='flex items-center btn py-[10px] px-[30px] rounded-md'>Learn More <FaArrowRightLong/></button>
            </div>
    </section>
     
     {/* review section */}

    <section className='review container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-10 justify-items-center pb-10 md:pb-0'>
        <div className='border col-span-1 rounded-md p-4 max-w-[300px] lg:max-w-[350px] space-y-4'>
            <h4 className='text-xl font-semibold'>“We approached Vlad to help us with the design of our new startup’s app. Vlad was exemplary in understanding the product and strategizing with us.”</h4>
            <div className='flex justify-center md:justify-start'>
                <img src="img/Ellipse_1.png" alt="" className='w-10 h-10 mr-2' />
                <img src="img/Ellipse_2.png" alt="" className='w-10 h-10' />
            </div>
            <div>
                <p className='font-semibold'>
                    David Oivas 
                </p>
                <p className=''>
                    Marketing partner at Kera Dering
                </p>
            </div>
        </div>
        <div className='border col-span-1 rounded-md p-4 max-w-[300px] lg:max-w-[350px] space-y-4 mt-5 md:mt-0'>
            <h4 className='text-xl font-semibold'>“We approached Vlad to help us with the design of our new startup’s app. Vlad was exemplary in understanding the product and strategizing with us.”</h4>
            <div className='flex justify-center md:justify-start'>
                <img src="img/Ellipse_1.png" alt="" className='w-10 h-10 mr-2' />
                <img src="img/Ellipse_2.png" alt="" className='w-10 h-10' />
            </div>
            <div>
                <p className='font-semibold'>
                    David Oivas 
                </p>
                <p className=''>
                    Marketing partner at Kera Dering
                </p>
            </div>
        </div>
    </section>




    <section className='relative container lg:max-w-[1236px] px-3 lg:px-2 mx-auto pt-[50px] space-y-5 text-center pb-[50px]'>
    <h1 className='main_heading'>Some of our creative work</h1>
    <p className='mx-auto lg:max-w-[645px]'>Lorem Ipsum has been the industry's text ever has been the industry's standard dummy text ever since the text ever since the</p>
    <div className="flex justify-center md:justify-center pb-[50px]">
        <button className='flex items-center btn py-[10px] px-[30px] rounded-md'>Book a call <FaPhoneAlt /></button>
    </div>

    {/* Gradient overlay */}
    <div className="absolute top-0 right-0 w-[16rem] h-[20rem] rounded-full bg-gradient-to-tr from-transparent to-yellow-200 opacity-80"></div>

    <div className="mx-auto max-w-[350px] md:max-w-[660px] lg:max-w-[860px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className='col-span-1 flex flex-col justify-center items-center'>
            <img src="img/comment_1_1.png" className="w-full h-auto object-cover pb-[10px]" alt="" />
            <img src="img/comment_1_2.png" className="w-full h-auto object-cover pb-[10px]" alt="" />
            <img src="img/comment_1_3.png" className="w-full h-auto object-cover " alt="" />
        </div>

        <div className='col-span-1 flex flex-col justify-center items-center'>
            <img src="img/comment_2_1.png" className="w-full h-auto object-cover pb-[10px]" alt="" />
            <img src="img/comment_2_2.png" className="w-full h-auto object-cover " alt="" />
        </div>

        <div className='col-span-1 flex flex-col justify-center items-center'>
            <img src="img/comment_3_1.png" className="w-full h-auto object-cover pb-[10px]" alt="" />
            <img src="img/comment_3_2.png" className="w-full h-auto object-cover pb-[10px]" alt="" />
            <img src="img/comment_3_3.png" className="w-full h-auto object-cover " alt="" />
        </div>

        <div className='col-span-1 flex flex-col justify-center items-center'>
            <img src="img/comment_4_1.png" className="w-full h-auto object-cover pb-[10px] " alt="" />
            <img src="img/comment_4_2.png" className="w-full h-auto object-cover pb-[10px] " alt="" />
            <img src="img/comment_4_3.png" className="w-full h-auto object-cover " alt="" />
        </div>
    </div>
    <div className="absolute bottom-0 left-0 w-[10rem] h-[14rem] rounded-full bg-gradient-to-tr from-transparent to-yellow-200 opacity-80"></div>
</section>


    <section className='banner container lg:max-w-[1236px] px-3 lg:px-2 mx-auto text-center bg-black rounded-xl py-[80px] mb-[50px]'>
    <div className='relative space-y-4'>
        {/* LinkedIn icon */}
        <FaLinkedin className='absolute text-white text-[38px] transform rotate-45 left-[7rem] hidden lg:block' />
        
        {/* Instagram icon */}
        <BsInstagram className='absolute bg-red-500 text-[38px] rounded-md top-[-3rem] left-[18rem] transform rotate-12 text-white hidden lg:block' />

        <h2 className='main_heading text-white'>Does this sound like you?</h2>
        
        {/* Facebook icon */}
        <FaFacebook className='absolute bg-white text-[38px] rounded-md top-[2rem] right-[7rem] transform rotate-12 text-blue-700 hidden lg:block' />
        
        <p className='text-[24px] font-medium mx-auto lg:max-w-[726px] text-white'>
            Schedule a free call below to find out how we can take your personal brand to 6-figures!
        </p>
        <div className="flex justify-center md:justify-center pb-[50px] relative ">
            {/* TikTok icon */}
            <FaTiktok className='absolute bg-white text-[40px] top-[2rem] left-[14rem] rounded-full transform rotate-12 hidden lg:block' />
            
            {/* Call button */}
            <button className='flex items-center btn py-[10px] px-[30px] rounded-md'>Book a call <FaPhoneAlt/></button>
            
            {/* Twitter icon */}
            <FaTwitter className='absolute text-blue-500 text-[38px] top-[2rem] right-[14rem] transform rotate-12 hidden lg:block' />
        </div>
    </div>
</section>



    </>
  )
}

export default Home