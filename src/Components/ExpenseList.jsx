import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeExpense } from '../Slicer/Slicer'


function ExpenseList() {
    const data = useSelector((state) => state.expense)
    const [total,setTotal] = useState(0)
     
     const dispatch = useDispatch()
        
        function handleDelete(id){
         dispatch(removeExpense(id))
        }
    
  useEffect(() => {
    

      const sum = data.reduce((acc,curr) =>  Number(acc) + Number(curr.amount),0)
      console.log(sum)
      setTotal(sum)
    
  
  },[data])

    

   
  return (
    <>
    <div className="flex flex-col h-full overflow-y-auto bg-white p-6 rounded-lg shadow-lg">
        <div className='text-2xl text-center text-indigo-700'>Expense List</div>
        <hr />
        <br />
        {data.length == 0 ?<h2 className='text-center text-3xl'>Add a Expense</h2> : console.log('some')}
    {data.map((item) => {
        return (
            <div key={item.id} className='flex-wrap flex flex-row justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-md mx-auto'>
            <div className="">
            <div className="text-lg font-semibold text-gray-700">Title: {item.title}</div>
            <div className="text-gray-600">Amount: <span className="font-medium text-green-600">₹{item.amount.toLocaleString("en-IN")}</span></div>
            <div className="text-gray-600">Category: <span className="font-medium text-blue-500">{item.category}</span></div>
            <div className="text-gray-600">Date: <span className="font-medium text-purple-500">{new Date(item.date).toLocaleDateString("en-GB",{day:'numeric' , month: "long", year: "numeric" })}</span></div>
          </div>
         
          
          <button onClick={() => handleDelete(item.id)} className='border-2 border-white self-center bg-red-600 p-2 w-[35%] h-[50%] items-center hover:bg-red-400 text-white'>Delete</button>
         
          </div>
        )
    })}
    <div className='text-2xl mt-5 text-center'>Total Expense : ₹ {total.toLocaleString("en-IN")}</div>
    </div>
    </>
  )
}

export default ExpenseList