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
      }
    ]
  },
 ])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
