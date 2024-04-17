import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

function Countup() {
  // State variables for visibility of each section
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  // Refs for h2 elements in each section
  const h2Ref1 = useRef(null);
  const h2Ref2 = useRef(null);
  const h2Ref3 = useRef(null);

  // Intersection observer callback function
  const handleIntersection = (entries, observer, setIsVisible) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    // Create intersection observers for each section
    const observer1 = new IntersectionObserver((entries) =>
      handleIntersection(entries, observer1, setIsVisible1)
    );
    const observer2 = new IntersectionObserver((entries) =>
      handleIntersection(entries, observer2, setIsVisible2)
    );
    const observer3 = new IntersectionObserver((entries) =>
      handleIntersection(entries, observer3, setIsVisible3)
    );

    // Observe each h2 element
    if (h2Ref1.current) observer1.observe(h2Ref1.current);
    if (h2Ref2.current) observer2.observe(h2Ref2.current);
    if (h2Ref3.current) observer3.observe(h2Ref3.current);

    // Cleanup function
    return () => {
      if (h2Ref1.current) observer1.unobserve(h2Ref1.current);
      if (h2Ref2.current) observer2.unobserve(h2Ref2.current);
      if (h2Ref3.current) observer3.unobserve(h2Ref3.current);
    };
  }, []);
  return (
    <div className="relative">
      <section className="banner container lg:max-w-[1236px] px-3 pt-[50px] lg:px-2 mx-auto flex flex-col md:flex-row items-center">
        <div className="space-y-5 md:w-1/2 md:pr-8">
          <h2 ref={h2Ref1} className="blog_heading">
            {isVisible1 ? <CountUp end={427} /> : "427%"}%
          </h2>
          <h2 className=" blog_heading2 ">Brand Awareness</h2>

          <p>
            Tor msai khai is a realy good way to descripe.Tor msai khai is a
            realy good way to descripe.Tor msai .
          </p>
          <div className="flex justify-center md:justify-start pb-[50px]">
            <button className="flex items-center justify-center md:justify-start text-center md:text-left text-[18px] font-semibold leading-[22px] underline rounded-full">
              View Case Study
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img src="/img/brand_awareness_c1.png" alt="" className="w-full" />
        </div>
      </section>

      <section className="banner container lg:max-w-[1236px] px-3 pt-[50px] lg:px-2 mx-auto flex flex-col md:flex-row items-center">
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img src="/img/brand_awareness_c2.png" alt="" className="w-full" />
        </div>
        <div className="space-y-5 md:w-1/2 md:pr-8 text-right">
          <h2 ref={h2Ref2} className="blog_heading">
            {isVisible2 ? <CountUp end={68} /> : "68%"}%
          </h2>
          <h2 className="blog_heading2">Retargeting</h2>
          <p>
            Tor msai khai is a realy good way to descripe.Tor msai khai is a
            realy good way to descripe.Tor msai .
          </p>
          <div className="flex justify-center md:justify-end pb-[50px]">
            <button className="flex items-center justify-center md:justify-start text-center md:text-left text-[18px] font-semibold leading-[22px] underline rounded-full">
              View Case Study
            </button>
          </div>
        </div>
      </section>

      <section className=" container lg:max-w-[1236px] px-3 pt-[50px] lg:px-2 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 md:pr-8">
          <div className="space-y-5">
            <h2 ref={h2Ref3} className="blog_heading">
              {isVisible3 ? <CountUp end={128} /> : "128%"}%
            </h2>
            <h2 className="blog_heading2">Qualitative Research</h2>
            <p>
              Tor msai khai is a really good way to describe. Tor msai khai is a
              really good way to describe. Tor msai.
            </p>
            <div className="flex justify-center md:justify-start pb-8 md:pb-0">
              <button className="flex items-center justify-center md:justify-start text-center md:text-left text-[18px] font-semibold leading-[22px] underline rounded-full">
                View Case Study
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex items-end ">
          <img
            src="/img/wepik-export-20240331113312uh3q_1.png"
            alt=""
            className="z-10 lg:mb-2 w-full md:max-w-[400px] mx-auto md:mr-0 shadow"
          />
        </div>
      </section>

      <img
        src="/img/shadow.png"
        className="absolute left-0 top-1/4 -z-10 opacity-80"
        alt=""
      />
      <img
        src="/img/shadow-right.png"
        className="absolute right-0 top-[10%] -z-10"
        alt=""
      />
    </div>
  );
}

export default Countup;
