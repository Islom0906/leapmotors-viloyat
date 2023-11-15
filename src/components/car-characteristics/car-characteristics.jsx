import Image from 'next/image'
import Link from "next/link";

import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {checkCarModel} from "@/slice/testDrive";

const CarCharacteristics = ({bg, bgRes, characteristics, logo, textColor, model}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    return (
        <>
            <section className="w-full h-screen mb-20 overflow-hidden md:mb-0">
                <div className="relative w-full h-full">
                    {
                        bgRes ?
                            <>
                                <Image src={bgRes} alt="car"
                                       className="block object-cover object-center w-full h-full md:hidden" fill
                                       priority={true}/>
                                <Image src={bg} alt="car"
                                       className="hidden object-cover object-center w-full h-full md:block" fill
                                       priority={true}/>
                            </>
                            :
                            <Image src={bg} alt="car" className="object-cover object-center w-full h-full" fill
                                   priority={true}/>
                    }
                    <div
                        className="w-full h-[150px] absolute top-0 left-0 bg-gradient-to-b from-black via-black z-10 block md:hidden object-bototm"></div>
                    <div className="relative z-20 w-full text-center py-[50px] md:py-[100px]">
                        <div className={`mb-5 text-center ${textColor ? `text-${textColor} ` : 'text-white'} `}>
                            {
                                logo ?
                                    <div className='flex items-center justify-center'>
                                        <div className="  h-10 md:h-[40px]  mb-3 relative w-[88px] sm:w-[95px]  ">
                                            <Image src={logo} alt="logo" className="object-contain w-full h-full "
                                                   fill/>
                                        </div>

                                    </div>
                                    :
                                    <h3 className=" font-semibold text-[22px] leading-7 md:leading-8"> {characteristics?.title} </h3>
                            }
                            <p className="text-base font-normal leading-9 md:text-lg lg:text-xl w-[80%] mx-auto"> {characteristics?.subTitle} </p>
                        </div>
                        <div className="hidden md:block">
                            <div
                                className={`mx-auto lg:divide-x text-left grid grid-cols-2 lg:grid-cols-4 gap-y-10 w-fit ${textColor ? `text-${textColor}` : 'text-white'}`}>
                                {
                                    characteristics?.about?.map((item, ind) => (
                                        <div className={'px-[15px]'} key={ind}>
                                            <p className=" opacity-80 font-thin leading-[28px] capitalize">{item.title}</p>
                                            <p className="text-3xl  font-medium leading-[24px]">{item.text}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        {
                            model &&
                            <div className="flex items-center justify-center mt-5 space-x-2">
                                <Link

                                    href="/drive"
                                    onClick={() => dispatch(checkCarModel(model))}
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
                    <div className="absolute z-20 block w-full px-5 text-center bottom-5 md:hidden">
                        <div
                            className={`mx-auto text-left grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-[30px] w-fit text-white  text-${textColor} `}>
                            {
                                characteristics.about.map((item, ind) => (
                                    <div key={ind}>
                                        <p className=" opacity-80 font-arial-thin leading-[28px] capitalize">{item.title}</p>
                                        <p className=" text-lg sm:text-2xl  font-arial-medium leading-[24px]">{item.text}</p>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                    <div
                        className="w-full h-[150px] absolute bottom-0 left-0 bg-gradient-to-t from-black via-black z-10 block md:hidden"></div>
                </div>
            </section>
        </>
    )
}

export default CarCharacteristics
