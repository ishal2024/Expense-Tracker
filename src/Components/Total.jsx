import React from 'react'

function Total() {
  return (
   <>
         <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full h-full flex flex-col justify-center">

<h2 className="text-2xl font-semibold mb-4 text-gray-700">Add Expense</h2>

<div className="mb-4">
  <label className="block text-gray-600 mb-1">Title</label>
  <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
  />
</div>

<div className="mb-4">
  <label className="block text-gray-600 mb-1">Amount</label>
  <input
    type="number"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
  />
</div>

<div className="mb-4">
  <label className="block text-gray-600 mb-1">Category</label>
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}

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

<div className="mb-4">
  <label className="block text-gray-600 mb-1">Date</label>
  <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
  />
</div>

<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
  Add Expense
</button>

</form>
<div>
<div> Search By Category<input type="search" name="" id="" /> </div>
<div>Search By Date <input type="date" name="" id="" /></div>
<button>Search</button>
</div>
   </>
  )
}

export default Total