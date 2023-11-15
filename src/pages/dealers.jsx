import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import apiService from "@/service/api";
import { useEffect, useState } from "react";
import { LuLoader2 } from "react-icons/lu";
import ModalSuccess from "@/components/modal-success/modal-success";
import InputMask from "react-input-mask";
import SEO from 'src/layout/seo/seo';
const dealers = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    mutate: userPost,
    data: userPostData,
    isLoading: userPostLoading,
    isSuccess: userPostSuccess,
  } = useMutation(({ url, data }) => apiService.postData(url, data));

  const [isModal, setModal] = useState(false);

  useEffect(() => {
    reset();

    if (userPostSuccess) {
      setModal(true);
      setTimeout(() => {
        setModal(false);
      }, 2000);
    }
  }, [userPostData]);

  const onSubmit = (data) => {
    userPost({ url: "/dealers", data });
  };

  return (
    <>
      <SEO
        title={"Leapmotorca Dealers"}
        og_title={"Leapmotorca , Leapmotorca Dealers, leapmotorca Dealers"}
        keywords={
          "Dealers , cooperation , work together , Dealers uz , Leapmotorca uz, Leapmotors uz, Leapmotorauto uz"
        }
        description={
          "Мы являемся ведущей компанией по производству интеллектуальных электромобилей, которая стремится предоставить всем потребителям наилучшие возможности инновационной мобильности"
        }
      >
        <div className="pt-[80px]">
          <div className="container">
            <div className="text-[#4d5d81]   relative mb-1 pt-4 text-xl font-bold leading-7  font-arial-semibold md:leading-8">
              {t("dealers.title")}
            </div>
            <p className="text-md z-10 md:text-lg text-[#4d5d81]">
              {t("dealers.text")}
            </p>
          </div>
        </div>

        <section className="py-5 md:pb-10 md:pt-10 lg:pb-20">
          <div className="container space-y-3">
            <h5 className="text-base font-bold md:text-xl">Общая информация</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* md:grid-cols-2 */}
              <div className="grid grid-cols-1 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="nameEnterprises"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Название предприятия *
                  </label>
                  <input
                    type="text"
                    {...register("nameEnterprises", { required: true })}
                    id="nameEnterprises"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Название предприятия"
                  />
                  {errors.nameEnterprises && (
                    <span className={"text-red-600 text-xs"}>
                      Требуется название
                    </span>
                  )}
                </div>
              </div>
              {/* md:grid-cols-2 lg:grid-cols-3 */}
              <div className="grid grid-cols-1 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Регион / Область *
                  </label>
                  <select
                    {...register("region", { required: true })}
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option value={""}>Выберите регион</option>
                    <option value="Ташкент">Ташкент</option>
                    <option value="Андижан">Андижан</option>
                    <option value="Бухара">Бухара</option>
                    <option value="Фергана">Фергана</option>
                    <option value="Жиззах">Жиззах</option>
                    <option value="Хоразм">Хоразм</option>
                    <option value="Наманган">Наманган</option>
                    <option value="Навоий">Навоий</option>
                    <option value="Қашқадарё">Қашқадарё</option>
                    <option value="Қорақалпоғистон">Қорақалпоғистон</option>
                    <option value="Самарқанд">Самарқанд</option>
                    <option value="Сирдарё">Сирдарё</option>
                    <option value="Сурхондарё">Сурхондарё</option>
                  </select>
                  {errors.region && (
                    <span className={"text-red-600 text-xs"}>
                      Требуется регион
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Адрес *
                  </label>
                  <input
                    type="text"
                    {...register("address", { required: true })}
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Адрес"
                  />
                  {errors.address && (
                    <span className={"text-red-600 text-xs"}>
                      Требуется адрес
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="countUser"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Численность населения *
                  </label>
                  <input
                    type="number"
                    id="countUser"
                    {...register("countUser", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Численность населения"
                  />
                  {errors.countUser && (
                    <span className={"text-red-600 text-xs"}>
                      Требуется численность населения
                    </span>
                  )}
                </div>
              </div>
              {/* lg:grid-cols-3 */}
              <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2">
                <div>
                  <h5 className="text-base font-bold md:text-xl">
                    Прочая информация
                  </h5>

                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Банковские реквизиты *
                  </label>
                  <textarea
                    {...register("otherInformation", { required: true })}
                    id="message"
                    rows="8"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  ></textarea>
                  {errors.otherInformation && (
                    <span className={"text-red-600 text-xs"}>
                      Требуется банковские реквизиты
                    </span>
                  )}
                </div>
                <div className="space-y-3">
                  <h5 className="text-base font-bold md:text-xl">
                    Наличие шоурума
                  </h5>
                  <div className="flex justify-between space-x-5 ">
                    <div className="w-full">
                      <label
                        htmlFor="showroomTotalAreat"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Общая площадь *
                      </label>
                      <input
                        type="number"
                        {...register("showroomTotalArea", { required: true })}
                        id="showroomTotalAreat"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="кв м"
                      />
                      {errors.showroomTotalArea && (
                        <span className={"text-red-600 text-xs"}>
                          Требуется общая площадь
                        </span>
                      )}
                    </div>
                    <div className={"w-full"}>
                      <label
                        htmlFor="showroomUsableArea"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Полезная площадь *
                      </label>
                      <input
                        type="number"
                        {...register("showroomUsableArea", { required: true })}
                        id="showroomUsableArea"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="кв м"
                      />
                      {errors.showroomUsableArea && (
                        <span className={"text-red-600 text-xs"}>
                          Требуется полезная площадь
                        </span>
                      )}
                    </div>
                  </div>
                  <h5 className="text-base font-bold md:text-xl">
                    Наличие СТО
                  </h5>
                  <div className="flex justify-between space-x-5">
                    <div className="w-full">
                      <label
                        htmlFor="serviceTotalArea"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Общая площадь *
                      </label>
                      <input
                        type="number"
                        {...register("serviceTotalArea", { required: true })}
                        id="serviceTotalArea"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="кв м”"
                      />
                      {errors.serviceTotalArea && (
                        <span className={"text-red-600 text-xs"}>
                          Требуется общая площадь
                        </span>
                      )}
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="serviceUsableArea"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Полезная площадь *
                      </label>
                      <input
                        type="number"
                        {...register("serviceUsableArea", { required: true })}
                        id="serviceUsableArea"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="кв м”"
                      />
                      {errors.serviceUsableArea && (
                        <span className={"text-red-600 text-xs"}>
                          Требуется полезная площадь
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-span-1 space-y-5 md:col-span-2">
                  <h5 className="text-base font-bold md:text-xl">
                    Наличие опыта
                  </h5>
                  <div>
                    <label
                      htmlFor="carExperience"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Наличие опыта в сфере торговли автомобилями *
                    </label>
                    <input
                      type="date"
                      {...register("carExperience", { required: true })}
                      id="carExperience"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Выбрать год"
                    />
                    {errors.carExperience && (
                      <span className={"text-red-600 text-xs"}>
                        Требуется опыт периода
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="infoAboutSoldCard"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Информация о фактически реализованных автомобилях *
                    </label>
                    <input
                      type="text"
                      {...register("infoAboutSoldCard", { required: true })}
                      id="infoAboutSoldCard"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="шт"
                    />
                    {errors.infoAboutSoldCard && (
                      <span className={"text-red-600 text-xs"}>
                        Информация о фактическом количестве проданных
                        автомобилей
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="salesMonth"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Прогноз продаж в месяц *
                    </label>
                    <input
                      type="number"
                      {...register("salesMonth", { required: true })}
                      id="salesMonth"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="шт"
                    />
                    {errors.salesMonth && (
                      <span className={"text-red-600 text-xs"}>
                        Требуется продаж в месяц
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid justify-between grid-cols-1 gap-2 md:grid-cols-5">
                <div className="flex col-span-1 gap-2 md:col-span-3 ">
                  <div>
                    <label
                      htmlFor="contactPerson"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Контактное лицо *
                    </label>
                    <input
                      type="text"
                      {...register("contactPerson", { required: true })}
                      id="contactPerson"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Иван"
                    />
                    {errors.contactPerson && (
                      <span className={"text-red-600 text-xs"}>
                        Требуется контактное лицо
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contactPhone"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Контактный номер
                    </label>
                    <InputMask
                      // mask options
                      mask="+\9\98 (99) 999-99-99"
                      alwaysShowMask={false}
                      // input options
                      id="contactPhone"
                      type={"text"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="+998 99 999 99 99"
                      // react hook form register
                      {...register("contactPhone", { required: true })}
                    />
                    {/*<input*/}
                    {/*  type="number"*/}
                    {/*  {...register('contactPhone',{required:true})}*/}

                    {/*  id="contactPhone"*/}
                    {/*  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "*/}
                    {/*  placeholder="+998 (--) --- -- --"*/}
                    {/*/>*/}
                    {errors.contactPhone && (
                      <span className={"text-red-600 text-xs"}>
                        Требуется контактный номер
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-end justify-end w-full h-full col-span-1 md:col-span-2">
                  <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  ">
                    {userPostLoading ? (
                      <span>
                        <LuLoader2 className={"animate-spin"} />
                      </span>
                    ) : (
                      <span>Отправить запрос</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
            className={`${
              isModal ? "block" : "hidden"
            } fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-[999] min-h-screen backdrop_filter`}
          >
            <ModalSuccess text={"Ваша заявка принята"} />
          </div>
        </section>
      </SEO>
    </>
  );
};

export default dealers;
