import {useTranslation} from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { AiFillFacebook } from "react-icons/ai";

import {RiInstagramFill} from 'react-icons/ri';
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import apiService from "@/service/api";
import {FaTelegram} from "react-icons/fa";


const Footer = () => {
  const sale = useRouter()
        const {t}=useTranslation()
    const {pathname}=useRouter()

  const {
    data,
  } = useQuery('get-contact', () => apiService.getData('/contact'))
        return (
          <>
            <footer className={` ${sale.asPath == '/car-sale' ? 'hidden' : 'block'} bg-[#efefef] py-10 ${pathname==='/' && 'footer'}`}>
              <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <ul className="flex flex-col items-center md:items-start gap-2 text-base text-[#898989] font-bold ">
                  <li className={'flex justify-center'}>
                    <Link className="text-center md:text-start"  href="/about">{t("navbar.about")}</Link>
                  </li>
                  <li className={'flex justify-center'}>
                    <Link  className="text-center md:text-start" href="/news">{t("navbar.news")}</Link>
                  </li>
                  {/*<li className={'flex justify-center'}><Link  className="text-center md:text-start" href="#">{t('footer.privacy')}</Link></li>*/}
                  <li className={'flex justify-center'}>
                    <Link className="text-center md:text-start"  href="/dealers-center">{t("navbar.dealersCenter")}</Link>
                  </li>

                  {/*<li className={'flex justify-center'}>*/}
                  {/*  <Link className="text-center md:text-start"  href="#">{t("footer.cooking")}</Link>*/}
                  {/*</li>*/}
                </ul>
                <ul className="flex flex-col items-center md:items-end lg:items-start gap-2 text-base text-[#898989] font-bold ">
                  <li className={'flex justify-center'}>
                    <Link className="text-center md:text-start"  href="/dealers">{t("navbar.dealers")}</Link>
                  </li>
                  <li className={'flex justify-center'}>
                    <Link className="text-center md:text-start"  href="#">{t("navbar.service")}</Link>
                  </li>
                  {/*<li className={'flex justify-center'}>*/}
                  {/*  <Link  className="text-center md:text-start" href="/drive">{t("navbar.testDrive")}</Link>*/}
                  {/*</li>*/}
                  {/*<li className={'flex justify-center'}><Link  className="text-center md:text-start" href="#">{t('footer.privacy')}</Link></li>*/}
                  <li className={'flex justify-center'}>
                    <Link className="text-center md:text-start"  href="#">{t("navbar.accessories")}</Link>
                  </li>
                  {/*<li className={'flex justify-center'}>*/}
                  {/*  <Link className="text-center md:text-start"  href="#">{t("footer.cooking")}</Link>*/}
                  {/*</li>*/}
                </ul>

                <div className="flex flex-col items-center space-y-3 md:items-start">
                <div className="flex items-center space-x-5  text-[#898989] ">
                    <a target={'_blank'} href={data?.data?.facebook} className="">
                      <AiFillFacebook
                          className="text-xl md:text-2xl"
                      />
                    </a>
                    <a target={'_blank'} href={data?.data?.instagram} className="">
                      <RiInstagramFill
                          className="text-xl md:text-2xl"

                      />
                    </a>
                    <a target={'_blank'} href={data?.data?.twitter} className="">
                      <FaTelegram
                          className="text-xl md:text-[23px]"

                      />
                    </a>
                  </div>
                  <a
                      href={'#'}
                        className="text-[#898989]    flex items-center gap-2"
                    >
                      <span className="capitalize">  Пн - сб  09:00 - 20: 00</span>
                    </a>
                 
                </div>
                <div className="space-y-3">
                
                  <div className="flex flex-col justify-center md:justify-end items-center md:items-end    gap-4 text-base text-[#4d5d81] font-bold ">
                    <a
                      href={`tel:${data?.data?.tel}`}
                        className="text-[#898989]    "
                    >
                      <span>{data?.data?.tel} </span>
                    </a>
                    {/*<a*/}
                    {/*    href={`tel:${data?.data?.tel}`}*/}
                    {/*    className="text-[#898989]    "*/}
                    {/*>*/}
                    {/*  <span> {t('footer.address')} </span>*/}
                    {/*</a>*/}
                  </div>
                  {/*<a target={'_blank'}*/}
                  {/*      className="text-base text-[#898989] font-bold flex gap-3 items-center justify-center md:justify-end"*/}
                  {/*      href={"https://abduganiev.uz/"}*/}
                  {/*  >*/}
                  {/*    <span>{t('footer.createdBy')}</span>*/}
                  {/*    <div className={'w-[50px] h-[50px] relative'}>*/}
                  {/*      <Image className="flex-shrink-0 w-10 object-contain md:w-14 hover:rotate-[360deg] duration-700" alt={'abduganiev logo'} fill src={'/A.png'} />*/}

                  {/*    </div>*/}
                  {/*  </a>*/}
                </div>
               
              </div>
            </footer>

    </>
        )
    }

export default Footer;
