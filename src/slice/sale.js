import {createSlice} from "@reduxjs/toolkit";

const initialState={
  stepCar : 'Версия',
  headerImage : '',
  priceModel:0,
  carModal: '',
  versionModel:{
    title: '',
    price: 0,
    content: []
  },
  colorExterior: {
    image: '',
    colorImg : '',
    colorName : '',
    price: 0
  },
  colorInterior: {
    image: '',
    colorImg : '',
    colorName : '',
    price: 0
  },
  optionCar :[]
  
}

export const CarSale=createSlice({
  name:'sale',
  initialState,
  reducers:{
    setCarModal : (state , {payload}) => {
      console.log(payload);
      state.carModal = payload
    },
    setHeaderImage:(state , {payload}) => {
      state.headerImage = payload
    },
        setVersionModel:(state,{payload})=>{
            state.versionModel.title=payload.title
            state.versionModel.price=payload.price
            state.versionModel.content=payload.content
        },
        setPriceModel: (state , {payload}) => {
            state.priceModel = payload
        },
        setStepCar: (state , {payload}) => {
            state.stepCar = payload
        },
        setColorExterior: (state , {payload}) => {
            state.colorExterior.image = payload.image
            state.colorExterior.colorImg = payload.colorImg
            state.colorExterior.colorName = payload.colorName
            state.colorExterior.price = payload.price
            
            
        },
        setColorInterior: (state , {payload}) => {
            state.colorInterior.image = payload.image
            state.colorInterior.colorImg = payload.colorImg
            state.colorInterior.colorName = payload.colorName
            state.colorInterior.price = payload.price
        },
        setOptionCar : (state , {payload}) =>{
          state.optionCar = payload
        }
    }
})

export const {setVersionModel , setHeaderImage ,setOptionCar , setStepCar,  setPriceModel ,setColorExterior ,setColorInterior,setCarModal}=CarSale.actions
export default CarSale.reducer