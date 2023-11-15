import Image from "next/image";
import logo from '/public/Logo.png'
import Link from "next/link";
import {GiHamburgerMenu} from "react-icons/gi"
import {GrClose} from "react-icons/gr"
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {isShowSidebar} from "@/slice/sidebar";
import {checkLanguageAction} from "@/slice/language";
import apiService from "@/service/api";
import {useQuery} from "react-query";
import {checkCarModel} from "@/slice/testDrive";
import { useRouter } from "next/router";

// import blackLogo from 'https://leapmotorca.uz/api/media/5c50e291-35be-46e2-8d99-f5780c1377b9-Leapmotor-logo.png'

const Navbar = () => {
    const sale = useRouter()
    const [checkLang, setCheckLang] = useState('ru')
    const [isChangeLang, setIsChangeLang] = useState(false)
    const [sortProduct,setSortProduct]=useState([])
    const {t, i18n} = useTranslation()
    const {show} = useSelector(state => state.sidebar)
    const dispatch = useDispatch()

    const {
        data,
    } = useQuery('get-model', () => apiService.getData('/product'))
    const showSidebar = (e, show) => {
        e.stopPropagation()
        dispatch(isShowSidebar(show))
    }

    useEffect(()=>{
        const productSort=[]
        data?.data?.map(product=>{
            if (product?.model==='T03'){
                productSort[0]=product
            }
            if (product?.model==='C01'){
                productSort[1]=product
            }
            if (product?.model==='C11'){
                productSort[2]=product
            }
            if (product?.model==='C11Reev'){
                productSort[3]=product
            }
        })

        setSortProduct(productSort)
    },[data])

    // useEffect(() => {
    //     // const defaultLang = localStorage.getItem('langLeap')
    //     dispatch(checkLanguageAction(defaultLang))
    //     if (defaultLang !== checkLang) {
    //         setCheckLang(defaultLang)
    //     }
    // }, []);

    useEffect(() => {
        if (isChangeLang) {
            i18n.changeLanguage(checkLang)
            dispatch(checkLanguageAction(checkLang))
            // localStorage.setItem('langLeap', checkLang)
        }
    }, [checkLang]);
    const changLang = (lang) => {
        setIsChangeLang(true)
        setCheckLang(lang)
        // setOpenNavbar(false)
    }

    return (
    <nav className={`${sale.asPath == '/car-sale' ? 'bg-white shadow-sm' : 'bg-[rgba(27,27,27,0.85)]'} w-full fixed  top-0 left-0 h-[60px] z-[999]  `}  >
       
        <div className={` ${sale.asPath == '/car-sale' ? 'md:container px-1' : 'container'}  relative flex items-center justify-between w-full h-full`}>
            <div className="flex items-center justify-between sm:gap-20">
                <Link href="/" className={` ${sale.asPath == '/car-sale' ? 'w-[35px]' : 'w-[154px]'}  h-[34px] relative`}>
                    {
                        sale.asPath == '/car-sale' ? 
                        <Image
                            src={'https://leapmotorca.uz/api/media/5c50e291-35be-46e2-8d99-f5780c1377b9-Leapmotor-logo.png'}
                            alt="Leapmotor"
                            className="object-contain"
                            fill
                        />
                        :
                        <Image
                            src={logo}
                            alt="Leapmotor"
                            className="object-contain"
                            fill
                        />
                        
                    }

                </Link>
                <ul className={`${sale.asPath == '/car-sale' ? 'hidden' : 'lg:flex'} items-center hidden gap-10 text-white uppercase `}>
                    {
                        sortProduct?.map(link => (
                            <li key={link?._id}>
                                <Link href={`/${link?.model}`}
                                      className="hover:underline hover:text-[#4f5f82] transition-all ease duration-500 underline-offset-8 font-semibold">{link?.model}</Link>
                            </li>

                        ))
                    }

                </ul>
            </div>
            <div className="flex items-center md:gap-14">
                <Link href="/drive"
                      onClick={()=>dispatch(checkCarModel(""))}
                      className=" border-white border px-4 py-1 text-white hover:text-[#4f5f82] hover:bg-white  transition-all ease duration-500 underline-offset-8 font-arial-semibold hidden lg:block">{t('navbar.testDrive')}</Link>
                <div className="side-r">
                    <GiHamburgerMenu onClick={(e) => showSidebar(e, !show)}
                                     className="text-2xl text-white cursor-pointer"/>
                    <div className={`backdrop-brightness-50 w-full h-screen fixed top-0 left-0 right-0 bottom-0 ${show ? 'block' : 'hidden'} duration-1000 ease-in-out`}></div>
                    <div onClick={(e) => e.stopPropagation()}
                         className={`fixed top-0 ${show ? 'right-0' : '-right-full'}  duration-500 ease-in-out bg-white w-full xs:w-[200px] h-screen pt-5 pb-10 px-5 text-[#808080] shadow-2xl flex flex-col justify-between z-[99]`}>
                        <div>
                            <div className="flex justify-end mb-10">
                                <GrClose onClick={(e) => showSidebar(e, !show)}
                                         className="text-2xl cursor-pointer"/>
                            </div>
                            <ul className="flex flex-col items-center space-y-5 md:items-start">
                                {
                                    data?.data?.map(link => (
                                        <li key={link?._id} onClick={(e) => showSidebar(e, false)}>
                                            <Link href={`/${link?.model}`}
                                                  className="block uppercase lg:hidden ">{link?.model}</Link>
                                        </li>

                                    ))
                                }
                                <li><Link onClick={(e) => showSidebar(e, false)} href="/about"
                                          className="capitalize">{t('navbar.about')}</Link></li>
                                <li><Link onClick={(e) => showSidebar(e, false)} href="/news"
                                          className="capitalize">{t('navbar.news')}</Link></li>
                                <li><Link onClick={(e) => showSidebar(e, false)} href="/dealers-center"
                                          className="capitalize">{t('navbar.dealersCenter')}</Link></li>
                                <li><Link onClick={(e) => showSidebar(e, false)} href="/dealers"
                                          className="capitalize">{t('navbar.dealers')}</Link></li>
                                <li><Link onClick={(e) => showSidebar(e, false)} href="#"
                                          className="capitalize">{t('navbar.service')}</Link></li>
                                <li className={'block  lg:hidden'}><Link onClick={(e) => showSidebar(e, false)} href="/drive"
                                          className="capitalize ">{t('navbar.testDrive')}</Link></li>
                                <li><Link onClick={(e) => showSidebar(e, false)} href="#"
                                          className="capitalize">{t('navbar.accessories')}</Link></li>


                            </ul>
                        </div>
                        <div className="flex items-center justify-center gap-3 md:justify-start">
                            <div className="relative flex-shrink-0 w-5 h-5">
                                <Image src="/global.png" alt="global" className="w-full h-full" fill/>
                            </div>
                            <div className="flex items-center gap-2 divide-x">
                                <button onClick={() => changLang('ru')}>Russia</button>
                                {/* <button onClick={() => changLang('uz')} className="pl-2">Uzbek</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </nav>)
}

export default Navbar
