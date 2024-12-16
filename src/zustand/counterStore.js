import { create } from "zustand";

export const useCounterStore=create((set)=>({
    //state
    count:0,
    text:"THIS IS COUNTER",
    Grade:"A",
    //function
    increment:()=>set((state)=>({count:state.count+1})),
    decrement:()=>set((state)=>({count:state.count-1})),
    reset:()=>set({count:0})
}))


