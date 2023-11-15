import React from 'react';
import Image from "next/image";

const HoverCard = ({image,title,text}) => {
    return (
        <div className="group w-full h-[160px] relative md:w-[33.333%] md:hover:w-[70%] lg:hover:w-[45%] xl:hover:w-[78%]  md:h-full duration-1000 flex flex-col items-center text-white overflow-hidden swiper-scroll__item-1 ">
            <Image src={image} alt="" className="w-full h-full  z-[1] object-cover" fill />
            <h1 className="lg:top-[450px]  font-arial-semibold md:text-xl xl:text-2xl text-center   absolute top-1 z-10 leading-[18px] mb-2 md:top-[300px]">{title}</h1>
            <div className="w-full h-full flex justify-center items-center md:items-start absolute text-center z-[2] top-0 right-0 bg-[#00000080] opacity-0 group-hover:opacity-100 duration-1000">

                <p className="opacity-0 group-hover:opacity-100 duration-300 sm:w-[400px] md:w-[500px] text-start md:text-center z-10 text-[10px] leading-[13px] md:mt-3 xl:mt-14 md:text-base" >{text}
                </p>
            </div>

        </div>
    );
};

export default HoverCard;