import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function Banner() {
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
    </>
  )
}

export default Banner