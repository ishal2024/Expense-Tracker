import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseList from './Components/ExpenseList'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {


  return (
    <>
    <Header />
      <div className="flex flex-col lg:flex-row justify-center  gap-6 p-4">
      <div className="w-full max-w-md lg:w-1/2 flex items-center">
        <ExpenseForm />
      </div>
      <div className="w-full max-w-md lg:w-1/2 max-h-[780px]  overflow-y-auto">
        <Outlet />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default App
