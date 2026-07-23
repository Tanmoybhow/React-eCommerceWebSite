import React, { useEffect, useState } from "react";
import Wrapper from "../utils/Wrapper";
import { MapPin, X } from "lucide-react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Meta, NavLink, useNavigate } from "react-router";
import { BsCart3 } from "react-icons/bs";
import { HiMiniBars3BottomLeft,HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import axios from "axios";
import { useSelector } from "react-redux";
import Theme from "./Theme";

const Navbar = () => {
  const [location, setLocation] = useState(null);
  const [openLocationPopup, setOpenLocationPopup] = useState(false);
  const [isLocationDetected,setIsLocationDetected] = useState(false);
  const navigate = useNavigate();
  const cartList = useSelector(state=>state.cartSlice.cartList);
  const cartLength = cartList.length;
  const [openSideBar,setOpenSideBar] = useState(false);
  const user = useUser();
  console.log(user)
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${import.meta.env.VITE_OPENCAGE_API_KEY}`;
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

const detectMyLocation = ()=>{
    getLocation();
    setOpenLocationPopup(false);
    setIsLocationDetected(true);

}

  return (
    <div className="bg-white dark:bg-slate-950 shadow-2xl relative">
      <div className={`w-[250px] flex flex-col h-screen bg-white dark:bg-slate-950 shadow-2xl z-30 fixed top-0 left-0 ${openSideBar?"translate-x-0":"-translate-x-full"} transition-all px-6 py-10`}>
        <div className="mb-6 flex gap-3">
              <SignedOut>
                <SignInButton className="py-2 px-3 bg-blue-600 rounded text-white" />
              </SignedOut>
              <SignedIn className="w-[370px]">
                <UserButton className="w-[370px]" />
              </SignedIn>
              {
                user?.user && <div>
                <p className="text-slate-800 dark:text-slate-200">{user?.user?.fullName}</p>
                <p className="text-slate-800 dark:text-slate-200">Premium User</p>
              </div>
              }
            </div>
          <div className="flex flex-col flex-1  gap-8">
            <Link
              to={"/"}
              className=""
              onClick={()=>setOpenSideBar(false)}
            >
              <li className="text-lg font-semibold list-none text-slate-800 dark:text-slate-100">Home</li>
            </Link>
            <Link
              to={"/products"}
              className=""
              onClick={()=>setOpenSideBar(false)}
            >
              <li className="text-lg font-semibold list-none text-slate-800 dark:text-slate-100">Products</li>
            </Link>
            <Link
              to={"/about"}
              className="e"
              onClick={()=>setOpenSideBar(false)}
            >
              <li className="text-lg font-semibold list-none text-slate-800 dark:text-slate-100">About</li>
            </Link>
            <Link
              to={"/contact"}
              className=""
              onClick={()=>setOpenSideBar(false)}
              
            >
              <li className="text-lg font-semibold list-none text-slate-800 dark:text-slate-100">Contact</li>
            </Link>
            </div>

            <h1 className="text-[12px] text-slate-800 dark:text-slate-100">Created with ❤️ by Tanmoy Bhowmik</h1>
      </div>
      <Wrapper>
        <div className="h-[70px]  flex items-center justify-between px-4 md:px-0">
          <div className="flex gap-7 cursor-pointer" onClick={()=> navigate("/")}>
            <h1 className="text-2xl font-bold dark:text-slate-200 text-slate-800">
              <span className="text-blue-600">V</span>olt
              <span className="text-blue-600">M</span>art
            </h1>
            <div className="md:flex gap-1 items-center relative hidden">
              {
                openLocationPopup?<div className="bg-white dark:bg-slate-950 z-50 shadow-2xl absolute top-15 left-0 w-[200px] p-6 rounded space-y-2 transition-all">
                    <X className="absolute right-3 top-3 cursor-pointer text-slate-800 dark:text-slate-200" onClick={()=> {
                      setOpenLocationPopup(false);
                    }}/>
                <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Change Location</h1>
                <button className="px-2 py-2 bg-blue-600 text-white rounded text-[15px] cursor-pointer" onClick={detectMyLocation}>
                  Detect my location
                </button>
              </div>:null
              }
              <MapPin className="text-blue-600" />
              {location ? (
                <div className="-space-y-2">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">{location.split(",")[2]}</div>
                  <div className="text-slate-800 dark:text-slate-200">{location.split(",")[3]}</div>
                </div>
              ) : (
                <span>Add Address</span>
              )}
              <MdOutlineArrowDropDown className="text-xl text-slate-800 dark:text-slate-200" onClick={()=> {setOpenLocationPopup(true);console.log("hello")}} />
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-5">
          <div className="hidden md:flex items-center justify-center gap-8 ">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-blue-600" : "border-b-3 border-white dark:border-slate-950"}`
              }
            >
              <li className="text-lg font-semibold list-none text-slate-800 dark:text-slate-100">Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-blue-600" : "border-b-3 border-white dark:border-slate-950"}`
              }
            >
              <li className="text-lg font-semibold list-none text-slate-800 dark:text-slate-100">Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-blue-600" : "border-b-3 border-white dark:border-slate-950"}`
              }
            >
              <li className="text-lg font-semibold list-none text-slate-800 dark:text-slate-100">About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-blue-600" : "border-b-3 border-white dark:border-slate-950"}`
              }
            >
              <li className="text-lg font-semibold list-none text-slate-800 dark:text-slate-100">Contact</li>
            </NavLink>
            </div>
            <div className="flex items-center justify-center gap-5">
            <div className="relative">
              <BsCart3 className="text-2xl dark:text-slate-100 text-slate-800" onClick={()=> navigate('/cart')}/>
              <div className="w-5 h-5 flex items-center justify-center text-white bg-blue-600 absolute -top-3 left-4 rounded-full">
                {cartLength}
              </div>
            </div>
            <Theme/>


            {openSideBar?<HiMiniBars3BottomRight className="md:hidden block text-3xl transition-all text-slate-800 dark:text-slate-200" onClick={()=> setOpenSideBar(false)}/>:<HiMiniBars3BottomLeft className="md:hidden block text-3xl transition-all text-slate-800 dark:text-slate-200" onClick={()=> setOpenSideBar(true)}/>}

            <div className="hidden md:block">
              <SignedOut>
                <SignInButton className="py-2 px-3 bg-blue-600 rounded text-white" />
              </SignedOut>
              <SignedIn className="w-[370px]">
                <UserButton className="w-[370px]" />
              </SignedIn>
            </div>
          </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
