import Image from "next/image";
import {PiCaretDownBold} from "react-icons/pi";
import {CarSwiper, CarText, CarBanner, HoverCard} from "@/components";
import SEO from 'src/layout/seo/seo';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useTranslation} from "react-i18next";
import {checkCarModel} from "@/slice/testDrive";
import {setCarModal} from "@/slice/sale";
import Link from "next/link";
import {useDispatch} from "react-redux";


const carSwipper3 = [
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/1512bb5e-bb4c-4ff3-833e-5fe7e7372849-t03-gallery-03.jpg`,
    },
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/808cac2b-13b8-4729-9fd2-46a7ffa08a4c-t03-gallery-04.jpg`
    },
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/bc555983-6458-48be-ad47-3a70f7ac8191-t03-gallery-02.jpg`,
    },
    {
        bg: `${process.env.NEXT_PUBLIC_API_URL}/media/018e45a4-66a1-462f-9738-a2c775fed10f-t03-gallery-01.jpg`
    }
]

const T03 = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const T03Data = {
        logo: `${process.env.NEXT_PUBLIC_API_URL}/media/9f538f2a-68ba-4199-97b0-05937e96bcbd-section-4-logo.png`,
        section1: {
            subTitle: t('T03.section1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/50b3343f-5dc5-4650-97ae-3ef817ff7b7a-T03-section-1-bg.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/d17c3ad5-a7fe-4660-ab27-2ae0ed35af39-screen1.jpg`,
            content: [
                {
                    title: t('T03.section1.title'),
                    content: t('T03.section1.content'),
                },
                {
                    title: t('T03.section1.title2'),
                    content: t('T03.section1.content2'),
                },
                {
                    title: t('T03.section1.title3'),
                    content: t('T03.section1.content3'),
                },
            ],
        },


    };
    const carSwipper1 = [

        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/2f1b6ef2-d715-4071-a62a-d33c5e163830-Group 12-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/cf9b9cc1-8b9a-4f6a-831f-aa44678bb11f-Group 13-min.jpg`,
        },
        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/46fc8dd4-e3c9-422b-9111-016b8f2c65d4-Group 14-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/ec632de5-9a78-4857-9bca-b6466f45c93a-Group 15-min.jpg`,

        },
        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/0e11f78d-b6ec-4f4b-bb69-a2c40cb00293-Group 16-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/b9082080-add7-4cc2-adc5-00c6614a5591-Group 17-min.jpg`,

        },
        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/cfbaeb57-2403-4491-ae62-50ecb5e983a4-Group 18-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/a5ca55e9-9cc7-4e77-840d-b782e945eab9-Group 19-min.jpg`,

        },
        {
            title: t('T03.carswipper1.title'),
            subTitle: t('T03.carswipper1.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/f091ed4c-401f-464a-9faf-002204decaf1-Group 10-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/fb686a78-15d2-4857-9bfb-72f08a5c0f98-Group 11-min.jpg`,

        },
    ]
    const carSwipper2 = [
        {
            title: t('T03.carswipper2.title'),
            subTitle: t('T03.carswipper2.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d20ff2a8-e5f7-4b11-be0a-9e60095e1d12-T03-section-5-slider-1-1bg-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/20ef0fca-189b-4d5e-9f7b-64fc5f189fc8-T03-section-5-slider-1-1bg-responsive-min.jpg`,

        },
        {
            title: t('T03.carswipper2.title2'),
            subTitle: t('T03.carswipper2.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/88c2b4b2-a1ca-4f34-849e-ee3b26c7fdbe-T03-section-5-slider-1-2bg-min.jpg`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/887d9f70-76da-4825-98b4-69ea9675fd79-T03-section-5-slider-1-2bg-responsive-min.jpg`,
        }
    ]
    const disclaimers = [
        t('T03.t03.name'),
        t('T03.t03.name2'),
        t('T03.t03.name3'),
        t('T03.t03.name4'),
        t('T03.t03.name5'),
        t('T03.t03.name6'),
        t('T03.t03.name7'),
        t('T03.t03.name8'),
        t('T03.t03.name9'),
        t('T03.t03.name10'),
    ]


    return (
        <>
            <SEO title={'T03'} og_title={'T03 '}
                 keywords={'T03 , mini-car, Leapmotors , Leapmotorauto , Leapmotorca uz, Leapmotors uz, Leapmotorauto uz'}
                 description={'Мы являемся ведущей компанией по производству интеллектуальных электромобилей, которая стремится предоставить всем потребителям наилучшие возможности инновационной мобильности'}>

                <main className={'bg-black'}>
                    <section className="h-screen ">
                        <div className="relative w-full h-full">
                            <Image
                                alt="car"
                                src={T03Data.section1.bgRes}
                                className="absolute top-0 left-0 block object-cover w-full h-full md:hidden"
                                fill
                            />
                            <Image
                                alt="car"
                                src={T03Data.section1.bg}
                                className="absolute top-0 left-0 hidden object-cover w-full h-full md:block"
                                fill
                            />
                            <div
                                className="relative z-10 h-full pt-20 ">
                                <div
                                    className="container flex flex-col items-center justify-between h-full lg:justify-start">
                                    <div>
                                        <div className="relative h-[29px] mx-auto w-[60px]">
                                            <Image
                                                src={T03Data.logo}
                                                alt="logo"
                                                className="w-full h-full mx-auto"
                                                fill
                                            />
                                        </div>
                                        <div className="mb-3 text-center">
                                            <p className="text-white font-normal min-w-[320px] text-[20px] leading-[30px] md:leading-[56px]">
                                                {T03Data.section1.subTitle}
                                            </p>
                                        </div>
                                    </div>


                                    <div className="flex flex-col items-center justify-center gap-5 pb-5">
                                        <div
                                            className="flex flex-wrap items-center justify-start gap-10 text-white gap-y-5">
                                            {T03Data.section1.content.map((item, ind) => (
                                                <div className="" key={ind}>
                                                    <p className="text-white text-[10px]  lg:text-[14px] font-medium">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-[20px] font-normal">
                                                        {item.content}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <PiCaretDownBold className="block w-6 h-6 text-white lg:hidden"/>
                                        <div className="flex items-center justify-center mt-5 space-x-2">
                                            <Link

                                                href="/drive"
                                                onClick={() => dispatch(checkCarModel('T03'))}
                                                className=" text-white text-lg bg-transparent border border-white w-auto px-2 md:px-0 md:w-[185px] flex  justify-center py-1 hover:text-[#4f5f81] hover:bg-white transition-all ease duration-500"
                                            >
                                                {t('navbar.testDrive')}
                                            </Link>

                                            {/*<Link*/}
                                            {/*    data-aos="fade-up"*/}
                                            {/*    data-aos-anchor-placement="top-bottom"*/}
                                            {/*    href="/car-sale"*/}
                                            {/*    onClick={() => dispatch(setCarModal('T03'))}*/}
                                            {/*    className=" text-white text-lg  bg-transparent border border-white w-auto px-2 md:px-0 md:w-[185px] flex  justify-center py-1 hover:text-[#4f5f81] hover:bg-white transition-all ease duration-500"*/}
                                            {/*>*/}
                                            {/*    Забронируйте*/}
                                            {/*</Link>*/}

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="h-screen ">
                        <div className="relative w-full h-full">
                            <Image
                                alt="car"
                                src={`${process.env.NEXT_PUBLIC_API_URL}/media/8bd6857e-4221-4e86-9e42-b11626ebce1f-T03-section-2.jpg`}
                                className="hidden object-cover w-full h-full md:block"

                                fill
                            />
                            <Image
                                alt="car"
                                src={`${process.env.NEXT_PUBLIC_API_URL}/media/91befc72-588a-4c60-a59c-e3c138975c60-screen2.jpg`}

                                className="block object-cover w-full h-full md:hidden"
                                fill
                            />

                            <div className="absolute top-0 left-0 w-full h-full">
                                <div
                                    className="container flex flex-col justify-between h-full py-10 md:py-20 md:justify-start">
                                    <div className="mb-5 text-center">
                                        <p
                                            className="text-white font-arial-semibold  text-[24px] md:text-[26px]"
                                        >
                                            {t('T03.section2.title')}
                                        </p>
                                        <p className="mt-[6px] lg:text-[14px] text-white font-arial-normal">
                                            {t('T03.section2.subtitle')}
                                        </p>
                                    </div>
                                    <div className="flex justify-center">
                                        <div
                                            className="flex flex-wrap justify-center text-white md:gap-x-0 gap-x-2 gap-y-2"
                                        >
                                            <div
                                                className="flex items-center justify-center gap-3 px-6 lg:border-r-2 ">
                                                <p className="text-white text-[21px] font-semibold">
                                                    {t('T03.section2.name')}
                                                </p>

                                            </div>
                                            <div
                                                className="flex items-center justify-center gap-3 px-6 lg:border-r-2 ">
                                                <p className="text-white text-[21px] font-semibold">
                                                    {t('T03.section2.name2')}
                                                </p>

                                            </div>
                                            <div
                                                className="flex items-center justify-center gap-3 px-6 lg:border-r-2 ">
                                                <p className="text-white text-[21px] font-semibold">
                                                    {t('T03.section2.name3')}
                                                </p>

                                            </div>
                                            <div
                                                className="flex items-center justify-center gap-3 px-6">
                                                <p className="text-white text-[21px] font-semibold">
                                                    {t('T03.section2.name4')}
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </section>
                    <CarBanner title={t('T03.section3.title')} subTitle={t('T03.section3.subtitle')}
                               bg={`${process.env.NEXT_PUBLIC_API_URL}/media/930ed5c5-9ec4-4357-9d21-8eade048affb-Group 49-min.jpg`}
                               bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/d836d3f0-e22d-4103-af08-db7c1a7bdc14-Group 9-min.jpg`}
                               textColor={'black'}/>


                    <CarSwiper content={carSwipper1} textColor={'black'}/>
                    <CarSwiper content={carSwipper2}/>

                    <CarBanner textColor={'black'} title={t('T03.carbanner.title')}
                               subTitle={t('T03.carbanner.subtitle')}
                               bg={`${process.env.NEXT_PUBLIC_API_URL}/media/88829038-aacd-48a6-a701-e530240c9c5e-Group 23-min.jpg`}
                               bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/e93b360f-4840-4e4e-9dcd-d8f151c77fc1-Group 27-min.jpg`}/>
                    <CarBanner title={t('T03.carbanner2.title')}
                               subTitle={t('T03.carbanner2.subtitle')}
                               bg={`${process.env.NEXT_PUBLIC_API_URL}/media/6e6b39b4-e070-49c6-9574-614a044b8a28-Group 37-min.jpg`}
                               bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/591452de-b40b-4ace-9064-f63ff26bccca-Group 38-min.jpg`}/>
                    <section className={'min-h-screen pt-16 md:pt-20 swiper-scroll px-66'}>
                        <div className="container pb-10 mx-auto">
                            <p className={'text-[30px] font-semibold text-white'}>{t('picture')}</p>

                        </div>
                        <div
                            className={'overflow-x-hidden w-full  relative flex flex-col md:flex-row  md:h-[90vh] gap-y-6'}>
                            {
                                carSwipper3?.map((item, ind) => (
                                    <HoverCard
                                        image={item.bg}
                                        key={ind}
                                    />
                                ))
                            }
                        </div>
                    </section>
                    <CarText content={disclaimers}/>

                </main>
            </SEO>
        </>

    );
};

export default T03;
