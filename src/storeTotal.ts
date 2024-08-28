import {create} from 'zustand'

type TotalProps = {
    subtotal:number,
    setSubtotal: (value:number) => void,
    resetSubtotal:() => void
}
export const useTotalStore = create<TotalProps>((set) => ({
    subtotal:0,
    setSubtotal:(value) => set((state)=>({subtotal:state.subtotal+value})),
    resetSubtotal:()=> set(()=>({subtotal:0})),
}))