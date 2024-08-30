import { useState } from "react";
import { CartProps } from "../../storeCart";
import { useItemsStore } from "../../storeItems";
import QuantityCartItem from "./QuantityCartItem";
import { SelectedValue } from "./Filter";

type CartItemProps = {
  data: CartProps
};
function CartItem({ data }: CartItemProps) {
  const goods = useItemsStore((state) => state.items);
  const selectedItem = goods.find((el) => el.id === data.id);
  const [selectedValue, ] = useState<SelectedValue>({
    size: data.values.size,
    color: data.values.color,
    quantity: data.values.quantity,
  });
  return (
    <>
      {selectedItem && (
        <div className="h-24 rounded-xl bg-white shadow-xl">
          <div className="flex h-full p-2">
            <div className="w-auto h-24 pr-2">
              <img src={selectedItem.img} className="w-auto h-20 rounded-xl"></img>
            </div>
            <div className="flex w-1/2 flex-col items-start justify-between">
              <p className="line-clamp-1">{selectedItem.name}</p>
              <div>
                <div className="flex text-sm items-center justify-start gap-1">
                  <p>Размер:</p>
                  <p><b>{selectedValue.size}</b></p>
                </div>
                <div className="flex text-sm items-center justify-start gap-1">
                  <p>Цвет:</p>
                  <p><b>{selectedValue.color}</b></p>
                </div>
              </div>
            </div>
            <div className="flex w-1/4 flex-grow flex-col items-end justify-between">
              <p>{selectedItem.price} ₽</p>
              {selectedItem.id &&
                <QuantityCartItem
                  cartItemId={selectedItem.id}
                  selectedValue={selectedValue}
                />
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartItem;
