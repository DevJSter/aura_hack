import React from "react";
import SearchInputEl from "./SearchInput";
import Lottie from 'lottie-react';
import animationData from '../img/Animation.json';


const HeroSection = () => {


  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="flex-1 flex flex-col items-start justify-center gap-6 p-8">
        <p className="text-[2.5rem] text-center md:text-left lg:text-[3.5rem] font-bold tracking-wide text-headingColor md:w-[85%] md:leading-tight">
          <span className="text-lightPrimary text-[3rem] lg:text-[4rem]">Job-Set</span> hai, toh life set hai!
        </p>
        <p className="text-center md:text-justify text-lighttextGray text-sm md:w-[85%] flex flex-wrap gap-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially...
        </p>
        <div className='md:hidden flex flex-col items-center justify-center gap-6 '>
          {/* Assuming SearchInputEl is a component */}
          <SearchInputEl />
        </div>
        <div className='md:flex hidden'>
          {/* Assuming SearchInputEl is a component */}
          <SearchInputEl />
        </div>
      </div>
      <div className="custom-container">
        <Lottie animationData={animationData} />
      </div>
    </section>
  );
};

export default HeroSection;

