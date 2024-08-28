import { useState } from "react"
import { ProfileValuesProps } from "./ProfileFields";

type AddressProps = {
    setProfileValues:React.Dispatch<React.SetStateAction<ProfileValuesProps>>,
    profileValues:ProfileValuesProps
}
function ProfileModalAddress({setProfileValues, profileValues}:AddressProps) {
    const [value, setValue] = useState ('')
    const input = "h-14 w-full gap-3 border-[2px] text-xl border-[#1b0b0bde] flex justify-start items-center py-2 pl-4 pr-14 shadow-lg rounded-xl"
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const addAddress = () => {
        setProfileValues({
            ...profileValues,
            address:[...profileValues.address, value]
        })
        setValue('')
    }
    const handleDeleteAddress = (item:string) => {
        setProfileValues((prev)=>{
            const filteredAddress = prev.address.filter(el => el!==item)
            return {
                ...prev,
                address:filteredAddress
            }
        })
        
    }
  return (
    <>  
    {profileValues.address.map(item => 
        <div 
        key={item}
        className="relative ">
            <input
            className={input}
            defaultValue={item}
            readOnly
            />
            <div 
            onClick={() => handleDeleteAddress(item)}
            className="absolute active:bg-zinc-400 top-1/2 -translate-y-1/2 right-4 border-[2px] border-black w-7 h-7 p-1 rounded-full ">
            <i className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 fa-sm fa-solid fa-x"></i>
            </div>
        </div>
        
    )}
    <div className="relative">           
        <input
        className={input}
        value={value}
        onChange={handleChange}
        placeholder='Добавить адрес'
        />
        <i 
        onClick={addAddress}
        className="absolute active:bg-zinc-400 top-1/2 -translate-y-1/2 right-4 border-[2px] border-black w-7 p-1 rounded-full fa-solid fa-plus"></i>
    </div>
    </>
  )
}

export default ProfileModalAddress