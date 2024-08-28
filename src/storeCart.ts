import {create} from 'zustand'
import { SelectedValue } from './components/UI/Filter'
import { persist } from "zustand/middleware";

export type CartProps = {
    id:string,
    values:SelectedValue
}
type CartStore = {
    cart:CartProps[],
    addToCart: (id:string, selectedValue:SelectedValue) => void,
    increaseQuantity:(id:string, selectedValue:SelectedValue) => void,
    decreaseQuantity:(id:string, selectedValue:SelectedValue) => void,
    removeFromCartById:(id:string, selectedValue:SelectedValue) => void,
    removeAllFromCart:() => void
}
export const useCartStore = create(
    persist<CartStore>(
        (set, get) => ({
    cart:[],
    addToCart:(id,selectedValue) => {
        const isItem = get().cart.find(el => el.id === id)
        if (isItem)
            {
            let size = isItem.values.size
            let color = isItem.values.color
            if(size===selectedValue.size && color === selectedValue.color){
                isItem.values.quantity=isItem.values.quantity+selectedValue.quantity
                set({cart:[...get().cart]})
            } else {
                set({cart:[...get().cart,{id:id,values:selectedValue}] })
            }
        } else {
            set({cart:[...get().cart,{id:id,values:selectedValue}] })
        }
    },
    increaseQuantity:(id, selectedValue) => {
        const isItem = get().cart.find(el => el.id === id && el.values.size === selectedValue.size && el.values.color === selectedValue.color)
        console.log(isItem)
        if (isItem){
            isItem.values.quantity++
        }
        set({cart:[...get().cart]})
    },
    decreaseQuantity:(id, selectedValue) => {
        const isItem = get().cart.find(el => el.id === id && el.values.size === selectedValue.size && el.values.color === selectedValue.color)
        
        if (isItem){
            isItem.values.quantity--
        }
            set({cart:[...get().cart]})
    },
    removeFromCartById:(id, selectedValue)=> {
        const isItem = get().cart.find(el => el.id === id && el.values.size === selectedValue.size && el.values.color === selectedValue.color)
        console.log(isItem)
        if (isItem){
            const updatedCart = get().cart.filter(el => el !== isItem)
            set({cart:updatedCart})
        }
    },
    removeAllFromCart:() => set(()=>({cart:[]})),
}),
{
    name:'cart-items'
}));