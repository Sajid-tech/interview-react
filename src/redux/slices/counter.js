import {createSlice} from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    initialState:0,
    name:"counter",
    reducers:{  // reduce is a function at the end
        increment :(state)=> state +1,
        decrement :(state) => state -1
    }
})


export const {increment,decrement}  = counterSlice.actions       //dispatch action and redux make it automatically event so we have event incremnet and decrement event  

export default counterSlice.reducer