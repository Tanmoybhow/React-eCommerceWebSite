import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../utils/Wrapper";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  addToCart,
  decreaseQuantity,
  deleteCart,
  increaseQuantity,
} from "../store/cartSlice/cartSlice";
import EmptyCart from "../components/EmptyCart";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { Handbag, ReceiptIndianRupee, Scooter } from "lucide-react";
import { useNavigate } from "react-router";
import SingleProduct from "./SingleProduct";

const Cart = () => {
  const user = useUser();
  const cartList = useSelector((state) => state.cartSlice.cartList);
  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);
  const navigate = useNavigate();

  let total=cartList.reduce((acc,curr)=>acc+Number(curr.price)*Number(curr.quantity),0)

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=e8babc82fa344f81b4626daf959970c5`;
          const loc = await axios.get(url);
          console.log(loc.data.results[0].formatted);
          setLocation(loc.data.results[0].formatted);
        } catch (error) {
          console.log(error.message);
        }
      },
      (error) => {
        console.log("Error:", error.message);
      },
    );
  };
  useEffect(() => {
    getLocation();
  }, []);

  

  const detectMyLocation = () => {
    getLocation();
    setOpenLocationPopup(false);
    setIsLocationDetected(true);
  };
  return (
    <div className="py-6 dark:bg-slate-900">
      <Wrapper>
        <h1 className="text-xl px-2 md:px-0 font-bold dark:text-slate-100">My Cart ({cartList.length})</h1>
        {cartList.length > 0 ? (
          <div className="mt-3 px-2 md:px-0">
            {cartList.map((item) => (
              <div className="flex justify-center md:justify-between md:gap-0 -gap-2 items-center bg-gray-200 dark:bg-slate-800 p-4 rounded mb-4 cursor-pointer" onClick={(e)=>{
                e.stopPropagation();
                console.log(item)
                navigate(`/product/${item._id}`)
              }}>
                <div className="flex gap-3 md:px-0">
                  <img
                    width={"90px"}
                    className="h-[90px] object-cover rounded"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className=" text-gray-700 dark:text-slate-100 font-semibold line-clamp-2 w-[200px]">
                      {item.title}
                    </h1>
                    <p className="text-[15px] text-gray-600 font-medium dark:text-slate-200">
                      {item.brand}
                    </p>
                    <div className="flex gap-2 items-center">
                      <p className="text-blue-600 font-semibold">
                        ₹{Math.floor(Number(item.price)) * Number(item.quantity)}
                      </p>
                      <span className="w-5 h-6 p-2 text-[14px] bg-gray-100 rounded flex items-center justify-center">
                        {item.selectedSize !== null
                          ? item.selectedSize
                          : item.size[0]}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center h-[45px] text-white bg-blue-600 rounded">
                  <div
                    className="text-2xl px-1 md:px-3 bg-blue-600 flex items-center justify-center cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(decreaseQuantity(item));

                    }}
                  >
                    -
                  </div>
                  <p className="text-xl px-3 bg-blue-600 flex items-center justify-center">
                    {item.quantity}
                  </p>
                  <div
                    className="text-2xl px-1 md:px-3 bg-blue-600 flex items-center justify-center cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      dispatch(increaseQuantity(item));
                      
                    }}
                  >
                    +
                  </div>
                </div>

                <div
                  className=" p-3 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-600 transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(deleteCart(item))
                  }}
                >
                  <RiDeleteBin6Line className="text-3xl text-blue-800 dark:text-blue-600" />
                </div>
              </div>
            ))}

            <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-5 md:gap-14">
              <div className="bg-gray-200 dark:bg-slate-800 p-6 rounded-xl md:w-1/2 w-full">
                <h1 className="text-black font-bold text-xl mb-3 dark:text-slate-100">
                  Delivery Info
                </h1>
                <div className="mb-4">
                  <label htmlFor="fullName" className="mb-3 font-medium dark:text-slate-100">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your name"
                    defaultValue={user?.user?.fullName}
                    className="w-full border border-gray-400 p-2 rounded bg-white dark:bg-slate-700 dark:text-slate-200"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="mb-3 font-medium dark:text-slate-100" >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                    className="w-full border border-gray-400 p-2 rounded bg-white dark:bg-slate-700 dark:text-slate-200" defaultValue={`${location?.split(",")[0]}, ${location?.split(",")[2].split(" ")[1]} `}
                  />
                </div>

                <div className="flex gap-2 justify-between mb-4">
                  <div className="w-1/2">
                    <label htmlFor="" className="mb-3 font-medium dark:text-slate-100">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your State"
                      className="w-full border border-gray-400 p-2 rounded bg-white dark:bg-slate-700 dark:text-slate-200"
                      defaultValue={location?.split(",")[3]}
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="" className="mb-3 font-medium dark:text-slate-100">
                      PostCode
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your PostCode"
                      className="w-full border border-gray-400 p-2 rounded bg-white dark:bg-slate-700 dark:text-slate-200"
                      defaultValue={location?.split(",")[2].split(" ")[3]}
                    />
                  </div>
                </div>

                <div className="flex gap-2 justify-between mb-4">
                  <div className="w-1/2">
                    <label htmlFor="" className="mb-3 font-medium dark:text-slate-100">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Country"
                      className="w-full border border-gray-400 p-2 rounded bg-white dark:bg-slate-700 dark:text-slate-200" defaultValue={location?.split(",")[4]}
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="" className="mb-3 font-medium dark:text-slate-100">
                      Phone no
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Number"
                      className="w-full border border-gray-400 p-2 rounded bg-white dark:bg-slate-700 dark:text-slate-200"
                    />
                  </div>
                </div>

                <button className="py-2 px-4 bg-blue-600 rounded text-white cursor-pointer">
                  Submit
                </button>

                <div className="mt-7 w-full flex flex-col justify-center items-center ">
                  <p className="dark:text-slate-100">---------OR---------</p>
                  <button className="py-2 px-4 bg-blue-600 rounded text-white cursor-pointer my-4">
                    Detect Location
                  </button>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl md:w-1/2 w-full dark:bg-slate-800">
                 <h1 className="text-black font-bold text-xl mb-3 dark:text-slate-100">
                  Bill Details
                </h1>

                <div className="space-y-3 mb-4 ">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <ReceiptIndianRupee className="text-[10px] dark:text-slate-100"/>
                      <p className="text-gray-600 dark:text-slate-100">Items Total</p>
                    </div>
                    <p className="dark:text-slate-100">₹{Math.floor(total)}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Scooter className="dark:text-slate-100"/>
                      <p className="text-gray-600 dark:text-slate-100">Delivery Charge</p>
                    </div>
                    <div className="flex gap-1">
                      <p className="text-gray-600 dark:text-slate-100 line-through font-semibold">₹25</p>
                      <p className="text-blue-600 font-semibold">FREE</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Handbag className="dark:text-slate-100"/>
                      <p className="text-gray-600 dark:text-slate-100">Handling Charge</p>
                    </div>
                    <p className="font-semibold text-blue-600">₹5</p>
                  </div>
                </div>
                <hr className="mb-2 text-gray-400"/>
                <div className="flex justify-between">
                  <p className="text-l font-bold dark:text-slate-100">Grand Total</p>
                  <p className="text-l dark:text-slate-100 font-bold">{`₹${Math.floor(total)+5}`}</p>
                </div>

                <div className="mt-6 space-y-2">
                  <p className="text-l font-bold text-gray-600 dark:text-slate-100">Apply Promo Code</p>
                  <div className="flex gap-3 items-center">
                    <input type="text" placeholder="Enter code" className="flex-1 rounded border border-gray-400 p-2 dark:bg-slate-700 dark:text-slate-200"/>
                    <button className="rounded border border-gray-400 py-2 px-3 dark:text-slate-100">Apply</button>
                  </div>
                  <button className="py-2 px-4 bg-blue-600 rounded w-full text-white cursor-pointer my-4">Proceed to Checkout</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
