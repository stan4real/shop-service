import { twMerge } from "tailwind-merge";
import { SelectedValue } from "./Filter";

type FilterOptionItemProps = {
  text: string;
  data: string[];
  selectedValue: SelectedValue;
  setSelectedValue: React.Dispatch<React.SetStateAction<SelectedValue>>;
};
function FilterOptionItem({
  text,
  data,
  selectedValue,
  setSelectedValue,
}: FilterOptionItemProps) {
  const selectedValueOnChange = (value: string) => {
    if (text === "Размер") {
      setSelectedValue({ ...selectedValue, size: value });
    } else {
      setSelectedValue({ ...selectedValue, color: value });
    }
  };
  return (
    <div className={`flex flex-row flex-wrap pb-5 ${text === "Цвет" ? 'justify-center' : 'justify-between'} gap-1 w-full`}>
      {data.map((item) => (
        <div
        key={item}
        onClick={() => selectedValueOnChange(item)}
        className={twMerge(
          "flex gap-1 bg-black text-white border-[2px] rounded-xl shadow-md py-1 px-3 transition-colors",
          selectedValue.color == item ? "bg-[#white] text-[#1b0b0bde] border-[#1b0b0bde]" : "border-transparent",
          selectedValue.size == item ? "bg-[#white] text-[#1b0b0bde] border-[#1b0b0bde]" : "",
        )}
        >
          {item}
          {text === "Цвет" && 
          <div style={{backgroundColor:`${item}`}} 
          className={twMerge('rounded-full border-[2px] border-slate-50  w-6 h-6',
            selectedValue.color == item ? 'border-[2px] border-black' : '' 
          )} />}
        </div>
      ))}
    </div>
  );
}

export default FilterOptionItem;
