import React from 'react'
import emptyCart from '../assets/emptyCart.png'
import { useNavigate } from 'react-router'
const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center mb-9 -space-y-16'>
      <img src={emptyCart} alt="emptycART" />
      <p className='text-2xl text-gray-600 dark:text-slate-200 font-bold'>Cart is Empty</p>
    </div>
    <button className='bg-blue-600 text-white px-4 py-2 rounded mb-6 cursor-pointer' onClick={()=>navigate("/products")}>Continue Shopping</button>
    </div>
  )
}

export default EmptyCart
