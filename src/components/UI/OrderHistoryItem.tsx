import { useState } from "react"
import { Order } from "../utils/types"
import { twMerge } from "tailwind-merge"
import { OrderHistoryItemGoodsNames } from "./OrderHistoryItemGoodsNames"
import { Link } from "react-router-dom"

type OrderHistoryItemProps = {
    item:Order
}
function OrderHistoryItem({item}:OrderHistoryItemProps) {
    const [showOrder, setShowOrder] = useState(false)
  console.log(item)
    return (
    <Link 
      to={`/orders_history/${item.id}`} 
      state={item}
      onClick={()=>setShowOrder(!showOrder)}
      className='flex flex-col bg-white p-2 justify-between w-full h-28 rounded-2xl shadow-md '>
        <div 
          className="flex justify-between">
            <h1 className="">Номер заказа: </h1>
            <p>{item.id}</p>
        </div>
        <div 
          className="flex gap-2 justify-between ">
            <p>Товары:&nbsp;{item.data.length}</p> 
            <div className="line-clamp-1 ">
              {item.data.map(el => 
                <OrderHistoryItemGoodsNames item={el} key={el.id}/>
              )}
            </div>
        </div>
          <div className="flex justify-between">
            <p>Стоимость:</p>
            <p>{item.total} ₽</p>
          </div>
          <p className={twMerge("self-end", 
            `${item.status==='Доставлен' ? 'text-emerald-500': 
                `${item.status==='В сборке' ? 'text-amber-400' : 'text-red-400'}`
            }`)}>
              {item.status}
          </p>
    </Link>
  )
}

export default OrderHistoryItem