import { CartProps } from "../../storeCart"
import { useItemsStore } from "../../storeItems"

type OrderHistoryItemGoodsNamesProps = {
    item:CartProps
}
export const OrderHistoryItemGoodsNames = ({item}:OrderHistoryItemGoodsNamesProps) => {
  
    const goods = useItemsStore((state) => state.items);
    const selectedItem = goods.find((el) => el.id === item.id);
    console.log('rendered',item, selectedItem)
    return (
    <>
    {selectedItem &&
        <p >
            {selectedItem.name}
        </p>
    }
    </>
  )
}
