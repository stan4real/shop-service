import { twMerge } from "tailwind-merge"
import { useCartStore } from "../../storeCart"
import { SelectedValue } from "./Filter";

type QuantityCartItemProps = {
    className?: string;
    cartItemId:string;
    selectedValue:SelectedValue
  };

function QuantityCartItem({
className,
cartItemId,
selectedValue
}:QuantityCartItemProps) {
    const goods = useCartStore((state) => state.cart)
    const item = goods.find(el => el.id === cartItemId && el.values.size === selectedValue.size && el.values.color === selectedValue.color)
    const increaseQuantity = useCartStore((state) => state.increaseQuantity)
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)
    const removeFromCartById = useCartStore((state) => state.removeFromCartById)
    console.log(selectedValue)
  return (
    <div
      className={twMerge(
        "flex items-center justify-center gap-2",
        className ? `${className}` : "",
      )}
    >
      {item && item.values.quantity > 1  ? (
        <button
          onClick={() => decreaseQuantity(cartItemId, selectedValue)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
        >
          <i className="fa-solid fa-minus translate-y-[1px] animate-[fadeIn2_0.3s_ease-in-out]"></i>
        </button>
      ) : (
        cartItemId &&
        <button
          onClick={() => removeFromCartById(cartItemId, selectedValue)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
        >
          <i className="fa-solid fa-trash translate-y-[1px] animate-[fadeIn_0.3s_ease-in-out]"></i>
        </button>
      )}{
        item &&
        <p className={twMerge("w-2", 
            item.values.quantity > 9 ? '-translate-x-1' : '',
            item.values.quantity > 99 ? ' w-4' : '')}>
                {item.values.quantity}
        </p>
      }
      <button
        onClick={()=> increaseQuantity(cartItemId, selectedValue)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
      >
        <i className="fa-solid fa-plus translate-y-[1px]"></i>
      </button>
    </div>
  )
}

export default QuantityCartItem