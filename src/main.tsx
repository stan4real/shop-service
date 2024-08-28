import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider
 } from 'react-router-dom'
import ProductPage from './components/PAGES/ProductPage.tsx'
import MainPage from './components/PAGES/MainPage.tsx'
import CartPage from './components/PAGES/CartPage.tsx'
import CheckoutPage from './components/PAGES/CheckoutPage.tsx'
import ProfilePage from './components/PAGES/ProfilePage.tsx'
import ProfileEditPage from './components/PAGES/ProfileEditPage.tsx'
import OrdersHistoryPage from './components/PAGES/OrdersHistoryPage.tsx'
import SupportPage from './components/PAGES/SupportPage.tsx'
import OrderDesc from './components/UI/OrderDesc.tsx'

 const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<MainPage/>
      },
      {
        path:'/:productId',
        element:<ProductPage/>
      },
      {
        path:'/cart',
        element:<CartPage/>
      },
      {
        //Потом нужно будет добавить action и поменять метод сабмит формы на post  
        path:'/checkout',
        element:<CheckoutPage/>,
        loader: async({request}) => {
          let url = new URL(request.url)
          return url
        }
      },
      {
        path:'/profile',
        element:<ProfilePage/>
      },
      {
        path:'/profile_edit',
        element:<ProfileEditPage/>
      },
      {
        path:'/orders_history',
        element:<OrdersHistoryPage/>
      },
      {
        path:'/orders_history/:historyOrderId',
        element:<OrderDesc/>
      },
      {
        path:'/support',
        element:<SupportPage/>
      }
    ]
  },
 ])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
