import {createSlice} from '@reduxjs/toolkit'
const counterSlice=createSlice({
    name:"counter",
    initialState:100,
    reducers:{
        increase:(state)=>{
            return state=state+1
        }
    }
})
export const {increase}=counterSlice.actions
export default counterSlice.reducer