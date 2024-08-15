import React from "react";
import { SelectedValue } from "./Filter";
import { twMerge } from "tailwind-merge";
import { useCartStore } from "../../storeCart";

type QuantityProps = {
  setSelectedValue: React.Dispatch<React.SetStateAction<SelectedValue>>;
  selectedValue: SelectedValue;
  className?: string;
  cartPage?: boolean;
  price?: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  cartItemId?:string;
};
const Quantity = ({
  setSelectedValue,
  className,
  selectedValue,
  cartPage,
  price,
  setTotal,
  cartItemId
}: QuantityProps) => {
  const decrementQuantity = () => {
    setSelectedValue((prev) => {
      const quantity = prev.quantity - 1;
      if (quantity < 0) {
        return prev;
      }
      return {
        ...prev,
        quantity,
      };
    });
    if (price && cartPage) {
      setTotal((prev) => prev - price);
    }
  };
  const incrementQuantity = () => {
    setSelectedValue((prev) => {
      const quantity = prev.quantity + 1;
      return {
        ...prev,
        quantity,
      };
    });
    if (price && cartPage) {
      setTotal((prev) => prev + price);
    }
  };
  const removeFromCartById = useCartStore((state) => state.removeFromCartById)
  return (
    <div
      className={twMerge(
        "flex items-center justify-center gap-2",
        className ? `${className}` : "",
      )}
    >
      {selectedValue.quantity > 1  ? (
        <button
          onClick={decrementQuantity}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
        >
          <i className="fa-solid fa-minus translate-y-[1px] animate-[fadeIn2_0.3s_ease-in-out]"></i>
        </button>
      ) : (
        cartItemId &&
        <button
          onClick={() => removeFromCartById(cartItemId)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
        >
          <i className="fa-solid fa-trash translate-y-[1px] animate-[fadeIn_0.3s_ease-in-out]"></i>
        </button>
      )}
      <p className="w-2">{selectedValue.quantity}</p>
      <button
        onClick={incrementQuantity}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
      >
        <i className="fa-solid fa-plus translate-y-[1px]"></i>
      </button>
    </div>
  );
};

export default Quantity;
