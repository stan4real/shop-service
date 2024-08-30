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
    <div className={`flex flex-row flex-wrap justify-start gap-3 w-full`}>
      {data.map((item) => (
        <div
        key={item}
        onClick={() => selectedValueOnChange(item)}
        className={twMerge(
          "flex gap-1 justify-center items-center text-black w-auto min-w-12 h-12 border-[2px] rounded-xl py-1 px-3 transition-colors",
          selectedValue.color == item ? " text-[#1b0b0bde] border-[#1b0b0bde]" : "border-zinc-300",
          selectedValue.size == item ? " text-[#1b0b0bde] border-[#1b0b0bde]" : "",
        )}
        >{text==="Размер" && item}
          {text === "Цвет" && 
          <div style={{backgroundColor:`${item}`}} 
          className="w-6 h-6 rounded-md"
          />}
        </div>
      ))}
    </div>
  );
}

export default FilterOptionItem;
