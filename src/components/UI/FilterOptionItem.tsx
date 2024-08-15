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
    if (text === "Size") {
      setSelectedValue({ ...selectedValue, size: value });
    } else {
      setSelectedValue({ ...selectedValue, color: value });
    }
  };
  return (
    <>
      {data.map((item) => (
        <div
          key={item}
          onClick={() => selectedValueOnChange(item)}
          className={twMerge(
            "flex w-full items-center justify-between rounded-full transition-colors bg-zinc-300 px-4 py-4 text-xl shadow-md hover:bg-gray-400",
            selectedValue.size == item ? "bg-black text-white " : "",
            selectedValue.color == item ? "bg-black text-white" : "",
          )}
        >
          {item}
          {text === "Color" && 
          <div style={{backgroundColor:`${item}`}} 
            className={twMerge('rounded-full border-[3px]  w-6 h-6',
                selectedValue.color == item ? 'border-[3px] border-white' : 'border-transparent' 
            )} />}
        </div>
      ))}
    </>
  );
}

export default FilterOptionItem;
