import {
    CarBanner,
    CarBannerContentBottom,
    CarCharacteristics,
    CarContentFooter,
    CarDetailBanner,
    CarSwiper,
    CarText, HoverCard
} from '@/components'
import SEO from 'src/layout/seo/seo';
import {useEffect} from "react";
import AOS from "aos";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useTranslation} from "react-i18next";
const C01 = () => {
    const {t} = useTranslation()

const characteristics = {
    title: t('c01.characteristics.title'),
    subTitle:t('c01.characteristics.subtitle'),
    about: [
        {
            title: t('c01.characteristics.title3'),
            text: "5050мм"
        },
        {
            title: t('c01.characteristics.title4'),
            text: "1902мм"
        },
        {
            title:t('c01.characteristics.title5'),
            text: "1509мм"
        },
        {
            title: t('c01.characteristics.title6'),
            text: "2930мм"
        }
    ]
}


    const disclaimers = [
        t('c11reev.c11rev.name'),
        t('c11reev.c11rev.name2'),
        t('c11reev.c11rev.name3'),
        t('c11reev.c11rev.name4'),
        t('c11reev.c11rev.name5'),
        t('c11reev.c11rev.name6'),
        t('c11reev.c11rev.name7'),
        t('c11reev.c11rev.name8'),
        t('c11reev.c11rev.name9'),
        t('c11reev.c11rev.name10'),
    ]

    const carSwipper1 = [
        {
            title: t('c01.carswipper.title'),
            subTitle: t('c01.carswipper.subtitle'),
            
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/18c2109a-4996-460e-a16e-775a84ddee18-C01-section-4-slider-1-4bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/5f8259d1-edbb-4b0c-9306-6c6993eb8663-screen5-1-2023.jpg`,

        },
        {
            title: t('c01.carswipper.title2'),
            subTitle: t('c01.carswipper.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/0fca70d1-6658-44f9-b6a6-fea407043515-C01-section-4-slider-1-5bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/c02a6c05-c2a7-4261-9ab6-af331fd56336-screen5-2-2023.jpg`,


        },
        {
            title: t('c01.carswipper.title3'),
            subTitle: t('c01.carswipper.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/0e56a5ed-533f-43ea-b3cc-183069fde3c1-C01-section-4-slider-1-1bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/b65e01b7-d18a-4c88-9f64-f0716cc2af49-screen5-3-2023.jpg`,

        },
        {
            title: t('c01.carswipper.title4'),
            subTitle: t('c01.carswipper.subtitle4'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7094a559-efab-459b-bfb1-6a4f6e96865b-C01-section-4-slider-1-2bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/529c683b-50a9-477d-9673-2b1dc7ae44fc-screen5-4-2023.jpg`,

        },
        {
            title: t('c01.carswipper.title5'),
            subTitle: t('c01.carswipper.subtitle5'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c4cc8226-0933-4a12-a5c5-19180b1d5871-C01-section-4-slider-1-3bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/b778f99d-8e85-4378-afea-61280f0c03e6-screen5-5-2023.jpg`,

        }
    ]

    const carSwipper2 = [
        {
            title: t('c01.carswip2.title'),
            subTitle: t('c01.carswip2.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/03978497-5c57-48d7-b3f5-dd7b1ed37552-C01-section-6-slider-1-4bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/0386f486-5d7e-44b8-9cf2-4d828433fc37-screen7-5-2023.png`,
        },
        {
            title: t('c01.carswip2.title2'),
            subTitle: t('c01.carswip2.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/5a8ad784-8bc2-4a17-89f8-a6f0be25d42a-C01-section-6-slider-1-5bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/fd4a2d38-dc7a-4cba-8f40-27b350428fdb-screen7-1-2023.png`,
        
        },
        {
            title: t('c01.carswip2.title3'),
            subTitle: t('c01.carswip2.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/06fd9c11-74e6-4790-800b-bd753959eca9-C01-section-6-slider-1-1bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/fdbdee6c-8e02-4c36-a479-9f8498f3dc41-screen7-2-2023.png`,
        
        },
        {
            title: t('c01.carswip2.title4'),
            subTitle: t('c01.carswip2.subtitle4'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7a500359-921d-4762-a020-ed2b4f29c5aa-C01-section-6-slider-1-2bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/776d09d6-4f9e-487f-980a-f763149a9d6b-screen7-3-2023.png`,
        
        },
        {
            title: t('c01.carswip2.title5'),
            subTitle: t('c01.carswip2.subtitle5'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/6687cf48-d19b-4dcd-9674-8457ac05eb7e-C01-section-6-slider-1-3bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/8baf50f7-5f07-4e07-b6ac-c091b3f68f83-screen7-4-2023.png`,
        
        }
    ]
    const carSwipper3 = [
        {
            title: t('c01.carswip3.title1'),
            subTitle: t('c01.carswip3.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3978b103-5203-4305-935a-90c728bb6e40-C01-section-7-slider-1-2bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/4974ca14-ef45-488d-a191-2608a7472c3b-screen8-2-2023.png`,
        },
        {
            title: t('c01.carswip3.title2'),
            subTitle: t('c01.carswip3.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/3325ff16-020d-4b3d-8aec-fa259a08989b-C01-section-7-slider-1-1bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/be1d05e1-5c0f-4690-bde4-44d9199586fd-screen8-1-2023.png`,

        },

    ]

    const carSwipper4 = [
        {
            title: t('c01.carswip4.title'),
            subTitle: t('c01.carswip4.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/8312fd36-8737-4a9f-99d5-6e8a826b5f57-C01-section-9-slider-1-3bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/c34f9563-4546-403f-9cec-7e8bd7c55c28-screen11-3-2023.png`,
        },
        {
            title: t('c01.carswip4.title2'),
            subTitle: t('c01.carswip4.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7e0c54dd-b9be-41fb-89e4-03984e953d12-C01-section-9-slider-1-1bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/9e3edaa7-0880-4f6a-ade5-d07f709bccd6-screen11-1-2023.png`,

        },
        {
            title: t('c01.carswip4.title3'),
            subTitle: t('c01.carswip4.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7518ebbd-dc36-42ed-af64-7ce21ab869b5-C01-section-9-slider-1-2bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/7383ee65-e9d6-453d-8884-f9e329b42d5f-screen11-2-2023.png`,

        }
    ]

    const carSwipper5 = [
        {
            title: t('c01.carswip5.title'),
            subTitle: t('c01.carswip5.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d8e81c64-7716-4d53-a0a5-2edff10a2526-C01-section-13-slider-1-2bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/5fe8fe71-4c75-4aee-9b85-9bcd2ec9b3b4-screen15-2-2023.png`,

        },
        {
            title: t('c01.carswip5.title2'),
            subTitle: t('c01.carswip5.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/7e40fe58-61f5-4d54-9605-47f00c0a63ee-C01-section-13-slider-1-3bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/3e37a5af-9ae6-4ceb-b374-f491a1240cc7-screen15-3-2023.png`,
        },
        {
            title: t('c01.carswip5.title3'),
            subTitle: t('c01.carswip5.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/51a72064-69b6-4cd9-844e-054af6c09af5-C01-section-13-slider-1-1bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/623b4ba8-8bf4-41cd-bd21-dd5d7ed9b1ed-screen15-1-2023.png`,
        }
    ]

    const carSwipper6 = [
        {
            title: t('c01.carswip6.title'),
            subTitle: t('c01.carswip6.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/0db43d37-0038-4fb0-b9c9-54255155ac49-C01-section-15-slider-1-5bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/b4eaa420-82d9-40cd-8219-705bfa764e76-screen17-5-2023.png`,

        },
        {
            title: t('c01.carswip6.title'),
            subTitle: t('c01.carswip6.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/606516e3-028d-413a-b80b-c40e08b44e8c-C01-section-15-slider-1-1bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/647ffac3-0a98-415a-b101-9b15eb42a534-screen17-1-2023.png`,
        },
        {
            title: t('c01.carswip6.title'),
            subTitle: t('c01.carswip6.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/e96d6a69-e9c2-4327-b47f-035234fe58a5-C01-section-15-slider-1-2bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/35832ce6-ec3c-4176-8472-31775b181278-screen17-2-2023.png`,
            
        },
        {
            title: t('c01.carswip6.title'),
            subTitle: t('c01.carswip6.subtitle4'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c387ee53-c353-460a-8874-4f623ccc095e-C01-section-15-slider-1-3bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/1187d405-f887-47c3-ac79-33655f65791c-screen17-3-2023.png`,

        },
        {
            title: t('c01.carswip6.title'),
            subTitle: t('c01.carswip6.subtitle5'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d641c800-eaff-45ca-9b80-11f095f3f963-C01-section-15-slider-1-4bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/5ba500e4-9238-44d2-8fbd-c135d7849989-screen17-4-2023.png`,

        }
    ]

    const carSwipper7 = [
        {
            title: t('c01.carswip7.title'),
            subTitle: t('c01.carswip7.subtitle'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/6fcb0581-c1eb-4bae-9927-5bee33704446-C01-section-20-slider-1-1bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/27c1f4ad-c152-4870-94a1-3347a79d520c-screen23-2-2023.png`,

        },
        {
            title:t('c01.carswip7.title2'),
            subTitle: t('c01.carswip7.subtitle2'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/98c12efa-cad6-4caf-baa4-fe64d64b8cc8-C01-section-20-slider-1-2bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/81758812-83c1-4635-a799-a210a0048cd0-screen23-3-2023.png`,

        },
        {
            title: t('c01.carswip7.title3'),
            subTitle:t('c01.carswip7.subtitle3'),
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/34aebebd-8c2f-406f-8593-685c84c37a03-C01-section-20-slider-1-3bg.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/6842314f-a3f2-4389-8156-723bde448c5b-screen23-1-2023.png`,

        }
    ]

    const carSwipper8 = [
        {

            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/64658804-7565-4b55-9d2a-230a2e0b398e-last-section-bg-1.jpg`,

            
        },
        {

            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/bfbc3383-960c-4c4f-b108-3d7462e351b0-last-section-bg-2.jpg`,
            bgResp: `${process.env.NEXT_PUBLIC_API_URL}/`,

        },
        {

            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/556e9b8a-cca9-4a38-a05f-e6b46e5c4ac0-last-section-bg-3.jpg`,

        },
        {

            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/dfb55ceb-7ef7-47cb-8a63-dd1505ecef68-last-section-bg-4.jpg`,

        },
        {

            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/936f0f29-e3f3-4a99-b863-11a09e2ac88e-last-section-bg-5.jpg`,

        }
    ]


    const carBottomContent = [
        {
            title: t('c01.carbootincontent.title'),
            subTitle: t('c01.carbootincontent.subTitle'),
        },
        {
            title: t('c01.carbootincontent.title2'),
            subTitle: t('c01.carbootincontent.subTitle2'),
        }
    ]





    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);

    return (
        <>
          <SEO  title={'Leapotorca C01'}  og_title={'Leapotorca C01 '}  keywords={'C01 , Leapmotors , Leapmotorauto , Leapmotorca uz, Leapmotors uz, Leapmotorauto uz'}  description={'Мы являемся ведущей компанией по производству интеллектуальных электромобилей, которая стремится предоставить всем потребителям наилучшие возможности инновационной мобильности'} >
            <main className={'bg-black'}>
                <CarDetailBanner
                    img={`${process.env.NEXT_PUBLIC_API_URL}/media/e370fbc7-ad3c-4828-a089-2d424e67c0ac-section-2-logo.png`}
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/3b3cabd0-04eb-438b-b1f0-c56cb93d72cc-C01-1-section-bg.jpg`}
                    bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/7faf1f68-58ef-49a2-bd08-6f9b5759a7d4-screen1-1-2023.png`}
                    text={t('c01.CarDetailBanner.title')}
                    model={'C01'}
                />

                <CarCharacteristics
                    bg={`${process.env.NEXT_PUBLIC_API_URL}/media/32b56318-d01e-477e-b75d-1bcb823dde04-C01-section-2-bg.jpg`}
                    bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/55572899-00d4-4814-a7f1-5ba5f9cee7ab-screen3.jpg`}
                    
                    characteristics={characteristics}/>


                <CarBanner title={t('c01.characteristics.title2')} subTitle={t('c01.characteristics.subtitle2')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/bad5f69f-3de0-4ab3-ba9b-821151127dad-C01-section-3-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/fb7c737e-b2c9-48f0-9e9c-8aa8173d6ae1-screen4.jpg`}
                           
                           />
                <CarSwiper content={carSwipper1}/>
                <CarBanner title={t('c01.carbanner.title')}
                           subTitle={t('c01.carbanner.subtitle')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/46cff7b1-ee9b-4a5c-b5a1-3a0938c11259-C01-section-5-bg.jpg`}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/4c3e36de-a492-4d39-b2b5-48d108ce8af6-screen6.jpg`}
                           />
                <CarSwiper content={carSwipper2}/>
                <CarSwiper content={carSwipper3}/>
                <CarBanner title={t('c01.carbanner2.title')}
                           subTitle={t('c01.carbanner2.subtitle')}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/f287baeb-e753-434f-af9e-90a0c3a4a1b7-screen10.jpg`}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/30019250-262c-48e6-bc00-24c6702b4dd2-C01-section-8-bg.jpg`}/>
                <CarSwiper content={carSwipper4}/>
                <CarBanner title={t('c01.carbanner3.title')} subTitle={t('c01.carbanner3.subtitle')}
                        bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/e1a1c203-0eb0-4eda-bbcd-cacdd4a4382b-screen12.jpg`}
                        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/e398c0e4-61bc-4aab-a570-83dc04cbdd9d-C01-section-10-bg.jpg`}/>
                <CarBanner title={t('c01.carbanner3.title2')}
                        bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/79e1e27a-c2f8-4af7-8a77-cfa901acd105-screen13.jpg`}
                        subTitle={t('c01.carbanner3.subtitle2')}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/cddff61c-1e1b-4206-be40-c374abc798cf-C01-section-11-bg.jpg`}/>
                <CarBanner title={t('c01.carbanner3.title3')}
                           subTitle={t('c01.carbanner3.subtitle3')}
                        bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/5e795e8e-0aa2-46b2-8fc2-8862f5348986-screen14.jpg`}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/7bb8b225-df81-4e77-b018-b28514246559-C01-section-12-bg.jpg`}/>
                <CarSwiper content={carSwipper5}/>
                <CarBanner title={t('c01.carbanner4.title')}
                           subTitle={t('c01.carbanner4.subtitle')}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/94e38a34-3ae7-41e0-b4d8-c71cac342c05-screen16.jpg`}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/e856ae06-84bf-4332-8a55-2130d9d90809-C01-section-14-bg.jpg`}/>
                <CarSwiper content={carSwipper6}/>
                <CarBanner title={t('c01.carbanner4.title2')}
                
                           subTitle={t('c01.carbanner4.subtitle2')}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/45ecfe29-4ec6-4648-8a9d-a8f0fcea3316-screen18.jpg`}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/76045aab-832d-4b30-a863-cb965f4fa2c4-C01-section-16-bg.jpg`}/>
                <CarBanner title={t('c01.carbanner4.title3')}
                           subTitle={t('c01.carbanner4.subtitle3')}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/0b78659d-0c41-488b-b606-4b09085a8cca-screen20.jpg`}
                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/b5e5383b-23ea-4af7-89b7-0f76c96d1210-C01-section-17-bg.jpg`}/>
                <CarBanner title={t('c01.carbanner4.title4')}
                           subTitle={t('c01.carbanner4.subtitle4')}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c75cbc24-e823-4324-bf24-ac6cf526c08d-screen21.jpg`}

                           bg={`${process.env.NEXT_PUBLIC_API_URL}/media/b2157a6e-aa3a-4d70-8da7-4c514d57991e-C01-section-18-bg.jpg`}/>
                <CarBannerContentBottom content={carBottomContent}
                           bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/81d2ae1c-a143-45d2-b007-a4fc1d2882b9-screen22.jpg`}
                
                                        bg={`${process.env.NEXT_PUBLIC_API_URL}/media/185d134a-e9a4-4ef1-9731-92ffd35fc9dd-C01-section-19-bg.jpg`}/>
                <CarSwiper content={carSwipper7}/>
                <CarContentFooter title={t('c01.carcontentfooter.title')} subTitle={t('c01.carcontentfooter.subtitle')}
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/02e6999c-c724-4025-a8b9-5a260f52eee7-screen24-1-2023.png`}
                                  bg={`${process.env.NEXT_PUBLIC_API_URL}/media/a5c21aec-6a91-4953-b46d-e80e16646baf-C01-section-21-bg.jpg`}/>
                <section className={'min-h-screen pt-16 md:pt-20 swiper-scroll px-66'}>
                    <div className="container pb-10 mx-auto">
                        <p className={'text-[30px] font-semibold text-white'}>{t('picture')}</p>

                    </div>
                    <div
                        className={'overflow-x-hidden w-full  relative flex flex-col md:flex-row  md:h-[90vh] gap-y-6'}>
                        {
                            carSwipper8?.map((item, ind) => (
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

    )
}

export default C01
