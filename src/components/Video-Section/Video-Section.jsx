import React from 'react';
import {VideoCard} from "@/components";

const VideoSection = ({video,title,subTitle,subTitleBottom}) => {
    return (
        <section className="relative w-full h-screen">
            <VideoCard video={video}/>

            <div
                className={`absolute top-0 left-0 py-[60px] z-[100] w-full h-full text-center   `}>
                <div
                    className={` mt-10 mb-5 text-center mx-auto w-[90%]  text-white `}>
                    {title &&
                        <p data-aos='fade-up' data-aos-anchor-placement="top-bottom"
                           className="  text-[28px] leading-7 md:leading-8 mb-4 ">{title}</p>
                    }
                    {
                        subTitle &&
                        <p data-aos='fade-up' data-aos-anchor-placement="top-bottom"
                           className="text-sm md:leading-5 w-[90%]  mx-auto">{subTitle}</p>
                    }
                </div>
            </div>

                {
                    subTitleBottom &&
            <div className={'absolute bottom-0 left-0 py-[60px] z-[100] w-full text-white text-center'}>
                    <p data-aos='fade-up' data-aos-anchor-placement="top-bottom"
                       className="text-sm md:leading-5 w-[90%]  mx-auto">{subTitleBottom}</p>
            </div>
                }
        </section>
    );
};

export default VideoSection;