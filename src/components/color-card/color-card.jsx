import Image from 'next/image'
import {useDispatch, useSelector} from "react-redux";
import {setColorInterior ,setColorExterior ,setPriceModel , setHeaderImage} from "@/slice/sale";
import { useEffect } from 'react';

const ColorCard = ({colorImg , colorName ,  catalogType ,firstActive , img , price}) => {
  const dispatch = useDispatch()
 
  const {priceModel} = useSelector(state => state.sale)
  const {colorInterior} = useSelector(state => state.sale)
  const {colorExterior} = useSelector(state => state.sale)


  const  selectColor = () => {
    if(catalogType == 'Экстерьер') {
      const priceExt=priceModel-colorExterior.price
      dispatch(setColorExterior({image:img , colorImg:colorImg ,colorName: colorName , price} ))
      dispatch(setPriceModel(priceExt+price))
      dispatch(setHeaderImage(img))
    }else {
      const priceExt = priceModel-colorInterior.price
      dispatch(setColorInterior({image:img ,colorImg: colorImg ,colorName: colorName , price} ))
      dispatch(setPriceModel(priceExt+price))
      dispatch(setHeaderImage(img))
    }
  }
  useEffect(() => {
      if(catalogType == 'Экстерьер') {
        dispatch(setColorExterior({image:firstActive.image.path , colorImg: firstActive.colorImage.path ,colorName: firstActive.name, price: firstActive.price}))
        dispatch(setPriceModel(priceModel + firstActive.price))
        dispatch(setHeaderImage(firstActive?.image.path))
      }else {
        dispatch(setColorInterior({image:firstActive.image.path , colorImg: firstActive.colorImage.path ,colorName: firstActive.name, price: firstActive.price}))
        dispatch(setPriceModel(priceModel + firstActive.price))
        dispatch(setHeaderImage(firstActive?.image.path))
      }
  } , [firstActive])

  return (
    <>
      <div onClick={selectColor}   className={`relative cursor-pointer  h-full  flex  font-medium flex-col  items-center gap-y-2 text-xs hover:text-[#333] group `} >
        <div className={`w-[50px] relative h-[50px] rounded-full ${colorName === colorExterior.colorName  ? 'ring-4 ring-slate-300' : " " } ${colorName === colorInterior.colorName  ? 'ring-4' : " " } aspect-square`}>
          <Image fill  src={`${process.env.NEXT_PUBLIC_API_URL}/${colorImg}`}  />
        
        </div>
        <p className='font-bold text-center'>{colorName}</p>
        {
          price == 0 ? 
          "" :
          <p className='text-xs' >{price} <span className='text-[9px]'> UZS</span> </p>
        }
      </div>
    </>
  );
};

export default ColorCard;
