import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeExpense } from '../Slicer/Slicer'
import { NavLink } from 'react-router-dom'

function SearchList() {
   const [total,setTotal] = useState(0)
   
    
    const searchData = useSelector((state) => state.search)

      useEffect(() => {
        
    
          const sum = searchData.reduce((acc,curr) =>  Number(acc) + Number(curr.amount),0)
          console.log(sum)
          setTotal(sum)
        
      
      },[searchData])

    console.log(searchData)

   
  return (
    <>
<div className="flex flex-col h-full overflow-y-auto bg-white p-6 rounded-lg shadow-lg">
        <div className='text-2xl text-center text-indigo-700'>Search List</div>
        <hr />
        <br />
        
    {searchData.length != 0 ?  searchData.map((item) => {
        return (
            <div key={item.id} className='flex-wrap flex flex-row justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-md mx-auto'>
            <div className="">
            <div className="text-lg font-semibold text-gray-700">Title: {item.title}</div>
            <div className="text-gray-600">Amount: <span className="font-medium text-green-600">₹{item.amount.toLocaleString("en-IN")}</span></div>
            <div className="text-gray-600">Category: <span className="font-medium text-blue-500">{item.category}</span></div>
            <div className="text-gray-600">Date: <span className="font-medium text-purple-500">{new Date(item.date).toLocaleDateString("en-GB",{day:'numeric' , month: "long", year: "numeric" })}</span></div>
          </div>
         
          
         
         
          </div>
        )
    }) : <p>Not Found</p>}
    
    <NavLink className='border-2 border-white self-center bg-red-600 p-2 w-[35%] h-[50%] items-center hover:bg-red-400 text-white mt-8 text-center' to='/'>Go Back</NavLink>
    <div className='text-2xl mt-5 text-center'>Total Expense : ₹ {total.toLocaleString("en-IN")}</div>
   </div>
    </>
  )
}

export default SearchList