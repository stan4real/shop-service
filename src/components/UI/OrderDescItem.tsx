import { CartProps } from "../../storeCart"
import { useItemsStore } from "../../storeItems";

type OrderDescItemProps = {
    item: CartProps
}
function OrderDescItem({item}:OrderDescItemProps) {
    const goods = useItemsStore((state) => state.items);
    const selectedItem = goods.find((el) => el.id === item.id);
    return (
        <>
        {selectedItem && 
        <div className="h-24 rounded-xl bg-white shadow-xl">
            <div className="flex h-full p-2">
                <div className="w-1/4">
                    <img src={selectedItem.img} className="h-full rounded-xl"></img>
                </div>
                <div className="flex w-3/4 flex-col  items-start justify-between">
                    <p className="line-clamp-1 text-lg">{selectedItem.name}</p>
                    <div className="flex w-full justify-between items-center">
                        <div className="flex flex-col justify-start">
                            <p className="">
                                Размер: {item.values.size}
                            </p>
                            <p className="">
                                Цвет: <b>{item.values.color}</b>
                            </p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <p >
                                Цена: <b>{Number(selectedItem.price)} ₽</b>
                            </p>
                            <p className="">
                                Кол-во: <b>{item.values.quantity}</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
    </>
        )
    }
    
export default OrderDescItem