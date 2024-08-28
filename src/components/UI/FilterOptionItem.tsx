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
    <div className="flex flex-row flex-wrap pb-5 justify-center gap-5">
      {data.map((item) => (
        <div
        key={item}
        onClick={() => selectedValueOnChange(item)}
        className={twMerge(
          "flex w-20 flex-wrap items-center justify-center rounded-xl transition-colors bg-zinc-300 px-4 py-4 text-xl shadow-md",
          selectedValue.size == item ? "bg-[#1b0b0bde] text-white " : "",
          selectedValue.color == item ? "bg-[#1b0b0bde] text-white" : "",
        )}
        >
          {item}
          {text === "Цвет" && 
          <div style={{backgroundColor:`${item}`}} 
          className={twMerge('rounded-full border-[3px]  w-6 h-6',
            selectedValue.color == item ? 'border-[3px] border-white' : 'border-transparent' 
          )} />}
        </div>
      ))}
    </div>
  );
}

export default FilterOptionItem;
