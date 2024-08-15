import { useLocation } from "react-router-dom";
import Back from "../UI/Back";
import Filter, { SelectedValue } from "../UI/Filter";
import { CardItemType } from "../utils/types";
import Description from "../UI/Description";
import Button from "../UI/Button";
import { useCartStore } from "../../storeCart";
import { useState } from "react";
import { toast } from "react-toastify";

function ProductPage() {
  const location = useLocation();
  const state = location.state as CardItemType;
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedValue, setSelectedValue] = useState<SelectedValue>({
    size: "",
    color: "",
    quantity: 1,
  });
  const handleAddToCart = () => {
    if(!selectedValue.color || !selectedValue.size){
      toast('Choose size and color')
    } else {
      addToCart(state.id, selectedValue)
      toast.success('Successfully added')
    }
  }
  return (
    <div>
      <Back />
      <div className="flex h-[330px] items-center justify-start gap-4 overflow-x-auto py-3">
        <img src={state.img} className="h-full" />

        {state.images &&
          state.images.map((item) => (
            <img src={item} key={item} className="h-full" />
          ))}
      </div>
      <p className="text-2xl">{state.name}</p>
      <p className="text-xl text-slate-700">{state.price}$</p>
      <Description />
      <div className="flex w-full flex-col items-center justify-center gap-2 pt-6">
        <Filter
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          filterName="Size"
        />
        <Filter
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          filterName="Color"
        />
        <Filter
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          filterName="Quantity"
        />
        <Button onClick={handleAddToCart}>
          <p>Add To Cart</p>
        </Button>
      </div>
    </div>
  );
}

export default ProductPage;
