import React from 'react';
import Image from "next/image";

const GifSection = ({title,subTitle,gifs}) => {
    return (
        <div className={'relative w-full h-screen'}>
            <div
                className={` py-[40px] md:py-[60px]  w-full text-center   `}>
                <div
                    className={` mt-10 mb-5 text-center mx-auto w-[90%]  text-white `}>
                    {title &&
                        <p data-aos='fade-up' data-aos-anchor-placement="top-bottom"
                           className=" text-xl md:text-[28px] leading-7 md:leading-8 mb-4 ">{title}</p>
                    }
                    {
                        subTitle &&
                        <p data-aos='fade-up' data-aos-anchor-placement="top-bottom"
                           className="text-sm md:leading-5 w-[90%]  mx-auto">{subTitle}</p>
                    }
                </div>
            </div>
            <div className={'container '}>

            <div className={'grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5'}>
                {
                    gifs?.map((item,ind)=>(
                        <Gif key={ind} gif={item.gif} text={item.text}/>
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default GifSection;


const Gif=({text,gif})=>{
    return (
        <div className={'w-full space-y-2'}>
            <div className={'relative w-full h-[120px] sm:h-[200px] xl:h-[240px] space-y-3'}>
                <Image src={gif} alt="gif" className=" w-full h-full" fill priority={true}/>
            </div>
            <p data-aos='fade-up' data-aos-anchor-placement="top-bottom"
               className="  text-xs sm:text-[16px]  text-white text-center">{text}</p>
        </div>
    )
}