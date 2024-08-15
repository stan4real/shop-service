import {create} from 'zustand'
import { SelectedValue } from './components/UI/Filter'

export type CartProps = {
    id:string,
    values:SelectedValue
}
type CartStore = {
    cart:CartProps[],
    addToCart: (by:string, selectedValue:SelectedValue) => void,
    removeFromCartById:(id:string)=>void,
    removeAllFromCart:() => void
}
export const useCartStore = create<CartStore>((set) => ({
    cart:[],
    addToCart:(by, selectedValue) => set((state)=> ({cart:[...state.cart,{id:by, values:selectedValue}]})),
    removeFromCartById:(id)=> set((state)=>({cart:state.cart.filter(el => el.id !==id)})),
    removeAllFromCart:() => set(()=>({cart:[]}))
}))