import React from 'react'

const Filters = () => {
  return (
    <>
<div className='flex flex-col my-3 gap-4'>


      
       <div className="">
  <label htmlFor="category" className="text-sm font-medium text-gray-700  w-32">
    Filter by Category: 
  </label>
  <select
    id="category"
    name="category"
    className=" w-full md:w-60 px-3 ml-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
  >
    <option value="">All Categories</option>
    <option value="men">Men's</option>
    <option value="women">Women's</option>
    <option value="electronics">Electronics</option>
  </select>
</div>
   <div className="">
  <label htmlFor="sortPrice" className=" text-sm font-medium text-gray-700 mb-1  w-32">
    Sort by Price: 
  </label>
  <select
    id="sortPrice"
    name="sortPrice"
    className="ml-2 w-full md:w-60 px-3 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
  >
    <option value="">Select</option>
    <option value="lowToHigh">Price: Low to High</option>
    <option value="highToLow">Price: High to Low</option>
  </select>
</div>

       </div>
    </>
  )
}

export default Filters