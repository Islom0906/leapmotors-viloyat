import {useTranslation} from "react-i18next";

const CarText = ({content}) => {
    const {t} = useTranslation()

  return (
    <>
         <section className="p-5 bg-black md:bg-white">
      <div className="container py-5 bg-[#ffffffcc] rounded-md md:bg-transparent md:rounded-0">
        <div className="w-fit mx-auto text-left text-[#373737] font-arial-normal">
          <h3 className="text-lg leading-[18px] mb-5">{t('T03.disclaimer')}</h3>
          <div className="text-sm leading-[24px]">
          {
            content?.map((item , ind) => (
              <p key={ind}> {item}</p>
            ))
          }
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default CarText
