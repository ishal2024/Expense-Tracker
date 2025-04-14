import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './Store/Store.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import ExpenseList from './Components/ExpenseList.jsx'
import SearchList from './Components/SearchList.jsx'

const router = createBrowserRouter([{
  path:'/',
  element: <App/>,
  children:[
    {path:"",element:<ExpenseList/>},
    {path:"search" ,element:<SearchList />}
  ]
}])

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <RouterProvider router={router} />
 </Provider>
 
)
