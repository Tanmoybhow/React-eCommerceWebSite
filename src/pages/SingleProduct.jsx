import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Wrapper from '../utils/Wrapper';
import { BsCart3 } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice/cartSlice';
import Loader from "../components/Loader";

const SingleProduct = () => {
  const params = useParams()
  const [singleProduct,setSingleProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSize,setSelectedSize] = useState(singleProduct?.size[0]);
  const [quantity,setQuantity] = useState(1)

  useEffect(()=>{
    window.scrollTo(0,0)
   const fetchSingleProduct= async()=>{
   const data = await axios.get(`https://fakestoreapi.noksha.dev/api/products/${params.id}`);
    setSingleProduct(data.data);
    // console.log(data.data)
    }
    fetchSingleProduct()
  },[])
  return (
    <div className='dark:bg-slate-900'>
      <Wrapper>
         {singleProduct?<div className='py-8 pb-10 '>
          <h1 className='text-l md:text-xl font-semibold text-gray-600 dark:text-slate-100 pl-3 md:pl-0'><span className='hover:text-blue-600 hover:underline transition-all cursor-pointer' onClick={()=>navigate("/")}>Home</span> / <span className='hover:text-blue-600 hover:underline transition-all cursor-pointer' onClick={()=>navigate("/products")}>Products</span> / <span>{singleProduct?.title}</span></h1>
          <div className='flex flex-col md:flex-row px-4 md:px-0  justify-center gap-8 mt-8'>
            <img src={singleProduct?.image} className=' md:w-[400px] md:h-[450px] w-[300px] h-[350px]  object-cover rounded-2xl shadow-2xl shadow-blue-300' alt={singleProduct?.title} />
            <div className='flex flex-col items-start gap-2'>
              <h1 className='text-4xl text-gray-700 dark:text-slate-200 font-bold uppercase'>{singleProduct?.title}</h1>
              <p className='text-gray-700 dark:text-slate-100'>{singleProduct?.brand}</p>
              <div className='flex items-center gap-2'>
                <p className='text-blue-600 text-xl font-bold'>₹{singleProduct?.price}</p>
                <p className='text-gray-500 dark:text-gray-400 text-xl line-through font-bold'>₹{singleProduct?.oldPrice}</p>
                <div className='bg-blue-600 px-2 py-2 text-white font-bold ml-2 rounded'>{Math.floor((singleProduct?.oldPrice-singleProduct?.price)/singleProduct?.oldPrice*100)}% discount</div>
                
              </div>
              <p className='w-full md:w-[450px] text-gray-500 dark:text-slate-100'>{singleProduct?.description}</p>
              <div className='flex gap-1.5 mt-4'>
                <p className='font-semibold dark:text-slate-100'>Size:</p>
                {
                  singleProduct?.size.map(item=>(
                    <div className={`w-10 h-10 rounded flex items-center justify-center cursor-pointer ${selectedSize===item?"bg-blue-600 text-white":"bg-gray-200"} `} onClick={()=>{
                      setSelectedSize(item)
                    }}>{item}</div>
                  ))
                }
              </div>
              <div className='flex gap-1.5 mt-4'>
                <p className='font-semibold dark:text-slate-100'>Quantity</p>
                <input type="number" className='border dark:border-white dark:text-white w-[70px] px-1 border-2 rounded' value={quantity==0?1:quantity} onChange={(e)=> setQuantity(e.target.value)}/>
              </div>
                    <button
                      className="flex justify-center items-center gap-2 bg-blue-600 text-white px-6 mt-6 py-2 rounded cursor-pointer"
                      onClick={()=> {
                        dispatch(addToCart({...singleProduct,selectedSize:selectedSize||singleProduct?.size[0],quantity,isfromSingleProduct:true}))
                      }}
                    >
                      <BsCart3 className="text-xl" />
                      Add to cart
                    </button>
            </div>
          </div>
         </div>:<Loader/>}
      </Wrapper>
    </div>
  )
}

export default SingleProduct
