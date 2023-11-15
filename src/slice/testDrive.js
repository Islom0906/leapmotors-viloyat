import {createSlice} from "@reduxjs/toolkit";

const initialState={
    model:""
}

export const CarModelSlice=createSlice({
    name:'language',
    initialState,
    reducers:{

        checkCarModel:(state,{payload})=>{
            state.model=payload
        }
    }
})

export const {checkCarModel}=CarModelSlice.actions
export default CarModelSlice.reducer