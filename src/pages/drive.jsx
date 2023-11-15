import Image from "next/image";
import {useMutation, useQuery} from "react-query";
import apiService from "@/service/api";

import {useEffect, useState} from "react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useForm} from "react-hook-form";
import {LuLoader2} from "react-icons/lu";
import ModalSuccess from "@/components/modal-success/modal-success";
import InputMask from 'react-input-mask';
import SEO from 'src/layout/seo/seo';

import {useSelector} from "react-redux";

const Drive = () => {
    const {model} = useSelector(state => state.drive)
    const {register, handleSubmit, reset, formState: {errors}} = useForm()
    const {
        data,
    } = useQuery('get-model', () => apiService.getData('/product'))
    const {
        mutate: userPost, 
        data: userPostData, 
        isLoading: userPostLoading,
        isSuccess: userPostSuccess
    } = useMutation(({url, data}) => apiService.postData(url, data))


    const [bg, setBg] = useState('')
    const [isActive, setIsActive] = useState(0)
    const [isModal, setModal] = useState(false)

    useEffect(() => {
        const defaultBg = data?.data[0]
        if (model === "") {
            setBg(defaultBg)
        } else {
            data?.data?.map((item) => {
                if (item?.model === model) {
                    setBg(item)
                }
            })

        }
    }, [data]);

    useEffect(() => {


        if (userPostSuccess) {
            reset()
            setModal(true)
            setTimeout(() => {
                setModal(false)
            }, 2000)
        }


    }, [userPostData])


    useEffect(() => {
        setBg({...bg, model})
        data?.data?.map((item, ind) => {
            if (item?.model === model) {
                setIsActive(ind)
            }
        })
    }, [model]);

    const checkModel = (model, ind) => {
        setBg(model)
        setIsActive(ind)

    }

    const onSubmit = (data) => {


        const postData = {...data, model: bg?.model}
        userPost({url: '/testDrive', data: postData})
    }


    return (<>
            <SEO title={'Leapmotorca Test-drive'}  og_title={'Leapmotorca  Test-drive, Leapmotorca Test-drive, leapmotorca Test-drive'}  keywords={'Test-drive , drive car , Leapmotors , Leapmotorauto , Leapmotorca uz, Leapmotors uz, Leapmotorauto uz'}  description={'Мы являемся ведущей компанией по производству интеллектуальных электромобилей, которая стремится предоставить всем потребителям наилучшие возможности инновационной мобильности'}>
                
            <section className="relative min-h-screen bg-black">
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${bg?.imageBanner?.path}`}
                    fill
                    className="object-cover z-7"
                    alt={bg?.textRu}
                />
                <div className="container relative h-full">
                    <div
                        className="relative z-10 w-full  h-screen pt-[10%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
                        <div
                            className="px-3 py-3 space-y-5 border border-black sm:py-5 sm:px-5 rounded-xl h-fit drive-card md:cols-span-1">
                            <ul className="flex text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow ">
                                {data?.data?.map((model, ind) => (
                                    <li key={model?._id} className="w-full" onClick={() => checkModel(model, ind)}>
                                        <button
                                            className={`block w-full h-full p-2 font-bold   ${isActive === ind ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'} ${ind === 0 ? 'rounded-l-lg' : data?.data?.length - 1 === ind ? "rounded-r-lg" : ""}  active focus:outline-none`}>
                                            {model?.model}
                                        </button>
                                    </li>


                                ))}

                            </ul>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 sm:space-y-3">
                                <div>
                                    <h5 className="mb-2 text-base font-bold md:text-xl">
                                        Выбор дилера
                                    </h5>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div>
                                            <label
                                                htmlFor={"countries"}
                                                className="block mb-2 text-sm font-medium text-gray-900 "
                                            >
                                                Выберите регион
                                            </label>
                                            <select
                                                id="countries"

                                                {...register('region', {required: true})}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            >
                                                <option value={''}>Выберите регион</option>
                                                <option value="Ташкент">Ташкент</option>
                                                {/*<option value="Андижан">Андижан</option>*/}
                                                {/*<option value="Бухара">Бухара</option>*/}
                                                {/*<option value="Фергана">Фергана</option>*/}
                                                {/*<option value="Жиззах">Жиззах</option>*/}
                                                {/*<option value="Хоразм">Хоразм</option>*/}
                                                {/*<option value="Наманган">Наманган</option>*/}
                                                {/*<option value="Навоий">Навоий</option>*/}
                                                {/*<option value="Қашқадарё">Қашқадарё</option>*/}
                                                {/*<option value="Қорақалпоғистон">Қорақалпоғистон</option>*/}
                                                {/*<option value="Самарқанд">Самарқанд</option>*/}
                                                {/*<option value="Сирдарё">Сирдарё</option>*/}
                                                {/*<option value="Сурхондарё">Сурхондарё</option>*/}
                                            </select>
                                            {errors.region &&
                                                <span className={'text-red-600 text-xs'}>Требуется регион</span>}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="dealer"
                                                className="block mb-2 text-sm font-medium text-gray-900 "
                                            >
                                                Выберите дилера
                                            </label>
                                            <select
                                                id="dealer"
                                                {...register('dealer', {required: true})}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            >
                                                <option value={''}>Выберите дилеров</option>
                                                <option value="Leapmotorca">
                                                    Leapmotorca
                                                </option>
                                            </select>
                                            {errors.dealer &&
                                                <span className={'text-xs text-red-600'}>Требуется дилера</span>}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="mb-2 text-base font-bold md:text-xl">
                                        Договориться о времени
                                    </h5>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div>
                                            <label
                                                htmlFor="day"
                                                className="block mb-2 text-sm font-medium text-gray-900 "
                                            >
                                                Выберите день
                                            </label>
                                            <input
                                                {...register('day', {required: true})}
                                                id="day"
                                                type={'date'}
                                                placeholder={'01.01.2024'}
                                                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                            />
                                            {errors.day &&
                                                <span className={'text-xs text-red-600'}>Требуется день</span>}

                                        </div>
                                        <div>
                                            <label
                                                htmlFor="hour"
                                                className="block mb-2 text-sm font-medium text-gray-900 "
                                            >
                                                Выберите время
                                            </label>
                                            <select
                                                id="hour"
                                                {...register('hour', {required: true})}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            >
                                                <option value={''}>Выберите время</option>
                                                <option value="09:00-09:30">09:00-09:30</option>
                                                <option value="09:30-10:00">09:30-10:00</option>
                                                <option value="10:00-10:30">10:00-10:30</option>
                                                <option value="10:30-11:00">10:30-11:00</option>
                                                <option value="11:00-11:30">11:00-11:30</option>
                                                <option value="11:30-12:00">11:30-12:00</option>
                                                <option value="12:00-12:30">12:00-12:30</option>
                                                <option value="12:30-13:00">12:30-13:00</option>
                                                <option value="13:00-13:30">13:00-13:30</option>
                                                <option value="13:30-14:00">13:30-14:00</option>
                                                <option value="14:00-14:30">14:00-14:30</option>
                                                <option value="14:30:15:00">14:30:15:00</option>
                                                <option value="15:30:16:00">15:30:16:00</option>
                                                <option value="16:00:16:30">16:00:16:30</option>
                                                <option value="16:30-17:00">16:30-17:00</option>
                                                <option value="17:00-17:30">17:00-17:30</option>
                                                <option value="17:30-18:00">17:30-18:00</option>
                                                <option value="18:00-18:30">18:00-18:30</option>
                                                <option value="18:30-19:00">18:30-19:00</option>
                                                <option value="19:00-19:30">19:00-19:30</option>
                                                <option value="19:30-20:00">19:30-20:00</option>
                                            </select>
                                            {errors.hour &&
                                                <span className={'text-xs text-red-600'}>Требуется время</span>}

                                        </div>
                                    </div>
                                </div>
                                <div className={''}>
                                    <h5 className="mb-2 text-base font-bold md:text-xl">
                                        Ваши данные
                                    </h5>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-medium text-gray-900 "
                                            >
                                                Имя
                                            </label>
                                            <input
                                                type="text"
                                                {...register('name', {required: true})}
                                                id="name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                placeholder="Фамилия имя отчество"
                                            />
                                            {errors.name &&
                                                <span className={'text-xs text-red-600'}>Требуется ваши данные</span>}

                                        </div>
                                        <div>
                                            <label
                                                htmlFor="tel"
                                                className="block mb-2 text-sm font-medium text-gray-900 "
                                            >
                                                Телефон
                                            </label>

                                            <InputMask
                                                // mask options
                                                mask="+\9\98 (99) 999-99-99"
                                                alwaysShowMask={false}
                                                // input options
                                                id={'tel'}
                                                type={'text'}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="+998 99 999 99 99"
                                                // react hook form register
                                                {...register("tel", {required: true})}
                                            />

                                            {/*<input*/}
                                            {/*  type="number"*/}
                                            {/*  {...register('tel',{required:true})}*/}
                                            {/*  id="tel"*/}
                                            {/*  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "*/}
                                            {/*  placeholder="+(998) "*/}
                                            {/*/>*/}
                                            {errors.tel && <span className={'text-xs text-red-600'}>Требуется телефон данные</span>}

                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center ">
                                    <button className="px-3 py-2 text-white bg-blue-500 rounded-xl hover:bg-blue-400 ">
                                        {userPostLoading ? <span><LuLoader2 className={'animate-spin'}/></span> :
                                            <span>Отправить запрос</span>}


                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div
                    className={`${isModal ? 'block' : 'hidden'} fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-[999] min-h-screen backdrop_filter`}>
                    <ModalSuccess text={'Ваша заявка принята'}/>
                </div>
            </section>
            </SEO>
        </>

    );
};

export default Drive;