import { twMerge } from "tailwind-merge"
import { Order } from "../utils/types"
import Header from "./Header"
import OrderDescItem from "./OrderDescItem"
import { useLocation, useParams } from "react-router-dom"

function OrderDesc() {
    
    // useEffect(()=> {
    //     document.body.style.overflow='hidden';

    //     return () => {
    //         document.body.style.overflow = ''
    //     } 
    // },[])
    const location = useLocation()
    const {historyOrderId} = useParams()
    const item = location.state as Order
    console.log(location)
  return (
    <>
        <Header >
            {`Заказ ${historyOrderId}`}
        </Header>
        <div className="flex flex-col gap-2 pt-2">
            {item.data.map(item => 
                <OrderDescItem key={item.id+item.values.color+item.values.size} item={item}/>
            )}
            <div className="flex justify-between items-center">
                <p>Итого: {item.total} ₽</p>
                <p className={twMerge("", 
                    `${item.status==='Доставлен' ? 'text-emerald-500': 
                        `${item.status==='В сборке' ? 'text-amber-400' : 'text-red-400'}`
                    }`)}>
                    {item.status}
                </p>
            </div>
        </div>
    </>
  )
}

export default OrderDesc