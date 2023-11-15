import {
  CarDetailBanner,
  CarBannerC11Reev,
  CarSwiper,
  CarBanner,
  CarSwiperInnerVideo,
  CarText,
  HoverCard,
} from "@/components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import  { Pagination, Navigation } from "swiper";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import { useTranslation } from "react-i18next";
import SEO from 'src/layout/seo/seo';
const C11Reev = () => {
  const { t } = useTranslation();
  const disclaimers = [
    t("c11reev.c11rev.name"),
    t("c11reev.c11rev.name2"),
    t("c11reev.c11rev.name3"),
    t("c11reev.c11rev.name4"),
    t("c11reev.c11rev.name5"),
    t("c11reev.c11rev.name6"),
    t("c11reev.c11rev.name7"),
    t("c11reev.c11rev.name8"),
    t("c11reev.c11rev.name9"),
    t("c11reev.c11rev.name10"),
  ];
  const carSwipper3 = [
    {
      title: t("c11reev.carSwipper3.title"),
      subTitle: t("c11reev.carSwipper3.subtitle"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/d1903d0f-0e8c-4cd8-9f61-7bf5624c9df5-C11-Reev-section-12-slider-1-2bg.jpg`,
    },
    {
      title: t("c11reev.carSwipper3.title2"),
      subTitle: t("c11reev.carSwipper3.subtitle2"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/6d7c8da5-3e54-495b-a345-8df650c50773-C11-Reev-section-12-slider-1-1bg.jpg`,
    },
  ];
  const carSwipper4 = [
    {
      title: t("c11reev.carSwipper4.title"),
      subTitle: t("c11reev.carSwipper4.subtitle"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/07b7c1e6-e2e5-4b42-b1cb-6f47d23f1e3c-C11-Reev-section-16-slider-1-3bg.jpg`,
      bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/dfe0b147-7664-4e27-99dc-082a6b625f59-slide-18-2.png`,
    },
    {
      title: t("c11reev.carSwipper4.title2"),
      subTitle: t("c11reev.carSwipper4.subtitle2"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/6713a7ab-04a3-4d33-a65d-6daa1f7bb466-C11-Reev-section-16-slider-1-1bg.jpg`,
      bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/2704b71c-3db7-4068-81d3-5c15aa75d1be-slide-18-3.png`,
     
    },
    {
      title: t("c11reev.carSwipper4.title3"),
      subTitle: t("c11reev.carSwipper4.subtitle3"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/5622e412-6d49-4723-90a6-267c69274305-C11-Reev-section-16-slider-1-2bg.jpg`,
      bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/d1a927e9-dda7-4c54-bf93-2ba642112049-slide-18-1.png`,
    
    },
  ];
  const carSwipper5 = [
    {
      title: t("c11reev.carSwipper5.title"),
      subTitle: t("c11reev.carSwipper5.subtitle"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/bda884f2-ee12-4c6c-b24f-a3a533930795-C11-Reev-section-18-slider-1-1bg.jpg`,
      bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/d32168e7-949b-424c-b0ec-71444ef1c0a8-slide-20-2.png`,
    },
    {
      title: t("c11reev.carSwipper5.title2"),
      subTitle: t("c11reev.carSwipper5.subtitle2"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/a95900c4-3534-4053-86a3-8bec3a898aa7-C11-Reev-section-18-slider-1-2bg.jpg`,
      bgbgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/f410d71f-a2fd-4609-9bd2-9ca8d1cc2e27-slide-20-1.png`,
    },
  ];

  const carSwipper6 = [
    {
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/cd8d1b69-e984-4eeb-aba2-aa4cba5de1df-last2.jpg`,
    },
    {
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/75581a25-717a-4287-95b0-909adc926f58-last1.jpg`,
    },
    {
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/fca63e41-6635-4bfa-8ffc-becdee688dbb-last3.jpg`,
    },
    {
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/78224616-b9f4-42c4-829b-6b8fb3c69e99-last4.jpg`,
    },
  ];

  const videoBlog = [
    {
      title: t("c11reev.videoBlog.title"),
      subTitle: t("c11reev.videoBlog.subtitle"),
      video: `${process.env.NEXT_PUBLIC_API_URL}/media/341b133c-3ad4-4cda-a61f-6ce801cfe26a-16-3.mp4`,
    },
    {
      title: t("c11reev.videoBlog.title2"),
      subTitle: t("c11reev.videoBlog.subtitle2"),
      video: `${process.env.NEXT_PUBLIC_API_URL}/media/7d7aec9e-85fc-424e-bd9c-d623498584a3-section-16-slide2.mp4`,
    },
    {
      title: t("c11reev.videoBlog.title3"),
      subTitle: t("c11reev.videoBlog.subtitle3"),
      video: `${process.env.NEXT_PUBLIC_API_URL}/media/eb4f0222-5ea3-4228-ad53-468ccb3d4618-section-16-slide3.mp4`,
    },
    {
      title: t("c11reev.videoBlog.title4"),
      subTitle: t("c11reev.videoBlog.subtitle4"),
      video: `${process.env.NEXT_PUBLIC_API_URL}/media/a2dd8ae3-a67b-469d-8c5b-1540a7db6d16-section-16-slide4.mp4`,
    },
  ];

  const carSwipper2 = [
    {
      title: t("c11reev.carSwipper2.title"),
      subTitle: t("c11reev.carSwipper2.subtitle"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c3e21933-b421-4540-9b54-882cd2930afe-C11-Reev-section-7-slider-1-1bg.jpg`,
      bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/5c360aea-f66a-46b5-a4cd-5f400cb8ec6e-slide-06-4.png`,
    },
    {
      title: t("c11reev.carSwipper2.title2"),
      subTitle: t("c11reev.carSwipper2.subtitle2"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c781fd9e-1d86-477a-a8fc-f708ca452dc7-C11-Reev-section-7-slider-1-2bg.jpg`,
      bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/bea98137-7265-4af1-a2a3-e24638c82859-slide-06-1.png`,
    },
    {
      title: t("c11reev.carSwipper2.title3"),
      subTitle: t("c11reev.carSwipper2.subtitle3"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/e9f38cb7-79ef-498b-afee-e3f870305a25-C11-Reev-section-7-slider-1-3bg.jpg`,
      bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/ecbfb5cc-8194-4775-b13e-88ec16fa1fa8-slide-06-2.jpeg`,
    },
    {
      title: t("c11reev.carSwipper2.title4"),
      subTitle: t("c11reev.carSwipper2.subtitle4"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/a51187c2-1118-4652-9f02-4992bf50409a-C11-Reev-section-7-slider-1-4bg.jpg`,
      bgResp: `${process.env.NEXT_PUBLIC_API_URL}/media/375f8d72-bdf6-464d-921f-7a0140a2484d-slide-06-3.png`,
    },
  ];
  const carSwipper1 = [
    {
      title: t("c11reev.carSwipper1.title"),
      subTitle: t("c11reev.carSwipper1.subtitle"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/520256cf-35ef-4ecc-a953-793bbdc98ff7-C11-Reev-section-5-slider-1-1bg.jpg`,
    },
    {
      title: t("c11reev.carSwipper1.title2"),
      subTitle: t("c11reev.carSwipper1.subtitle2"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/236c60a0-0d43-489d-9d2a-c7f7738c6598-C11-Reev-section-5-slider-1-2bg.jpg`,
    },
    {
      title: t("c11reev.carSwipper1.title3"),
      subTitle: t("c11reev.carSwipper1.subtitle3"),
      bg: `${process.env.NEXT_PUBLIC_API_URL}/media/4dc447c6-9b74-4096-b0a1-fea07ba1032d-C11-Reev-section-5-slider-1-3bg.jpg`,
    },
  ];

  const carDataSectoin2 = [
    {
      title: "c11reev.section2.carDataSectoin2.title1",
      data: "c11reev.section2.carDataSectoin2.data1",
    },
    {
      title: "c11reev.section2.carDataSectoin2.title2",
      data: "c11reev.section2.carDataSectoin2.data2",
    },
    {
      title: "c11reev.section2.carDataSectoin2.title3",
      data: "c11reev.section2.carDataSectoin2.data3",
    },
  ];

  const carDataSectoin3 = [
    {
      title: "c11reev.section3.carDataSectoin3.title1",
      data: "c11reev.section3.carDataSectoin3.data1",
    },
    {
      title: "c11reev.section3.carDataSectoin3.title2",
      data: "c11reev.section3.carDataSectoin3.data2",
    },
    {
      title: "c11reev.section3.carDataSectoin3.title3",
      data: "c11reev.section3.carDataSectoin3.data3",
    },
  ];

  // const characteristics = {
  //     title: "Luxury Five Seats",
  //     about: {
  //         lenght: "5050",
  //         width: "1902",
  //         height: "1509",
  //     },
  // };

  return (
    <>
      <SEO  title={'Leapotorca C11REEV'}  og_title={'Leapmotorca C11Reev'}  keywords={'C11REEV , Leapmotors , Leapmotorauto , Leapmotorca uz, Leapmotors uz, Leapmotorauto uz'}  description={'Мы являемся ведущей компанией по производству интеллектуальных электромобилей, которая стремится предоставить всем потребителям наилучшие возможности инновационной мобильности'} >
        
      <main className={"bg-black"}>
        <CarDetailBanner
          imgLong={true}
          img={`${process.env.NEXT_PUBLIC_API_URL}/media/fc3b974d-117e-4a1d-a2ee-e1d324eb7b17-c11reev.png`}
          bg={`${process.env.NEXT_PUBLIC_API_URL}/media/7c0b9341-73dc-4f0c-a4f5-6853f6ed5751-C11-Reev-section-1bg.jpg`}
          bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/957044ed-0e6b-408b-9ac9-a2b88d1c0ee6-slide-01-new.jpg`}
          text={t("c11reev.section1")}
          model={'C11Reev'}
        />
        <CarBannerC11Reev
          title={t("c11reev.section2.title")}
          subTitle={t("c11reev.section2.sub-title")}
          carData={carDataSectoin2}
          bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/75f23955-f5b7-4366-b73c-23901d5626d5-slide-01-2.jpg`}
          bg={`${process.env.NEXT_PUBLIC_API_URL}/media/492a753d-0554-4942-8a59-193c60c6188c-C11-Reev-section-2-bg.jpg`}
        />
        <CarBannerC11Reev
          title={t("c11reev.section3.title")}
          carData={carDataSectoin3}
          bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c2331545-8907-4346-8c17-8a941364cc45-C11-Reev-section-3bg.jpg`}
          bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/0d3bcd73-b1eb-49f4-92c9-d10d48e31457-slide-02.jpg`}
        />

        <section className="h-screen ">
          <div className="relative w-full h-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/media/528cbfcb-184f-48aa-8885-213f4eb8ea7d-slide-03.jpg`}
              alt="car"
              className="block object-cover object-center w-full h-full md:hidden"
              fill
              priority={true}
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/media/d197cbbe-f6d9-4d46-ab91-f51a2d8ad41e-C11-Reev-section-4bg.jpg`}
              alt="car"
              className="hidden object-cover object-center w-full h-full md:block"
              fill
              priority={true}
            />

            <div className="relative z-20 w-full text-center py-[50px] md:py-[100px]">
              <div className="mb-5 text-center">
                <p className="text-white text-[26px] font-semibold md:font-normal md:text-2xl lg:text-2xl leading-[44px] md:leading-[32px] mb-3">
                  {t("c11reev.section4.title")}
                </p>
              </div>
              <div>
                <div className="flex justify-center">
                  <div className="flex flex-col items-start text-left md:flex-row sm:gap-6">
                    <div className="flex items-center justify-end gap-2">
                      <p className="text-[44px] md:text-[63px] text-white font-arial-semibold leading-[70px]">
                        5
                      </p>
                      <div className="flex flex-col h-full justify-evenly ">
                        <p className="text-white font-arial-normal leading-[16px]">
                          {t("c11reev.section4.name1")}
                        </p>
                        <p className="text-white font-arial-normal leading-[16px]">
                          {t("c11reev.section4.data1")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2 md:border-l border-[#ffffff57]">
                      <p className="text-[44px] md:text-[63px] text-white font-arial-semibold leading-[70px]">
                        2
                      </p>
                      <div className="flex flex-col h-full justify-evenly ">
                        <p className="text-white font-arial-normal leading-[16px]">
                          {t("c11reev.section4.name2")}
                        </p>
                        <p className="text-white font-arial-normal leading-[16px]">
                          {t("c11reev.section4.data2")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CarSwiper content={carSwipper1} />

        <CarBanner
          title={t("c11reev.section5.name")}
          bg={`${process.env.NEXT_PUBLIC_API_URL}/media/2b51c4a8-4a25-4fb1-8a3b-40ac095761f7-C11-Reev-section-6-bg.jpg`}
          textColor="black"
          bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/56e9de81-6573-4f3f-ab8f-dd134bb90b30-slide-05.jpg`}
        />
        <CarSwiper content={carSwipper2} textColor={"black"} />
        {/*<CarCharacteristics*/}
        {/*  textColor={"black"}*/}
        {/*  bg={`${process.env.NEXT_PUBLIC_API_URL}/media/72d9c4b3-5acd-4f3b-b167-7cb8ae8accf8-section-8-bg.jpg`}*/}
        {/*  characteristics={characteristics}*/}

        {/*  */}
        {/*/>*/}
        <CarBanner
          title={t("c11reev.section6.name")}
          bg={`${process.env.NEXT_PUBLIC_API_URL}/media/8bfef56b-b41a-49f6-923d-3bed34ee9a1b-C11-Reev-section-8-bg.jpg`}
          bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/5541e411-9525-4191-87de-13fa5d592541-C11Reev-slide-08-res.jpg`}
        />
        <CarBanner
          bg={`${process.env.NEXT_PUBLIC_API_URL}/media/b6b4923e-9dab-4e8a-a34d-ff0c1365042d-C11-Reev-section-9-bg-min.jpg`}
          bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/84b73d90-50db-4672-bc06-9dd9dfeb47ee-C11-Reev-section-9-bg-responsive-min.jpg`}
        />
        <CarBanner
          bg={`${process.env.NEXT_PUBLIC_API_URL}/media/78b52aaa-4b94-472e-a313-13fc3b9eafd8-C11-Reev-section-10-bg.jpg`}
          bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/2c13e82c-a82e-487c-abeb-9dbe986d8b1b-slide-10.jpg`}
          title={t("c11reev.section7.name")}
        />
        <CarBanner
          bg={`${process.env.NEXT_PUBLIC_API_URL}/media/f84154ae-126e-400a-a6b7-a34c442ab220-C11-Reev-section-11-bg.jpg`}
          bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/95c7118d-6e79-4af5-b9bd-5b283aadc17f-slide-11.jpg`}
          title={t("c11reev.section8.name")}
          subTitle={t("c11reev.section8.title")}
        />
        <CarSwiper content={carSwipper3} />
        <CarBanner
          bg={`${process.env.NEXT_PUBLIC_API_URL}/media/a344178d-336a-4a52-bb49-850cfe382850-C11-Reev-section-13-bg.jpg`}
          bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/a9842379-a7a5-44d6-8661-3b270b7b6874-slide-14.jpg`}
          title={t("c11reev.section9.name")}
          subTitle={t("c11reev.section9.title")}
          center={true}
        />
        <section className="h-screen ">
          <div className="relative w-full h-full">
            <video className="object-cover w-full h-full" autoPlay loop muted>
              <source
                className="hidden w-full md:block"
                src={`${process.env.NEXT_PUBLIC_API_URL}/media/5f5270eb-3e0c-42b3-b63a-79d00fc31296-section-15-bg.mp4`}
                type="video/mp4"
              />
                 <source
                className="block w-full md:hidden"
                src={`${process.env.NEXT_PUBLIC_API_URL}/media/edcffd57-6ebb-4fcb-b090-bcab9789296a-15.mp4`}
                type="video/mp4"
              />
            </video>

            <div className="absolute top-0 left-0 w-full h-screen text-center">
              <div className="flex flex-col py-[60px] justify-between w-full h-screen md:justify-start">
                  <p className="text-white text-lg font-semibold lg:text-[22px] leading-7 md:leading-8 mb-2 w-[90%] mx-auto">
                    {t("c11reev.section10.name")}
                  </p>
                  <p className="text-sm text-white font-normal md:leading-5 w-[90%] mx-auto">
                    {t("c11reev.section10.title")}
                    <br />
                    {t("c11reev.section10.title2")}
                    <br />
                    {t("c11reev.section10.title3")}
                  </p>
              </div>
            </div>
          </div>
        </section>

        <Swiper
          id={"mySwiper1"}
          autoplay={{
            delay: 4000,
          }}
          speed={1000}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          loop={"true"}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="md:h-screen mySwiper"
        >
          {videoBlog?.map((item, ind) => (
            <SwiperSlide key={ind}>
              <div className={"relative w-full h-full swiper1"}>
                <CarSwiperInnerVideo content={item} video={item.video} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <CarSwiper content={carSwipper4} />

        <CarBanner
          bg={`${process.env.NEXT_PUBLIC_API_URL}/media/01920bd1-0f12-437f-ac75-fa66272bf58a-C11-Reev-section-17-bg.jpg`}
          bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/70ec9b94-5c4a-4996-9c8b-cdc858a387c1-slide-19.jpg`}
          title={t("c11reev.section11.title")}
          subTitle={t("c11reev.section11.name")}
        />
        <CarSwiper content={carSwipper5} />
        <CarBanner
          bg={`${process.env.NEXT_PUBLIC_API_URL}/media/d1f22c5d-25ba-41a8-a560-d33bb20c8928-C11-Reev-section-19-bg.jpg`}
          bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/5194cc07-d8cb-48fa-bd66-215228acdc73-slide-21.jpg`}
          title={t("c11reev.section12.name")}
          subTitle={t("c11reev.section12.title")}
        />
        <CarBanner
          bg={`${process.env.NEXT_PUBLIC_API_URL}/media/e448970d-bb7b-4c6c-97e5-e529dcd883d7-C11-Reev-section-20-bg.jpg`}
          bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/75ba47e7-9433-40a3-8dbf-dda68c8c2417-slide-17.jpg`}
          title={t("c11reev.section13.name")}
        />
        <section className={"min-h-screen pt-16 md:pt-20 swiper-scroll px-66"}>
          <div className="container pb-10 mx-auto">
            <p className={"text-[30px] font-semibold text-white"}>
              {t("picture")}
            </p>
          </div>
          <div
            className={
              "overflow-x-hidden w-full  relative flex flex-col md:flex-row  md:h-[90vh] gap-y-6"
            }
          >
            {carSwipper6?.map((item, ind) => (
              <HoverCard image={item.bg} key={ind} />
            ))}
          </div>
        </section>
        <CarText content={disclaimers} />
      </main>
      </SEO>
      
    </>
  );
};

export default C11Reev;
