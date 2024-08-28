import { Outlet } from "react-router-dom";
import "./App.css";
import Menu from "./components/UI/Menu";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

function App() {
  const tg = window.Telegram.WebApp
  console.log(tg)
  tg.expand()
  useEffect(()=> {
    if(tg.isExpanded){
      tg.ready()
      tg.disableVerticalSwipes()
      tg.enableClosingConfirmation()
    }
  },[])
  return (
    <div className="px-4 pb-20 pt-3">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        limit={1}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
        />
      <Outlet/>
      <Menu/>
    </div>
  );
}

export default App;
