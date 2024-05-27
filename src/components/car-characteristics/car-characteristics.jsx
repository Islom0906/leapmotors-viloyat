import Image from 'next/image'
import Link from "next/link";

import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {checkCarModel} from "@/slice/testDrive";
import {IoPlay} from "react-icons/io5";

const CarCharacteristics = ({bg, bgRes, characteristics, logo, textColor, model, isDouble = false}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    return (
        <>
            <section className={`w-full  ${isDouble ? "min-h-screen" : "mb-20 md:mb-0 h-screen"}  overflow-hidden `}>
                <div className={`relative w-full  h-full ${isDouble ? "min-h-[inherit] " : ""}`}>
                    {
                        bgRes ?
                            <>
                                <Image src={bgRes} alt="car"
                                       className={`block ${isDouble ? 'object-top' : 'object-center'} object-cover  w-full h-full md:hidden`}
                                       fill
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
                        className={`w-full h-[150px] absolute top-0 left-0 bg-gradient-to-b from-black via-black z-10 ${isDouble ? "hidden" : "block md:hidden"}  object-bottom`}></div>
                    <div className={'flex flex-col justify-between min-h-[inherit] gap-20'}>
                        <div className="relative z-20 w-full text-center py-[50px] lg:py-[100px]">
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
                            <div className={`${isDouble ? "" : "hidden md:block"}  space-y-2.5`}>
                                <div
                                    className={`mx-auto lg:divide-x text-left grid grid-cols-2 lg:grid-cols-4  gap-y-5 lg:gap-y-10 w-fit ${textColor ? `text-${textColor} divide-${textColor}` : 'text-white divide-white'}`}>
                                    {
                                        characteristics?.about?.map((item, ind) => (
                                            <div className={'px-[15px]'} key={ind}>
                                                <p className=" opacity-80 font-thin leading-[20px] lg:leading-[28px] capitalize">{item.title}</p>
                                                <p className="text-xl lg:text-3xl  font-medium leading-[16px] lg:leading-[24px]">{item.text}</p>
                                            </div>
                                        ))
                                    }

                                </div>
                                {
                                    isDouble &&
                                    <>

                                        <div
                                            className={`border-t pt-2 border-dashed border-t-black mx-auto lg:divide-x text-left grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-10 w-fit ${textColor ? `text-${textColor} divide-${textColor}` : 'text-white divide-white '}`}>
                                            {
                                                characteristics?.about2?.map((item, ind) => (
                                                    <div className={'px-[15px]'} key={ind}>
                                                        <p className=" opacity-80 font-thin leading-[20px] lg:leading-[28px] capitalize">{item.title}</p>
                                                        <p className="text-xl lg:text-3xl  font-medium leading-[16px] lg:leading-[24px]">{item.text}</p>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </>
                                }
                            </div>

                            {
                                model &&
                                <div className="flex items-center justify-center mt-5 space-x-2">
                                    <a
                                        href="https://leapmotorca.uz/drive"
                                        onClick={() => dispatch(checkCarModel(model))}
                                        className="text-white text-lg bg-transparent border border-white w-auto px-2 md:px-0 md:w-[185px] flex  justify-center py-1 hover:text-[#4f5f81] hover:bg-white transition-all ease duration-500"
                                    >
                                        {t('navbar.testDrive')}
                                    </a>
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
                        <div
                            className={`absolute z-20  w-full px-5 text-center bottom-5 ${isDouble ? "hidden" : "block md:hidden"} `}>
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
                        {
                            isDouble &&
                            <CharacterBottom character={characteristics.bottomCharacter}/>
                        }
                    </div>

                    <div
                        className={`w-full h-[150px] absolute bottom-0 left-0 bg-gradient-to-t from-black via-black z-10  ${isDouble ? "hidden" : "block md:hidden"}`}></div>

                </div>
            </section>
        </>
    )
}

export default CarCharacteristics


const CharacterBottom = ({character}) => {
    return (
        <div className={'relative bottom-5 container '}>
            <div className={'space-y-3 md:space-y-5 lg:space-y-7'}>
                <h5 className={'text-white sm:text-start text-center text-lg md:text-2xl pb-2 border-b '}>
                    {character?.title}

                </h5>
                <div className={'grid lg:grid-cols-4 xl:grid-cols-7 gap-3'}>
                    {
                        character?.cards?.map((card, ind) => (
                            <div className={''} key={ind}>
                                <h6 className={'text-white text-sm lg:text-lg xl:text-xl mb-2'}>{card.title}</h6>
                                {
                                    card.lists?.map((list, index) => (
                                        <div
                                            key={index}
                                            className={'flex items-start py-2.5 px-3 lg:py-0 lg:px-0 lg:bg-transparent bg-[rgba(255,255,255,0.08)] lg:gap-1 text-[10px] text-white'}>
                                            <IoPlay className={' hidden lg:block flex-shrink-0'}/>
                                            <p className={''}>{list?.text}</p>
                                        </div>
                                    ))
                                }

                            </div>

                        ))
                    }

                </div>
                <p className={'text-white text-[10px]'}>
                    {character?.subTitle}

                </p>
            </div>
        </div>
    )
}


