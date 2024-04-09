import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
      
import { FaPhoneAlt  } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Service from '../Service/Service';
import Logo from '../Logo/Logo';
import Countup from '../Countup/Countup';



function Home() {


  return (
    <>
        
    <Banner/>

    <Logo/>

    <About/>

    <Service/>

    <Countup/>

    {/* tastaimonial */}

    <section className=' container lg:max-w-[1236px] px-3 lg:px-2 mx-auto pt-[50px] space-y-5 text-center'>
    <h1 className='main_heading '>See what others are saying</h1>
            <p className='lg:max-w-[645px] mx-auto'> Lorem Ipsum has been the industry's  text ever has been the industry's standard dummy text ever since the  text ever since the</p>
            <div className="flex justify-center md:justify-center pb-[50px] ">
            <button className='flex items-center btn py-[10px] px-[30px] rounded-md'>Learn More <FaArrowRightLong/></button>
            </div>
    </section>
     
     {/* review section */}

    <section className='review container mx-auto pb-10 md:pb-0'>
        <Swiper
            spaceBetween={10} // Adjust this value to decrease the space between slides
            slidesPerView={2} // Set this to 2 since you want to display 2 slides per view
            centeredSlides={false} // Center the slides in the swiper container
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className="flex justify-center">
                <div className='border rounded-md p-4 max-w-[300px] lg:max-w-[350px] space-y-4'>
                    <h4 className='text-xl font-semibold'>“We approached Vlad to help us with the design of our new startup’s app. Vlad was exemplary in understanding the product and strategizing with us.”</h4>
                    <div className='flex justify-center md:justify-start'>
                        <img src="img/Ellipse_1.png" alt="" className='w-10 h-10 mr-2' />
                        <img src="img/Ellipse_2.png" alt="" className='w-10 h-10' />
                    </div>
                    <div>
                        <p className='font-semibold'>David Oivas</p>
                        <p className=''>Marketing partner at Kera Dering</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
                <div className='border rounded-md p-4 max-w-[300px] lg:max-w-[350px] space-y-4'>
                    <h4 className='text-xl font-semibold'>“We approached Vlad to help us with the design of our new startup’s app. Vlad was exemplary in understanding the product and strategizing with us.”</h4>
                    <div className='flex justify-center md:justify-start'>
                        <img src="img/Ellipse_1.png" alt="" className='w-10 h-10 mr-2' />
                        <img src="img/Ellipse_2.png" alt="" className='w-10 h-10' />
                    </div>
                    <div>
                        <p className='font-semibold'>David Oivas</p>
                        <p className=''>Marketing partner at Kera Dering</p>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide className="flex justify-center">
                <div className='border rounded-md p-4 max-w-[300px] lg:max-w-[350px] space-y-4'>
                    <h4 className='text-xl font-semibold'>“We approached Vlad to help us with the design of our new startup’s app. Vlad was exemplary in understanding the product and strategizing with us.”</h4>
                    <div className='flex justify-center md:justify-start'>
                        <img src="img/Ellipse_1.png" alt="" className='w-10 h-10 mr-2' />
                        <img src="img/Ellipse_2.png" alt="" className='w-10 h-10' />
                    </div>
                    <div>
                        <p className='font-semibold'>David Oivas</p>
                        <p className=''>Marketing partner at Kera Dering</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
                <div className='border rounded-md p-4 max-w-[300px] lg:max-w-[350px] space-y-4'>
                    <h4 className='text-xl font-semibold'>“We approached Vlad to help us with the design of our new startup’s app. Vlad was exemplary in understanding the product and strategizing with us.”</h4>
                    <div className='flex justify-center md:justify-start'>
                        <img src="img/Ellipse_1.png" alt="" className='w-10 h-10 mr-2' />
                        <img src="img/Ellipse_2.png" alt="" className='w-10 h-10' />
                    </div>
                    <div>
                        <p className='font-semibold'>David Oivas</p>
                        <p className=''>Marketing partner at Kera Dering</p>
                    </div>
                </div>
            </SwiperSlide>
            {/* Repeat SwiperSlide for other slides */}
        </Swiper>
    </section>




    {/* creative work */}

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
            
                <img src="img/comment_1_1.png" class="w-full h-auto object-cover pb-[10px] group-hover:opacity-50" alt="" />           
                <img src="img/comment_1_2.png" class="w-full h-auto object-cover pb-[10px] group-hover:opacity-50" alt="" />              
                <img src="img/comment_1_3.png" class="w-full h-auto object-cover pb-[10px] group-hover:opacity-50" alt="" />
                
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


    <Contact/>



    </>
  )
}

export default Home