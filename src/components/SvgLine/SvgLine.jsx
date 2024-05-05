import React, { useEffect, useRef, useState } from "react";
import {
  calculateValueFromPercentage,
  calculateVisibilityPercentage,
} from "../../utils/svgLineCalculation";

const SvgLine = ({ path, svgClassName, wrapClassName }) => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (svgRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        pathRef.current.style.strokeDasharray = `${pathLength}`;
        const value =
          calculateValueFromPercentage(
            calculateVisibilityPercentage(svgRef.current),
            pathLength + 1000
          ) - pathLength;

        pathRef.current.style.strokeDashoffset = `${-value}`;
        // console.log(value);
        console.log(calculateVisibilityPercentage(svgRef.current));
      }
      // setLineY1(newY1);
      // setLineY2(newY2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (svgRef.current) {
      console.log(svgRef.current);
      const pathLength = pathRef.current.getTotalLength();
      console.log(pathLength);
    }
  }, []);
  return (
    <div
      className={
        `absolute bSg-black    left-0 right-0   z-20  bottom-[-130px]  2xl:bottom-[-100px] md:block hidden ` +
        wrapClassName
      }
    >
      <div className="w-[100%] h-[150px] lg:h-[200px] xl:h-[280px]  overflow-y-visible overflow-x-visible">
        <svg
          ref={svgRef}
          className={`2xl:h-[180%] h-[150%] ml-[60px] w-[80%] 2xl:w-[83%] ${svgClassName}`}
          viewBox="0 0 2489 1007"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="svg-path1"
            width="100%"
            ref={pathRef}
            height="100%"
            // d="M0.500977 0V509.5C0.500977 526.069 13.9324 539.5 30.501 539.5H2458C2474.57 539.5 2488 552.932 2488 569.5V1007"
            // d="M2488 0V509.5C2488 526.069 2474.57 539.5 2458 539.5H31C14.4314 539.5 0.999955 552.932 0.999955 569.5V1007"
            d={path}
            stroke="blue"
            strokeWidth="20"
          />
        </svg>
      </div>
    </div>
  );
};

export default SvgLine;
