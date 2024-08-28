import { Link, NavLink } from "react-router-dom";
import { MENU_ITEMS } from "../utils/static";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import CategoriesFilter from "./CategoriesFilter";
import Searchbar from "./Searchbar";

function Menu() {
  const [showModal, setShowModal] = useState(false)
  const [type,setType] = useState('')
  const handleFilterOpen = (type:string) => {
    setType(type)
    setShowModal(true)
  }
  const handleSearchOpen = (type:string) => {
    setType(type)
    setShowModal(!showModal)
  }
  return (
    <>
    <div className="fixed bottom-2 left-1/2 flex w-[95%] -translate-x-1/2 items-center 
    justify-center rounded-2xl bg-gray-950 px-6 py-2 shadow-md">
      <div className="text-white flex w-1/4 justify-start items-center gap-6">
        <Link to={"/"}>
          <img className="" src="/vite.svg"/>
        </Link>
        <div className="bg-white rounded-full h-[50px] w-[1px]"/>
      </div>
      <div className="flex justify-between w-3/4 pl-1  items-center">
        <div 
        onClick={() => handleFilterOpen('filters')}
        className="w-6 h-[50px] flex justify-center items-center">
          <i className="fa-solid fa-list fa-xl text-white"/>
        </div>
        <div 
        onClick={() => handleSearchOpen('search')}
        className="w-6 h-[50px] flex justify-center items-center">
          <i className="fa-solid fa-magnifying-glass fa-xl text-white"/>
        </div>
        {MENU_ITEMS.map((item) => (
          item.path ?
          <NavLink 
            key={item.name}
            className={({isActive}) => 
            !(isActive) ? 'text-white' : 'text-emerald-400'}
           to={item.path}>
            <i className={item.icon} />
          </NavLink> :
          <i key={item.name} className={item.icon} />
        ))}
      </div>
    </div>
    {showModal && createPortal(
      <Modal 
      setActive={setShowModal} 
      text={type === "filters" ? 'Фильтры' : 'Поиск'} 
      className="justify-start h-auto"
      icon={type === "filters" ? 'fa-solid fa-list fa-xl' : 'fa-solid fa-magnifying-glass fa-xl'}
      >
        <>
          {type === "filters" ? 
          <div className="h-full pb-5 overflow-y-auto">
            <CategoriesFilter/>
          </div> :
          <div className="pb-5">
            <Searchbar/>,
          </div>
          }
        </>
      </Modal>,  
      document.body
    )}
    </>
  );
}

export default Menu;
