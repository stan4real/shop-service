import { useState } from "react"
import Modal from "./Modal"
import { createPortal } from 'react-dom';
import FilterOptionItem from "./FilterOptionItem";
import { ALL_COLORS, ALL_SIZES } from "../utils/static";
import { twMerge } from "tailwind-merge";
// import Quantity from "./Quantity";
// import arrow from '/arrowProfileFIelds.svg'

export type SelectedValue = {
  size:string,
  color:string,
  quantity:number
}
type FilterProps = {
  filterName:string,
  selectedValue:SelectedValue,
  setSelectedValue:React.Dispatch<React.SetStateAction<SelectedValue>>
}
function Filter({
  filterName,
  selectedValue,
  setSelectedValue
}:FilterProps) {
  const [showModal, setShowModal] = useState(false)
  
    return (<>
    <div 
    className={twMerge("text-lg  flex flex-col gap-2 justify-start items-center")}>
        <p className="self-start text-lg">{filterName}</p>
        <div className="flex justify-start items-center gap-5">
                { filterName !== "Количество" &&
                  <FilterOptionItem
                  text={filterName}
                  data={filterName==="Размер" ? ALL_SIZES : ALL_COLORS} 
                  selectedValue={selectedValue} 
                  setSelectedValue={setSelectedValue}/>
                }
            
            {/* { (filterName === "Количество") && 
              <Quantity 
                setSelectedValue={setSelectedValue} 
                selectedValue={selectedValue}
                className="gap-5"/>
            } */}
        </div>
    </div>
        {showModal &&
        !(filterName==="Количество") && createPortal(
          <Modal setActive={setShowModal} text={filterName} className="justify-start h-auto">
            <FilterOptionItem
              text={filterName}
              data={filterName==="Размер" ? ALL_SIZES : ALL_COLORS} 
              selectedValue={selectedValue} 
              setSelectedValue={setSelectedValue}/>
          </Modal>,
          document.body
        )}
        </>
  )
}

export default Filter