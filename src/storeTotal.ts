import {create} from 'zustand'

type TotalProps = {
    subtotal:number,
    setSubtotal: (value:number) => void
}
export const useTotalStore = create<TotalProps>((set) => ({
    subtotal:0,
    setSubtotal:(value) => set(()=>({subtotal:value}))
}))