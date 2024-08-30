import { useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { useItemsStore } from "../../storeItems"

function Searchbar() {
  const [,setValue] = useState('')
  const {search, changeSearch} = useItemsStore((state) => state)
  const handleGlobalChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    let lowerCaseValue = e.target.value.toLowerCase()
    setValue(e.target.value)
    changeSearch(lowerCaseValue)
  }
  const ref = useRef<HTMLInputElement>(null)
  useEffect(()=> {
      setTimeout(() => { 
        if(ref.current){
          ref.current.focus()}},
        300)
  }, [])
  return (
    <input
    className={twMerge("p-4 py-2 h-14 rounded-xl text-xl border-[2px] border-[#1b0b0bde] w-full shadow-md",
  )}
    onChange={handleGlobalChange}
    ref={ref}
    type="text"
    defaultValue={search}
    placeholder="Найти ..."
    />
  )
}

export default Searchbar