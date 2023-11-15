import { useEffect, useState } from 'react';
import {MdKeyboardArrowDown , MdKeyboardArrowUp} from 'react-icons/md'
import {setVersionModel , setPriceModel , setHeaderImage } from "@/slice/sale";
import {useDispatch, useSelector} from "react-redux";



const VersionCard = ({title , price , content ,headerImage  , firstActive }) => {
  const dispatch = useDispatch()
const {versionModel } = useSelector(state => state.sale)

  const [openList , setOpenList] = useState(false)
const versionSelect  = () => {
  
  if(price){
    dispatch(setHeaderImage(headerImage))
    dispatch(setPriceModel(price))
    dispatch(setVersionModel({title:title , price:price ,content:content }))
    
  }
}

useEffect(() => {
  if(firstActive) {
    dispatch(setVersionModel({title :firstActive?.name , price :firstActive?.price  , content: firstActive?.includedList}))
    dispatch(setPriceModel(firstActive?.price))
    dispatch(setHeaderImage(firstActive?.image.path))
  }
} , [firstActive])

  return (
    <div>
      <div onClick={versionSelect} className={`${versionModel.title === title ? 'border-[#333]' : 'border-[#ddd] '} px-3 cursor-pointer  py-2 space-y-2 border-[.5px] rounded-lg`} >
        <div className="flex items-center justify-between text-sm font-semibold">
          <h4> {title} </h4>
          <span>{price} </span>
        </div>
        <ul className="space-y-1 text-xs font-thin list-disc list-inside ">
          {
            content?.map((item , ind) => (
              ind < 3 || openList ? 
              <li className='' key={ind}>
                {item}
              </li>
            : <></>
            ))
          }
         
         
          <li className="list-none">
            <button onClick={() => (setOpenList(!openList))} className="flex items-center space-x-2">
              <span>больше конфигурации</span>
              {
                openList ? 
                <MdKeyboardArrowUp className='text-xl' />:
                <MdKeyboardArrowDown className="text-xl" />
              }
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VersionCard;
