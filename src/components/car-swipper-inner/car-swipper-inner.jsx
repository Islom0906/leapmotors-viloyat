import Image from 'next/image'

const CarSwiperInner = ({title , subTitle , bg ,textColor , bgResp}) => {
  return (
    <>
      <section className="relative h-full bg-white md:h-screen">
      <div className="relative w-full h-full px-5 pt-5 pb-10 md:p-0">
        <div className="w-full h-[470px] md:h-full  rounded-lg md:rounded-none mb-5 relative">
        {
        bgResp ?
          <>
            <Image src={bgResp} alt="car" className="block object-cover w-full h-full md:hidden" fill priority={true}/>
            <Image src={bg} alt="car" className="hidden object-cover w-full h-full md:block" fill priority={true}/>
          </>
          :
          <Image src={bg} alt="car" className="object-cover w-full h-full" fill priority={true}/>
        }
        </div>
        <div className="md:absolute z-[40] top-[60px] w-full text-center">
          <div className={`w-full  mb-5 text-center ${textColor ? `text-${textColor} ` : 'md:text-white'} `}>
            <p className={` font-semibold text-[22px] leading-7 md:leading-8 mb-2`}>{title}</p>
            <p className="text-sm font-normal md:leading-5">{subTitle}</p>
          </div>
        </div>
      </div>
    </section> 
    
    </>
  )
}

export default CarSwiperInner
