import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import CategoriesFilter from "./CategoriesFilter";
import Searchbar from "./Searchbar";
import WebApp from "@twa-dev/sdk";
import { useCartStore } from "../../storeCart";

function Menu() {
  const [showModal, setShowModal] = useState(false)
  const [type,setType] = useState('')
  const cart = useCartStore((state)=> state.cart)
  const handleFilterOpen = (type:string) => {
    setType(type)
    setShowModal(true)
  }
  const handleSearchOpen = (type:string) => {
    setType(type)
    setShowModal(!showModal)
  }
  const platform = WebApp.platform
  console.log('platform = ',platform)
  const cartLength = cart.length
  return (
    <>
    <div className="fixed bottom-2 left-1/2 flex w-auto -translate-x-1/2 items-center 
    justify-center rounded-2xl bg-gray-950 px-4 py-2 shadow-md">
      <div className="text-white flex w-[70px] justify-center items-center gap-4">
        <Link to={"/"}>
          <img className="w-full h-auto" src="/vite.svg"/>
        </Link>
        <div className="bg-white rounded-full h-[50px] w-[1px]"/>
      </div>
      <div className="flex justify-between w-full pl-4 gap-5  items-center">
        <div 
        onClick={() => handleFilterOpen('filters')}
        className="w-6 h-[50px] flex justify-center items-center cursor-pointer">
          <i className="fa-solid fa-list fa-xl text-white"/>
        </div>
        <div 
        onClick={() => handleSearchOpen('search')}
        className="w-6 h-[50px] flex justify-center items-center cursor-pointer">
          <i className="fa-solid fa-magnifying-glass fa-xl text-white"/>
        </div>
        <div className="w-6">
          <NavLink 
            to={'/cart'}
            className={({isActive}) => 
              !(isActive) ? 'text-white' : 'text-emerald-400'}
            >
            <div className="relative">
              <i className='fa-solid fa-cart-shopping fa-xl' />
              {cartLength > 0 &&
                <div className={`absolute -top-2 -right-2 w-auto min-w-5 h-5 flex justify-center items-center text-white bg-red-400 rounded-full`}>
                  {cartLength}
                </div>
              }
            </div>
          </NavLink>
        </div>
          <div className="w-6 ">
          <NavLink 
            to={'/profile'}
            className={({isActive}) => 
              !(isActive) ? 'text-white' : 'text-emerald-400'}
            >
            <i className='fa-solid fa-user fa-xl pr-3' />
          </NavLink>
          </div>
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
          <div className="h-full pb-8 overflow-y-auto">
            <CategoriesFilter/>
          </div> :
          <div className={`${platform === "ios" ? 'pb-[420px]' : 'pb-8'}`}>
            <Searchbar/>
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
