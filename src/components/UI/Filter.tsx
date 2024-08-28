import { useState } from "react"
import Modal from "./Modal"
import { createPortal } from 'react-dom';
import FilterOptionItem from "./FilterOptionItem";
import { ALL_COLORS, ALL_SIZES } from "../utils/static";
import { twMerge } from "tailwind-merge";
import Quantity from "./Quantity";
import arrow from '/arrowProfileFIelds.svg'

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
    <div onClick={()=>setShowModal(true)} 
    className={twMerge("text-lg shadow-md  bg-white w-full px-4 py-4 rounded-xl flex justify-between items-center" ,
      (filterName !== "Количество") ? "active:bg-zinc-300": ""
    )}>
        <p>{filterName}</p>
        <div className="flex justify-start items-center gap-5">
            
                { filterName == "Размер" ?<p className="-translate-x-1"> {selectedValue.size}</p> :
                  filterName == "Цвет" &&
                <div style={{backgroundColor:`${selectedValue.color}`}} 
                className='rounded-full border-[3px]  w-6 h-6'>
                </div>}
            
            { !(filterName === "Количество") ? <img src={arrow} className="rotate-90 mr-3"/> :
              <Quantity 
                setSelectedValue={setSelectedValue} 
                selectedValue={selectedValue}
                className="gap-5"/>
            }
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