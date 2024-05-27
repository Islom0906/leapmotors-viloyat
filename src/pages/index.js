import AOS from "aos";
import { useEffect, useState } from "react";

import Image from "next/image";
import { BannerImage } from "@/components";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import axios from "axios";
import SEO from 'src/layout/seo/seo';
import { useSelector } from "react-redux";

export default function Home({ banner, products }) {
  const { lang } = useSelector((state) => state.lang);

  const [sortProduct, setSortProduct] = useState([]);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    const productSort = [];

    products?.map((product) => {
      if (product?.model === "C10") {
        productSort[0] = product;
      }
      if (product?.model === "T03") {
        productSort[1] = product;
      }
      if (product?.model === "C01") {
        productSort[2] = product;
      }
      if (product?.model === "C11") {
        productSort[3] = product;
      }
      if (product?.model === "C11Reev") {
        productSort[4] = product;
      }
    });

    setSortProduct(productSort);
  }, [products]);

  return (
    <>
      <SEO  title={'Leapmotorca'}  og_title={'Leapmotorca , Leapmotorca Home, leapmotorca home'}  keywords={'Leapmotorca , Leapmotors , Leapmotorauto , Leapmotorca uz, Leapmotors uz, Leapmotorauto uz'}  description={'Мы являемся ведущей компанией по производству интеллектуальных электромобилей, которая стремится предоставить всем потребителям наилучшие возможности инновационной мобильности'} >
        <main className={"bg-black section"}>
          <section className="relative w-full h-screen scroll-snap">
            <video className="object-cover w-full h-full" autoPlay loop muted>
              <source
                className="w-full"
                src={`${process.env.NEXT_PUBLIC_API_URL}/${banner?.videoBanner?.path}`}
                type="video/mp4"
              />
            </video>

            <div className="absolute  top-[30%] left-[50%] md:top-[50%] md:translate-y-[-50%] translate-y-[-30%] translate-x-[-50%] opacity-90">
              <div
                data-aos="fade-up"
                className="w-[180px] h-[180px] mx-auto bg-transparent relative"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${banner?.imageBrand?.path}`}
                  alt="brand"
                  fill
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                data-aos="fade-up"
                className="w-[250px] h-[80px] md:w-[532px] md:h-[118px] bg-transparent relative"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${banner?.imageLogo?.path}`}
                  alt="logo"
                  fill
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </section>
          {sortProduct?.map((product) => (
            <BannerImage
              key={product?._id}
              bg={`${process.env.NEXT_PUBLIC_API_URL}/${product?.imageBanner?.path}`}
              logo={`${process.env.NEXT_PUBLIC_API_URL}/${product?.imageLogo?.path}`}
              text={lang === "ru" ? product?.textRu : product?.textUz}
              link={product?.model}
              bgRes={`${process.env.NEXT_PUBLIC_API_URL}/${
                  product?.model === "C11Reev"
                      ? "media/82b5ac37-04f6-4cd6-adae-73297536767e-c11-reev-res.jpg"
                      : product?.model === "C01"
                          ? "media/29f607a1-f30d-41a0-b662-257b2813544e-c01-res.jpg"
                          : product?.model === "C11"
                              ? "media/d66383ea-8997-4374-935c-5bd7ebf26e03-c11-res.jpg"
                              : product?.model === "T03" ?
                                  "media/6c0219f0-5c24-4370-9d0e-4ae372837b5d-t03-res.jpg"
                                  : product?.model === "C10" &&
                                  "media/c10/c10-res.jpg"
              }`}
            />
          ))}
        </main>
      </SEO>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [banner, product] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banner`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`),
  ]);

  // Pass data to the page via props
  return {
    props: {
      banner: banner.data,
      products: product.data,
    },
  };
}
