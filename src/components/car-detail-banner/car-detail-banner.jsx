import Image from "next/image";
import Link from "next/link";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import { checkCarModel} from "@/slice/testDrive";

const CarDetailBanner = ({ bgRes ,  bg, img, text, title ,imgLong ,model}) => {
  const {t}=useTranslation()
  const dispatch=useDispatch()
  return (
    <>
      <section className="relative h-screen">
      {
        bgRes ?
          <>  
            <Image src={bgRes} alt="car" className="block object-cover object-center w-full h-full md:hidden" fill priority={true}/>
            <Image src={bg} alt="car" className="hidden object-cover object-center w-full h-full md:block" fill priority={true}/>
          </>
          :
          <Image src={bg} alt="car" className="object-cover object-center w-full h-full" fill priority={true}/>
        }
        <div className="absolute top-[140px] w-full text-center">
          <div className="flex items-center justify-center w-full ">
              {img ? (
            <div className={`h-10 mb-3 relative  ${imgLong ? 'w-[500px]' : 'w-[88px] sm:w-[95px]'} `}>
                <Image  src={img} alt="logo" className="object-contain w-full h-full " fill priority={true}/>
            </div>
              ) : (
                <h3 className="text-white font-arial-semibold text-[22px] leading-7 md:leading-8">
                  {title}
                </h3>
              )}
          </div>
          <div className="mb-5 text-center">
            <p className={`text-white text-lg   font-arial-semibold ${imgLong ? 'text-[20px] md:text-[24px]' : ' md:text-2xl lg:text-[28px]'} leading-10 md:leading-[56px]`}>
              {text}
            </p>
          </div>
          {
            model &&
            <div className="flex items-center justify-center mt-5 space-x-2">
              
          <Link

              href="/drive"
              onClick={()=>dispatch(checkCarModel(model))}
              className="text-white text-lg bg-transparent border border-white w-auto px-2 md:px-0 md:w-[185px] flex  justify-center py-1 hover:text-[#4f5f81] hover:bg-white transition-all ease duration-500"
          >
            {t('navbar.testDrive')}
          </Link>
                 {/*    <Link*/}

                 {/*    href="/car-sale"*/}
                 {/*    onClick={() => dispatch(setCarModal(model))}*/}
                 {/*    className=" text-white text-lg  bg-transparent border border-white w-auto px-2 md:px-0 md:w-[185px] flex  justify-center py-1 hover:text-[#4f5f81] hover:bg-white transition-all ease duration-500"*/}
                 {/*>*/}
                 {/*    Забронируйте*/}
                 {/*</Link>*/}
            </div>
          }
         
        </div>
      </section>
    </>
  );
};

export default CarDetailBanner;
