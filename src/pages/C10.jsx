import {
    CarBanner,
    CarCharacteristics,
    CarDetailBanner,
    CarSwiper, CarText,
    GifSection, HoverCard,
    VideoSection
} from "@/components";
import {useTranslation} from "react-i18next";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


const C10 = () => {
    const {t}=useTranslation()

    const characteristics = {
        title: 'Национальная ориентировочная цена',
        about: [

            {
                title: '410 Комфортное издание',
                text: "128 800"
            },
            {
                title:'530 Комфортное издание',
                text: "138 800"
            },
            {
                title: '530 Смарт-издание',
                text: "148 800"
            },
            {
                title: '530 Версия для умного вождения',
                text: "168 800"
            }
        ],
        about2: [
            {
                title: '210 Комфортное издание',
                text: "135 800"
            },
            {
                title:'210 Смарт издание',
                text: "145 800"
            },
            {
                title: '210 издание для умного вождения',
                text: "165 800"
            },
        ],
        bottomCharacter:{
            title:"Права на листинг C10, наслаждайтесь привилегиями листинга до 20 000 юаней.",
            subTitle:"Описание прав и интересов: 1. Все права и интересы должны быть определены до 24:00 30 апреля 2024 года. 2. Модель 410 Comfort Edition не имеет пакетов полной комплектации и купонов на скидку; Для получения более подробной информации обратитесь к местному дилеру Zero Running.",
            cards:[
                {
                    title:"Подарок в виде обратной связи",
                    lists:[
                        {
                            text:"Пользователи этого продукта могут получить денежную субсидию в размере 3000 юаней при покупке дополнительных C10."
                        },
                        {
                            text:"Пригласите родственников и друзей купить C10 и получить 5000 энергии (2000 энергии для новых пользователей, 3000 энергии для старых пользователей)"
                        }
                    ]
                },
                {
                    title:"Дополнительный подарок",
                    lists:[
                        {
                            text:"Купон на скидку 5000 юаней для полностью оборудованных пакетов."
                        },
                        {
                            text:"Купон на скидку 1000 юаней на выбор цвета автомобиля с зеленым остеклением"
                        }
                    ]
                },
                {
                    title:"Финансовый подарок",
                    lists:[
                        {
                            text:"Получите финансовые субсидии в размере до 6000 юаней."
                        }
                    ]
                },
                {
                    title:"Доставка подарка",
                    lists:[
                        {
                            text:"Получите подарочный пакет на сумму 1000 новых тайваньских долларов."
                        },
                        {
                            text:"(Выполните блокировку заказа до 30 апреля и загоните машину до 30 июня)"
                        }
                    ]
                },
                {
                    title:"Подарок пополнения",
                    lists:[
                        {
                            text:"Воспользуйтесь бесплатным пакетом услуг по зарядке дома на сумму 3680 тайваньских долларов."
                        },
                        {
                            text:"(Включая зарядную установку мощностью 7 кВт и базовую установку в пределах 30 метров)"
                        }
                    ]
                },
                {
                    title:"Гарантийный подарок",
                    lists:[
                        {
                            text:"Первый владелец автомобиля (не оператор) получает пожизненную гарантию Sanden."
                        }
                    ]
                },
                {
                    title:"Дорожный подарок",
                    lists:[
                        {
                            text:"Наслаждайтесь 2 годами бесплатного развлекательного трафика (4G/месяц)"
                        },
                        {
                            text:"Базовый трафик машин и машин бесплатен на всю жизнь"
                        }
                    ]
                }
            ]
        }
    }

    const carSwipper1 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/4-section-1.jpg`,
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/4-section-2.jpg`,
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/4-section-3.jpg`,
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/4-section-4.jpg`,
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/4-section-5.jpg`,
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/4-section-6.jpg`,
        },
    ];
    const carSwipper2 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-4-1.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-4-1-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-4-2.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-4-2-res.jpg`
        },
    ];
    const carSwipper3 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-7.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-7-1-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-7-2.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-7-2-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-7-3.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-7-3-res.jpg`
        },
    ];
    const carSwipper4 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-8-1.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-8-1-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-8-2.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-8-2-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-8-3.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-8-3-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-8-4.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-8-4-res.jpg`
        },
    ];
    const carSwipper5 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-9-1.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-9-1-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-9-2.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-9-2-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-9-3.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-9-3-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-9-4.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-9-4-res.jpg`
        },
    ];
    const carSwipper6 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-10-1.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-10-1-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-10-2.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-10-2-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-10-3.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-10-3-res.jpg`
        },
    ];
    const carSwipper7 = [
        {
            video: `https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C10Presale-01/PC/screen11-2.mp4`,
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-11-1.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-11-1-res.jpg`
        },
    ];
    const carSwipper8 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-12-1.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-12-1-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-12-2.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-12-2-res.jpg`
        },
    ];
    const carSwipper9 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-13-1.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-13-1-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-13-2.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-13-2-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-12-3.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-13-3-res.jpg`
        },
    ];
    const carSwipper10 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-14-1.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-14-1-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-14-2.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-14-2-res.jpg`
        },
    ];
    const carSwipper11 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-21-1.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-21-1-res.jpg`
        },
        {
            video:'https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C10Presale-01/PC/screen21-2.mp4'
        },
    ];
    const carSwipper12 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-22-1.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-22-1-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-22-2.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-22-2-res.jpg`
        },
    ];
    const carSwipper13 = [
        {
            title:"Может реализовать 25 интеллектуальных функций помощи при вождении*",
            subTitle:"NAP высокоскоростная интеллектуальная навигация",
            video: `https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C10Presale-01/PC/screen25-1.mp4`,
        },
        {
            title:"Может реализовать 25 интеллектуальных функций помощи при вождении*",
            subTitle:"NAP высокоскоростная интеллектуальная навигация",
            video: `https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C10Presale-01/PC/screen25-2.mp4`,
        },

    ];
    const carSwipper14 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-27-1.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-27-1-res.jpg`
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-27-2.jpg`,
            bgRes:`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-27-2-res.jpg`
        },
    ];
    const carSwipper15 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-31-1.jpg`,
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-31-2.jpg`,
        },
    ];
    const carSwipper16 = [
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-32-gallery-1.jpg`,
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-32-gallery-2.jpg`,
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-32-gallery-3.jpg`,
        },
        {
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-32-gallery-4.jpg`,
        },{
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-32-gallery-5.jpg`,
        },
    ];
    const section19={
        title:"Захватывающий визуальный опыт",
        gifs:[
            {
                gif:'https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C10Presale-01/PC/screen19-1.gif',
                text:'3D управление автомобилем, один выстрел до конца'
            },
            {
                gif:'https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C10Presale-01/PC/screen19-2.gif',
                text:'Размытие по Гауссу в реальном времени'
            },
            {
                gif:'https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C10Presale-01/PC/screen19-3.gif',
                text:'HD Живые Обои'
            },
            {
                gif:'https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C10Presale-01/PC/screen19-4.gif',
                text:'Голосовое изображение «Свет технологий»'
            },
            {
                gif:'https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C10Presale-01/PC/screen19-5.gif',
                text:'Эффект микродвижения значка управления автомобилем'
            },
            {
                gif:'https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C10Presale-01/PC/screen19-6.gif',
                text:'Захватывающее аудиовизуальное наслаждение'
            }
        ]
    }

    const disclaimers = [
        '* Изображения продуктов, видео и содержимое экрана, отображаемые в рекламных объявлениях, предназначены только для иллюстрации. Фактические эффекты продукта (включая, помимо прочего, внешний вид, цвет, размер) и содержимое экрана (включая, помимо прочего, фон, пользовательский интерфейс, иллюстрации, видео). может отличаться от конечного количества. Имеются различия в серийных моделях, и они не являются стандартными для всех серий. Пожалуйста, ознакомьтесь с фактическими продажами и доставкой автомобилей в оффлайн-магазины Leapmotor. Конфигурации параметров продаваемых моделей см. таблица конфигурации, официально выпущенная Leapmotor.',

        '* Передние и задние прожекторы на уровне моря, трезубцы, зеленый глазурованный цвет кузова, вентиляция и обогрев передних сидений, 256-цветное окружающее освещение с музыкальным ритмом водопада, безопасный для детской кожи силиконовый материал сиденья, система управления качеством воздуха AQS и другие функции Позиции являются дополнительными конфигурациями. Если требуется дополнительная установка, можно приобрести соответствующие дополнительные пакеты.',

        '* Заполняемость в 66,8% рассчитана от педали переднего ряда до сиденья второго ряда/колесная база x 100%, только для справки.*Все данные о размерах, представленные на странице выше, измерены вручную, имеют ошибки и предназначены только для справки. *Более 100 специальных статистических данных по бесшумности получены из лаборатории Leopao. Leopao оптимизирует шумоизоляцию автомобиля C10 в различных условиях эксплуатации за счет снижения сопротивления ветра, улучшения воздухонепроницаемости и использования сверхтихих встроенных двигателей, а также обладает отличными звукоизоляционными эффектами. .',

        '* Панорамный навес с электрическими солнцезащитными козырьками, флагманский чип умной кабины Qualcomm SA8295P, распознавание лиц Face ID, пространство с нулевым движением, режим отдыха и режим охраны, воздушные завесы по бокам кузова, двойные ремни безопасности с предварительным натяжением и другие функциональные конфигурации не входят в стандартную комплектацию всех серий. .',

        '* Высококлассная интеллектуальная система помощи при вождении Leapmotor Pilot (включая интеллектуальный чип вождения NVIDIA Orin-X, 30 аппаратных средств высокоточного восприятия, интегрированных с лидаром, и 25 интеллектуальных функций помощи при вождении) не входит в стандартную комплектацию всех серий, а некоторые функции (например, NAP) и т. д.) требуется. Оно будет получено посредством последующих OTA-обновлений, а время онлайн будет зависеть от реальных условий в соответствии с действующими правовыми нормами и техническим уровнем моей страны, высококлассная интеллектуальная система помощи водителю Leapmotor Pilot не может заменить систему помощи водителю; контроль, и не может полностью реагировать на все возможные ситуации, такие как дорожное движение, погода, дорожные условия и т. д. ситуация. Водитель должен всегда сохранять необходимое внимание и своевременно вмешиваться или брать на себя управление в зависимости от окружающей среды. Водитель по-прежнему является субъектом управления и несет ответственность за все действия во время движения автомобиля.',

        '* Тепловой насос установлен только на электрической модели C10. Увеличение стойкости к низким температурам на 15% рассчитано лабораторией Leapmoon по сравнению с той же моделью без технологии теплового насоса. Изменения в среде обнаружения могут привести к отклонениям в характеристиках. заключение.',

        '* Технология интеграции аккумулятора с шасси CTC2.0 доступна только в электрической модели C10.',

        '* Китайский и европейский двойной пятизвездочный стандарт безопасности, десятка лучших кузовов и двойные сертификаты на лучшую конструкцию предназначены только для модели C10 Pure Electric.',

        '* Жесткость на кручение всего автомобиля составляет 42500 Н·м/°, измеренная в полностью белом состоянии электромобиля C10. Данные получены из Китайского центра автомобильных исследований и разработок.',

        '* Запас хода, указанный в рекламе, был протестирован Китайским автомобильным научно-исследовательским центром автомобильной инспекции (Тяньцзинь) для модели C10 Extended Range Edition 210 Comfort/210 Smart Enjoy/210 Intelligent Driving Model в соответствии с соответствующим тестом CLTC. стандарты.',

        '* Срок службы аккумуляторной батареи автомобиля будет меняться во время фактического движения по дороге, на него влияют объективные факторы, такие как различные температуры окружающей среды, дорожные условия, манера вождения и действия, а также состояние автомобиля.',

        '* Содержимое, отображаемое на вышеуказанной странице, составлено на основе информации о состоянии конфигурации автомобиля на момент написания. По некоторым объективным причинам, таким как изменение законов и правил, личные различия в понимании соответствующей информации, вводная информация может не обновляться. своевременно и т. д., фактический автомобиль может отличаться от. Существуют определенные различия во вводной информации. Пожалуйста, обратитесь к фактическому транспортному средству на момент доставки для окончательной основы.',

        '* Leapao Auto оставляет за собой право интерпретировать и сохранять за собой право изменять технические параметры, конфигурацию и другую информацию о продукте в пределах, разрешенных законом.'
    ];

    return (
        <main className={'bg-black'}>
            {/*section1*/}
            <CarDetailBanner
                img={`${process.env.NEXT_PUBLIC_API_URL}/media/f3dfdd76-270b-4c86-bb6f-b4ac03dc8e23-logo.png`}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-1.jpg`}
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-1-res.jpg`}
                text={'Более идеальный дом для молодых людей'}
                model={'C10'}
            />
            {/*section2*/}
            <CarCharacteristics
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-2.jpg`}
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-2-res.jpg`}
                isDouble={true}
                textColor={'black'}
                characteristics={characteristics}/>
            {/*/!*section3*!/*/}
            <CarBanner
                title={''}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-3.jpg`}
                textColor="black"
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-3-res.jpg`}
            />
            {/*/!*section4*!/*/}
            <CarSwiper content={carSwipper1} isRes={false}/>
            {/*/!*section5*!/*/}
            <CarBanner
                title={''}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-5.jpg`}
                textColor="black"
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-5-res.jpg`}
            />
            {/*/!*section6*!/*/}
            <CarSwiper content={carSwipper2}/>
            {/*/!*section7*!/*/}
            <CarBanner
                title={''}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/7-section.jpg`}
                textColor="black"
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/7-section-res.jpeg`}
            />
            {/*/!*section8*!/*/}
            <CarSwiper content={carSwipper3}/>
            {/*/!*section9*!/*/}
            <CarSwiper content={carSwipper4}/>
            {/*/!*section10*!/*/}
            <CarSwiper content={carSwipper5}/>
            {/*/!*section11*!/*/}
            <CarSwiper content={carSwipper6}/>
            {/*/!*section12*!/*/}
            <CarSwiper content={carSwipper7}/>
            {/*/!*section13*!/*/}
            <CarSwiper content={carSwipper8}/>
            {/*/!*section14*!/*/}
            <CarSwiper content={carSwipper9}/>
            {/*/!*section15*!/*/}
            <CarSwiper content={carSwipper10}/>
            {/*/!*section16*!/*/}
            <CarBanner
                title={''}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-15.jpg`}
                textColor="black"
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-15-res.jpg`}
            />
            {/*/!*section17*!/*/}
            <CarBanner
                title={''}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-16.jpg`}
                textColor="black"
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-16-res.jpg`}
            />
            {/*/!*section18*!/*/}
            <CarBanner
                title={''}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-17.jpg`}
                textColor="black"
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-17-res.jpg`}
            />
            {/*/!*    section19*!/*/}
            <VideoSection
                video={'https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C10Presale-01/PC/screen18.mp4'}
                title={'Новое поколение системы взаимодействия человека и компьютера Leapmotor OS'}
                subTitle={'стало умнее, проще и приятнее.'}/>
            {/*/!*section20*!/*/}
            <GifSection gifs={section19.gifs} title={section19.title}/>
            {/*/!*section21*!/*/}
            <CarBanner
                title={''}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-20.jpg`}
                textColor="black"
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-20-res.jpg`}
            />
            {/*/!*section22*!/*/}
            <CarSwiper content={carSwipper11}/>
            {/*/!*section23*!/*/}
            <CarSwiper content={carSwipper12}/>
            {/*/!*section24*!/*/}
            <CarBanner
                title={''}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-23.jpg`}
                textColor="black"
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-23-res.jpg`}
            />
            {/*/!*    section25*!/*/}
            <VideoSection
                subTitleBottom={'128-поточный лидар x1 | Ультразвуковой радар x5 | Камера кругового обзора x4, камера для слепых зон x1 | Камера распознавания лиц x1 |'}
                title={'Оснащен 30 высокоточными сенсорными устройствами*, интегрированными с лидаром.\n'}
                video={'https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C10Presale-01/PC/screen24.mp4'}
            />
            {/*/!*section26*!/*/}
            <CarSwiper content={carSwipper13}/>
            {/*/!*section27*!/*/}
            <CarBanner
                title={''}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-26.jpg`}
                textColor="black"
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-26.jpg`}
            />
            {/*/!*section28*!/*/}
            <CarSwiper content={carSwipper14}/>
            {/*/!*section29*!/*/}
            <CarBanner
                title={''}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-28.jpg`}
                textColor="black"
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-28-res.jpg`}
            />
            {/*/!*section30*!/*/}
            <CarBanner
                title={''}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-29.jpg`}
                textColor="black"
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c10/section-29-res.jpg`}
            />
            {/*/!*    section31*!/*/}
            <VideoSection
                video={'https://lp-website-oss-static.leapmotor.com/Leapmotor-Chinese-web/C10Presale-01/PC/screen30.mp4'}
                title={'Здоровая и экологически чистая кабина для беременных и младенцев'}
                subTitle={'В нем используются экологически чистые материалы, такие как «биологическое вспенивание», и экологически чистые процессы, такие как «ультразвуковая сварка», и\n' +
                    'он оснащен системой управления качеством воздуха AQS* и высокоэффективными композитными фильтрующими элементами для комплексной защиты здоровья вашей семьи на борту.'}/>
            {/*/!*section32*!/*/}
            <CarSwiper isRes={false} content={carSwipper15}/>
            {/*/!*section33*!/*/}

            <section className={"min-h-screen pt-16 md:pt-20 swiper-scroll px-66 hidden md:block"}>
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
                    {carSwipper16?.map((item, ind) => (
                        <HoverCard image={item.bg} key={ind}/>
                    ))}
                </div>
            </section>
            {/*section34*/}
            <CarText content={disclaimers} />
        </main>
    );
};

export default C10;