import { FaFilter } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/dataThunk/dataThunk";
const MobileFilterProducts = ({
  products,
  inputData,
  setInputData,
  category,
  setCategory,
  brand,
  setBrand,
  price,
  setPrice,
  resetFilter,
}) => {
  const [showFilter,setShowFilter] = useState(false) ;
  const categoryProducts = [
    "ALL",
    ...new Set(products?.map((item) => item.category)),
  ];
  const brands = ["ALL", ...new Set(products?.map((item) => item.brand))];
  console.log(products);
  return (
    <div className="md:hidden block">
      <div className="p-4 bg-gray-200 dark:bg-slate-800 rounded flex items-center justify-between" onClick={()=> setShowFilter(!showFilter)}>
        <p className="font-semibold dark:text-slate-200">Filter</p>
        <FaFilter className="dark:text-slate-200"/>
      </div>
      <div className={`px-3 bg-gray-200 dark:bg-slate-800 ${showFilter?"block":"hidden"} transition-all`}>
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded bg-white border border-gray-400 p-2 dark:bg-slate-600 dark:border-gray-950 dark:text-slate-200"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <div className="w-full bg-gray-200 dark:bg-slate-800 p-4 rounded md:flex flex-col gap-4 justify-center">
          <div>
            

            <div className="flex gap-2 items-centers">
                <div className="w-full">
                <h1 className="text-xl font-semibold mb-3 dark:text-slate-100">Category</h1>
              {categoryProducts.map((item) => (
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id={item}
                    value={item.toUpperCase()}
                    checked={category == item.toUpperCase()}
                    onChange={(e) =>
                      e.target.checked ? setCategory(item.toUpperCase()) : "ALL"
                    }
                  />
                  <label htmlFor={item} className="uppercase dark:text-slate-100">
                    {item}
                  </label>
                </div>
              ))}
            </div>

            <div className="my-4 w-full">
              <h1 className="text-xl font-semibold mb-3 dark:text-slate-100">Brands</h1>
              <div>
                <select
                  className="outline-2 outline-gray-600 bg-white w-full p-2 rounded dark:bg-slate-600 dark:text-slate-200"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  {brands.map((item) => (
                    <option className="uppercase" value={item.toUpperCase()}>
                      {item.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            </div>

            <div>
              <h1 className="text-xl font-semibold mb-3 dark:text-slate-100">Price Range</h1>
              <p className="dark:text-slate-100">Price range: ₹0 to ₹{price[1]}</p>
              <input
                type="range"
                min={price[0]}
                max={1000}
                value={price[1]}
                step={100}
                className="w-full"
                onChange={(e) => setPrice([0, e.target.value])}
              />
            </div>

            <button
              className="bg-blue-600 text-white px-4 py-2 rounded mt-5 cursor-pointer"
              onClick={resetFilter}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterProducts;
