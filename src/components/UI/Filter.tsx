import { useState } from "react"
import Modal from "./Modal"
import { createPortal } from 'react-dom';
import FilterOptionItem from "./FilterOptionItem";
import { ALL_COLORS, ALL_SIZES } from "../utils/static";
import { twMerge } from "tailwind-merge";
import Quantity from "./Quantity";

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
  const [,setTotal]= useState(0)
  
    return (<>
    <div onClick={()=>setShowModal(true)} 
    className={twMerge("text-lg shadow-md  bg-white w-full px-4 py-4 rounded-full flex justify-between items-center" ,
      (filterName !== "Quantity") ? "active:bg-zinc-300": ""
    )}>
        <p>{filterName}</p>
        <div className="flex justify-start items-center gap-4">
            
                { filterName == "Size" ?<p className="-translate-x-1"> {selectedValue.size}</p> :
                  filterName == "Color" &&
                <div style={{backgroundColor:`${selectedValue.color}`}} 
                className='rounded-full border-[3px]  w-6 h-6'>
                </div>}
            
            { !(filterName === "Quantity") ? <i className="fa-solid fa-arrow-up-short-wide rotate-180"></i> :
              <Quantity 
                setTotal={setTotal}
                setSelectedValue={setSelectedValue} 
                selectedValue={selectedValue}
                className="gap-5"/>
            }
        </div>
    </div>
        {showModal &&
        !(filterName==="Quantity") && createPortal(
          <Modal setActive={setShowModal} text={filterName}>
            <FilterOptionItem
              text={filterName}
              data={filterName==="Size" ? ALL_SIZES : ALL_COLORS} 
              selectedValue={selectedValue} 
              setSelectedValue={setSelectedValue}/>
          </Modal>,
          document.body
        )}
        </>
  )
}

export default Filter