import { setStepCar } from '@/slice/sale';
import {FiRefreshCw} from 'react-icons/fi'
import { useDispatch} from "react-redux";


const SaleCardTitle = ({ title ,  btnText }) => {

  const dispatch = useDispatch()
  const backVersion = () => {
    dispatch(setStepCar('Версия'))
  }

  return (
    <div className={`flex items-center ${ btnText ? ' justify-between' : 'justify-center px-2'}  `}>
      
                      <h5 className="text-xl font-bold text-center">{title}</h5>
      {
        btnText ? 
        <button 
        onClick={backVersion}
        
        className="text-[#333] text-lg bg-transparent border border-[#333] p-4 flex  justify-center py-2 hover:text-white hover:bg-[#333] rounded-md transition-all ease duration-500">
          <FiRefreshCw />
        </button>
        : 
        ""
      }
      
    </div>
  )
}

export default SaleCardTitle
