import { SaleList , VersionCard  } from "@/components"
import Image from 'next/image'
import {PiCheckBold} from 'react-icons/pi'
import {BsPlusLg} from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import {setHeaderImage, setOptionCar ,setPriceModel } from "@/slice/sale";
import { useState } from "react";
const ComplectCar = ( {headerImage ,  title , price ,includes , bannerImage  } ) => {
  const [activeOpen , setActiveOpen] = useState(false)
  const {priceModel} = useSelector(state => state.sale)
  const {optionCar}=useSelector(state=>state.sale)
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();


  const selectCard = () => {
    
    const data={headerImage:headerImage , bannerImage,  optName: title , optPrice: price}
    setActiveOpen(!activeOpen)
    let addPrice = ''
    if(!activeOpen) {
      dispatch(setHeaderImage(bannerImage))
      dispatch(setOptionCar([...optionCar ,data  ]))
      addPrice = priceModel + price

    }else {
      const deleteOption=optionCar.filter((option)=>option.optName!==data.optName)
      dispatch(setOptionCar(deleteOption))
      addPrice = priceModel - price
    }
    dispatch(setPriceModel(addPrice))
  }


  return (
    <>
      <div className="col-span-4 ">
        <div className="relative bg-black aspect-video">
        {
                loading ? 
                <div className="absolute top-[40%] left-[40%]" >
                    <img 
                    src={'/loading.gif'}
                    alt={"car"}
                    className={`w-5 h-5 md:w-[60px] md:h-[60px]`}
                  />
                </div>
               :
               ''
              }
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/${headerImage}`}
            fill
            className="w-full h-full"
            alt={title}
            priority={true}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="flex items-center justify-between px-4 py-3 border-b border-b-[#ddd]">
          <div>
            <h5 className="text-sm font-semibold">{title}</h5>
            <p className="text-xs">{price}</p>
          </div>
          <button onClick={selectCard} className={` ${activeOpen ? ' text-white bg-[#333]' : 'text-[#333] bg-transparent  '} text-sm flex  justify-center py-2 px-3 rounded-md transition-all ease duration-200`}>
            {
              activeOpen ?
              <PiCheckBold />:
              <BsPlusLg />
            }
            
          </button>
        </div>
        <div className="px-2 py-5 space-y-4">
          {
            activeOpen?
            includes?.map((card , ind) => {
             
              if(card?.image?.name !== 'null'  ) {
                return (<SaleList key={ind}
                  src={card?.image?.path}
                  title={card.title}
                  subtitle={card.comment}
                /> ) 
              } else if(card?.image?.name === 'null') {
                return (<VersionCard  content={card.tags} />)        
              }
             }):
             ""
            
            }
       
        </div>
      </div>
    </>
  );
};

export default ComplectCar;
