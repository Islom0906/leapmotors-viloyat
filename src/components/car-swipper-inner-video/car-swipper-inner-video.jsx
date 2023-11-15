
const CarSwiperInnerVideo = ({textColor , content , video}) => {

  return (
    <>
       <section className="relative h-full bg-white md:h-screen">
      <div className="relative w-full h-full px-5 pt-5 pb-10 md:p-0">
        <div className="w-full h-[470px] md:h-full  rounded-lg md:rounded-none mb-5">
          <video className="object-cover w-full h-full" autoPlay loop muted>
            <source
              className="w-full"
              src={video}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="md:absolute top-[60px] w-full text-center z-[40]">
          <div className={`w-full  mb-5 text-center ${textColor ? `text-${textColor} ` : 'md:text-white'} `}>
            <p className={` font-semibold text-[22px] leading-7 md:leading-8 mb-2`}>{content.title}</p>
            <p className="text-sm font-normal md:leading-5">{content.subTitle}</p>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default CarSwiperInnerVideo
