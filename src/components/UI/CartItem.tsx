import { useEffect, useState } from "react";
import Quantity from "./Quantity";
import { CartProps } from "../../storeCart";
import { useItemsStore } from "../../storeItems";

type CartItemProps = {
  data: CartProps;
  total:number,
  setTotal:React.Dispatch<React.SetStateAction<number>>
};
function CartItem({ data, setTotal }: CartItemProps) {
  const goods = useItemsStore((state) => state.items);
  const selectedItem = goods.find((el) => el.id === data.id);
  const [selectedValue, setSelectedValue] = useState({
    size: data.values.size,
    color: data.values.color,
    quantity: data.values.quantity,
  });
  
  useEffect(() => {
    console.log('render')
    if (selectedItem) {
      setTotal(
        (prev) =>
          prev + Number(selectedItem.price) * Number(selectedValue.quantity),
      );
    }
    return ()=> {setTotal(0)
        
    console.log('renderCleanUp')
    }
  }, [data]);
  return (
    <>
      {selectedItem && (
        <div className="h-24 rounded-2xl bg-white shadow-xl">
          <div className="flex h-full p-2">
            <div className="w-1/4">
              <img src={selectedItem.img} className="h-full rounded-2xl"></img>
            </div>
            <div className="flex w-1/2 flex-col items-start justify-between">
              <p className="line-clamp-1">{selectedItem.name}</p>
              <div>
                <p className="mt-1 text-sm">Size: {selectedValue.size}</p>
                <p className="text-sm">
                  Color: <b>{selectedValue.color}</b>
                </p>
              </div>
            </div>
            <div className="flex w-1/4 flex-col items-end justify-between">
              <p>{Number(selectedItem.price)}$</p>
              <Quantity
                price={Number(selectedItem.price)}
                setSelectedValue={setSelectedValue}
                selectedValue={selectedValue}
                setTotal={setTotal}
                cartPage={true}
                cartItemId={selectedItem.id}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartItem;
