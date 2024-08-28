import { twMerge } from "tailwind-merge"
import { useTotalStore } from "../../storeTotal"
import { useCartStore } from "../../storeCart"
import { useEffect } from "react"
import { useItemsStore } from "../../storeItems"

type TotalProps = {
  className?:string
}
const Total = ({className}:TotalProps) => {
  const {subtotal, setSubtotal, resetSubtotal} = useTotalStore((state)=> state)
  const cart = useCartStore((state) => state.cart)
  const goods = useItemsStore((state) => state.items);
  
  useEffect(()=> {
    const countTotal = () => {
      resetSubtotal()
      cart.map(item => {
        let SelectItem = goods.find(el => el.id === item.id)
        if(SelectItem){
          setSubtotal(Number(SelectItem.price)*item.values.quantity)
        }
      }
    )
    }
    countTotal()
  },[cart,goods])
  console.log(cart)
  return (
    <div className={twMerge("w-full pt-2 flex flex-col items-start",
      className ? `${className}`: '')
    }>
        <div className="w-full flex justify-between items-center">
            <p className="text-gray-400">Корзина:</p>
            <p>{subtotal.toFixed(0)} ₽</p>
        </div>
        <div className="w-full flex justify-between items-center">
            <p className="text-gray-400">Доставка:</p>
            <p>{400} ₽</p>
        </div>
        <div className="w-full flex justify-between items-center">
            <p className="text-gray-400">Итого:</p>
            <p>{(400+subtotal).toFixed(0)} ₽</p>
        </div>
    </div>
  )
}

export default Total