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
      toast('Выберите размер и цвет')
    } else {
      addToCart(state.id, selectedValue)
      toast.success('Товар добавлен в корзниу')
    }
  }
  return (
    <div>
      <Back />
      <div className="flex snap-x snap-mandatory h-[330px] items-center justify-start gap-4 overflow-x-auto py-3">
        <img src={state.img} className="h-full snap-center" />
        {state.images &&
          state.images.map((item) => (
            <img src={item} key={item} className="h-full snap-center" />
          ))}
      </div>
      <p className="text-xl">{state.name}</p>
      <Description />
      <div className="flex w-full flex-col items-start justify-start gap-4 pt-6">
        <Filter
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          filterName="Размер"
        />
        <Filter
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          filterName="Цвет"
        />
        <Button onClick={handleAddToCart} className="border-[#1b0b0bde] border-[2px] ">
          <div className="flex justify-between items-center gap-5">
            <p className="">Добавить в корзину</p>
            <p className="text-xl ">{state.price}&nbsp;₽</p>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default ProductPage;
