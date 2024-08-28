import React from "react";
import { SelectedValue } from "./Filter";
import { twMerge } from "tailwind-merge";

type QuantityProps = {
  setSelectedValue: React.Dispatch<React.SetStateAction<SelectedValue>>;
  selectedValue: SelectedValue;
  className?: string;
};
const Quantity = ({
  setSelectedValue,
  className,
  selectedValue
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
  };
  const incrementQuantity = () => {
    setSelectedValue((prev) => {
      const quantity = prev.quantity + 1;
      return {
        ...prev,
        quantity,
      };
    });
  };
  return (
    <div
      className={twMerge(
        "flex items-center justify-center gap-2",
        className ? `${className}` : "",
      )}
    >
      {selectedValue.quantity > 1  && (
        <button
          onClick={decrementQuantity}
          className="flex h-8 w-8 items-center justify-center animate-[fadeIn2_0.15s_ease-in] rounded-full bg-black text-white"
        >
          <i className="fa-solid fa-minus"></i>
        </button>
      )}
      <p className="w-2">{selectedValue.quantity}</p>
      <button
        onClick={incrementQuantity}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default Quantity;
