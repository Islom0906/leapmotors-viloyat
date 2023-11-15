import React, {useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Head from "next/head";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import apiService from "@/service/api";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";


const NewsInner = () => {
    const {lang} = useSelector(state => state.lang)
    const router = useRouter()
    const {t}=useTranslation()
    const {newSlug} = router.query
    const {
        data,
        refetch
    } = useQuery(['get-new-by-slug', newSlug], () => apiService.getDataByID('/news', newSlug))

    useEffect(() => {
        if (newSlug !== '') {
            refetch()
        }
    }, [refetch]);

    return (
        <>
            <Head>
                <title>Leapotorca {data?.titleRu}</title>
                <meta property='og:title' content="Leapmotor uz News, Leapmotor uzbekistan News,Leapotorca News"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/brand.png"/>
            </Head>
            <section className={'pb-10 '}>
                <div className="container ">
                    <div className="mt-[95px] mb-[35px] md:mb-[40px]">
                        <Link
                            href="/news"
                            className="text-[#4d5d81] text-[20px] font-semibold"
                        >{t('news.title')}
                        </Link>
                    </div>
                    <h1
                        className="font-bold text-justify text-[18px] leading-[35px] md:leading-[60px] md:text-[30px] "
                    >
                        {lang === 'ru' ? data?.titleRu : data?.titleUz}
                    </h1>
                    {
                        data?.description.map(item => (
                            <div className={'flex flex-col items-start pb-5 '}>

                                <div className="tracking-[.12rem] text-justify text-[18px] leading-[35px] mt-3 prose max-w-none"
                                     dangerouslySetInnerHTML={{__html: lang === 'ru' ? item?.textRu : item?.textUz}}
                                >

                                </div>
                                <div className={'relative w-full aspect-video overflow-hidden'}>

                                <Image
                                    className="mt-[35px]  w-full h-full object-cover"
                                    src={`${process.env.NEXT_PUBLIC_API_URL}/${item?.image?.path}`}
                                    fill
                                    alt={data?.titleRu}

                                />
                                </div>
                            </div>

                        ))
                    }
                    {/*<div className='mb-10'>*/}
                    {/*    <p className="text-[20px] mt-7 font-bold">*/}
                    {/*        Technological and Natural Aesthetics to Create an Inner "Style"*/}
                    {/*    </p>*/}
                    {/*    <p*/}
                    {/*        className="tracking-[.12rem] text-justify text-[18px] leading-[35px] mt-3"*/}
                    {/*    >*/}
                    {/*        Leapmotor C01 takes the natural aesthetics as the design concept,*/}
                    {/*        emphasizing on smart mobility experience while reducing redundant*/}
                    {/*        features. The design of C01 is featured with technical and gentle*/}
                    {/*        geometric elements without any superfluous lines, making it*/}
                    {/*        elegant yet powerful. The immersive audio-visual cabin brings*/}
                    {/*        intelligent travel experience with nteraction, and provides a*/}
                    {/*        light luxurious travel experience for young, high-end, urban*/}
                    {/*        families*/}
                    {/*    </p>*/}
                    {/*    */}
                    {/*</div>*/}


                </div>
            </section>
        </>
    )
}

export default NewsInner
