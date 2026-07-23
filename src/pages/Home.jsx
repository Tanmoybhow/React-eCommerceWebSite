import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../store/dataThunk/dataThunk';
import Carousel from '../components/Carousel';
import StaticBG from '../components/StaticBG';
import Shipping from '../components/Shipping';


const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state=> state.dataSlice.data);
  console.log(products);

  useEffect(()=>{
    dispatch(fetchAllProducts());
  },[])
  return (
    <div className='dark:bg-slate-900'>
     <Carousel products={products}/>
     <StaticBG/>
     <Shipping/>
    </div>
  )
}

export default Home
