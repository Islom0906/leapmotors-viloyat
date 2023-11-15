import Image from "next/image";
import {useEffect} from "react";
import AOS from "aos";

const CarBanner = ({title , subTitle , bg , bgRes , center ,textColor ,imgStyle}) => {
    useEffect(() => {
        AOS.init({
            once:true
        });
    }, []);
  return (
    <>
     <section className="relative h-screen ">
     
     {
        bgRes ?
          <>  
            <Image src={bgRes} alt="car" className="block object-cover object-center w-full h-full md:hidden" fill priority={true}/>
            <Image src={bg} alt="car" className="hidden object-cover object-center w-full h-full md:block" fill priority={true}/>
          </>
          :
          <Image src={bg} alt="car" className="object-cover w-full h-full" fill priority={true}/>
        }

        {/*<div className="w-full h-[150px] absolute  top-0 left-0 bg-gradient-to-b from-black via-black z-10 block md:hidden"></div>*/}
        <div  className={`absolute top-0 left-0 py-[60px] z-[100] w-full h-full text-center  ${imgStyle}  ${center ? 'flex justify-center items-center' : ''} `}>
          <div className={` mt-10 mb-5 text-center mx-auto w-[90%] ${textColor ? `text-${textColor}` : 'text-white'} `}>
            <p data-aos='fade-up' data-aos-anchor-placement="top-bottom" className="  text-[28px] leading-7 md:leading-8 mb-4 ">{title}</p>
            <p data-aos='fade-up' data-aos-anchor-placement="top-bottom" className="text-sm md:leading-5 w-[90%]  mx-auto">{subTitle}</p>
          </div>
        </div>
        {/*<div className="w-full h-[150px] absolute bottom-0 left-0 bg-gradient-to-t from-black via-black z-10 block md:hidden"></div>*/}
    </section> 
    </>
  )
}

export default CarBanner
