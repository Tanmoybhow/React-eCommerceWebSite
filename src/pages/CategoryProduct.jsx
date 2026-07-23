import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { fetchAllProducts } from '../store/dataThunk/dataThunk';
import Wrapper from '../utils/Wrapper';
import { addToCart } from '../store/cartSlice/cartSlice';
const CategoryProduct = () => {
    const params = useParams();
    const categoryName = params.category;
    const products = useSelector(state=>state.dataSlice.data);
    const categoryList = products?.filter(item=> item.category === categoryName);
    console.log(categoryList)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchAllProducts();
        window.scrollTo(0,0)
    },[])
  return (
    <div>
      <Wrapper>
        <div className='py-4 px-2 md:px-0'>
             <button className='bg-black text-white px-4 py-2 rounded cursor-pointer' onClick={()=> navigate("/")}>Back</button>
             <div className='space-y-3 mt-4'>
                {
                    categoryList?.map(item=>(
                        <div className='flex gap-2 p-2 rounded bg-gray-200' onClick={()=> navigate(`/product/${item._id}`)}>
                            <img src={item.image} alt={item.title} className='aspect-square w-[130px] rounded object-cover'/>
                            <div className='space-y-1'>
                                <h1 className='font-bold text-xl'>{item.title}</h1>
                                <p className='font-bold'>₹<span className='text-2xl'>{item.price}</span>{`(${Math.floor((item.oldPrice-item.price)/item.oldPrice*100)}% OFF)`}</p>
                                <div>
                                    <p>Free delivery <span className='font-bold'>Fri, 18 Apr</span></p>
                                    <p>Or Fastest delivery <span className='font-bold'>Tomorrow, 17 Apr</span></p>
                                </div>
                                <button className='px-4 py-2 bg-blue-600 text-white rounded text-[14px] mt-3  cursor-pointer' onClick={(e)=>{
                                  e.stopPropagation();
                                  dispatch(addToCart({...item,quantity:1,selectedSize:item.size[0]}))
                                }}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
             </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default CategoryProduct
