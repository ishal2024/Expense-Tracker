import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense, addSearch } from '../Slicer/Slicer'
import {NavLink} from 'react-router-dom'

function ExpenseForm() {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [expense,setExpense] = useState(null)
  const [cateSearch,setCateSearch] = useState('')
  const [dateSearch,setDateSearch] = useState('')
  const data = useSelector((state) => state.expense)
  const dispatch = useDispatch()

  function handleSubmit(e){
    e.preventDefault()
    
    setExpense({id:Date.now() , title : title, amount : Number(amount), category : category , date : date})
     
    setTitle('')
    setAmount('')
    setCategory('')
    setDate('')
  }

  function handleSearch(){
    // const obj = {category : cateSearch , date:dateSearch}
    
    const catefilter = data.filter((item) => item.category.toLowerCase() == cateSearch.toLowerCase())
    console.log(catefilter)
    const datefilter = data.filter((item) => item.date == dateSearch)
    console.log(datefilter)
    dispatch(addSearch([...catefilter,...datefilter]))

  
    
   
    setCateSearch('')
    setDateSearch('')
  }

  useEffect(()=> {
   expense && expense.title != ''  ? dispatch(addExpense(expense)) : console.log('some')
  
  },[expense])

  return (
    <>
       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full h-full flex flex-col justify-center">
      
    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Add Expense</h2>
  {/* 🔹 Title Field */}
  <div className="mb-4">
    <label className="block text-gray-600 mb-1">Title</label>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      placeholder='Enter the title'
    />
  </div>

  {/* 🔹 Amount Field */}
  <div className="mb-4">
    <label className="block text-gray-600 mb-1">Amount</label>
    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      placeholder='Enter the Amount'
    />
  </div>

  {/* 🔹 Category Field */}
  <div className="mb-4">
    <label className="block text-gray-600 mb-1">Category</label>
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      required
      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select Category</option>
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Bills">Bills</option>
      <option value="Shopping">Shopping</option>
      <option value="Other">Other</option>
    </select>
  </div>

  {/* 🔹 Date Field */}
  <div className="mb-4">
    <label className="block text-gray-600 mb-1">Date</label>
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>

  {/* 🔹 Submit Button */}
  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
    Add Expense
  </button>
  <h2 className="text-2xl font-semibold mb-4 mt-6 text-gray-700">Search Expense</h2>
  {/* 🔹 Search Section */}
  <div className="flex flex-wrap flex-col md:flex-row justify-between items-center gap-4 bg-gray-100 p-4 rounded-lg mb-4">
    <div className="flex flex-col">
      <label className="text-gray-600 text-sm mb-1">Search By Category</label>
      <input
        type="search"
        placeholder="Enter category..."
        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-[100%]"
        value={cateSearch}
        onChange={(e) => setCateSearch(e.target.value)}
      />
    </div>
    <div className="flex flex-col">
      <label className="text-gray-600 text-sm mb-1">Search By Date</label>
      <input
        type="date"
        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500  w-[199px]"
        value={dateSearch}
        onChange={(e) => setDateSearch(e.target.value)}
        
      />
    </div>
    <button onClick={handleSearch}  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"><NavLink  to='/search'>Search</NavLink></button>
  </div>

</form>

    </>
  )
}

export default ExpenseForm