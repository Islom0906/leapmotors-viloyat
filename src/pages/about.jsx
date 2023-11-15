import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Navigation} from "swiper";
import section1image2 from '/public/about us section 1 image2.jpg'
import {AboutTeam, HoverCard} from "@/components";
import axios from "axios";
import {useSelector} from "react-redux";
import SEO from 'src/layout/seo/seo';

SwiperCore.use([Autoplay]);

export default function About({about}) {
    const {lang} = useSelector(state => state.lang)
    return (
        <>
        <SEO  title={'Leapotorca About'}  og_title={'Leapotorca About'}  keywords={'Leapotorca About , Leapmotors About, Leapmotorauto About , Leapmotorca uz, Leapmotors uz, Leapmotorauto uz , leap haqida'}  description={'Мы являемся ведущей компанией по производству интеллектуальных электромобилей, которая стремится предоставить всем потребителям наилучшие возможности инновационной мобильности'} >
        <main className={'bg-black'}>
                {/*section banner*/}
                <section className="w-full h-screen relative  bg-[#000]">
                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${about[0]?.mainSection?.imageMain?.path}`}
                           alt="Leapmotor Image"
                           className="w-full h-full  z-[2]  hidden lg:block object-cover" fill/>
                    <Image src={section1image2} alt="Leapmotor Image"
                           className="w-full h-full absolute top-0 right-0 z-[2] object-cover  lg:hidden" fill/>
                    <div className="absolute z-10 flex flex-col items-center w-full px-3 top-48">
                        <h1 className="text-white text-center text-xl font-semibold md:text-[28px] w-full lg:max-w-[844.425px]">{lang === 'ru'
                            ? about[0]?.mainSection?.textRu : about[0]?.mainSection?.textUz
                        }</h1>
                    </div>
                </section>
                {/*section video*/}
                <section className="w-full h-screen">
                    <video autoPlay loop muted className="object-cover w-full h-full">
                        <source data-v-9a2df41a=""
                                src={`${process.env.NEXT_PUBLIC_API_URL}/${about[0]?.video?.path}`}/>
                    </video>
                </section>
                {/*section about company*/}
                {/*    <section className="flex flex-col justify-between w-full min-h-screen gap-10 px-4 pt-10 pb-12 sm:pt-16 swiper-about sm:pb-20" style={{backgroundImage:`linear-gradient(#080808, rgba(0, 0, 0, 0.7)),url('/About-us/background.jpg')`}}>*/}
                {/*        <Swiper*/}
                {/*            id={'mySwiper1'}*/}
                {/*            autoplay={{*/}
                {/*                delay: 5000*/}
                {/*            }}*/}
                {/*            breakpoints={{*/}
                {/*                0: {*/}
                {/*                    slidesPerView: 1, spaceBetween: 10*/}
                {/*                },*/}
                {/*                450: {*/}
                {/*                    slidesPerView: 1.5, spaceBetween: 10*/}
                {/*                },*/}
                {/*                640: {*/}
                {/*                    slidesPerView: 2, spaceBetween: 10*/}
                {/*                },*/}
                {/*                768: {*/}
                {/*                    slidesPerView: 3, spaceBetween: 10*/}

                {/*                },*/}
                {/*                1024: {*/}
                {/*                    slidesPerView: 4, spaceBetween: 10*/}
                {/*                }*/}
                {/*            }}*/}
                {/*            pagination={true}*/}
                {/*            modules={[Navigation]}*/}
                {/*            className="w-full mySwiper">*/}
                {/*            {*/}
                {/*                team?.map(item => (*/}
                {/*                    <SwiperSlide key={item?.id}>*/}
                {/*                        <AboutTeam team={item}/>*/}
                {/*                    </SwiperSlide>*/}
                {/*                ))*/}
                {/*            }*/}
                {/*        </Swiper>*/}
                {/*        <div className="container ">*/}
                {/*            <p className="text-white text-[10px] md:text-2xl leading-[25px] md:leading-[25px]">  Founded in 2015 by a world-class engineer and visionary entrepreneur with nearly 30 years of experience in electronics and AI technologies. Harnessing our proprietary technologies and capacity for innovation, we design and build EVs by approaching them as electronics products characterized by smart features and rapid product iterations, amid the ongoing transformation of automobiles from a means of transport into intelligent mobile spaces.*/}
                {/*            </p>*/}
                {/*            <p className="text-white text-[10px] md:text-2xl leading-[25px] md:leading-[25px] mt-5">We have a deep management team with diverse backgrounds who worked at world-renowned automotive and technology companies and financial institutions to bring us years of in-depth expertise and business acumen.</p>*/}
                {/*        </div>*/}
                {/*    </section>*/}
                <section className="h-screen py-10 bg-white md:py-20">
                    <div className="container flex flex-col items-center justify-center h-full md:justify-start">
                        <h1 className="text-[19px] text-[#4d5d80] font-arial-semibold md:text-[28px] text-center pb-4">{lang === 'ru' ? about[0]?.research?.titleRu : about[0]?.research?.titleUz}</h1>
                        <p className="md:w-[95%] text-center text-[#4d5d80] text-xl">{lang === 'ru' ? about[0]?.research?.textRu : about[0]?.research?.textUz}</p>
                        <div className={'w-full h-[31vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] xl:h-[685px] relative'}>
                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${about[0]?.research?.image?.path}`}
                                   alt="OS Image" className="object-contain w-full" fill/>

                        </div>
                    </div>
                </section>
                <section className="min-h-screen px-6 pt-16 md:pt-20 swiper-scroll">
                    <div className="flex flex-col items-center h-[20vh] ">
                        <p className="text-white text-sm leading-[20px] lg:w-[60%] text-center w-[90%] md:text-[22px] md:leading-[28px] mb-6 md:m-0">{lang === 'ru' ? about[0]?.aboutSystems?.descriptionRu : about?.aboutSystems?.descriptionUz}</p>
                    </div>
                    <div className="overflow-x-hidden w-full  relative flex flex-col md:flex-row  md:h-[75vh] gap-y-6">
                        {
                            about[0]?.aboutSystems?.systems.map((system) => (
                                <HoverCard key={system?._id} image={`${process.env.NEXT_PUBLIC_API_URL}/${system?.image?.path}`}
                                           title={lang === 'ru' ? system?.titleRu : system?.titleUz}
                                           text={lang === 'ru' ? system?.descriptionRu : system?.descriptionUz}/>
                            ))
                        }


                    </div>
                </section>
            </main>
        </SEO>
            
            

        </>
    )
}

export async function getServerSideProps({req, res}) {

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    // Fetch data from external API
    const [about] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about`),
    ])

    // Pass data to the page via props
    return {
        props: {
            about: about.data
        }
    };
}

